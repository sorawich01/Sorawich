const fs = require('fs')
const chalk = require('chalk')



const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(notes){
    //     return notes.title === title
    // })
    //const duplicateNotes = notes.filter((notes) => notes.title === title)
    //
    const duplicateNote = notes.find((note) => notes.title === title)
    //console.log(duplicateNotes.length)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new node add!')
    }
    // if(duplicateNotes.length === 0){
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    
    //     saveNotes(notes)
    //     console.log('new node add!')
    // } 
    else{
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
     const notes = loadNotes()
    //  const NotesToKeep = notes.filter(function(notes){
    //      return notes.title !== title
    //  })
    const NotesToKeep = notes.filter((notes) => notes.title !== title )
    
     if (notes.length > NotesToKeep.length){
        saveNotes(NotesToKeep)
        console.log(chalk.green.inverse('NOTE REMOVE!'))
        
     }else {
         console.log(chalk.red.inverse('Not Found Note!'))
     }

    
}


const listingNotes = () => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((notes) => notes.title === title)
    console.log(chalk.inverse("Your notes"))
    //console.log(duplicateNotes.length)
    if(notes.length === 0){
        console.log("Don't have note!")
        }
     else{
        notes.forEach((notes) => console.log(notes.title))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if(findNote){
        console.log(chalk.blue.inverse(findNote.title))
        console.log(findNote.body)
    }
    else{
        console.log(chalk.red('ERROR!'))
    }
}





// const saveNotes = function(notes){
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// const removeNotes = function(notes){
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

// const loadNotes = function() {
//     try{
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     }catch (e) {
//         return []
//     }
// }

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e) {
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listingNotes: listingNotes,
    readNote: readNote
}