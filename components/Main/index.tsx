import { FC, ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}
export const Main: FC<MainProps> = ({ children }) => {
  return <div className="md:ml-80 mt-16 h-full">{children}</div>;
};
