$(document).ready(function(){

    let todoItems = new ToDoItems([
        new ToDoItem({id: 1, description: "Todo Item 1"}),
        new ToDoItem({id: 2, description: "Todo Item 2"}),
        new ToDoItem({id: 3, description: "Todo Item 3"}),
        new ToDoItem({id: 4,description: "Todo Item 4"})
    ]);


    let todoItemsView = new ToDoItemsView({model: todoItems});
    $("#container").append(todoItemsView.render().$el);
});