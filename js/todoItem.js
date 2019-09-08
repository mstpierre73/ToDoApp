const ToDoItem = Backbone.Model.extend({
    defaults: {
        completed: false
    },

    urlRoot: "https://jsonplaceholder.typicode.com/todos",

    validate: function(attrs){
        if(!attrs.title){
            return "title is required";
        }
    },

    toggle: function(){
        if(this.get("completed")){
            this.set("completed", false);
        } else {
            this.set("completed", true);
        }
    }
});




