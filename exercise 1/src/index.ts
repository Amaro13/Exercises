interface User {
  name: string;
  age: number;
  occupation?: string;
} // changed to interface

export const users: User[] = [
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

export function logPerson(user: User) {
  // changed unknown into User (the interface created)
  return console.log(` - ${user.name}, ${user.age}`);
}

console.log(`Users: ${users[0].name} and ${users[1].name}`); // added the users
users.forEach(logPerson);
