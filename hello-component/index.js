define([], function () {
  return function (args) {
    var args = args || {};
    var name = args.name || "stranger";

    var helloElement = document.createElement("p");
    helloElement.textContent = "Hello, " + name + "!";

    return helloElement;
  };
});
