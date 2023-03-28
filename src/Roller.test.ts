import { Roller } from './Roller';

describe("Smoke test", () => {
    test("The test scaffold runs successfully.", () => {
        expect(true).toBe(true);
    });
});

describe("Roller tests", () => {
    let roller: Roller;

    beforeEach(() => {
        roller = new Roller(6); // default to a 6-sided die
    });

    test("Rolling a valid value should return that value", () => {
        expect(roller.roll(3)).toBe(3);
    });

    test("Rolling an invalid value should return 0", () => {
        expect(roller.roll(-1)).toBe(0);
        expect(roller.roll(0)).toBe(0);
        expect(roller.roll(7)).toBe(0);
    });

    test("Rolling a valid value should update last roll and distribution", () => {
        roller.roll(3);
        expect(roller.last()).toBe(3);
        expect(roller.distribution().get(3)).toBe(1);
    });

    test("Rolling an invalid value should not update last roll or distribution", () => {
        roller.roll(-1);
        expect(roller.last()).toBe(0);
        expect(roller.distribution().get(-1)).toBe(undefined);
    });

    test("Calling distribution should return a Map with all faces and their rolls", () => {
        const distribution = roller.distribution();
        expect(distribution.size).toBe(6);
        expect(distribution.get(1)).toBe(0);
        expect(distribution.get(2)).toBe(0);
        expect(distribution.get(3)).toBe(0);
        expect(distribution.get(4)).toBe(0);
        expect(distribution.get(5)).toBe(0);
        expect(distribution.get(6)).toBe(0);
    });
});
