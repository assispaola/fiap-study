alterarDadosPage = {
    
    init: function() {
        alterarDadosPage.handleEvents();
    },

    handleEvents: function(){
        $(".btn-update-photo").on("click", function(){

            $("#user-photo").click();

        });
    },
}

alterarDadosPage.init();