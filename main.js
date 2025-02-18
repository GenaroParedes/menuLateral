const featuresBtn = document.querySelector('#features-btn')
const featuresUl = document.querySelector('#features-ul')
const featuresBtnArrow = document.querySelector('#features-btn-arrow')

featuresBtn.addEventListener('click', ()=>{
  featuresUl.style.display = (featuresUl.style.display === 'block') ? 'none' : 'block';
  featuresBtnArrow.style.transition = 'transform 0.3s ease'
  featuresBtnArrow.style.transform = (featuresBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
})

const companyBtn = document.querySelector('#company-btn')
const companyUl = document.querySelector('#company-ul')
const companyBtnArrow = document.querySelector('#company-btn-arrow')

companyBtn.addEventListener('click', ()=>{
  companyUl.style.display = (companyUl.style.display === 'block') ? 'none' : 'block';
  companyBtnArrow.style.transition = 'transform 0.3s ease'
  companyBtnArrow.style.transform = (companyBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
})

const closeBtn = document.querySelector('#close-btn')
const navBar = document.querySelector('nav')
const hamburgerNenu = document.querySelector('#hamburger-menu')

closeBtn.addEventListener('click', ()=>{
  /*De esta forma preguntamos el tamaño de la pantalla, esto es para cuando estamos en un movil y cerramos el menu de 
  navegacion, que no desaparezca esa navegacion de las otras vistas, ya que si acostamos el celular para ver más ancho
  no vamos a tener la barra de arriba para vistas mas grandes*/
  const screenSize = window.innerWidth;

  if (screenSize >= 768) {
    navBar.style.display = 'block';
    hamburgerNenu.style.display = 'none'
  }else{
    navBar.style.display = 'none';
    hamburgerNenu.style.display = 'block'
  }
  
})

hamburgerNenu.addEventListener('click', ()=>{
  navBar.style.display = 'block';
  hamburgerNenu.style.display = 'none'
})


