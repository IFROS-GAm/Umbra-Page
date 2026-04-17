import clsx from "clsx";

const pageChipLabelByLocale = {
  es: "PAGINA",
  en: "PAGE",
  fr: "PAGE",
};

const isInternalPageHref = (href) => {
  if (typeof href !== "string") return false;

  const normalizedHref = href.split(/[?#]/)[0];
  return /^\/(?!\/)/.test(href) && !/\.[a-z0-9]+$/i.test(normalizedHref);
};

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  href,
  target,
  rel,
  onClick,
  type = "button",
}) => {
  const isPageRoute = isInternalPageHref(href);
  const locale =
    typeof document !== "undefined" ? document.documentElement.lang || "es" : "es";
  const pageChipLabel = pageChipLabelByLocale[locale] ?? pageChipLabelByLocale.es;
  const className = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-[#dfdff2] px-7 py-3 text-black",
    isPageRoute && "page-route-button",
    containerClass
  );

  const content = (
    <>
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {isPageRoute && <span className="page-route-pill">{pageChipLabel}</span>}

      {rightIcon}
    </>
  );

  if (href) {
    return (
      <a
        id={id}
        className={className}
        href={href}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={className}
    >
      {content}
    </button>
  );
};

export default Button;
