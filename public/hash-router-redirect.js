if (window.location.hash.includes("#")) {
  const routeWithoutHash = window.location.hash.replace(/[\s\S]*/, "");
  window.location.replace(routeWithoutHash);
}
