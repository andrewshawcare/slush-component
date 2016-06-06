define(["./index.js"], function (HelloComponent) {
  describe("Hello Component", function () {
    it("greets strangers", function () {
      expect(HelloComponent().textContent).toBe("Hello, stranger!");
    });

    it("greets by name", function () {
      expect(HelloComponent({name: "World"}).textContent).toBe("Hello, World!");
    });
  });
});
