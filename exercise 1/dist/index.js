"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
exports.users = [
    // changed unknown into User (the interface created)
    {
        name: "Wilker",
        age: 25,
        occupation: "Backend developer",
    },
    {
        name: "Bob",
        age: 23,
        occupation: "Product Manager",
    },
];
function logPerson(user) {
    // changed unknown into User (the interface created)
    return console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
console.log(`Users: ${exports.users[0].name} and ${exports.users[1].name}`); // added the users
exports.users.forEach(logPerson);
