var todoList = {
    items: ['Go to work', 'Mark assignments', 'Shop for groceries'],
    nightMode: false,
    render: function () {
        var _this = this;
        // render each todo list item to a separate div
        var todoListDiv = document.querySelector('#todo-list');
        var aggregratedHTML = '';
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var bgColor = 'white';
            var textColor = 'black';
            // some kind of if else
            if (this.nightMode) {
                bgColor = 'black';
                textColor = 'white';
            }
            aggregratedHTML += "\n          <div \n            class=\"todo-item\" \n            style=\"background-color: " + bgColor + "; color: " + textColor + ";\"\n          >\n            " + item + "\n          </div>\n          ";
        }
        todoListDiv.innerHTML = aggregratedHTML;
        //TODO: on click, change bgColor of item between black and white
        var todoItems = document.querySelectorAll('.todo-item');
        for (var i = 0; i < todoItems.length; i++) {
            var item = todoItems[i];
            item.addEventListener('click', function (e) {
                _this.nightMode = !_this.nightMode;
                _this.render();
            });
        }
    },
};
todoList.render();
