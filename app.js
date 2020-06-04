const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body note',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title , argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list the note',
    handler (argv) {
        //console.log('Listing out all note')
        notes.listingNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})




yargs.parse()



// const command = process.argv[2]

// console.log(process.argv)

// if (command === 'add') {
//     console.log('Adding note!')
// }else if (command === 'remove'){
//     console.log('removing note!')
// }else if (command === 'sum') {
//     var summary = parseInt(process.argv[3]) + parseInt(process.argv[4])
//     console.log('sum of ' + process.argv[3] + ' and ' + process.argv[4] + ' is ' + summary)
// }