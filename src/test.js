import axios from "axios";
let a = 3;
let b = 4;

console.log(a + b);
const c = a + "kutya";
c;

let data = axios.get("https://jsonplaceholder.com/todos");
data.then((d) => console.log(d.data));
