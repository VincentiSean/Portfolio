var homeSection = document.getElementById('content');
var portfolioSection = document.getElementById('portfolioSection');

var heroTitle = document.getElementById('heroTitle');
var heroTopText = document.getElementById('heroTopText');
var heroBottomText = document.getElementById('heroBottomText');
var header = document.getElementById('header');
var contactButton = document.getElementById('contactButton');

function goto(location) {
    if (location == 'home') {
        goHome();
    } else if (location == 'about') {
        goAbout();
    } else if (location == 'portfolio') {
        goPort();
    }
}

function goHome() {
    homeSection.style.display = 'flex';
    portfolioSection.style.display = 'none';

    heroTopText.innerHTML = 'Web&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;Software';
    heroTopText.style.marginBottom = '0px';
    heroBottomText.innerHTML = 'Developer';
    header.style.height = '100vh';
    document.styleSheets[6].addRule('header::before', 'height: 100%;');
    heroTitle.style.marginTop = '60px';
    contactButton.style.display = 'block';
}

function goAbout() {
    homeSection.style.display = 'none';
    portfolioSection.style.display = 'none';

    heroTopText.innerHTML = '';
    heroTopText.style.marginBottom = '30px';
    heroBottomText.innerHTML = 'About Me';
    header.style.height = '75vh';
    document.styleSheets[6].addRule('header::before', 'height: 75%;');
    heroTitle.style.marginTop = '40px';
    contactButton.style.display = 'none';
}

function goPort() {
    homeSection.style.display = 'none';
    portfolioSection.style.display = 'block';

    heroTopText.innerHTML = 'View my previous<span id="heroBottomText"></span>';
    heroTopText.style.marginBottom = '-30px';
    heroBottomText.innerHTML = 'Projects';
    header.style.height = '75vh';
    document.styleSheets[6].addRule('header::before', 'height: 75%;');
    heroTitle.style.marginTop = '30px';
    contactButton.style.display = 'none';
}