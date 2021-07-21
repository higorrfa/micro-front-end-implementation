import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@virtus-easy/react-counter",
//   app: () =>
//     System.import(
//       "@virtus-easy/react-counter"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@virtus-easy/react-todo-list",
//   app: () =>
//     System.import(
//       "@virtus-easy/react-todo-list"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@virtus-easy/react-mega",
//   app: () =>
//     System.import(
//       "@virtus-easy/react-mega"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@virtus-easy/navbar",
//   app: () => System.import("@virtus-easy/navbar"),
//   activeWhen: ["/"]
// });

// start({
//   urlRerouteOnly: true,
// });

fetch('https://app.fakejson.com/q/48b6QP6Q?token=5oeHWbuccpakxvzCdzIiKw')
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach(app => {
      if (app.selected) {
        registerApplication({
          name: app.name,
          app: () => System.import(app.package),
          activeWhen: app.exact
            ? (location) => location.pathname === app.activeWhen
            : [app.activeWhen]
        });
      }
    })
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    })
  })
