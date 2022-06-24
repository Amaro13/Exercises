interface User {
  // defined the user as the function on line 37 asked
  name: string;
  age: number;
}

interface Admin {
  // defined Admin withe the role? interface as asked
  role?: string;
}

interface Person extends User, Admin {
  //used the Person to extend User and Admin
  occupation?: string;
}

export const persons: Person[] = [
  // changed the const to Person interface for use
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

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
