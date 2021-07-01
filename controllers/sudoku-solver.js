class SudokuSolver {

  validate(puzzleString) {
    if (puzzleString.match(/^([0-9]|\.){81}$/)) {
      return true
    } else {
      return false
    }
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    const rows = {
      1: puzzleString.slice(0, 9).split(''),
      2: puzzleString.slice(9, 18).split(''),
      3: puzzleString.slice(18, 27).split(''),
      4: puzzleString.slice(27, 36).split(''),
      5: puzzleString.slice(36, 45).split(''),
      6: puzzleString.slice(45, 54).split(''),
      7: puzzleString.slice(54, 63).split(''),
      8: puzzleString.slice(63, 72).split(''),
      9: puzzleString.slice(72, 81).split(''),
    };
    const columns = {
      1: puzzleString.split('').filter(function (num, i) { return i % 9 === 0 }),
      2: puzzleString.split('').filter(function (num, i) { return i % 9 === 1 }),
      3: puzzleString.split('').filter(function (num, i) { return i % 9 === 2 }),
      4: puzzleString.split('').filter(function (num, i) { return i % 9 === 3 }),
      5: puzzleString.split('').filter(function (num, i) { return i % 9 === 4 }),
      6: puzzleString.split('').filter(function (num, i) { return i % 9 === 5 }),
      7: puzzleString.split('').filter(function (num, i) { return i % 9 === 6 }),
      8: puzzleString.split('').filter(function (num, i) { return i % 9 === 7 }),
      9: puzzleString.split('').filter(function (num, i) { return i % 9 === 8 }),
    };
    const region = {
      1: (puzzleString.slice(0 + 0, 3 + 0) + puzzleString.slice(9 + 0, 12 + 0) + puzzleString.slice(18 + 0, 21 + 0)).split(''),
      2: (puzzleString.slice(0 + 3, 3 + 3) + puzzleString.slice(9 + 3, 12 + 3) + puzzleString.slice(18 + 3, 21 + 3)).split(''),
      3: (puzzleString.slice(0 + 6, 3 + 6) + puzzleString.slice(9 + 6, 12 + 6) + puzzleString.slice(18 + 6, 21 + 6)).split(''),
      4: (puzzleString.slice(0 + 27, 3 + 27) + puzzleString.slice(9 + 27, 12 + 27) + puzzleString.slice(18 + 27, 21 + 27)).split(''),
      5: (puzzleString.slice(0 + 30, 3 + 30) + puzzleString.slice(9 + 30, 12 + 30) + puzzleString.slice(18 + 30, 21 + 30)).split(''),
      6: (puzzleString.slice(0 + 33, 3 + 33) + puzzleString.slice(9 + 33, 12 + 33) + puzzleString.slice(18 + 33, 21 + 33)).split(''),
      7: (puzzleString.slice(0 + 54, 3 + 54) + puzzleString.slice(9 + 54, 12 + 54) + puzzleString.slice(18 + 54, 21 + 54)).split(''),
      8: (puzzleString.slice(0 + 57, 3 + 57) + puzzleString.slice(9 + 57, 12 + 57) + puzzleString.slice(18 + 57, 21 + 57)).split(''),
      9: (puzzleString.slice(0 + 60, 3 + 60) + puzzleString.slice(9 + 60, 12 + 60) + puzzleString.slice(18 + 60, 21 + 60)).split(''),
    };

    let newPuzzleString = puzzleString.split('');
    console.log(newPuzzleString)

    newPuzzleString.forEach(function (num, i, arr) {
      const numRow = Math.floor(i / 9) + 1;
      const numColumn = (i % 9) + 1;
      const numRegion = (() => {
        if (numRow <= 3) {
          if (numColumn <= 3) {
            return 1
          } else if (numColumn >= 7) {
            return 3
          } else {
            return 2
          }
        } else if (numRow >= 7) {
          if (numColumn <= 3) {
            return 7
          } else if (numColumn >= 7) {
            return 9
          } else {
            return 8
          }
        } else {
          if (numColumn <= 3) {
            return 4
          } else if (numColumn >= 7) {
            return 6
          } else {
            return 5
          }
        }
      })();

      if (num === '.') {

        for (let j = 1; j <= 9; j++) {
          const randomNum = Math.round(Math.random() * 8) + 1;

          if (
            rows[numRow].indexOf(randomNum.toString(10)) === -1 &&
            columns[numColumn].indexOf(randomNum.toString(10)) === -1 &&
            region[numRegion].indexOf(randomNum.toString(10)) === -1
          ) {
            console.log('[' + numRow + ',' + numColumn + ']')
            console.log(rows[numRow], randomNum, rows[numRow].indexOf(randomNum.toString(10)) === -1)
            console.log(columns[numColumn], randomNum, columns[numColumn].indexOf(randomNum.toString(10)) === -1)
            console.log(region[numRegion], randomNum, region[numRegion].indexOf(randomNum.toString(10)) === -1)
            console.log('---------------------');
            rows[numRow][numColumn - 1] = randomNum.toString(10);
            columns[numColumn][numRow - 1] = randomNum.toString(10);
            const regionRow = (numRow % 3) === 0 ? 6 : (numRow % 3) === 2 ? 3 : 0;
            const regionColum = numColumn % 3;
            region[numRegion][regionRow + regionColum - 1] = randomNum.toString(10);
            newPuzzleString[i] = randomNum.toString(10);
            console.log(newPuzzleString)
            break;
          }

        }

      }

    })

    console.log(newPuzzleString.join(''))
  }
}

module.exports = SudokuSolver;

