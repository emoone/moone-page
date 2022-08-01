import { TheFooter, TheHeader } from ".";

interface PropTypes {
  children: React.ReactNode;
}

const TheLayout = (props: PropTypes) => {
  const { children } = props;

  return (
    <>
      <TheHeader />
      {children}
      <TheFooter />
    </>
  );
};
export default TheLayout;
