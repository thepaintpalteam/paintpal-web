import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile" | "product";
  children?: ReactNode;
  noindex?: boolean;
  keywords?: string[];
};

const SITE_NAME = "PaintPal";
const DEFAULT_DESCRIPTION =
  "PaintPal helps event painters streamline live art sessions with booking tools, integrated payments, and collaborative workflows.";

const normaliseBaseUrl = (url: string) =>
  url.endsWith("/") ? url.slice(0, -1) : url;

const BASE_URL = normaliseBaseUrl(
  import.meta.env.VITE_SITE_URL ?? "https://paintpal.app"
);

const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image,
  type = "website",
  children,
  noindex = false,
  keywords,
}: SeoProps) => {
  const canonical = path ? `${BASE_URL}${path}` : BASE_URL;
  const metaTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const imageUrl = image ?? DEFAULT_IMAGE;
  const keywordContent =
    keywords && keywords.length > 0 ? keywords.join(", ") : undefined;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      {keywordContent ? <meta name="keywords" content={keywordContent} /> : null}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
      {!noindex ? <meta name="robots" content="index,follow" /> : null}
      {children}
    </Helmet>
  );
};

export default Seo;

