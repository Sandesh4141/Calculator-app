// const themetToggle = document.getElementById('themeChng');
const slider = document.getElementById('slider-container');
const body = document.querySelector('body');
let theme = 1;

slider.addEventListener('click', () => {
    theme ++;
    switch (theme) {
        case 1:
            body.classList.add('theme-1');
            // console.log('theme changed');
            break;
        case 2:
            body.classList.remove('theme-1');
            body.classList.add('theme-2');
            slider.style.justifyContent = 'center'
            // console.log('theme changed');
            break;

        case 3:
            body.classList.remove('theme-2');
            body.classList.add('theme-3');
            slider.style.justifyContent = 'flex-end';
            // console.log('theme changed');
            break;
        case 4:
            theme = 1;
            body.classList.remove('theme-3');
            slider.style.justifyContent = 'flex-start';
    }
}

)