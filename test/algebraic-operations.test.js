import { genLinearEcuation } from "../src/index";

test("generate an linear ecuation", () => {
   const ecuation = genLinearEcuation([6,4],[2,6])
   expect(ecuation).toEqual([2,-4,-28]);
});