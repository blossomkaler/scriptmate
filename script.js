
// Carousel Script
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextTestimonial, 3500);



/*```````````````````````````````````````````````````````````*/
function showDescription(card) {
    const description = card.querySelector('.description');
    description.style.display = 'block';
  }
  
  function hideDescription(card) {
    const description = card.querySelector('.description');
    description.style.display = 'none';
  }


/*``````````````````````````````````````````````````````````````*/
const text = "Mate";
let index = 0;
let typingSpeed = 200;
let isErasing = false;

function typeEffect() {
  const typingElement = document.getElementById("typing-effect");
  
  if (!isErasing && index < text.length) {
    // Typing effect
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, typingSpeed);
  } else if (isErasing && index > 0) {
    // Erasing effect
    typingElement.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(typeEffect, typingSpeed);
  } else if (index === text.length) {
    // Pause before erasing
    isErasing = true;
    setTimeout(typeEffect, 1000);
  } else if (index === 0 && isErasing) {
    // Pause before re-typing
    isErasing = false;
    setTimeout(typeEffect, 500);
  }
}

// Start the typing effect
typeEffect();
/*`````````````````````````````````````````````````````*/
let count = 50;
const countElement = document.getElementById("project-count");

function updateCounter() {
  count++;
  if (count > 60) {
    count = 50; // Reset to 40 once it reaches 61
  }
  countElement.innerText = count;
}

// Call updateCounter every 100 milliseconds
setInterval(updateCounter, 300);

//````````````````````````HEADER````````````````````````````
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const cross = document.querySelector('.cross');
const navItems = [...document.querySelectorAll('.nav-item')] ;

hamburger.addEventListener('click',() =>{
    navigation.classList.add('active');
    hamburger.classList.add('active');
})

cross.addEventListener('click',() =>{
    navigation.classList.remove('active');
    hamburger.classList.remove('active');
})

navItems.forEach(item => item.addEventListener('click',() =>{
  navigation.classList.remove('active');
  hamburger.classList.remove('active');

}));

/*`````````````````STICKY NAVBAR```````````````````````*/
const nav = document.querySelector('nav');
let topOfNav = nav.offsetTop;

function fixNav() {
  if(window.scrollY == 0){
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  } else {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);


/*````````````````````````````````````````````````````````````````````````````*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach( entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = [...document.querySelectorAll('.hidden')] ;
hiddenElements.forEach(el => observer.observe(el));