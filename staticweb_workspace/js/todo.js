let todoInputHandler = function () {
    // todos 배열에 {todoNum: max(todoNum)+1, #todoInput에 입력된 value}을 추가
    let maxNum;

    if(todos.length > 0){
        const result = todos.map(todo=>todo.todoNum);
        maxNum = Math.max(...result) + 1;
    }
    else maxNum = 0;

    const content = document.getElementById('todoInput').value;
    let todo = {todoNum: maxNum, title: content};
    todos.push(todo);

    // todoList rendering
    displayList();
};

let todoDeleteHandler = function (todoNum) {
    // todo배열에서 todoNum에 해당하는 데이터 삭제
    const index = todos.findIndex(todo => todo.todoNum == todoNum);
    todos.splice(index, 1);
    
    // todoList rendering
    displayList();
}

let todoClear = function () {
    // todos 배열을 비운다.
    todos = [];

    // todoList rendering
    displayList();
}

function displayList() {
    const todoList = document.getElementById('todoList');
    let dataList = '';
    todos.forEach(todo => {
        dataList += `
                <li class="shadow">
                    <i aria-hidden="true" class="checkBtn fa fa-check"></i>
                ${todo.title}
                <span type="button" class="removeBtn" onClick='todoDeleteHandler(${todo.todoNum})'>
                        <i aria-hidden="true" class="fa fa-trash-o"></i>
                    </span>
                </li>`
    });

    todoList.innerHTML = dataList;
}