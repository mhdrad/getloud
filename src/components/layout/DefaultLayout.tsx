import type { FC } from "react";

const DefaultLayout: FC = ({ children }) => (
  <>
    <div className="container mx-auto">
      <main>{children}</main>
    </div>
  </>
);

export default DefaultLayout;
