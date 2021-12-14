{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent, },
        ];
        render();
    };

    const removeTask = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ];
        render();
    };

    const toggleTaskDone = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            { ...tasks[index], done: !tasks[index].done },
            ...tasks.slice(index + 1),
        ];
        render();
    };

    const toggleHideDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;
        render();
    }

    const bindToggleDoneEvents = () => {
        const toggleDoneButton = document.querySelectorAll(".js-done");

        toggleDoneButton.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };
    const renderTask = () =>{
        const taskToHTML = task => `
        <li  class="
            task${task.done && hideDoneTasks ? " task__hidden" : ""}
        ">
            
            <button class="task__button task__button--done js-done">
                ${task.done ? "✓" : ""}
            </button>
                
            <span class="task__text${task.done ? " task__text--done" : ""}">
                     ${task.content} 
            </span>

            <button class="task__button task__button--remove js-remove">
                🗑
            </button>

        </li>
        `;

        const tasksElement = document.querySelector(".js-tasks");
        tasksElement.innerHTML = tasks.map(taskToHTML).join("");
    };

    const render = () => {
        renderTask();
        bindRemoveEvents();
        bindToggleDoneEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        };

        newTaskElement.focus();    
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit",onFormSubmit);
    };

    init();
}