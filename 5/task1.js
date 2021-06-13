function createChessboard() {
    var contentDiv = document.getElementById('content');
    var chessBoard = document.createElement('table');
    chessBoard.style.borderSpacing = '0 0';
    chessBoard.style.backgroundColor = 'gray';
    chessBoard.id = 'chessboard';
    for (let digit = 9, black = false; digit >= 0; digit--) {
        var row = document.createElement('tr');
        row.id = 'row-' + digit;
        for (let letter = 96; letter <= 105; letter++) {
            var cell = document.createElement('td');
            cell.style.textAlign = 'center';
            cell.style.height = '50px';
            cell.style.width = '50px';
            cell.style.fontSize = '30px';
            if (letter === 96 && digit != 0 && digit != 9) {
                cell.innerText = digit;
            }
            else if (digit === 0 && letter != 96 && letter != 105) {
                cell.innerText = String.fromCharCode(letter);
            }
            else if (digit != 0 && digit != 9 && letter != 96 && letter != 105) {
                cell.id = 'cell-' + String.fromCharCode(letter) + digit;
                cell.style.backgroundColor = (black ? 'black' : 'white');
                if (letter != 104) black = !black;
            }
            row.append(cell);
        }
        chessBoard.append(row);
    }
    contentDiv.append(chessBoard);
    var button = document.getElementById('button');
    button.style.visibility = 'hidden';
}