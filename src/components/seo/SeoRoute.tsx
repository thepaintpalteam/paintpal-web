import { ReactNode } from "react";
import Seo from "./Seo";

type SeoRouteProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  keywords?: string[];
};

const SeoRoute = ({
  children,
  title,
  description,
  path,
  noindex,
  keywords,
}: SeoRouteProps) => {
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        noindex={noindex}
        keywords={keywords}
      />
      {children}
    </>
  );
};

export default SeoRoute;

