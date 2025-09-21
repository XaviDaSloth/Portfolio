function cubes(){
  let container = document.querySelector('.cubeBackground');
  let zValues = [-4.5, -3, -1.5,0,1.5,3,4.5];
  zValues.forEach(z => {
    let cube = document.createElement('div');
    cube.classList.add('cube');
    cube.style.setProperty('--z',z);
    cube.setAttribute('data-speed', z);

    for(let x = -4; x<= 4; x++){
      let div = document.createElement('div');
      div.style.setProperty('--x',x);
      div.style.setProperty('--y',0);

      let span = document.createElement('span');
      span.style.setProperty('--i',3);
      div.appendChild(span);
      cube.appendChild(div);
      
      span.addEventListener('mouseover', function() {
        span.classList.add('active');
      });

      span.addEventListener('mouseout', function() {
        span.classList.remove('active');
      });
    }
    container.appendChild(cube);
  })
  // activeRandomCube();
}

// function activeRandomCube(){
//   let spans = document.querySelectorAll('.cube span');
//   setInterval(()=>{
//     let randomIndex = Math.floor(Math.random()*spans.length);
//     let randomSpan = spans[randomIndex];

//     randomSpan.classList.add('active');
    
//     setTimeout(() => {
//       randomSpan.classList.remove('active');
//     },2000)
//   },500)
// }
cubes();

document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.cube').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (e.pageX - window.innerWidth / 2) * speed / 100;
    const y = (e.pageY - window.innerHeight / 2) * speed / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
