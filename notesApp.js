const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');
const deleteNotesDiv = document.getElementById('deleteNotes');
const archriveNotesDiv = document.getElementById('archriveNotes');

showNotes();
// local storage vs session storage
// JSON: JavaScript Object Notation

function editNote(ind){
    let notes = localStorage.getItem('notes');
  if (notes === null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }
  addTitle.value = notes[ind].title;
  addText.value = notes[ind].text;
  notes.splice(ind, 1);
notes = localStorage.setItem('notes', JSON.stringify(notes));
showNotes();
}
function addNotes() {
  let notes = localStorage.getItem('notes');
  if (notes === null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }

  if (addText.value == '') {
    alert('Add your note');
    return;
  }

  const noteObj = {
    title: addTitle.value,
    text: addText.value,
  };
  addTitle.value = '';
  addText.value = '';
  notes.push(noteObj);
  localStorage.setItem('notes', JSON.stringify(notes));
  showNotes();
}

function showNotes() {
  let notesHTML = '';
  let delNotesHTML = '';
  let arcNotesHTML = '';
  let notes = localStorage.getItem('notes');
  let delNotes = localStorage.getItem('delNotes');
  let arcNotes = localStorage.getItem('arcNotes');
  if (notes === null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }
  for (let i = 0; i < notes.length; i++) {
    notesHTML += `<div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <button class="deleteNote" id=${i} onclick="archriveNote(${i})">Archrive</button>
                    <button class="deleteNote" id=${i} onclick="editNote(${i})">Edit</button>
                    <span class="title">${
                      notes[i].title === '' ? 'Note' : notes[i].title
                    }</span>
                    <div class="text">${notes[i].text}</div>
                </div>
        `;
  }
  if (delNotes === null) {
    delNotes = [];
  } else {
    delNotes = JSON.parse(delNotes);
  }

  for (let i = 0; i < delNotes.length; i++) {
    delNotesHTML += `
                 <div class="note">
                    <span class="title">${delNotes[i].title}</span>
                    <div class="text">${delNotes[i].text}</div>
                </div>
        `;
  }

  if (arcNotes === null) {
    arcNotes = [];
  } else {
    arcNotes = JSON.parse(arcNotes);
  }

  for (let i = 0; i < arcNotes.length; i++) {
    arcNotesHTML += `
                 <div class="note">
                    <span class="title">${arcNotes[i].title}</span>
                    <div class="text">${arcNotes[i].text}</div>
                </div>
        `;
  }
  notesDiv.innerHTML = notesHTML;
  deleteNotesDiv.innerHTML = delNotesHTML;
  archriveNotesDiv.innerHTML = arcNotesHTML;
}

function deleteNote(ind) {
  let notes = localStorage.getItem('notes');
  let delNotes = localStorage.getItem('delNotes');
  if (notes === null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }
  if (delNotes === null) {
    delNotes = [];
  } else {
    delNotes = JSON.parse(delNotes);
  }
  const delNoteObj = {
    title: notes[ind].title,
    text: notes[ind].text,
  };
  delNotes.push(delNoteObj);
  notes.splice(ind, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  localStorage.setItem('delNotes', JSON.stringify(delNotes));

  showNotes();
}

function archriveNote(ind) {
    
    let arcNotes = localStorage.getItem('arcNotes');
    let notes = localStorage.getItem('notes');
    if (notes === null) {
      return;
    } else {
      notes = JSON.parse(notes);
    }
    if (arcNotes === null) {
        arcNotes = [];
    } else {
        arcNotes = JSON.parse(arcNotes);
    }
    const arcNoteObj = {
      title: notes[ind].title,
      text: notes[ind].text,
    };
    arcNotes.push(arcNoteObj);
    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('arcNotes', JSON.stringify(arcNotes));
    
  
    showNotes();
  }
addNoteButton.addEventListener('click', addNotes);

// assignment

/*
1. delete notes: implementation delete array
2. Archieve Notes: implementation archieve array
3. sorting filter, iterate through all the notes, and check 
4. reminder
5. edit note
*/
