import { useEffect } from "react";

const TheHeader = () => {
  useEffect(() => {
    if (!window) return;
    const defaultDark = window.matchMedia(
      `(prefers-color-scheme: dark)`
    ).matches;
    console.log(window);
  }, []);
  return (
    <header id="header">
      <h1>헤더 영역</h1>
    </header>
  );
};
export default TheHeader;
