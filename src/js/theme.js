const onSwitch = document.querySelector('#theme-switch-toggle');
const onTheme = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


onSwitch.addEventListener('change', () => {
    onSwitch.checked? toTheLightTheme(Theme.DARK): toTheLightTheme(Theme.LIGHT)
});

function toTheLightTheme(ThemeColor){
    onTheme.classList.value = '';
    onTheme.classList.add(ThemeColor);
    localStorage.setItem('Theme', ThemeColor);
}


if(localStorage.getItem('Theme') && localStorage.getItem('Theme') === Theme.DARK){
        toTheLightTheme(Theme.DARK);
        onSwitch.checked = true;
}
