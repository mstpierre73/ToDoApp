const ToDoItemsView = Backbone.View.extend({

    initialize: function(options){
        if(!(options && options.model)){
            throw new Error("model is not specified");
        }

        this.model.on("add", this.onAddTodoItem, this);
        this.model.on("remove", this.onRemoveTodoItem, this);
    },

    onAddTodoItem: function(todoItem){
        let view = new ToDoItemView({model: todoItem});
        this.$("#todoItems").append(view.render().$el);
    },

    onRemoveTodoItem: function(todoItem){
        this.$("li#" + todoItem.id).remove();
    },

    events: {
        "click #add": "onClickAdd",
        "keypress #newTodoItem": "onKeyPress"
    },

    onClickAdd: function(){
        let $inputBox = this.$("#newTodoItem");

        if($inputBox.val()){
            let todoItem = new ToDoItem({title: $inputBox.val() });
            this.model.create(todoItem);
            $inputBox.val("");
        }
    },

    onKeyPress: function(e){
        if(e.keyCode === 13){
            this.onClickAdd();
        }
    },
    
    render: function(){
        let template = $("#todoItemsTemplate").html();
        let html = Mustache.render(template);
        this.$el.html(html);

        return this;
    }
});