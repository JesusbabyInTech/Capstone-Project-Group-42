document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 0){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');  
    }
  });
  
  document.addEventListener('scroll', () => {
    const NavParent = document.querySelector('.navLinks');
    const NavLinks = NavParent.children;
    const tags = NavParent.getElementsByClassName('navLinktag');
    const ButtonParent = document.querySelector('.btnContainer');
    const Buttons = ButtonParent.children;
    const ButtonTags = ButtonParent.getElementsByClassName('navlinkbtn');

    
  
  
    const linksArray = Array.from(NavLinks);
  
    
    linksArray.forEach((link) => {
      if (window.scrollY > 0) {
        link.classList.add('scrolled');
      } else {
        link.classList.remove('scrolled');
      }
    });
  
    const TagsArray = Array.from(tags);
  
 
    TagsArray.forEach((link) => {
      if (window.scrollY > 0) {
        link.classList.add('scrolled');
      } else {
        link.classList.remove('scrolled');
      }
    });

    const ButtonsArray = Array.from(Buttons);
  
    
    ButtonsArray.forEach((link) => {
      if (window.scrollY > 0) {
        link.classList.add('scrolled');
      } else {
        link.classList.remove('scrolled');
      }
    });

    const ButtonTagsArray = Array.from(ButtonTags);
  
 
    ButtonTagsArray.forEach((link) => {
      if (window.scrollY > 0) {
        link.classList.add('scrolled');
      } else {
        link.classList.remove('scrolled');
      }
    });

    // const image = document.getElementById('Image');
    // if (window.scrollY > 0) {
    //     image.src = 'Logo/Artboard 4.png'; 
    //   } else {
    //     image.src = 'Logo/image 1.png'; 
    //   }
    });
  





  
  
//   document.addEventListener('scroll', () => {
//     const CTAbtn = document.querySelector('.navLinkbtn')
//     if(window.scrollY > 0){
//         CTAbtn.className += ' scrolled'; // Add the class 'scrolled'
//     } else {
//       CTAbtn.className = CTAbtn.className.replace('scrolled', '').trim(); 
//       }
//     });
  
  

  

 console.log("I am a boyyyyyyyyyyyyyyyyyyyyyyy")