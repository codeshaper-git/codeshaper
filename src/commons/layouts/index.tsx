import LayoutHeader from "./headers/header";
import LayoutFooter from "./footers/footer";

export default function Layout({ children }: { 
  children: React.ReactNode;
}) {
  return (
    <>
        <LayoutHeader/>
        {children}
        <LayoutFooter/>
    </>
  );
}