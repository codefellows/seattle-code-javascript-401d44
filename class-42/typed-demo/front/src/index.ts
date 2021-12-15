// defining variables

let instructor: string = 'Jacob';
let age: number = 34;
let likesTS: boolean = true;

type User = {
  name: string;
  age: number
  likesTS?: boolean // optional property
}

// use an interface when you have more complex data shapes
interface Profile {
  user: User,
  profileId: number,
}

// declared type "User"
let user: User  = {
  name: "Jacob",
  age: 31,
}

let users: Array<User> = [{name: 'Jacob', age: 31}, {name: 'hexx', age: 30}];

// functions also slightly change
function greet(person: User, greeting: string): string {
  let result: string = `${person.name} says "${greeting}"`;
  return result;
}

// typscript wil validate types when declared
instructor = 'Hexx';

console.log(instructor, age, likesTS);
console.log(greet(user, 'Hello!'));
console.log(users);
