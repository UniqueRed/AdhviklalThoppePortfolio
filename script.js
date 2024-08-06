const root = document.documentElement;

if(localStorage.getItem("atporttheme") === null) {
    localStorage.setItem("atporttheme", "dark");
}

else if(localStorage.getItem("atporttheme") === "light") {
    root.style.setProperty("--primary-color", "#e1e1e1");
    root.style.setProperty("--secondary-color", "#d7d7d7");
    root.style.setProperty("--tertiary-color", "#c1c1c1");
    root.style.setProperty("--accent-color", "#ff3c3c");
    root.style.setProperty("--text-color", "#0f0f0f");

    document.querySelector("#theme-toggle span").innerHTML = "dark_mode";
}
else if(localStorage.getItem("atporttheme") === "dark") {
    root.style.setProperty("--primary-color", "#0f0f0f");
    root.style.setProperty("--secondary-color", "#1a1a1a");
    root.style.setProperty("--tertiary-color", "#333333");
    root.style.setProperty("--accent-color", "#ff3c3c");
    root.style.setProperty("--text-color", "#e1e1e1");
    document.querySelector("#theme-toggle span").innerHTML = "light_mode";
}

document.getElementById("theme-toggle").addEventListener('click', () => {
    if(localStorage.getItem("atporttheme") === "dark") {
        root.style.setProperty("--primary-color", "#e1e1e1");
        root.style.setProperty("--secondary-color", "#d7d7d7");
        root.style.setProperty("--tertiary-color", "#c1c1c1");
        root.style.setProperty("--accent-color", "#ff3c3c");
        root.style.setProperty("--text-color", "#0f0f0f");
        
        localStorage.setItem("atporttheme", "light");
        document.querySelector("#theme-toggle span").innerHTML = "dark_mode";
    }
    else if(localStorage.getItem("atporttheme") === "light") {
        root.style.setProperty("--primary-color", "#0f0f0f");
        root.style.setProperty("--secondary-color", "#1a1a1a");
        root.style.setProperty("--tertiary-color", "#333333");
        root.style.setProperty("--accent-color", "#ff3c3c");
        root.style.setProperty("--text-color", "#e1e1e1");

        localStorage.setItem("atporttheme", "dark");
        document.querySelector("#theme-toggle span").innerHTML = "light_mode";
    }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});