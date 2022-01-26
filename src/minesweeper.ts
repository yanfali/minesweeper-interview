export interface Square {
  mine: boolean;
  score: number;
  visited: boolean;
}

export interface Board {
  height: number;
  width: number;
  board: Square[];
}

/**
 * Generate and initialize the mine sweeper board
 * @param height height of board
 * @param width width of board
 * @returns Board
 */
export function initBoard(height: number = 7, width: number = 7): Board {
  const board: Board = {
    height,
    width,
    board: [],
  };
  let tot = height * width;
  for (let i = 0; i < tot; i++) {
    board.board.push({ mine: false, score: 0, visited: false });
  }
  return board;
}
