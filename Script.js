// Assigning variables for User feedback section

console.log("look")

const SwiperOne = document.getElementById('swipe1');
const SwiperTwo = document.getElementById('swipe2');
const SwiperThree = document.getElementById('swipe3');
const SwiperContainer = document.getElementById('Swipe-container');
const UserFeedbacks = SwiperContainer.querySelectorAll('.child');
let currentIndex = 0;

for (let i = 0; i < UserFeedbacks.length; i++) {
    UserFeedbacks[i].setAttribute('data-index', i);
}


SwiperOne.addEventListener('click', () => {
    SwiperOne.style.backgroundColor = '#5A0D96';
    SwiperThree.style.backgroundColor ='#D1D1D1';
    SwiperTwo.style.backgroundColor ='#D1D1D1';
    currentIndex = 0; 
    updateScrollPosition();
  });

  SwiperTwo.addEventListener('click', () => {
    SwiperTwo.style.backgroundColor = '#5A0D96';
    SwiperThree.style.backgroundColor ='#D1D1D1';
    SwiperOne.style.backgroundColor ='#D1D1D1';
    currentIndex = 1; 
    updateScrollPosition();
  }); 

  SwiperThree.addEventListener('click', () => {
    SwiperTwo.style.backgroundColor = '#D1D1D1';
    SwiperThree.style.backgroundColor ='#5A0D96';
    SwiperOne.style.backgroundColor ='#D1D1D1';
    currentIndex = 6; 
    updateScrollPosition();
  }); 

  function updateScrollPosition() {
    const scrollPosition = currentIndex * SwiperContainer.offsetWidth;
    SwiperContainer.scrollLeft = scrollPosition;
}






   


  