// Hero Carousel
const slider1 = document.querySelector('#glide_1');
if (slider1) {
  new Glide(slider1, {
    type: 'carousel',
    startAt: 0,
    autoplay: 3000,
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: 'linear',
  }).mount()
  
}



// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}


// form validation
//mount().mount(): This final step makes the carousel active and attaches it to the slider1 element
//Usage: Mounts and initializes a component. Binds mouse and touch events
// its is method handle to event.
// new Keyword: In JavaScript, new is used to create an instance of a class or a constructor function. It initializes a new object from the class or function, setting up its properties and methods as defined by the class or constructor.
