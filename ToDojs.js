let inp = document.getElementById("inp")
let todos = [];
let addBtn = document.getElementById("add")
let list = document.getElementById("list")

function add(){
    if(inp.value==''){
        alert("Enter Task Field")    
    }  
    else{
        todos.push(inp.value)
        printTask()
        inp.value = ''
    }
}

function Delete(inx){
    todos.splice(inx,1)
    printTask()
}
function printTask(){
    list.innerHTML=''
    for(let i = 0;i<todos.length;i++){
        let task = document.createElement("li")
        task.innerHTML = `${todos[i]}  <button id="dlt" onclick="Delete(${i})"}> Delete </button>`
        list.appendChild(task)
    }
}

// function add(){
//     let list = document.getElementById("list")
        
//     list.innerHTML=''
//     for(let i = 0 ; i<todos.length ; i++){
//         let task = document.createElement("li")
//         task.innerHTML = ` ${todos[i]} <button id="dlt" onclick="${Delete(i)}"></button>`
//         list.appendChild(task)
//     }
//     inp.value=''
// }

