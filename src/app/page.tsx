import KakaoContact from "@/components/contact/kakaoContact";
import HomeDeposit from "@/components/home/deposit";
import HomeMain from "@/components/home/main";
import HomeService from "@/components/home/service";

export default function Home() {
  return (
    <>
      <HomeMain/>
      <HomeService/>
      <HomeDeposit/>
    </>
  );
}
