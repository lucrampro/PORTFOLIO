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

});
//# sourceMappingURL=app.js.map
