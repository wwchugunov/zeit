SmoothScroll({
    animationTime    : 1000,
    stepSize         : 75,
    accelerationDelta : 30,  
    accelerationMax   : 2,   
    keyboardSupport   : true,  
    arrowScroll       : 100,
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,
    touchpadSupport   : true,
})




  $(document).ready(function() {
    $("[data-fancybox]").fancybox({
      animationEffect: "fade",
      transitionEffect: "slide",
      thumbs: {
        autoStart: true,
        axis: "y"
      }
    });
  });
