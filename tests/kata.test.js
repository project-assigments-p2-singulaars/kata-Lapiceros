import { it,expect} from "vitest";
import { totalChistes, arregloDeCuenta } from "../src/css/kata";

it('should return an existing function "totalChistes"', () =>{
    expect(totalChistes).toBeDefined();
});

it("should calculate the correct total number of jokes", ()=>{
    const jokes = [4,2,0,5,1,8,7,3];
    expect(totalChistes(jokes)).toBe(30);
});

it("should return the array with the counting mistake fixed", ()=>{
    const jokes = [4,2,0,5,1,8,7,3];
    const fixed = [5,2,1,5,2,8,8,3];
    expect(arregloDeCuenta(jokes)).toEqual(fixed);
});
