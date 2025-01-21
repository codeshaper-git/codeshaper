"use client";

import { useRouter } from "next/navigation";
import { ReactElement, useEffect } from "react";
import { useAccessTokenStore } from "../stores/22-03-access-token-store-typescript";
import { useLoadStore } from "../stores/26-02-load-store";

export const with로그인체크 =
  (컴포넌트: () => React.ReactNode) =>
  <P extends Record<string, unknown>>(프롭스: P): ReactElement<P> => {
    const router = useRouter();

    const { accessToken } = useAccessTokenStore();
    const { isLoaded } = useLoadStore();

    useEffect(() => {
      if (!isLoaded) return;
      if (accessToken) return;

      alert("로그인 후 이용 가능합니다!!!");
      router.push("/section26/26-02-login-refreshtoken-refresh");
    }, [isLoaded]);

    return <컴포넌트 {...프롭스} />;
  };

// export function QQQPage(): React.ReactNode {
//   return <div></div>;
// }

// const result = with로그인체크(QQQPage)({ bbb: "훈이" });
