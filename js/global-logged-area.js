globalPagesJS = {
    
    init: function() {
        globalPagesJS.handleEvents();
    },

    handleEvents: function(){
        $("#button-menu-mob").on("click", function(){

            $("#button-menu-mob, .box--menu").toggleClass("active");

        });

        $(".drop-item-menu").on("click", function(){

            $(this).next().toggleClass("active");

        });
    },
}

globalPagesJS.init();