$(function(){
    // WEBGL
    var mainView = document.getElementById('mainView');

    // Create the scene
    var scene = new THREE.Scene();
    
    //Create the camera
    //PerspectiveCamera(field of view, ratio, inner clipping, outer clipping)
    var camera = new THREE.PerspectiveCamera(75, mainView.offsetWidth / mainView.offsetHeight, 0.1, 1000);

    // Create the place to render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(mainView.offsetWidth, mainView.offsetHeight);
    mainView.appendChild(renderer.domElement);

    var shape;
    var material = new THREE.MeshBasicMaterial({ color: 0xfffff });

    
    var pos = .2;

    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer.render(scene, camera);


    // MODES
    var modes = "input[name=modes]";
    var checkedMode = "input[name=modes]:checked";
    var selectedMode = $(checkedMode).val();
    console.log(selectedMode);
    $(modes).change(function(){
        console.log($(checkedMode).val());
        selectedMode = $(checkedMode).val();
    });

    var randomColor = function(){
        var ran = Math.random() * 10;
        var color;
        if (ran > 8) color = 0xff0000;
        else if (8 > ran && ran > 4) color = 0x0000ff;
        else color = 0x0000ff;
        return color;
    }

    var mode = function(geometry){
        var mode;
        switch (parseInt(selectedMode)) {
          case 1:
            console.log("in number 1")
            mode = new THREE.Mesh(geometry, material);
            break;
          case 2:
            var tempMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: THREE.VertexColors});
            for(i in geometry.faces){
                var face = geometry.faces[i];
                face.vertexColors[0] = new THREE.Color(0xff0000);
                face.vertexColors[1] = new THREE.Color(0x00ff00);
                face.vertexColors[2] = new THREE.Color(0x0000ff);
            }
            mode = new THREE.Mesh(geometry, tempMaterial);
            break;
          case 3:
            var wireframe = new THREE.WireframeGeometry(geometry);
            mode = new THREE.LineSegments(wireframe, material);
            break ;
          case 4:
            break;
        }
        return mode;
    }

    var $body = $('body');

    // SCALE HANDLERS
    var upArrow = 38;
    var downArrow = 40;
    var leftArrow = 37;
    var rightArrow = 39;

    // TRANSLATION HANDLERS
    var Akey = 65;
    var Dkey = 68;
    var Wkey = 87;
    var Skey = 83;
    var Qkey = 81;
    var Ekey = 69;

    // ROTATION HANDLERS
    var Ukey = 85;
    var Okey = 79;
    var Ikey = 73;
    var Kkey = 75;
    var Jkey = 74;
    var Lkey = 76;

    $body.keydown(function (event){
        event.preventDefault();
        switch (event.which) {
          // Translate
          case Wkey:
            shape.position.y += 0.1;
            renderer.render(scene, camera);
            break;
          case Skey:
            shape.position.y += -0.1;
            renderer.render(scene, camera);
            break;
          case Akey:
            shape.position.x -= 0.1;
            renderer.render(scene, camera);
            break;
          case Dkey:
            shape.position.x += 0.1;
            renderer.render(scene, camera);
            break;
          case Qkey:
            shape.position.z += 0.1;
            renderer.render(scene, camera);
            break;
          case Ekey:
            shape.position.z += -0.1;
            renderer.render(scene, camera);
            break;
          // Rotate
          case Ikey:
            shape.rotation.y += 0.1;
            renderer.render(scene, camera);
            break;
          case Kkey:
            shape.rotation.y += -0.1;
            renderer.render(scene, camera);
            break;
          case Jkey:
            shape.rotation.x -= 0.1;
            renderer.render(scene, camera);
            break;
          case Lkey:
            shape.rotation.x += 0.1;
            renderer.render(scene, camera);
            break;
          case Ukey:
            shape.rotation.z += 0.1;
            renderer.render(scene, camera);
            break;
          case Okey:
            shape.rotation.z += -0.1;
            renderer.render(scene, camera);
            break;
          // Scale
          case leftArrow:
            shape.scale.x += -0.1;
            renderer.render(scene, camera);
            break;
          case rightArrow:
            shape.scale.x += 0.1;
            renderer.render(scene, camera);
            break;
          case upArrow:
            shape.scale.y += 0.1;
            renderer.render(scene, camera);
            break;
          case downArrow:
            shape.scale.y -= 0.1;
            renderer.render(scene, camera);
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
        material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    });

    $greyBtn.click(function() {
      console.log("I'm grey button");
      material = new THREE.MeshBasicMaterial({ color: 0x808080 });
    });

    $blackBtn.click(function() {
      console.log("I'm black button");
       material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    });

    $blueBtn.click(function() {
      console.log("I'm blue button");
       material = new THREE.MeshBasicMaterial({ color: 0xadd8e6 });
    });

    $yellowBtn.click(function() {
      console.log("I'm yellow button");
      material = new THREE.MeshBasicMaterial({ color: 0xdaa520 });
    });

    $greenBtn.click(function() {
      console.log("I'm green button");
      material = new THREE.MeshBasicMaterial({ color: 0xadff2f });
    });

    $pinkBtn.click(function() {
      console.log("I'm pink button");
      material = new THREE.MeshBasicMaterial({ color: 0xffc0cb });
    });

    $orangeBtn.click(function() {
      console.log("I'm orange button");
      material = new THREE.MeshBasicMaterial({ color: 0xff8c00 });
    });

    $purpleBtn.click(function() {
      console.log("I'm purple button");
      material = new THREE.MeshBasicMaterial({ color: 0x800080 });
    });

    $skyBlueBtn.click(function() {
      console.log("I'm sky-blue button");
      material = new THREE.MeshBasicMaterial({ color: 0x87cefa });
    });

    $aquaBtn.click(function() {
      console.log("I'm aqua button");
      material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    });

    $darkBlueBtn.click(function() {
      console.log("I'm dark-blue button");
      material = new THREE.MeshBasicMaterial({ color: 0x0000cd });
    });

    $brownBtn.click(function() {
      console.log("I'm brown button");
      material = new THREE.MeshBasicMaterial({ color: 0xdeb887 });
    });

    $redBtn.click(function() {
      console.log("I'm red button");
      material = new THREE.MeshBasicMaterial({ color: 0xf08080 });
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
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      shape = mode(geometry);
      scene.add(shape);
      renderer.render(scene, camera);
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