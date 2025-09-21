let cube = document.querySelector(".cube");
let grids = document.querySelectorAll(".grid");

grids.forEach(grid => {
  for(let i = 0; i<25; i++){
    let span = document.createElement("span");
    grid.appendChild(span);
  }
});


document.addEventListener('mousemove', (e) =>{
  let x = e.clientX / window.innerWidth -0.5;
  let y = e.clientY / window.innerHeight - 0.5;

  cube.style.transform = `rotateX(${y*360}deg) rotateY(${x*360}deg)`;
})

function AddRandomActive (){
  grids.forEach(grid => {
    let spans = grid.querySelectorAll("span");
    let randIndex = Math.floor(Math.random() *spans.length);
    spans[randIndex].classList.add('active');
    
    // remove class after random time
    let removeTimer = Math.floor(Math.random()*1000)+1000;
    setTimeout(()=>{
      spans[randIndex].classList.remove('active');
    }, removeTimer )
  })
}

function randomInterval(){
  let interval = Math.floor(Math.random() * 300)+400;
  AddRandomActive();
  setTimeout(randomInterval, interval); 
}
randomInterval();