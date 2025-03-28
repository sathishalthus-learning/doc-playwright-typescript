// generic assertions methods
import{test,expect} from "@playwright/test"
//
test(`generic assertions methods`,async({page})=>{
    await page.goto('https://playwright.dev/');
    // any()
    // primitives, js object, class
    class Example {}
    expect(new Example()).toEqual(expect.any(Example));
    expect({ prop: 1 }).toEqual({ prop: expect.any(Number) });
    expect('abc').toEqual(expect.any(String));
    // anything()
    // matches anything execept null and undefined.
    const value = { prop: 1 };
    expect(value).toEqual({ prop: expect.anything() });
    expect(value).not.toEqual({ otherProp: expect.anything() });
    //arrayContaining()
    // closeTo()
    // objectContaining()
    // stringContaining()
    // toBe()
    // toBeCloseTo()
    // toBeDefined()
    // toBeFalsy(), tobNaN, toBeNull, tobeTruthy, tobeUndefined
    // toBeGreaterThan(),toBeGreaterThanOrEqual(), tobeLessThan(), toBeLessThanOrEqual()
    // toContain(), toConainEqual, toEqual, 
    // toBeInstanceOf
    // tohaveLength, toHaveProperty
    // toMatch, toMatchObject, toStrictEqual
    // toThrow, toThrowError

})
