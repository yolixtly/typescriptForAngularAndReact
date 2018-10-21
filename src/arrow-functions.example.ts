import IPoint from "./point.interface.example";

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
