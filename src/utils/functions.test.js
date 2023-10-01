import { capitalize } from "./functions";

describe("Capitalize", () => {
    it("should set the first letter of a string to uppercase", async () => {
        const testString = "capitalize me!";
        expect(capitalize(testString)).toEqual("Capitalize me!");
    });
});
