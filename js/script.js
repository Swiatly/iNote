const addButton = document.querySelector('.add-note');
const saveButton = document.querySelector('.save');
const cancelButton = document.querySelector('.cancel');
const deleteAllButton = document.querySelector('.delete-all-notes');

const noteArea = document.querySelector('.note-area');
const addNotePanel = document.querySelector('.add-note-panel');
const noteCategory = document.querySelector('#note-category');
const noteText = document.querySelector('#note-text');
const errorMsg = document.querySelector('.error');

let selectedValue;
let noteID = 0;

const showAddNotePanel = () => {
	addNotePanel.style.display = 'flex';
};

const hideAddNotePanel = () => {
	addNotePanel.style.display = 'none';
	clearAddNotePanel();
};

const clearAddNotePanel = () => {
	errorMsg.style.visibility = 'hidden';
	noteText.value = '';
	noteCategory.selectedIndex = 0;
};

const addNewNote = () => {
	if (noteText.value !== '' && noteCategory.selectedIndex != 0) {
		const selectedCategory =
			noteCategory.options[noteCategory.selectedIndex].text;
		createNote(selectedCategory, noteText.value);
		hideAddNotePanel();
	} else {
		errorMsg.style.visibility = 'visible';
	}
};

const createNote = (selectedCategory, textValue) => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', noteID);
	newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedCategory}</h3>
        <button class="delete-note" onclick="deleteNote(${noteID})"><i class="icon fa-solid fa-xmark"></i></button>
    </div>
    <div class="note-body">
        ${textValue}
    </div>`;
	noteArea.append(newNote);
	changeColor(selectedCategory, newNote);
	noteID++;
};

const changeColor = (selectedCategory, note) => {
	switch (selectedCategory) {
		case 'Zakupy':
			note.style.backgroundColor = '#26fc5a';
			break;
		case 'Praca':
			note.style.backgroundColor = '#74c8ff';
			break;
		case 'Szkoła':
			note.style.backgroundColor = '#f7de00';
			break;
		default:
			note.style.backgroundColor = '#ffffff';
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

addButton.addEventListener('click', showAddNotePanel);
cancelButton.addEventListener('click', hideAddNotePanel);
saveButton.addEventListener('click', addNewNote);
deleteAllButton.addEventListener('click', deleteAllNotes);
