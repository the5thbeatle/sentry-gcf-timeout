const fetch = require("node-fetch");

(async () => {
  await fetch("http://localhost:8008", {method: "POST"});
  console.log("Request Complete");
})();

