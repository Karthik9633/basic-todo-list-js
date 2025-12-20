const input = document.getElementById("taskInput")
const button = document.getElementById("btnClick")
const list = document.getElementById("list")
const error = document.getElementById("error")

button.addEventListener('click', () => {
    const value = input.value.trim()
    if (value === "") {
        error.textContent = "Task cannot be empty"
        return
    }
    error.textContent = ""

    const li = document.createElement('li')
    const text = document.createElement('span')
    const edit = document.createElement('button')
    const remove = document.createElement('button')
    text.textContent = value
    edit.textContent = "Edit"
    remove.textContent = "Delete"

    edit.addEventListener('click', () => {
        if (edit.textContent === "Edit") {
            text.contentEditable = true
            text.focus()
            edit.textContent = "Save"
        } else {
            if (text.textContent.trim() === "") {
                error.textContent = "Task cannot be empty"
                text.focus()
                return
            }

            error.textContent = ""
            text.textContent = text.textContent.trim()
            text.contentEditable = false
            edit.textContent = "Edit"
        }
    })
    remove.addEventListener('click', () => li.remove())

    li.append(text, edit, remove)
    list.appendChild(li)
    input.value = ""
})