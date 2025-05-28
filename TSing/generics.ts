function newFunc<T>(argument: T): T {
    return argument;
}

const users = [
  { name: "Adam", age: 35 },
  { name: "Kevin", age: 30 },
  { name: "Eva", age: 40 },
];

function genericsOne<T, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map((el) => el[key])
}

console.log(genericsOne(users, "name"));
console.log(genericsOne(users, "age"));