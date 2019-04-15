const game = {
    isXTurn: true,
    cells: ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
    hoveringIndex: null,
  
    playPiece(index) {
      if (this.cells[index] !== '_') {
        return
      }
  
      if (this.isXTurn) {
        this.cells[index] = 'X'
      } else {
        this.cells[index] = 'O'
      }
  
      this.isXTurn = !this.isXTurn
    },
  
    renderCell(index) {
      let move = this.cells[index]
      let bgColor = 'white'
      if (move === '_') {
        move = ''
      }
  
      if (move === '' && this.hoveringIndex === parseInt(index)) {
        bgColor = 'green'
      }
      if (move !== '' && this.hoveringIndex === parseInt(index)) {
        bgColor = 'red'
      }
  
      return `<div class='cell' style="background-color: ${bgColor};"><p>${move}</p></div>`
    },
  
    render() {
      const boardDiv = document.querySelector('#board')
  
      let aggregratedHTML = ''
      for (const index in this.cells) {
        aggregratedHTML += this.renderCell(index)
      }
  
      boardDiv.innerHTML = aggregratedHTML
  
      const cellDivs = document.querySelectorAll('.cell')
  
      for (let i = 0; i < cellDivs.length; i++) {
        const cellDiv = cellDivs[i]
  
        cellDiv.addEventListener('click', e => {
          this.playPiece(i)
          this.render()
        })
  
        cellDiv.addEventListener('mouseover', e => {
          if (i !== this.hoveringIndex) {
            this.hoveringIndex = i
            this.render()
          }
        })
      }
    },
  }
  
  game.render()
  