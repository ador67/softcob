var settingMenu  = document.querySelector(".setting-menu");
var darkMode = document.getElementById("dark-mode");
function settingMenuToggle(){
  settingMenu.classList.toggle("setting-menu-height");
}

darkMode.onclick = function(){
  darkMode.classList.toggle("dark-mode-on");
  document.body.classList.toggle("dark-theam")
  
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkMode.classList.remove("dark-mode-on");
    document.body.classList.remove("dark-theam");
}
else if(localStorage.getItem("theme") == "dark"){
    darkMode.classList.add("dark-mode-on");
    document.body.classList.add("dark-theam");
}
else{
  localStorage.setItem("theme","light");
}
