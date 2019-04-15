const todoList = {
    items: ['Go to work', 'Mark assignments', 'Shop for groceries'],
    nightMode: false,
  
    render() {
      // render each todo list item to a separate div
      const todoListDiv = document.querySelector('#todo-list')
  
      let aggregratedHTML = ''
      for (const item of this.items) {
        let bgColor = 'white'
        let textColor = 'black'
  
        // some kind of if else
        if (this.nightMode) {
          bgColor = 'black'
          textColor = 'white'
        }
  
        aggregratedHTML += `
          <div 
            class="todo-item" 
            style="background-color: ${bgColor}; color: ${textColor};"
          >
            ${item}
          </div>
          `
      }
  
      todoListDiv.innerHTML = aggregratedHTML
      //TODO: on click, change bgColor of item between black and white
      const todoItems = document.querySelectorAll('.todo-item')
  
      for (let i = 0; i < todoItems.length; i++) {
        const item = todoItems[i]
  
        item.addEventListener('click', e => {
          this.nightMode = !this.nightMode
          this.render()
        })
      }
    },
  }
  
  todoList.render()
  