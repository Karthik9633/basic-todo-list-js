const input = document.getElementById("taskInput")
const button = document.getElementById("btnClick")
const list = document.getElementById("list")

button.addEventListener('click', () => {
    if (!input.value.trim()) return

    const li = document.createElement('li')
    const text = document.createElement('span')
    const edit = document.createElement('button')
    const remove = document.createElement('button')
    text.textContent = input.value
    edit.textContent = "edit"
    remove.textContent = "delete"

    edit.addEventListener('click',()=>{
        if(edit.textContent==='edit'){
            const newText =prompt('Edit Task',text.textContent)
            if(newText){
                text.textContent=newText
            }
        }
    })
    remove.addEventListener('click',()=> li.remove())

    li.append(text,edit,remove)
    list.appendChild(li)
    input.value=""
})