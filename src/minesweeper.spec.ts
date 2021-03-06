import { initBoard, generatePoints, pointToString, calculateLinearPosition } from "./minesweeper";
describe("test board init", () => {
  it("should initialize the board", () => {
    const board = initBoard();
    expect(board.height).toBe(7);
    expect(board.width).toBe(7);
    expect(board.board).toHaveLength(7 * 7);
    expect(board.board[0].mine).toBe(false);
    expect(board.board[0].visited).toBe(false);
    expect(board.board[0].score).toBe(0);
  });
});

describe("test point generator", () => {
  it("should only have a single point", () => {
    const points = generatePoints(7, 7, 1);
    expect(points).toHaveLength(1);
  });
  it("should only have a two points", () => {
    const points = generatePoints(7, 7, 2);
    expect(points).toHaveLength(2);
  });
  it("should only have a two points and no duplicates", () => {
    const points = generatePoints(2, 1, 2);
    expect(points).toHaveLength(2);
    const a = pointToString(points[0]);
    const b = pointToString(points[1]);
    console.log(a, b);
    expect(a).not.toBe(b);
  });
});

describe("test linear address convertion", () => {
  it("4,3 should not match 3,4", () => {
    const board = {height: 5, width: 5, board: []};
    const a = { x: 4, y: 3 };
    const b = { x: 3, y: 4 };
    const linearA = calculateLinearPosition(board, a);
    const linearB = calculateLinearPosition(board, b);
    expect(linearA).not.toBe(linearB);
  });
});
