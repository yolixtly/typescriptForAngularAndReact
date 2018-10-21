/**
 * Interfaces:
 * definds the shape of a Point Object
 * it replaces the..
 * Inline Annotation point
 * which is more verbose, less reusable
 * 
 * Interfaces characteristics:
 * - Should be capitalized 
 * - ideally it starts with I so we know it is an interace
 */
interface IPoint {
    x: number;
    y: number;
}
/**
 * Define custom types
 * Inline annotation point: {x:number, y: number} vs
 * Interface
 * @param x
 * @param y
 */
// let drawPoints = (point: {x: number, y: number}) => {
const drawPoints = (point: IPoint) => {
    console.log("The sum of the points is: ", point.x + point.y);
};

export default drawPoints;
