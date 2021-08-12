const settingsMenu = document.querySelector(".settings-menu");
const userPhoto = document.querySelector(".user-photo");
const darkBtn = document.querySelector("#dark-btn");
const adsContainer = document.querySelector(".ads-container");


function settingMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height");
}

// window.addEventListener("click", function(){
//     // // if(event.target != settingsMenu && settingsMenu.classList.contains("settings-menu-height")){
//     // //     settingsMenu.classList.remove("settings-menu-height");
//     // // }
//     // if(event.target != settingsMenu && settingsMenu.classList.contains("settings-menu-height")){
//     //     console.log("outside")
//     // }
//     console.log(event.target)
// });


// Change dark mode on/off
darkBtn.addEventListener('click', () => {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // Saving theme mode setting
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    
})


if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}


let box = document.getElementById('box'),
    btn = document.querySelector('button');

btn.addEventListener('click', function () {

    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        setTimeout(function () {
            box.classList.remove('visuallyhidden');
        }, 20);
    } else {
        box.classList.add('visuallyhidden');
        box.addEventListener('transitionend', function (e) {
            box.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }

}, false);