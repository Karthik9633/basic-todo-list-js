const input = document.getElementById("taskInput")
const button = document.getElementById("btnClick")
const list = document.getElementById("list")
const error = document.getElementById("error")

button.addEventListener('click', () => {
    const value =input.value.trim()
     if (value === "") {
        error.textContent = "Task cannot be empty"
        return
    }
    error.textContent=""

    const li = document.createElement('li')
    const text = document.createElement('span')
    const edit = document.createElement('button')
    const remove = document.createElement('button')
    text.textContent = value
    edit.textContent = "edit"
    remove.textContent = "delete"

    edit.addEventListener('click',()=>{
        if(edit.textContent==='edit'){
            const newText =prompt('Edit Task',text.textContent)
            if(newText && newText.trim()!==""){
                text.textContent=newText.trim()
            }
        }
    })
    remove.addEventListener('click',()=> li.remove())

    li.append(text,edit,remove)
    list.appendChild(li)
    input.value=""
})