document.getElementById('slide2').onclick = function() {
  const tablet = document.querySelector('.tablet');
  const phone = document.querySelector('.phone');
  const name = document.querySelector('.name');
  let text1 = document.getElementById('f_slide');
  let text2 = document.getElementById('s_slide');

  // text.innerHTML = "What do I Create?";
  // Toggle classes for animation
  text1.classList.add('active');
  text2.classList.add('active');
  tablet.classList.add('active');
  phone.classList.add('active');
  name.classList.remove('visible');
};

document.getElementById('slide1').onclick = function() {
  const tablet = document.querySelector('.tablet');
  const phone = document.querySelector('.phone');
  const name = document.querySelector('.name');
  let text1 = document.getElementById('f_slide');
  let text2 = document.getElementById('s_slide');
  
  // text.innerHTML = "Who Am I?";
  
  // Toggle classes for animation
  text1.classList.remove('active');
  text2.classList.remove('active');
  tablet.classList.remove('active');
  phone.classList.remove('active');
  name.classList.add('visible');
};