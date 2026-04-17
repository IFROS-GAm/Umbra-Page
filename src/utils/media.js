export const MEDIA_VERSION = "20260417-render-fix";

export const mediaAsset = (path = "") => {
  const encodedPath = encodeURI(path);
  const separator = encodedPath.includes("?") ? "&" : "?";
  return `${encodedPath}${separator}v=${MEDIA_VERSION}`;
};
