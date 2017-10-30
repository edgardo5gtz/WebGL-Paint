$(function(){
    // WEBGL
    var mainView = document.getElementById('mainView');
    var upView = document.getElementById("extraView1");
    var downView = document.getElementById("extraView2");

    // Create the scene
    var scene = new THREE.Scene();
    
    //Create the camera
    //PerspectiveCamera(field of view, ratio, inner clipping, outer clipping)
    var camera = new THREE.PerspectiveCamera(75, mainView.offsetWidth / mainView.offsetHeight, 0.1, 1000);
    var cameraUp = new THREE.PerspectiveCamera(75, upView.offsetWidth / upView.offsetHeight, 0.1, 1000);
    var cameraDown = new THREE.PerspectiveCamera(75, downView.offsetWidth / downView.offsetHeight, 0.1, 1000);

    // Create the place to render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(mainView.offsetWidth, mainView.offsetHeight);
    mainView.appendChild(renderer.domElement);

    // Extra viewports
    var rendererUp = new THREE.WebGLRenderer();
    rendererUp.setSize(upView.offsetWidth, upView.offsetHeight);
    upView.appendChild(rendererUp.domElement);

    var rendererDown = new THREE.WebGLRenderer();
    rendererDown.setSize(downView.offsetWidth, downView.offsetHeight);
    downView.appendChild(rendererDown.domElement);

    var shape;
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var texture = function(geometry){
        var img = new THREE.TextureLoader().load(
            './img/anime.gif',
            function(texture){
                shape = new THREE.Mesh(
                    geometry,
                    new THREE.MeshBasicMaterial({map:texture})
                );
                scene.add(shape);
                renderer.render(scene, camera);
                rendererDown.render(scene, cameraDown);
                rendererUp.render(scene, cameraUp);
            }
        );
    }

    // Camera positions
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    cameraUp.position.y = 5;
    cameraUp.position.z = 1;
    cameraUp.lookAt(new THREE.Vector3(0, 0, 0));

    cameraDown.position.z = 1;
    cameraDown.position.y = -5;
    cameraDown.lookAt(new THREE.Vector3(0, 0, 0));

    renderer.render(scene, camera);
    rendererDown.render(scene, cameraDown);
    rendererUp.render(scene, cameraUp);

    
    // MODES
    var modes = "input[name=modes]";
    var checkedMode = "input[name=modes]:checked";
    var selectedMode = $(checkedMode).val();
    console.log(selectedMode);
    $(modes).change(function(){
        console.log($(checkedMode).val());
        selectedMode = $(checkedMode).val();
    });

    var mode = function(geometry){
        var mode;
        switch (parseInt(selectedMode)) {
          case 1:
            material.side = THREE.DoubleSide;
            mode = new THREE.Mesh(geometry, material);
            break;
          case 2:
            var tempMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: THREE.VertexColors, side: THREE.DoubleSide});
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
            material.side = THREE.DoubleSide;
            mode = new THREE.LineSegments(wireframe, material);
            break ;
          case 4:
            mode = 4;
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
    var pos = .2; // Tranlation speed
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
            rendererDown.render(scene, cameraDown);
            rendererUp.render(scene, cameraUp);
            break;
          case Skey:
            shape.position.y += -0.1;
            renderer.render(scene, camera);
            rendererDown.render(scene, cameraDown);
            rendererUp.render(scene, cameraUp);
            break;
          case Akey:
            shape.position.x -= 0.1;
            renderer.render(scene, camera);
            rendererDown.render(scene, cameraDown);
            rendererUp.render(scene, cameraUp);
            break;
          case Dkey:
            shape.position.x += 0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          case Qkey:
            shape.position.z += 0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          case Ekey:
            shape.position.z += -0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          // Rotate
          case Ikey:
            shape.rotation.y += 0.1;
            renderer.render(scene, camera);
            rendererDown.render(scene, cameraDown);
            rendererUp.render(scene, cameraUp);
            break;
          case Kkey:
            shape.rotation.y += -0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          case Jkey:
            shape.rotation.x -= 0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          case Lkey:
            shape.rotation.x += 0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          case Ukey:
            shape.rotation.z += 0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          case Okey:
            shape.rotation.z += -0.1;
            renderer.render(scene, camera);
            rendererDown.render(scene, cameraDown);
            rendererUp.render(scene, cameraUp);
            break;
          // Scale
          case leftArrow:
            shape.scale.x += -0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          case rightArrow:
            shape.scale.x += 0.1;
           renderer.render(scene, camera);
           rendererDown.render(scene, cameraDown);
           rendererUp.render(scene, cameraUp);
            break;
          case upArrow:
            shape.scale.y += 0.1;
            renderer.render(scene, camera);
            rendererDown.render(scene, cameraDown);
            rendererUp.render(scene, cameraUp);
            break;
          case downArrow:
            shape.scale.y -= 0.1;
          renderer.render(scene, camera);
          rendererDown.render(scene, cameraDown);
          rendererUp.render(scene, cameraUp);
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
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial({
          size: 1,
          sizeAttenuation: false,
          color: material.color
        });
        shape = new THREE.Points(dotGeometry, dotMaterial);
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
    });

    $segmentBtn.click(function() {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-2, 0, 0));
        geometry.vertices.push(new THREE.Vector3( 2, 0, 0));
        shape = new THREE.LineSegments(geometry,material);
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
    });

    $triangleBtn.click(function() {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(-2, -2, 0));
      geometry.vertices.push(new THREE.Vector3(2, -2, 0));
      geometry.vertices.push(new THREE.Vector3(0, 2, 0));
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.computeFaceNormals();
      shape = mode(geometry)
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $squareBtn.click(function() {
      var geometry = new THREE.BoxGeometry(1, 1, 0);
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $trapezoidBtn.click(function() {
        var geometry = new THREE.Geometry();
       geometry.vertices.push(new THREE.Vector3(-2, 0, 0));
       geometry.vertices.push(new THREE.Vector3(2, 0, 0));
       geometry.vertices.push(new THREE.Vector3(1, 2, 0));
       geometry.vertices.push(new THREE.Vector3(-1, 2, 0));
       geometry.faces.push(new THREE.Face3(0, 1, 2));
       geometry.faces.push(new THREE.Face3(0, 2, 3));
       geometry.computeFaceNormals();
       shape = mode(geometry);
       if (shape === 4) {
         texture(geometry);
       } else {
         scene.add(shape);
         renderer.render(scene, camera);
         rendererDown.render(scene, cameraDown);
         rendererUp.render(scene, cameraUp);
       }
    });

    $pentagonBtn.click(function() {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(0, 2, 0));
      geometry.vertices.push(new THREE.Vector3(-2, .5, 0));
      geometry.vertices.push(new THREE.Vector3(-1, -2, 0));
      geometry.vertices.push(new THREE.Vector3(1, -2, 0));
      geometry.vertices.push(new THREE.Vector3(2, .5, 0));
      geometry.faces.push(new THREE.Face3(1, 2, 3));
      geometry.faces.push(new THREE.Face3(1, 3, 4));
       geometry.faces.push(new THREE.Face3(1, 4, 0));
      geometry.computeFaceNormals();
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $circleBtn.click(function() {
      var geometry = new THREE.CircleGeometry(2,100);
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $ellipseBtn.click(function() {
      var geometry = new THREE.CircleGeometry(2, 100);
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        shape.scale.y += -.3;
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $sphereBtn.click(function() {
     var geometry = new THREE.SphereGeometry(1, 20, 20);
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $cubeBtn.click(function() {
      console.log("I'm a cube");
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      shape = mode(geometry);
      if (shape === 4){
          texture(geometry);
      }
      else{
          scene.add(shape);
         renderer.render(scene, camera);
         rendererDown.render(scene, cameraDown);
         rendererUp.render(scene, cameraUp);
      }
    });

    $pyramidBtn.click(function() {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(-1, 0, 0)); //v0
      geometry.vertices.push(new THREE.Vector3(1, 0, 0));
      geometry.vertices.push(new THREE.Vector3(1, 0, 2));
      geometry.vertices.push(new THREE.Vector3(-1, 0, 2));
      geometry.vertices.push(new THREE.Vector3(0, 2, 1));
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.faces.push(new THREE.Face3(0, 2, 3));
      geometry.faces.push(new THREE.Face3(0, 4, 3));
      geometry.faces.push(new THREE.Face3(3, 4, 2));
      geometry.faces.push(new THREE.Face3(2, 4, 1));
      geometry.faces.push(new THREE.Face3(1, 4, 0));
      geometry.computeFaceNormals();
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $tPyramidBtn.click(function() {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
      geometry.vertices.push(new THREE.Vector3(1, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, 0, -2));
      geometry.vertices.push(new THREE.Vector3(0, 2, -1));
    
      geometry.faces.push(new THREE.Face3(0, 1, 3));
      geometry.faces.push(new THREE.Face3(1, 2, 3));
      geometry.faces.push(new THREE.Face3(2, 0, 3));
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.computeFaceNormals();
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $coneBtn.click(function() {
      var geometry = new THREE.ConeGeometry(1, 2, 50);
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });

    $cylinderBtn.click(function() {
      var geometry = new THREE.CylinderGeometry(1, 1, 2,50);
      shape = mode(geometry);
      if (shape === 4) {
        texture(geometry);
      } else {
        scene.add(shape);
        renderer.render(scene, camera);
        rendererDown.render(scene, cameraDown);
        rendererUp.render(scene, cameraUp);
      }
    });
    
});