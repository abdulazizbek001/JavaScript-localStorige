const elFormCardInput = document.querySelector('.form_card_input');
const elFormCardTextarea = document.querySelector('.form_card_textarea');
const elFormCardBtn = document.querySelector('.form_card_btn');
const elWrapperTitle = document.querySelector('.wrapper_title');
const elWrapperText = document.querySelector('.wrapper_text');
const elWrapperBtn = document.querySelector('.wrapper_btn');

elFormCardBtn.addEventListener('click', () => {
    window.localStorage.setItem('card', JSON.stringify(elFormCardInput.value));
    window.localStorage.setItem('about', JSON.stringify(elFormCardTextarea.value));

    if (elFormCardInput.value != ' ' && elFormCardTextarea.value != '') {
        const elWrapper = document.createElement('div');
    
        let elWrappers = `
            <div class="wrapper">
                <h3 class="wrapper_title"> ${elFormCardInput.value} </h3>
                <p class="wrapper_text"> ${elFormCardTextarea.value} </p>
                <button class="wrapper_btn">Meet with ${elFormCardInput.value} </button>
            </div>
        `;
    
        elWrapper.innerHTML += elWrappers;
        elWrapper.classList = 'wrap';
    
        document.querySelector('body').appendChild(elWrapper);
        elFormCardInput.value = '';
        elFormCardTextarea.value = '';
    }
});