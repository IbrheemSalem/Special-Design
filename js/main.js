/*#############################################################################*/
// reset-options
let resetOptions = document.querySelector('.reset-options');

resetOptions.addEventListener('click',() => {
    localStorage.clear();
    window.location.reload();
});
/*#############################################################################*/
// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

let backgroundImage = localStorage.getItem('background_option');

if(backgroundImage !== null){
    if(backgroundImage === 'true'){
        backgroundOption = true;
    }else {
        backgroundOption = false;
    }
}

const randomBackground = document.querySelectorAll('.random-backgrounds span');

randomBackground.forEach(sp => {
    
    sp.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll('.active').forEach(ele => {
            ele.classList.remove('active');
        });
        e.target.classList.add('active');

        if(e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImgs();
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
        }
    });
});
/*#############################################################################*/
// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
            });
        });
    });
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);
// hidden Show Bullets

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
    bulletsSpan.forEach(span => {
    span.classList.remove("active");
    });

    if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

    bulletsContainer.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active");

    }
}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {
        bulletsContainer.style.display = 'block';
        localStorage.setItem("bullets_option", 'block');
    } else {
        bulletsContainer.style.display = 'none';
        localStorage.setItem("bullets_option", 'none');
    }
    e.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");
    
        });

    });

});
/*#############################################################################*/
/// Local storeg color 
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', mainColors);
}
// If There's dark Color Item In Local Storage
let mainColorsDark = localStorage.getItem("color_option_dark");

if (mainColorsDark !== null) {
    document.documentElement.style.setProperty('--main-dark', mainColorsDark);
}
/*##########################################################################*/
/*##########################################################################*/
//colors-list local storeg 
const colorsList = document.querySelectorAll(".colors-list li");

colorsList.forEach(li => {
    li.addEventListener("click", (element) =>{
        //console.log(element.target.dataset.color);
        // Set Color Root css

        document.documentElement.style.setProperty('--main-color', element.target.dataset.color);
        //save color in local storage
        localStorage.setItem("color_option", element.target.dataset.color);
        //remove active class in list
        element.target.parentElement.querySelectorAll(".active").forEach(ele =>{
            ele.classList.remove('active');
        });
        element.target.classList.add('active');
    });
});
/*##########################################################################*/
/*##########################################################################*/
//dark web local storeg 
const colorsdark = document.querySelectorAll(".colors-list-dark-light li");

colorsdark.forEach(li => {
    li.addEventListener("click", (element) =>{

        document.documentElement.style.setProperty('--main-dark', element.target.dataset.dark);
        //save color in local storage
        localStorage.setItem("color_option_dark", element.target.dataset.color);
        //remove active class in list
        element.target.parentElement.querySelectorAll(".active").forEach(ele =>{
            ele.classList.remove('active');
        });
        element.target.classList.add('active'); 
    });

});
/*##########################################################################*/
/*##########################################################################*/
/// Img Lading sliedr
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// Function To Randomize Imgs
function randomizeImgs() {

    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        // Change Background Image Url 
        landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
        }, 7000);
    }
}
randomizeImgs();
/*##########################################################################*/
/*##########################################################################*/
/// toggle-menu
let toggle = document.querySelector('.toggle-menu');
let openClass = document.querySelector('.links-container .links');

toggle.addEventListener('click', () => {
    openClass.classList.toggle('open');
});
/*##########################################################################*/
/*##########################################################################*/
//setting 

let toggleSettings = document.querySelector('.toggle-settings');
let fagear = document.querySelector('.fa-gear'); 
let openSettings = document.querySelector('.settings-box');

toggleSettings.addEventListener('click', () => {
    openSettings.classList.toggle('openSetting');
    
    fagear.classList.toggle("fa-spin");

});

/*##########################################################################*/
/*##########################################################################*/
//scroll progress
let section = document.querySelector('.skills');
let spans = document.querySelectorAll('.skill-progress span');


window.onscroll  = function(){
    ///scrolY the-progres
    if(window.scrollY >= section.offsetTop - 100 ){
        spans.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    }
}
/*##########################################################################*/
/*##########################################################################*/
//popup imges 
const imgPopuo = document.querySelectorAll('.gallery img');

imgPopuo.forEach(img  => {

    img.addEventListener('click', (e) =>{

        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);
    
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";

        let popupImge = document.createElement("img");
        popupImge.src = img.src;

        popupBox.appendChild(popupImge);

        document.body.appendChild(popupBox);

        if(img.alt !== null){
            let imgHeader = document.createElement('h3');

            let imgText = document.createTextNode(img.alt );

            imgHeader.appendChild(imgText);

            popupBox.appendChild(imgHeader);

        }

        let closeButton = document.createElement('span');
        let closeButtonText = document.createTextNode('X'); 
        
        closeButton.appendChild(closeButtonText);
        closeButton.className = 'close-button';

        popupBox.appendChild(closeButton);

    });
});

document.addEventListener('click', function(e){
    if(e.target.className == 'close-button'){
        e.target.parentNode.remove();
        document.querySelector('.popup-overlay').remove();
    }

});
