

const Add = document.querySelector("#Button")
const input = document.querySelector("#AddTask");
const List = document.querySelector("#Tasks");
const Form = document.forms[0];

console.log("Hello")

if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {

        const Task = document.createElement("div");
        Task.classList.add("Task");
    
        List.appendChild(Task);
    
        const Content = document.createElement("div");
        Content.classList.add("TaskContent");
    
        Task.appendChild(Content);
    
        const TaskInput = document.createElement("input");
        TaskInput.classList.add("TaskText");
        TaskInput.setAttribute("readonly", "readonly");
        TaskInput.value = localStorage.getItem(localStorage.key(i));
        Content.appendChild(TaskInput);
    
        const Actions = document.createElement("div");
        Actions.classList.add("Actions");
        Task.appendChild(Actions);
    
        const Edit = document.createElement("button");
        Edit.classList.add("Edit");
        Edit.innerHTML = "Edit";
        Actions.appendChild(Edit);
    
        const Delete = document.createElement("button");
        Delete.classList.add("Delete");
        Delete.innerHTML = "Delete";
        Actions.appendChild(Delete);
    
        Delete.addEventListener("click", () => {
            Task.remove()
            localStorage.removeItem(localStorage.key(i))
        })
    
        Edit.addEventListener("click", () => {
            if (Edit.innerHTML == "Edit") {
                TaskInput.removeAttribute("readonly");
                TaskInput.classList.remove("TaskText");
                TaskInput.classList.add("TaskInput");
                Edit.innerHTML = "Save";
            }
            else if (Edit.innerHTML == "Save") {
                TaskInput.setAttribute("readonly", "readonly");
                TaskInput.classList.remove("TaskInput");
                TaskInput.classList.add("TaskText");
                localStorage.setItem(localStorage.key(i), TaskInput.value)
                Edit.innerHTML = "Edit";
            }
    
        })

    }

}


Form.addEventListener("click", (e) => {

    e.preventDefault();
    if (input.value != "") {
        TaskObject = {
            id: Date.now(),
            title: input.value,
            completed: false
        }

        
        const Task = document.createElement("div");
        Task.classList.add("Task");
        Task.setAttribute("data-id", TaskObject.id);
    
        List.appendChild(Task);
    
        const Content = document.createElement("div");
        Content.classList.add("TaskContent");
    
        Task.appendChild(Content);
    
        const TaskInput = document.createElement("input");
        TaskInput.classList.add("TaskText");
        TaskInput.setAttribute("readonly", "readonly");
        TaskInput.value = input.value;
        Content.appendChild(TaskInput);
    
        const Actions = document.createElement("div");
        Actions.classList.add("Actions");
        Task.appendChild(Actions);
    
        const Edit = document.createElement("button");
        Edit.classList.add("Edit");
        Edit.innerHTML = "Edit";
        Actions.appendChild(Edit);
    
        const Delete = document.createElement("button");
        Delete.classList.add("Delete");
        Delete.innerHTML = "Delete";
        Actions.appendChild(Delete);

        input.value = "";

        Delete.addEventListener("click", () => {
            Task.remove();
            window.localStorage.removeItem(TaskObject.id)
        })

        Edit.addEventListener("click", () => {
            if (Edit.innerHTML == "Edit") {
                TaskInput.removeAttribute("readonly");
                TaskInput.classList.remove("TaskText");
                TaskInput.classList.add("TaskInput");
                Edit.innerHTML = "Save";
            }
            else if (Edit.innerHTML == "Save") {
                TaskInput.setAttribute("readonly", "readonly");
                TaskInput.classList.remove("TaskInput");
                TaskInput.classList.add("TaskText");
                Edit.innerHTML = "Edit";
            }

        })

        window.localStorage.setItem(TaskObject.id, TaskObject.title)
        console.log(TaskObject.id);
    }

    
    

})
