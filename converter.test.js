const { numberToString } = require("./converter");

describe("number converter", () => {
	it("Should convert 1 to one", () => {
		expect(numberToString(1)).toBe("one");
	});
  it("Should convert 0 to zero", () => {
    expect(numberToString(0)).toBe("zero");
  });
});


