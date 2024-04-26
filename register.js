const Swiper1 = document.getElementById('swiper1');
const Swiper2 = document.getElementById('swiper2');
const Swiper3 = document.getElementById('swiper3');
const productinfo = document.getElementById('productinfo');
const ProductImage = document.getElementById("productinfoimg")
const heading = document.getElementById("ImageDes")
const paragrapgh = document.getElementById("Imagepara")



Swiper1.addEventListener('click', () => {
    Swiper1.style.background ='#fff';
    Swiper2.style.background ='#843BC0';
    Swiper3.style.background ='#843BC0';
    ProductImage.style.backgroundImage = 'url(./Images/png1.png)';
    heading.textContent = 'Streamlined business management tools';
    paragrapgh.textContent = 'Enjoy the best online application that helps your business needs';
  }); 

  Swiper2.addEventListener('click', () => {
    Swiper2.style.background ='#fff';
    Swiper1.style.background ='#843BC0';
    Swiper3.style.background ='#843BC0';
    ProductImage.style.backgroundImage = 'url(./Images/png2.png)';
    heading.textContent = 'Documentation of business processes';
    paragrapgh.textContent = 'Bookkeeping, invoice, inventory and dashboard';

   
  }); 

  Swiper3.addEventListener('click', () => {
    Swiper3.style.background ='#fff';
    Swiper1.style.background ='#843BC0';
    Swiper2.style.background ='#843BC0';
    ProductImage.style.backgroundImage = 'url(./Images/png3.png)';
    heading.textContent = 'Customer friendly';
    paragrapgh.textContent = 'Seamless customer experience at every step of bookkeeping';
  }); 


//   Sign up function



const signup = () => {
  // To check user input
  const uName = document.getElementById('SignUser').value;
  const uPass = document.getElementById('Password').value;
  const uFname = document.getElementById('Firstname').value;
  const uEmail = document.getElementById('Email').value;
  const uPhone = document.getElementById('Phone').value;
  const uLname = document.getElementById('Lastname').value;

  // Check if any required field is empty
  if (!uPass || !uName || !uEmail || !uLname || !uFname || !uPhone) {
      alert('Please, complete the form');
      return; // Exit the function if any field is empty
  }

  // Convert JSON data to object
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if username already exists
  if (users.some(user => user.uName === uName)) {
      alert('Username already exists. Choose a new username');
      return; // Exit the function if username exists
  }

  // Push new user object to users array
  users.push({ uName, uPass, uEmail, uFname, uLname, uPhone });

  // Save users array back to local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Alert user that registration was successful
  alert("You have successfully registered, now let's verify your email");
};




