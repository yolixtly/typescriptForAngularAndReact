// Typescript DataTypes:
// let a: number;
// let e: number[];
// let b: boolean;
// let c: string;
// let g: string[];
// let d: any;
// let f: any[];

/**
 * By default ts already assign the # value to each property
 * But it is good practice to declare it explicity with param = #.
 * When adding new props we know that purple is assign prop 3
 */
enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3}

/**
 * Type Assertion method
 * When we do not explicitly say the datatype at declaration time.
 * Instead when we use it, we wrap it in () and include the <datatype>
 * OR
 * we use variable as datatype style <= this works
 * This helps the inteligent tool in the vscode to catch errors
 * But does not changes the variable at run time
 */
let message;
message = "abc";
// let endsWithC = (<string>message).endsWith('c');
// let endsWithC = (message as string).endsWith("c");

/**
 * Highlights Parameters with:
 * Type Assertions - the code knows what datatype to expect in each param
 * Optional params - By adding a question mark after each param we desire it to be optional
 * @param a {number} - Optional by passing parm?
 * @param e {array} - Optional by passing parm?
 * @param b {boolean} - Optional by passing parm?
 * @param c {string} - Optional by passing parm?
 * @param g {array} - Optional by passing parm?
 * @param d {any} - Optional by passing parm?
 * @param f {array} - Optional by passing parm?
 */
const count = (a: number, e?: number[], b?: boolean, c?: string, g?: string[], d?: any, f?: any[]) => {
    console.log("@param a {number}: ", a);
    console.log("@param e {array}: ", e);
    // @TODO: Add logs to test the ouput of the rest of params
};
export default count;
