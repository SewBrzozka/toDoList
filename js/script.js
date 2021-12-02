{
    const tasks = [
        {
            content: "wizyta u okulisty",
            done: false,
        },
        {
            content: "trening",
            done: true,
        },
    ];

const render = () => {
    let htmlString = "";

    for (const task of tasks) {
        htmlString += `
        <li>
            <span>
                 ${task.content} 
            </span>
        </li>
        `
    };

    document.querySelector(".js-tasks").innerHTML = htmlString;
};

    const init = () => {
        render();
    };
    
    init();
}