import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PrincipalPage = ({ children }: Props) => {
  return <div className="principalpage">{children}</div>;
};

export default PrincipalPage;
