// Variables
const input = document.querySelector('#addText');
const palettes = document.querySelectorAll('input[type="radio"]');
const list = document.querySelector('.menu');

console.log(palettes);

// Events
const addButton = document.querySelector('#add').addEventListener('click', () => {
    addList();
});
const removeAllList = document.querySelector('#clearList').addEventListener('click', () => list.innerHTML = '');

// Change List Colors
function changeDefault(backgroundColor, textColor, task){
    task.style.backgroundColor = backgroundColor;
    task.style.color = textColor;
}

// Add task to list
function addList(){
    if(input.value.length <= 3){
        alert('Please, enter more than three words')
    }else{
        const task = document.createElement('li');
        const buttonClear = document.createElement('span');
        const text = document.createElement('h3');

        text.textContent = input.value;
        buttonClear.textContent = 'CLEAR';
        buttonClear.classList.add('clearButton');

        // Call the color function
        if(palettes[0].checked){
            changeDefault(palettes[0].value, '#000', task);
        }else if(palettes[1].checked){
            changeDefault(palettes[1].value, '#FFF', task);
        }else{
            changeDefault(palettes[2].value, '#FFF', task);
        }

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
