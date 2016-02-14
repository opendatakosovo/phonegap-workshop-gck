window.HomeView = Backbone.View.extend({
  template: JST["templates/landing_page.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){
      var report = new Option({ name: "Report", id: "Report", link: "harassTypesPg", image_url: "static/img/mainscreen/report.png"});
      var maps = new Option({ name: "Maps", id: "Maps", link: "page1", image_url: "static/img/mainscreen/maps.png"});
      var analytics = new Option({ name: "Analytics", id: "Analytics", link: "analyticsPage", image_url: "static/img/mainscreen/analytics.png"});
      var contact = new Option({ name: "Contact", id: "Contact", link: "page1", image_url: "static/img/mainscreen/contact.png"});
      var myOptions = new Options([report, maps, analytics, contact]);

      $(this.el).html(this.template({options: myOptions.toJSON()}));
      return this;
    }
});
