$(document).ready(function(){

    let todoItems = new ToDoItems();
    todoItems.fetch();   

    let todoItemsView = new ToDoItemsView({model: todoItems});
    $("#container").append(todoItemsView.render().$el);
});