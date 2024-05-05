// The fetch api provides an interface for sending and recieving data.
// It uses Request and Response objects
// The fetch() method is used to fetch the data.
// let promise = fetch(url,[options]);
const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () =>{
    console.log("Getting Data...");
    let res = await fetch(URL);
    console.log(res);
    let data = await res.json();
    console.log(data);
};
getFacts();