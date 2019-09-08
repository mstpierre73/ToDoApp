const ToDoItems = Backbone.Collection.extend({
    model: ToDoItem,
    url: "https://jsonplaceholder.typicode.com/todos"
});