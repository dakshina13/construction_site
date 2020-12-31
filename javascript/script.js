
/*Code for Slide Show of cards */
$('#recipeCarousel').carousel({
    interval: 2000
});

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
/*Code for Sild Show ends*/
/**Cost Estimator Code */
var costForm = document.getElementById("cost-form");
if (costForm != null) {
    costForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var result = document.getElementById("result");
        var cost = document.getElementById("cost");
        var length = document.getElementById("length").value;
        var breadth = document.getElementById("breadth").value;
        var floor = document.getElementById("floor").value;
        var area = length * breadth;
        var lowerValue = 1799 * area * floor;
        var higherValue = 2299 * area * floor;
        cost.innerHTML = "" + lowerValue + "-" + higherValue;
        result.style.display = "block";
    });
}
/**Cost Estimator Code End */
/**Code to pick time & date */
var preferedDate = document.getElementById("prefered-date");
if (preferedDate != null) {
    $('#prefered-time').timepicker({
        minTime: '10',
        maxTime: '6:00pm',
        defaultTime: '10',
        scrollbar: true
    });
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate()+1);
    var dd = tomorrow.getDate();
    var mm = tomorrow.getMonth() + 1; //January is 0!
    var yyyy = tomorrow.getFullYear();
    //prefixing zero to single digit numbers
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    tomorrow = yyyy + '-' + mm + '-' + dd;
    preferedDate.setAttribute('min', tomorrow);
    preferedDate.setAttribute('value', tomorrow);
}
/*Code to pick time & date End*/
/**Code for my account dropdown */
var myRequestedServices = document.getElementsByClassName("requested-services-dropdown");
if (myRequestedServices != null) {
    var i;
    for (i = 0; i < myRequestedServices.length; i++) {
        myRequestedServices[i].addEventListener("click", function (event) {
            var arrow = event.target.children[0];
            this.classList.toggle("active");
            var content = this.nextElementSibling.nextElementSibling;
            console.log(content.classList.contains("service-contents-hide"));
            if (content.classList.contains("service-contents-hide")) {
                arrow.classList.add("arrow-up");
                arrow.classList.remove("arrow-down");
                content.classList.remove("service-contents-hide");
                content.classList.add("service-contents-show");
            } else {
                arrow.classList.add("arrow-down");
                arrow.classList.remove("arrow-up");
                content.classList.add("service-contents-hide");
                content.classList.remove("service-contents-show");
            }
        }, false);
    }
}
/**Code for my account dropdown End*/
/**COde for email and password validation */
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("inside valid email ? " + re.test(email));
    return re.test(email);
}
function validatePassword(password) {
    console.log("inside validate password")
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.length < 8) {
        return false;
    }
    return passw.test(password);
}
function validateSubmission(event) {
    console.log("inside confirm");
    var emailInput = document.getElementById("email-input");
    if (emailInput != null) {
        var emailError = document.getElementById("email-error");
        var email = emailInput.value;
        if (!validateEmail(email)) {
            event.preventDefault();
            emailError.style.display = "block";
        } else if (emailError.style.display == "block") {
            emailError.style.display = "none";
        }
    }
    var passwordInput = document.getElementById("password-input");
    if (passwordInput != null) {
        var passwordError = document.getElementById("password-error");
        var password = passwordInput.value;
        if (!validatePassword(password)) {
            event.preventDefault();
            passwordError.style.display = "block";
        } else if (passwordError.style.display == "block") {
            passwordError.style.display = "none";
        }
        var confirmPasswordInput = document.getElementById("confirm-password-input");
        if (confirmPasswordInput != null) {
            var confirmPassword = confirmPasswordInput.value;
            var confirmPasswordError = document.getElementById("confirm-password-error");
            if (confirmPassword != password) {
                event.preventDefault();
                confirmPasswordError.style.display = "block";
            } else if (confirmPasswordError.style.display == "block") {
                confirmPasswordError.style.display = "none";
            }
        }
    }
    var oldPasswordInput = document.getElementById("old-password-input");
    if (oldPasswordInput != null) {
        var oldPasswordError = document.getElementById("old-password-error");
        var password = oldPasswordInput.value;
        if (!validatePassword(password)) {
            event.preventDefault();
            oldPasswordError.style.display = "block";
        } else if (oldPasswordError.style.display == "block") {
            oldPasswordError.style.display = "none";
        }
    }
}
var loginSubmit = document.getElementById("login-form");
var signUpSubmit = document.getElementById("sign-up-form");
if (loginSubmit != null) {
    loginSubmit.addEventListener('submit', validateSubmission);
}
if (signUpSubmit != null) {
    signUpSubmit.addEventListener('submit', validateSubmission);
}
var changePasswordSubmit = document.getElementById("change-password-form");
if (changePasswordSubmit != null) {
    console.log("inside confirm");
    changePasswordSubmit.addEventListener('submit', validateSubmission);
}

function removePasswordError() {
    var passwordError = document.getElementById("password-error");
    if (passwordError.style.display == "block")
        passwordError.style.display = "none";
}
function removeEmailError() {
    var emailError = document.getElementById("email-error");
    if (emailError.style.display == "block")
        emailError.style.display = "none";
}
function removeConfirmPasswordError() {
    var confirmPasswordError = document.getElementById("confirm-password-error");
    if (confirmPasswordError.style.display == "block")
        confirmPasswordError.style.display = "none";
}

/**COde for email and password validation ENd*/
/**show Password */
function showPassword() {
    var passwordInput = document.getElementById("password-input");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }

}
/**show Password Ends*/
/**Home Navbar tranistion */
const servicesHome=document.getElementById("services-home");
const ourProjectsHome=document.getElementById("our-projects-home");
if(servicesHome!=null){
    const header=document.querySelector("nav");
    const blueBackgroundDivOptions={
        root:null,
        threshold:0,
        rootMargin:"-12% 0% -85% 0%"
    };
    const blueBackgroundDivObserver=new IntersectionObserver(function(entries){
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                header.classList.add("navbar-scrolled");
            }else{
                header.classList.remove("navbar-scrolled");
            }
        })
    },blueBackgroundDivOptions);
    blueBackgroundDivObserver.observe(servicesHome);
    blueBackgroundDivObserver.observe(ourProjectsHome);
}
/**Home Navbar tranistion End*/