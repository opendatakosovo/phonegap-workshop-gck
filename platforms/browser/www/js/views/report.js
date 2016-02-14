
window.ReportView = Backbone.View.extend({
	template: JST['templates/report.hbs'],
	initialize: function(){
		this.render();
	},
	render:function(){
		$(this.el).html(this.template());
	}
});
