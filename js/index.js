let headerHamburger = document.querySelector('.hamburger')
let sectionImg = document.querySelector('.hamburgerr')
let sectionn = document.querySelector('.menu')
let headerr = document.querySelector('.header')
let footerr = document.querySelector('.withdraw-section')
let sectionnn = document.querySelector('.footer')

headerHamburger.addEventListener('click' , function(){
  sectionn.style.display = 'flex'
  sectionnn.style.display = 'none'
})

sectionImg.addEventListener('click' , function(){
  sectionn.style.display = 'none'
  sectionnn.style.display = 'flex'
})


let btn21 = document.querySelector('.card-earn')
let text = document.querySelector('.spannn')
let earn = document.querySelector('.card-earn')

btn21.addEventListener('click', function (){
  text.textContent = text.textContent *1+0.003 ;
  NaN
})




// sectionn.addEventListener('click', function () {
//   sectionn.style.display = 'none'
//   section.style.display = 'block'
//   section1.style.display = 'block'
//   footer.style.display = 'none'
// })

// headerHamburger.addEventListener('click', function () {
//   sectionn.style.display = 'block'
//   body.classList = 'bgsg'
//   section.style.display = 'none'
//   section1.style.display = 'none'
//   footer.style.display = 'none'
// })



// function myFunction() {
//   var x = document.getElementById("myInput");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }










// document.getElementById('loginForm').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent form submission

//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   var errorMessage = document.getElementById('error');

//   // Checking if email and password are empty
//   if (email.trim() === '' || password.trim() === '') {
//     errorMessage.textContent = 'Email and password are required.';
//   } else {
//     // Assume validation logic here, for simplicity let's just check if email is valid
//     if (!isValidEmail(email)) {
//       errorMessage.textContent = 'Please enter a valid email address.';
//     } else {
//       // Check if password is correct (You can check against a database or hard-coded values here)
//       if (password === 'correctpassword') {
//         // Login successful, redirect or perform necessary actions
//         alert('Login successful!');
//       } else {
//         // Incorrect password
//         errorMessage.textContent = 'Incorrect email or password.';
//       }
//     }
//   }
// });

// // Function to validate email address (Simple validation)
// function isValidEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

