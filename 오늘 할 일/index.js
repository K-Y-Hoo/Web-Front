const toDoList = document.querySelector('#to-do-list');

function updateToDo(e) {
  if (e.target.classList.contains('item')) {
    e.target.classList.toggle('done');
  }
}

toDoList.addEventListener('click', updateToDo);

const newToDo = document.createElement('li');
newToDo.textContent = '유산소 운동하기';
newToDo.classList.add('item');
toDoList.append(newToDo);

toDoList.children[2].addEventListener('click', function(e) {e.stopPropagation()});