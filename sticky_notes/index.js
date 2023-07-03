
// get notes container
const notesList=document.querySelector('#notes-list')

// get create/edit notes button
const createEditBtn=document.querySelector('#btn-action')

// define note colors
const noteColors=['yellow','pink','green','violet']

// create note or edit action mode
let createMode=true

// current noteID
let currentNoteElement=Element

// set default text for create button
createEditBtn.innerHTML='Creat New Note'

// create a new note/edit existin note
function handleCreatEditNote(){
    let currentNote
    // perform create new note
    if(createMode){
        createEditBtn.innerHTML='Creat New Note'
        currentNote=document.querySelector('#note').value
        if(!currentNote){
            alert('notes cannot be empty')
            return
        }
        creatNote(currentNote)
        document.querySelector('#note').value=''
        
    }

// perform edit existing note
    if(!createMode){
        currentNote=document.querySelector('#note').value
        let oldNote =currentNoteElement
        currentNoteElement.children[0].innerHTML=currentNote
        let editedNote=currentNoteElement
        notesList.replaceChild(editedNote,oldNote)
        document.querySelector('#note').value=''
        createEditBtn.innerHTML='Creat New Note'
    }
}

//  delete fuction
function handleDeleteNote(){
    let currentNote=event.target.parentElement.parentElement
    notesList.removeChild(currentNote)
    // alert('note deleted')
}


// edit funtion
function handleEditNote(){
    createEditBtn.innerHTML='Edit Note'
    let currentText=event.target.parentElement.parentElement.children[0].innerHTML
    document.querySelector('#note').value =currentText
    createMode=false
   return currentNoteElement=event.target.parentElement.parentElement
}
// get random color
function generateRandomColor(){ 
    let currentColor=Math.floor(Math.random()*5)
    return currentColor
}
// create html for new note
function creatNote(text){
   
    let noteId=notesList.children.length+1
    let bgColor=generateRandomColor()

    const noteText=document.createElement('p')
    noteText.innerText=text

    const deleteBtn=document.createElement('button')
    deleteBtn.classList.add('btn','delete',`${noteId}`)
    deleteBtn.innerText='Delete'
    deleteBtn.addEventListener('click',(e)=>handleDeleteNote())

    const editBtn=document.createElement('button')
    editBtn.classList.add('btn','edit',`${noteId}`)
    editBtn.innerText='Edit'
    editBtn.addEventListener('click',(e)=>handleEditNote())

    const btnContainer=document.createElement('span')
    btnContainer.appendChild(deleteBtn)
    btnContainer.appendChild(editBtn)

    const note=document.createElement('div')
    note.classList.add('note','flex-center-column',`${noteId}`)
    note.style.background=noteColors[bgColor]
    note.appendChild(noteText)
    note.appendChild(btnContainer)
    notesList.appendChild(note)

}