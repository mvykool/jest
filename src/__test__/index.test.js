const randomStrings = require("../index");



describe('check all the tests', () => {
   test("test functionality", () => {
      expect(typeof (randomStrings())).toBe("string");
   });
   test("test that this function doesnt contain the country of Peru", () => {
      expect(randomStrings()).not.toMatch(/peru/);
   });
});
