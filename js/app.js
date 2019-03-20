$('document').ready(function () {


    //MENU 

    $(".menu").click(function () {


        if ($("header").width() === 0) {

            TweenMax.to(".volet1", 0.1, {
                width: "100%"
            });

            TweenMax.to(".volet2", 0.3, {
                width: "100%"
            });

            TweenMax.to(".volet3", 0.5, {
                width: "100%"
            });

            TweenMax.to(".volet4", 0.7, {
                width: "100%"
            });

            TweenMax.to(".volet5", 0.9, {
                width: "100%",
                onComplete: function () {

                    TweenMax.to("header", 0.7, {
                        width: "100%",
                        onComplete: function () {

                            TweenMax.to(".home li", 0.7, {
                                css: {
                                    opacity: 1,
                                    y: "0%"
                                },
                            });

                            TweenMax.to(".work li", 0.7, {
                                css: {
                                    opacity: 1,
                                    y: "0%"
                                },
                                delay: 0.4
                            });

                            TweenMax.to(".contact li", 0.7, {
                                css: {
                                    opacity: 1,
                                    y: "0%"
                                },
                                delay: 0.8
                            });
                        }
                    });

                    TweenMax.to(".volet1", 0.9, {
                        delay: 0.3,
                        width: "0"
                    });

                    TweenMax.to(".volet2", 0.9, {
                        delay: 0.3,
                        width: "0"
                    });

                    TweenMax.to(".volet3", 0.9, {
                        delay: 0.3,
                        width: "0"
                    });

                    TweenMax.to(".volet4", 0.9, {
                        delay: 0.3,
                        width: "0"
                    });

                    TweenMax.to(".volet5", 0.9, {
                        delay: 0.3,
                        width: "0"

                    });

                }
            });

        } else {

            TweenMax.to(" .home li ", 0.2, {
                css: {

                    opacity: 0,
                    y: "20%"
                }
            });

            TweenMax.to(" .work li ", 0.2, {
                css: {

                    opacity: 0,
                    y: "20%"
                }
            });

            TweenMax.to(" .contact li ", 0.2, {
                css: {

                    opacity: 0,
                    y: "20%"
                },
                onComplete() {

                    TweenMax.to("header", 0.5, {
                        width: 0
                    });
                }
            });

        }

    });

    //

    // PROJET

    TweenMax.to('.projet h1', 0.5, {


        opacity: 1



    });


    TweenMax.to('.projet p', 0.5, {


        opacity: 1,
        delay: 0.3


    });


    TweenMax.to('.projet ul', 0.5, {


        opacity: 1,
        delay: 0.7


    });




    TweenMax.to('.projet li', 0.5, {


        opacity: 1,
        delay: 0.9


    });





    // home 

    TweenMax.to('.lucien', 1, {

        opacity: 1
    });



    TweenMax.to('.pdev', 0.8, {

        opacity: 1,
        delay: 0.3
    });




    // 
    var Top = $('.about').offset().top;

    var Height = $('.about').height();

    var scroll = $(window).scrollTop();

    var windowHeight = $(window).height();



    $(document).on('scroll', function () {


        var scroll = $(window).scrollTop();




        if (Math.round(scroll + windowHeight) >= Math.round(Top + Height)) {


            TweenMax.to(".citation", 0.8, {

                css: {

                    y: "0",

                    opacity: 1


                }

            });

            TweenMax.to(".about .ap", 0.8, {

                css: {

                    y: "0",

                    opacity: 1


                },
                delay: 0.3

            });

            TweenMax.to(".about ul", 0.8, {

                css: {

                    y: "0",

                    opacity: 1


                },
                delay: 0.5

            });
            TweenMax.to(".about li", 0.8, {

                css: {

                    y: "0",

                    opacity: 1


                },
                delay: 0.7

            });

        }

    });

});


// contact page 

TweenMax.to('.page_contact .mail', 0.5, {

    opacity: 1
});

TweenMax.to('.page_contact .disponible', 0.6, {

    opacity: 1,
    delay: 0.2
});


TweenMax.to('.github', 1, {


    opacity: 0.5,
    delay: 0.3,


});


TweenMax.to('.linkedin', 1, {


    opacity: 0.5,
    delay: 0.4,


});

// work page

TweenMax.to('.ppolka .number', 0.5, {

    opacity: 0.1

});

TweenMax.to('.ppolka img', 0.5, {

    width: '300px',
    delay: 0.3

});


TweenMax.to('.ppolka a', 0.5, {

    opacity: 1,
    delay: 0.8

});




var scensoHeight = $('.sscenso').height();

var scensoTop = $('.sscenso').offset().top;

var scroll = $(window).scrollTop();

var windowHeight = $(window).height();



$(document).on('scroll', function () {


    var scroll = $(window).scrollTop();



    if (Math.round(scroll + windowHeight) >= Math.round(scensoTop + scensoHeight)) {



        TweenMax.to('.sscenso .number', 0.5, {

            opacity: 0.1

        });

        TweenMax.to('.sscenso img', 0.5, {

            width: '300px',
            delay: 0.3

        });


        TweenMax.to('.sscenso a', 0.5, {

            opacity: 1,
            delay: 0.8

        });


    }

});

// projet page 

TweenMax.to('.projet p', 0.5, {

    color: "#345676"
});




//# sourceMappingURL=app.js.map