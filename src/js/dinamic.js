// Variables
const input = document.querySelector('#addText');
const palettes = document.querySelectorAll('.paletteColor');
const list = document.querySelector('.menu');

// Events
const addButton = document.querySelector('#add').addEventListener('click', () => {
    addList();
});

const removeAllList = document.querySelector('#clearList').addEventListener('click', () => list.innerHTML = '');

palettes[0].addEventListener('click', () => changeDefault('#FFF', '#000'));
palettes[1].addEventListener('click', () => changeDefault('#F0C808', '#FFF'));
palettes[2].addEventListener('click', () => changeDefault('#DD1C1A', '#FFF'));

// Change List Colors
function changeDefault(backgroundColor, textColor){
    task.style.backgroundColor = backgroundColor;
    task.style.color = textColor;
}

// Add task to list
function addList(){
    if(input.value.length <= 3){
        return false;
    }else{
        const task = document.createElement('li');
        const buttonClear = document.createElement('span');
        const text = document.createElement('h3');

        text.textContent = input.value;
        buttonClear.textContent = 'CLEAR';
        buttonClear.classList.add('clearButton');

        // Remove task
        buttonClear.addEventListener('click', () => {
            list.removeChild(task);
        })

        task.appendChild(text);
        task.appendChild(buttonClear);
        list.appendChild(task);  
    }
    
    input.value = '';   
    input.focus();
}   

// Key event
window.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        addList();
    }
})
