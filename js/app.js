$('document').ready(function () {

    //     ------ BARBA -----
    var FadeTransition = Barba.BaseTransition.extend({
        start: function () {

            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },

        fadeOut: function () {


            return $(this.oldContainer).animate({
                opacity: 0
            }).promise();



        },

        fadeIn: function () {


            var _this = this;
            var $el = $(this.newContainer);

            $(this.oldContainer).hide();

            $el.css({
                visibility: 'visible',
                opacity: 0
            });

            $el.animate({
                opacity: 1
            }, 400, function () {


                _this.done();
            });
        }
    });


    Barba.Pjax.getTransition = function () {

        return FadeTransition;
    };
    Barba.Pjax.start();

    //     ------ BARBA -----

    //     ------ BOUTON BURGUR ------


    //SI LA SOURIS PASSE SUR LE BOUTON
    $(".btnBurgur").hover(
        //  AlORS TU:
        function () {

            TweenMax.to(".trais1", 0.1, {
                width: '20px',
                onComplete: function () {


                    TweenMax.to(".trais3", 0.1, {
                        width: '20px'
                    });

                }
            });


        },
        //  SINON:
        function () {

            TweenMax.to(".trais3", 0.1, {
                width: '15px',
                onComplete: function () {


                    TweenMax.to(".trais1", 0.1, {
                        width: '10px',

                    });


                }
            });


        }
    );



    
    //     ------ BOUTON BURGUR ------

    
    //     ------ MENU ------
    
    
    $( ".btnBurgur" ).click(function() {

        if( $(".menu").width() === 0  ){
            
            
            TweenMax.to(".menu", 0.3, { width:"100%" });
            
        }
        
        else{
            
            TweenMax.to(".menu", 0.3, { width:"0" });
            
            
        }
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});