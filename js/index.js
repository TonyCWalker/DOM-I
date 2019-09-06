const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Images
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// Nav Links
let navLinks = document.querySelectorAll('nav a');
counter = 1;
navLinks.forEach(function (item){
  item.textContent = siteContent['nav']['nav-item-' + counter];
  counter++;
});


// CTA
let ctaContent = document.getElementsByClassName('cta-text')[0];
ctaContent.getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1'];
ctaContent.getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button'];


// Main Content
let textList = document.querySelectorAll('.text-content');

// Features
textList[0].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4'];
textList[0].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['features-content'];

// About
textList[1].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4'];
textList[1].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['about-content'];

// Services 
textList[2].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4'];
textList[2].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['services-content'];

// Product
textList[3].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4'];
textList[3].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['product-content'];

// Vision
textList[4].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4'];
textList[4].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['vision-content'];


// Contact
let contact = document.getElementsByClassName('contact')[0];
contact.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4'];
contact.getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address'];
contact.getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone'];
contact.getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email'];


// Footer 
let footer = document.querySelector('footer');
footer.getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright'];
