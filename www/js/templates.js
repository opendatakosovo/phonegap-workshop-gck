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
    return "<script>\n$(document).ready(function(){\n	// Lejo cross-domain qasje per ajax calls\n	$.support.cors = true;\n	$('#btnRaporto').click(function(){\n		var ngjarja = $('#txtarea').val();\n		var tipi = $('#tipetNgacmimeve').val();\n		alert(ngjarja);\n		var emri_raportuesit = $('#emri').val();\n		var raporti_kompletuar = \"Raporton: \" + emri_raportuesit + \" Ngjarja: \" + ngjarja; \n		var raportimi = {\n			\"type\": [tipi],\n			\"story\": raporti_kompletuar\n		};\n\n		$.ajax({\n			type: \"POST\",\n			url: \"www.ecshlire.com/api/harassment/report\",\n			crossDomain: true,\n			contentType: \"application/json\",\n			data: JSON.stringify(raportimi),\n			success: function(){\n				alert(\"Raportimi u krye me sukses!\");\n			},\n			error: function(errMessage){\n				alert(errMessage);\n			}\n		});\n	});\n});\n</script>\n<div class=\"col-xs-12\">\n	<h5>Raport ngacmimin!</h5>\n	<br>\n	<form class=\"form-horizontal\" id=\"formReport\">\n		\n		<div class=\"form-group\">\n\n			<label class=\"control-label\">Trego Ngjarjen:</label>\n		 	<textarea class=\"form-control\" id=\"txtarea\" placeholder=\"Story...\"> </textarea>\n		</div> \n		<div class=\"form-group\">\n			<label class=\"control-label\">Tipi ngacmimit:</label>\n\n			<select class=\"form-control\" id=\"tipetNgacmimeve\">\n				<option value=\"Verbal\">Verbal</option>\n				<option value=\"Fizik\">Fizik </option>\n			</select>\n		</div>\n		<div class=\"form-group\">\n			<label class=\"control-label\">Emri Raportuesit:</label>\n			<input id=\"emri\" class=\"form-control\" type=\"text\"/>\n		</div>\n	\n	<button id=\"btnRaporto\" type=\"button\">Raporto</button>\n	</form>\n</div>";
},"useData":true});