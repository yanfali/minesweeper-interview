import { initBoard } from "./minesweeper";
describe("test board init", () => {
  it("should initialize the board", () => {
    const board = initBoard();
    expect(board.height).toBe(7);
    expect(board.width).toBe(7);
    expect(board.board).toHaveLength(7*7);
    expect(board.board[0].mine).toBe(false);
    expect(board.board[0].visited).toBe(false);
    expect(board.board[0].score).toBe(0);
  });
});
