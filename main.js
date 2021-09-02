var settingMenu  = document.querySelector(".setting-menu");
var darkMode = document.getElementById("dark-mode");
function settingMenuToggle(){
  settingMenu.classList.toggle("setting-menu-height");
}

darkMode.onclick = function(){
  darkMode.classList.toggle("dark-mode-on");
  document.body.classList.toggle("dark-theam")
}

