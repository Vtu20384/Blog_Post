// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-Link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

// registerLink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', ()=> {
//     wrapper.classList.remove('active');
// });
  


// function auth() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     if (username.trim() === '' || password.trim() === '') {
//         alert('Please enter both username and password.');
//         return;
//     }
//     else {
//         // var email = document.forms.RegForm.EMail.value;
//         var regPhone = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
//         var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
//         var al =/^[A-Za-z]{2,10}(?:\d{1,8})$/;

//         if (isNaN(username)) {
//             if (regEmail.test(username)) {
//                 valid();
//             }
//             else {
//                 if (!al.test(username)) {
//                     window.alert("Please enter a valid username.");
//                     email.focus();
//                     return false;
//                 }
//                 else { valid(); }
//             }
//         }
//         else {
//             if (regPhone.test(username)) {
//                 valid();
//             }
//             else {
//                 alert("Please enter a valid username.");
//             }
//         }
//     }
// }

// function valid() {
//     alert("submitted successfully!");
//     // window.location.assign("index.html")
//     window.location.href="index.html";

//     return true;
// }





// // btnPopup.addEventListener('click', ()=> {
// //     wrapper.classList.add('active-popup');
// // });

// // iconClose.addEventListener('click', ()=> {
// //     wrapper.classList.remove('active-popup');
// // });



