const ToDoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },

    url: "fakeUrl",

    validate: function(attrs){
        if(!attrs.description){
            return "Description is required";
        }
    },

    toggle: function(){
        if(this.get("isCompleted")){
            this.set("isCompleted", false);
        } else {
            this.set("isCompleted", true);
        }
    }
});




