var game = {
    isXTurn: true,
    cells: ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
    hoveringIndex: null,
    playPiece: function (index) {
        if (this.cells[index] !== '_') {
            return;
        }
        if (this.isXTurn) {
            this.cells[index] = 'X';
        }
        else {
            this.cells[index] = 'O';
        }
        this.isXTurn = !this.isXTurn;
    },
    renderCell: function (index) {
        var move = this.cells[index];
        var bgColor = 'white';
        if (move === '_') {
            move = '';
        }
        if (move === '' && this.hoveringIndex === parseInt(index)) {
            bgColor = 'green';
        }
        if (move !== '' && this.hoveringIndex === parseInt(index)) {
            bgColor = 'red';
        }
        return "<div class='cell' style=\"background-color: " + bgColor + ";\"><p>" + move + "</p></div>";
    },
    render: function () {
        var _this = this;
        var boardDiv = document.querySelector('#board');
        var aggregratedHTML = '';
        for (var index in this.cells) {
            aggregratedHTML += this.renderCell(index);
        }
        boardDiv.innerHTML = aggregratedHTML;
        var cellDivs = document.querySelectorAll('.cell');
        var _loop_1 = function (i) {
            var cellDiv = cellDivs[i];
            cellDiv.addEventListener('click', function (e) {
                _this.playPiece(i);
                _this.render();
            });
            cellDiv.addEventListener('mouseover', function (e) {
                if (i !== _this.hoveringIndex) {
                    _this.hoveringIndex = i;
                    _this.render();
                }
            });
        };
        for (var i = 0; i < cellDivs.length; i++) {
            _loop_1(i);
        }
    },
};
game.render();
