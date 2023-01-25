import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/app",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3000/src/main.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
