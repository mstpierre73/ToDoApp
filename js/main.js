$(document).ready(function(){

    let todoItems = new ToDoItems([
        new ToDoItem({description: "Todo Item 1"}),
        new ToDoItem({description: "Todo Item 2"}),
        new ToDoItem({description: "Todo Item 3"}),
        new ToDoItem({description: "Todo Item 4"})
    ]);


    let todoItemsView = new ToDoItemsView({model: todoItems});
    $("#container").append(todoItemsView.render().$el);
});