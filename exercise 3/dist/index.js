"use strict";
//Corrija os erros de tipo na função logPerson. A função logPerson deve aceitar tanto User quanto Admin, ela também deve gerar informações relevantes de acordo com a occupation para User e a role para o Admin.
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
exports.persons = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
];
function logPerson(person) {
    let additionalInformation;
    if (person.role) {
        additionalInformation = person.role;
        console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
    }
    else if (person.occupation) {
        additionalInformation = person.occupation;
        console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
    }
    else {
        console.log(` - ${person.name}, ${person.age}, there was no additional information.`);
    }
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
