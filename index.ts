/**
 * https://www.kristanix.com/sudokuepic/sudoku-solving-techniques.php
 */
type matrixType = Array<number[]>

const solveSudoku = (matrix: matrixType): matrixType => {
  /**
   * algorithm:
   * - iterate over fields
   * - if its a zero check for candidates of its square
   * - check rows and columns to eliminate candidates.
   * - if only one candidate is left, put it in the matrix
   * - if not, carry on
   * - at the end of matrix iteration check matrix for zeroes, if found start over /?
   * 
   * - keep a flag of changes made. If no changes made implement different checking techniques
   *   - implement candidate list keeping per field?
   */
  // const checkMatrixForZeroes = (matrix: matrixType): boolean => { }
  // const checkRow = (rowIndex: number, matrix: matrixType) => { }
  // const checkColumn = (columnIndex: number, matrix: matrixType) => { }
  // const checkSquare = (candidateCoordinate: [number, number], matrix: matrixType) => { }
  // const getCandidatesForField = (coordinates: [number, number]): number[] => { }

  type complexCell = { value: number | undefined, candidates: number[] | undefined }
  type complexMatrixType = Array<complexCell[]>
  const createComplexMatrix = (matrix: matrixType): complexMatrixType => {
    return matrix.map(row => {
      return row.map(cellValue => {
        return { value: cellValue && cellValue, candidates: undefined }
      })
    })
  }
  const simplifyMatrix = (complexMatrix: complexMatrixType): matrixType => {
    return complexMatrix.map(row => {
      return row.map(cell => cell.value)
    })
  }

  const complexMatrix = createComplexMatrix(matrix)

  return simplifyMatrix(complexMatrix)
}


const testSudoku = [
  [5, 3, 4, 6, 7, 8, 9, 0, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
const solvedSudoku = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
solveSudoku(testSudoku)
// solveSudoku(solvedSudoku)
