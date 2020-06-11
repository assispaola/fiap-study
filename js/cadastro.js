// Javascript referente à página cadastro.html

var cadastroPage = {

    owl: $(".owl-carousel"),
    
    init: function() {
        cadastroPage.handleEvents();
    },

    nextStep: function(){
        cadastroPage.owl.trigger("next.owl.carousel");
    },

    prevStep: function(){
        cadastroPage.owl.trigger("prev.owl.carousel");
    },

    handleEvents: function() {
        cadastroPage.owl.owlCarousel({
            items: 1,
            startPosition: 0,
            mouseDrag: false,
            touchDrag: false,
            center: true,
            autoWidth: false,
            dots: true,
            nav: true,
            navText: ["", ""],
            onDragged: function(e) {}
        });
    }
}

cadastroPage.init();