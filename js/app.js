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
    Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
        console.log($('.btnBurgur').length);
    });
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


    $(".btnBurgur").click(function () {

        if ($(".menu").width() === 0) {


           TweenMax.to(".trai1", 0.1, { width:"25%" });
           TweenMax.to(".trai2", 0.2, { width:"25%" });
           TweenMax.to(".trai3", 0.3, { width:"25%" });
           TweenMax.to(".trai4", 0.4, { width:"25%" });
           TweenMax.to(".trai5", 0.5, { width:"20%", onComplete: function(){
               
               
               TweenMax.to(".trai1", 0.8,{ width:0, delay:0.6 });
               TweenMax.to(".trai2", 0.8,{ width:0, delay:0.6 });
               TweenMax.to(".trai3", 0.8,{ width:0, delay:0.6 });
               TweenMax.to(".trai4", 0.8,{ width:0, delay:0.6 });
               TweenMax.to(".trai5", 0.8,{ width:0, delay:0.6 });
                   
                   
                   
                    TweenMax.to(".menu", 0.2, {
                width: "100%",
                onComplete: function () {

                    TweenMax.to(".lHome", 1, {
                        css: {
                            opacity: "1"
                        },
                        delay: 0.7
                    });

                    TweenMax.to(".lAbout", 0.6, {
                        css: {
                            opacity: "1"
                        },
                        delay: 0.8
                    });
                    TweenMax.to(".lProject", 0.4, {
                        css: {
                            opacity: "1"
                        },
                        delay: 0.9
                    });
                    TweenMax.to(".lContact", 0.2, {
                        css: {
                            opacity: "1"
                        },
                        delay: 1
                    });

                }
            });
                   
                   
         
               
               
           }});


        } else {

            TweenMax.to(".menu ul li", 0.3, {
                css: {
                    opacity: "0",
                    onComplete: function () {

                        TweenMax.to(".menu", 0.3, {
                            width: "0"
                        });


                    }
                }
            });



        }


    });


    //     ------ MENU ------






});