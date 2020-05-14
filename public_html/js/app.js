function TOTHEMOON() {
  var TTMbtn = document.getElementById('tothemoon-button');
  TTMbtn.style.display = 'none';
  var audio = document.getElementById('tothemoon-music');
  audio.play();

  var divToShow = document.getElementById('happenInToTheMoon');
  divToShow.style.display = 'block';

  var camera, scene, renderer;
  var mesh;

  init();
  animate();

  function init() {

  	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  	camera.position.z = 400;

  	scene = new THREE.Scene();

  	var texture = new THREE.TextureLoader().load( 'img/moon.jpg' );

  	var geometry = new THREE.SphereBufferGeometry( 100, 40, 40 );
  	var material = new THREE.MeshBasicMaterial( { map: texture } );

  	mesh = new THREE.Mesh( geometry, material );
  	scene.add( mesh );

  	renderer = new THREE.WebGLRenderer( { antialias: true } );
  	renderer.setPixelRatio( window.devicePixelRatio );
  	renderer.setSize( window.innerWidth, window.innerHeight );
  	document.body.appendChild( renderer.domElement );

  	//

  	window.addEventListener( 'resize', onWindowResize, false );

  }

  function onWindowResize() {

  	camera.aspect = window.innerWidth / window.innerHeight;
  	camera.updateProjectionMatrix();

  	renderer.setSize( window.innerWidth, window.innerHeight );

  }

  function animate() {

  	requestAnimationFrame( animate );

  	//mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.05;

  	renderer.render( scene, camera );

  }
}
