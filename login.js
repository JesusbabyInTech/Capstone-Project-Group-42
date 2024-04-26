// Authentication page swipe 

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
    paragrapgh.textContent = 'Enjoy the best online application that helps your business needs ';
  }); 

 

  Swiper2.addEventListener('click', () => {
    Swiper2.style.background ='#fff';
    Swiper1.style.background ='#843BC0';
    Swiper3.style.background ='#843BC0';
    ProductImage.style.backgroundImage = 'url(./Images/png2.png)';
    heading.textContent = 'Documentation of business processes';
    paragrapgh.textContent = 'Bookkeeping, invoice, inventory and dashboard  ';

   
  }); 


  Swiper3.addEventListener('click', () => {
    Swiper3.style.background ='#fff';
    Swiper1.style.background ='#843BC0';
    Swiper2.style.background ='#843BC0';
    ProductImage.style.backgroundImage = 'url(./Images/png3.png)';
    heading.textContent = 'Customer friendly';
    paragrapgh.textContent = 'Seamless customer experience at every step of bookkeeping';
  }); 


  function login(){
    const loginUser = document.getElementById('Password').value;
    const Loginpass = document.getElementById('Email').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const user= users.find(user=> user.loginUser === loginUser && user.Loginpass ===Loginpass)
    if(user){
      alert("Login Successful, welcome to your dashboard ' + loginUser' '+!'")
    }
  }

 


  // class Login {
  //   constructor(form, fields) {
  //     this.form = form;
  //     this.fields = fields;
  //     this.validateonSubmit();
  //   }
  


  //   validateonSubmit() {
  //     let self = this;
    
  //     this.form.addEventListener("submit", (e) => {
  //       e.preventDefault();
  //       let error = 0;
  //       self.fields.forEach((field) => {
  //         const input = document.querySelector(`#${field}`);
  //         if (!self.validateFields(input)) {
  //           error++;
  //         }
  //       });
  //       if (error === 0) {
  //         console.log("success");
  //         this.form.submit(); 
  //       }
  //     });
  //   }
  
  //   validateFields(field) {
  //     if (field.value.trim() === "") {
  //       this.setStatus(
  //         field,
  //         `${field.previousElementSibling.innerText} cannot be blank`,
  //         "error"
  //       );
  //       return false;
  //     } else{
  //       if(field.type == "password") {
  //         if(field.value.length < 8 ){
  //           this.setStatus(
  //             field,
  //             `${field.previousElementSibling.innerText} must be at least 8 characters`,
  //             "error"
  //           );
  //           return false;
  //         }
  //         else {
  //           this.setStatus(field, null, "success");
  //           return true
  //         }
          
  //       }
  //       else{
  //         this.setStatus(field, null, "success");
  //           return true
  //       }
  //     }
  //     return true;
  //   }
  
  //   setStatus(field, message, status) {
  //     const errorMessage = field.parentElement.querySelector(".error-message");
  //     if (status === "error") {
  //       errorMessage.innerText = message;
  //       field.classList.add("input-error");
  //     if(status == "success")  {
  //       if (errorMessage){
  //         errorMessage.innerText =""
  //       }
  //       field.classList.remove("input-error")
  //     }
  //     }
  //   }
  // }
  
  // const form = document.querySelector(".login-form");
  // if (form) {
  //   const fields = ["Email", "Password"];
  //   const validator = new Login(form, fields);
  // }
  