this["JST"] = this["JST"] || {};

this["JST"]["templates/landing_page.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "        <a href=\"#"
    + alias1(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"link","hash":{},"data":data}) : helper)))
    + "\">\n            <img src=\""
    + alias1(alias2((depth0 != null ? depth0.image_url : depth0), depth0))
    + "\" id=\""
    + alias1(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"img-responsive\" />\n        </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <a class=\"btn btn-default\" href=\"#settingsPage\">Settings</a>\n</div>\n";
},"useData":true});

this["JST"]["templates/report.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-xs-12\">\n	<h5>Raport ngacmimin!</h5>\n	<br>\n	<form class=\"form-horizontal\" id=\"formReport\">\n		\n		<div class=\"form-group\">\n\n			<label class=\"control-label\">Trego Ngjarjen:</label>\n		 	<textarea class=\"form-control\" id=\"txtarea\" placeholder=\"Story...\"> </textarea>\n		</div> \n		<div class=\"form-group\">\n			<label class=\"control-label\">Tipi ngacmimit:</label>\n\n			<select class=\"form-control\" id=\"tipetNgacmimeve\">\n				<option value=\"Verbal\">Verbal</option>\n				<option value=\"Fizik\">Fizik </option>\n			</select>\n		</div>\n		<div class=\"form-group\">\n			<label class=\"control-label\">Emri Raportuesit:</label>\n			<input class=\"form-control\" type=\"text\"/>\n		</div>\n	\n	<button type=\"button\">Raporto</button>\n</div>";
},"useData":true});