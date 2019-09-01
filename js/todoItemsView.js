const ToDoItemsView = Backbone.View.extend({

    tagName: "ul",

    id: "todoItems",

    initialize: function(options){
        if(!(options && options.model)){
            throw new Error("model is not specified");
        }
    },
    
    render: function(){
        let self = this;

        this.model.each(function(ToDoItem){
            let itemsView = new ToDoItemView({model: ToDoItem});
            self.$el.append(itemsView.render().$el);
            
        });

        return this;
    }
});