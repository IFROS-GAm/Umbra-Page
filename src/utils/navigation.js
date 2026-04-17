export const isInternalPageHref = (href = "") => {
  if (typeof href !== "string" || href.length === 0) return false;

  const normalizedHref = href.split(/[?#]/)[0];
  return /^\/(?!\/)/.test(href) && !/\.[a-z0-9]+$/i.test(normalizedHref);
};

const scrollToHash = (hash) => {
  if (typeof window === "undefined") return;

  if (!hash) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return;
  }

  window.requestAnimationFrame(() => {
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
};

export const navigateTo = (href, { replace = false } = {}) => {
  if (typeof window === "undefined" || !isInternalPageHref(href)) return false;

  const targetUrl = new URL(href, window.location.origin);
  const nextLocation = `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`;

  if (replace) {
    window.history.replaceState({}, "", nextLocation);
  } else {
    window.history.pushState({}, "", nextLocation);
  }

  window.dispatchEvent(new PopStateEvent("popstate"));
  scrollToHash(targetUrl.hash);
  return true;
};

export const handleInternalNavigation = (event, href, options) => {
  if (!isInternalPageHref(href)) return false;
  if (!event || event.defaultPrevented) return false;
  if (event.button !== 0) return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;

  event.preventDefault();
  return navigateTo(href, options);
};
