import React from "react";
import TheFooterComponent from "./footer/TheFooterComponent";
import TheHeaderComponent from "./header/TheHeaderComponent";

interface TheLayoutProps {
  children: React.ReactNode;
}
const TheLayout = (props: TheLayoutProps) => {
  const { children } = props;

  return (
    <>
      <TheHeaderComponent />
      <main>{children}</main>
      <TheFooterComponent />
    </>
  );
};

export default TheLayout;
