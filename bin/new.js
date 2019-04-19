#! /usr/bin/env node
const [ _, _bin, command, name, ...attr ] = process.argv

switch(command) {
    case 'component':
        return require('./lib/new-component')(name)
    default:
        return
}
