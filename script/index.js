const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}




  // Validate form function

  function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("codeError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("mobileError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validate Name
    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
    }

    // Validate Dress Code
    const code = document.getElementById("code").value;
    if (code === "") {
        document.getElementById("codeError").textContent = "Please enter a dress code.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Mobile Number
    const mobile = document.getElementById("mobile").value;
    const mobilePattern = /^\d{10}$/; // Assuming a 10-digit mobile number
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message").value;
    if (message === "") {
        document.getElementById("messageError").textContent = "Please enter a message.";
        isValid = false;
    }

    return isValid;
  }

// trim  -remove a white space /
// text content is a versatile propertyfor accessing or modifying the text inside an html element.


// document.addEventListener('DOMContentLoaded', () => {
//   const hamburger = document.querySelector(".hamburger");
//   const navList = document.querySelector(".nav-list");

//   if (hamburger) {
//     hamburger.addEventListener("click", () => {
//       navList.classList.toggle("open");
//     });
//   }})