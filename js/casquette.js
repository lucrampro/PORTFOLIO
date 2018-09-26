TweenMax.to('.helice', 0.5, {
    width: "50px",
    onComplete: function () {

        TweenMax.to('.helice', 0.5, {
            width: "100px",
            onComplete: function () {

                TweenMax.to('.helice', 0.5, {
                    width: "50px",
                    onComplete: function () {

                        TweenMax.to('.helice', 0.5, {
                            width: "100px",
                            onComplete: function () {


                                TweenMax.to('.helice', 0.5, {
                                    width: "50px"
                                });

                            }
                        });
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=casquette.js.map
