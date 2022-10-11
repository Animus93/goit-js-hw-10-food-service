const onSwitch = document.querySelector('#theme-switch-toggle');
const onTheme = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


if(localStorage.getItem('themeValue') === ''){
    onTheme.classList.add(Theme.LIGHT);
} else {
    onTheme.classList.add(localStorage.getItem('themeValue'))
}


onSwitch.addEventListener('change', onSwitchChange);

function onSwitchChange (){
    if(onTheme.classList.contains(Theme.LIGHT)){
    onTheme.classList.add(Theme.DARK);
    onTheme.classList.remove(Theme.LIGHT);
    } else if (onTheme.classList.contains(Theme.DARK)){
        onTheme.classList.add(Theme.LIGHT);
        onTheme.classList.remove(Theme.DARK);
    };
    localStorage.setItem('themeValue', onTheme.classList.value);
}
console.log(localStorage.getItem('themeValue'))