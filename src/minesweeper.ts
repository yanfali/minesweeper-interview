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

export interface Point {
  x: number;
  y: number;
}

export function pointToString(point: Point): string {
 return `${point.x},${point.y}`
}

export function generatePoints(
  height: number,
  width: number,
  count: number
): Point[] {
  const pointsMap = new Set<string>();
  const points: Point[] = [];
  // things to worry about - repeated points
  let iterations = 10000;
  while (points.length < count && iterations > 0) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const entry = `${x},${y}`;
    iterations++;
    if (pointsMap.has(entry)) {
      continue;
    }
    points.push({ x, y });
    pointsMap.add(entry);
  }

  if (iterations === 0) {
    // just for my own interest
    throw "unable to generate random points in 10K iterations";
  }

  return points;
}

// convert cartesian points back to linear array address
export function calculateLinearPosition(board: Board, point: Point): number {
    return point.y * board.width + point.x;
}

export function initMines(board: Board, points: Point[]): Board {
    points.forEach(point => {
        board.board[calculateLinearPosition(board, point)].mine = true;
    })
    return board;
}