var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
    },

    initialize:function () {
    	var self = this;
        // Handle back button throughout the application
       $(document).on('click', '.back', function(e) {
		    e.preventDefault();
		    self.back = true;
		    window.history.back();
		});
        this.firstPage = true;
    },

    home:function () {
        this.changePage(new HomeView());
    },


    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();

        $('.ui-page-theme-a').each(function(){
            var page_class = $(this).attr("class");
            if (page_class != "ui-page ui-page-theme-a ui-page-active"){
                $(this).remove();
            }
        });

        $('body').append($(page.el));
        var transition = "flip";

        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }

        // If from back button is clicked than slide page reverse.
        if (this.back == true) { 
			$.mobile.changePage($(page.el), {changeHash: false, transition: transition, reverse: this.back});
		} else {
			$.mobile.changePage($(page.el), {changeHash: false, transition: transition });
		}
		this.back = false;
    }
});

