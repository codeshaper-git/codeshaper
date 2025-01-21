"use client";

import { useRouter } from "next/navigation";
import { ComponentType, ReactElement, useEffect } from "react";

export const with로그인체크 =
  <P extends object>(컴포넌트: ComponentType<P>) =>
  (프롭스: P): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능합니다!!!");
        void router.push(
          "/section23/23-08-login-typescript-localstorage-check-hoc"
        );
      }
    }, []);

    return <컴포넌트 {...프롭스} />;
  };

export function QQQPage(): JSX.Element {
  return <div></div>;
}

const 나의컴포넌트 = with로그인체크(QQQPage)({ bbb: "훈이" });
