$(function(){
    var $body = $('body');
    

    // SCALE HANDLERS
    var upArrow = 38;
    var downArrow = 40;
    var leftArrow = 37;
    var rightArrow = 39;
    var Akey = 65;
    var Dkey = 68;
    var Wkey = 87;
    var Skey = 83;

    $body.keydown(function (event){
        event.preventDefault();
        switch (event.which) {
          case upArrow:
            console.log("this is UpArrow");
            break;
          case downArrow:
            console.log("this is downArrow");
            break;
          case leftArrow:
            console.log("this is leftArrow");
            break;
          case rightArrow:
            console.log("this is rightArrow");
            break;
          case Akey:
            console.log("this is A");
            break;
          case Dkey:
            console.log("this is D");
            break;
          case Wkey:
            console.log("this is W");
            break;
          case Skey:
            console.log("this is S");
            break;
          default:
            break;
        }
    });

    // COLOR BUTTONS HANDLERS
    var $whiteBtn = $('.white');
    var $greyBtn = $(".grey");
    var $blackBtn = $(".black");
    var $blueBtn = $(".blue");
    var $yellowBtn = $(".yellow");
    var $greenBtn = $(".green");
    var $pinkBtn = $(".pink");
    var $orangeBtn = $(".orange");
    var $purpleBtn = $(".purple");
    var $skyBlueBtn = $(".sky-blue");
    var $aquaBtn = $(".aqua");
    var $darkBlueBtn = $(".dark-blue");
    var $brownBtn = $(".brown");
    var $redBtn = $(".red");

    $whiteBtn.click(function(){
        console.log("I'm white button")
    });

    $greyBtn.click(function() {
      console.log("I'm grey button");
    });

    $blackBtn.click(function() {
      console.log("I'm black button");
    });

    $blueBtn.click(function() {
      console.log("I'm blue button");
    });

    $yellowBtn.click(function() {
      console.log("I'm yellow button");
    });

    $greenBtn.click(function() {
      console.log("I'm green button");
    });

    $pinkBtn.click(function() {
      console.log("I'm pink button");
    });

    $orangeBtn.click(function() {
      console.log("I'm orange button");
    });

    $purpleBtn.click(function() {
      console.log("I'm purple button");
    });

    $skyBlueBtn.click(function() {
      console.log("I'm sky-blue button");
    });

    $aquaBtn.click(function() {
      console.log("I'm aqua button");
    });

    $darkBlueBtn.click(function() {
      console.log("I'm dark-blue button");
    });

    $brownBtn.click(function() {
      console.log("I'm brown button");
    });

    $redBtn.click(function() {
      console.log("I'm red button");
    });

    // SHAPE BUTTON HANDLERS

    var $dotBtn = $(".dot");
    var $segmentBtn = $(".segment");
    var $triangleBtn = $(".triangle");
    var $squareBtn = $(".square");
    var $trapezoidBtn = $(".trapezoid");
    var $pentagonBtn = $(".pentagon");
    var $circleBtn = $(".circle");
    var $ellipseBtn = $(".ellipse");
    var $sphereBtn = $(".sphere");
    var $pyramidBtn = $(".pyramid");
    var $tPyramidBtn = $(".t-pyramid");
    var $cubeBtn = $(".cube");
    var $coneBtn = $(".cone");
    var $cylinderBtn = $(".cylinder");

    $dotBtn.click(function() {
      console.log("I'm a dot");
    });

    $segmentBtn.click(function() {
      console.log("I'm segment");
    });

    $triangleBtn.click(function() {
      console.log("I'm a triangle");
    });

    $squareBtn.click(function() {
      console.log("I'm a square");
    });

    $trapezoidBtn.click(function() {
      console.log("I'm a trapezoid");
    });

    $pentagonBtn.click(function() {
      console.log("I'm a pentagon");
    });

    $circleBtn.click(function() {
      console.log("I'm a circle");
    });

    $ellipseBtn.click(function() {
      console.log("I'm an ellipse");
    });

    $sphereBtn.click(function() {
      console.log("I'm a sphere");
    });

    $cubeBtn.click(function() {
      console.log("I'm a cube");
    });

    $pyramidBtn.click(function() {
      console.log("I'm a square pyramid");
    });

    $tPyramidBtn.click(function() {
      console.log("I'm a triangular pyramid");
    });

    $coneBtn.click(function() {
      console.log("I'm a cone");
    });

    $cylinderBtn.click(function() {
      console.log("I'm a cylinder");
    });
    
});