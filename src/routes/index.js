const setupRouter = () => {
  const protectedRoutes = {
    "/kirim/": true,
  };

  function isAuthenticated() {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login/";
    }
  }

  function router() {
    const path = window.location.pathname;
    const isProtected = Object.keys(protectedRoutes).includes(path);
    if (isProtected) {
      isAuthenticated();
    }

    const routeFunction = () => protectedRoutes[path];

    if (routeFunction) {
      routeFunction();
    }
  }

  window.onload = router;
  window.onpopstate = router;
};

export default setupRouter;
