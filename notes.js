const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};
debugger
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.inverse.whiteBright.bgRed("Note title taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const removeNote = function (title) {
  const notes = loadNotes();
  const noteToKeep = notes.filter((note) => note.title != title);
  if (notes.length > noteToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("No Note found!"));
  }
  saveNotes(noteToKeep);
};
const listNotes = () => {
    notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.green(note.title))
    });
};
const readNote= (title) => {
    notes= loadNotes()
    debugger
    note = notes.find((note)=> note.title === title)
    if (note) {
        console.log(chalk.inverse.green(note.title))
        console.log(chalk.inverse(note.body))
    }
    else{
        console.log(chalk.red("Note not Found!"))
    }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote:readNote
};
