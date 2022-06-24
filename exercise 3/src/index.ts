//use the solution from the exercise done before

interface User {
  name: string;
  age: number;
}

interface Admin {
  role?: string;
}

interface Person extends User, Admin {
  occupation?: string;
}

export const persons: Person[] = [
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

//there was a problem here with the lack of evaluation of the occupation as it was being done with the role, it has to check if it's tru or not.
export function logPerson(person: Person) {
  let additionalInformation: string;
  if (person.role) {
    additionalInformation = person.role;
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
  } else if (person.occupation) {
    additionalInformation = person.occupation;
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
  } else {
    console.log(
      ` - ${person.name}, ${person.age}, there was no additional information.`
    );
  }
}

persons.forEach(logPerson);
