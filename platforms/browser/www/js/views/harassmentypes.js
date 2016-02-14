window.HarassTypes = Backbone.View.extend({
	template: JST["templates/harasmentypes.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){
    	$(this.el).html(this.template());
    }
});
