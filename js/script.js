{
    let tasks = [
        {
            content: "wizyta u okulisty",
            done: false,
        },
        {
            content: "trening",
            done: true,
        },
    ];

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

    const bindEvents = () => {
        const toggleDoneButton = document.querySelectorAll(".js-done");

        toggleDoneButton.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
        <li  class="task">
            
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
        `
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            document.querySelector(".js-newTask").focus();
            return;
        };

        addNewTask(newTaskContent);

        document.querySelector(".js-newTask").value = "";
    
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit",onFormSubmit);
    };

    init();
}