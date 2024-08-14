const root = document.documentElement;

function setLight() {
    root.style.setProperty("--primary-color", "#e1e1e1");
    root.style.setProperty("--secondary-color", "#d7d7d7");
    root.style.setProperty("--tertiary-color", "#d0d0d0");
    root.style.setProperty("--text-color", "#0f0f0f");
}

function setDark() {
    root.style.setProperty("--primary-color", "#0f0f0f");
    root.style.setProperty("--secondary-color", "#1a1a1a");
    root.style.setProperty("--tertiary-color", "#262626");
    root.style.setProperty("--text-color", "#e1e1e1");
}

if(localStorage.getItem("atporttheme") === null) {
    setDark();

    localStorage.setItem("atporttheme", "dark");
}

else if(localStorage.getItem("atporttheme") === "light") {
    setLight();

    document.querySelector("#theme-toggle span").innerHTML = "dark_mode";
}
else if(localStorage.getItem("atporttheme") === "dark") {
    setDark();

    document.querySelector("#theme-toggle span").innerHTML = "light_mode";
}

document.getElementById("theme-toggle").addEventListener('click', () => {
    if(localStorage.getItem("atporttheme") === "dark") {
        setLight();
        
        localStorage.setItem("atporttheme", "light");
        document.querySelector("#theme-toggle span").innerHTML = "dark_mode";
    }
    else if(localStorage.getItem("atporttheme") === "light") {
        setDark();

        localStorage.setItem("atporttheme", "dark");
        document.querySelector("#theme-toggle span").innerHTML = "light_mode";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

scrollButton = document.getElementById("scroll-top")

window.onscroll = function() {displayScrollTop()};

function displayScrollTop() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.transform = "scale(1)";
    }
    else {
        scrollButton.style.transform = "scale(0)";
    }
}

scrollButton.addEventListener('click', () => {
    scrollButton.style.transform = "scale(0)";
    window.scrollTo({top: 0, behavior: 'smooth'});
})