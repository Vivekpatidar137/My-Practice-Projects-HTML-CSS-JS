const input = document.getElementById('input-box');
const button = document.querySelector('button');
const listContainer =  document.getElementById('list-container');

button.addEventListener('click', task);

function task(){
    if (input.value === ''){
        alert('You have to put a task first');
    }
    else {
        let listItem = document.createElement('li');
        listItem.innerHTML = input.value;
        listContainer.appendChild(listItem);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        listItem.appendChild(span);
    }
 
    input.value = '';
    saveTask();
   
};

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTask();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask(){
   localStorage.setItem('data', listContainer.innerHTML);
}

function displayTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
displayTask();