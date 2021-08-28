// Question 1


const proxy = "https://noroffcors.herokuapp.com/";
const url = "https://elephant-api.herokuapp.com/elephants";

const corsFix = proxy + url;

async function getElephants() {
  const response = await fetch(corsFix);
  const results = await response.json();
  console.log(results);
}

getElephants();