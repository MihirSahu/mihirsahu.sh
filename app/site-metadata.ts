export const siteName = "Mihir Sahu";
export const siteUrl = "https://www.mihirsahu.sh";
export const twitterHandle = "@TheMihirSahu";
export const siteDescription =
  "Personal website of Mihir Sahu, a builder, tinkerer, and learner sharing work, thoughts, and companies worth watching.";

export function buildSiteUrl(path = "/") {
  if (path === "/") {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
