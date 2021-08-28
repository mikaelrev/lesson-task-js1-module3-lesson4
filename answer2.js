// Question 2

const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

const options = { headers: {
    "x-rapidapi-key": "5786fb1cc5mshbc3e1b31a0c37c1p1f3956jsnd348f92108a8",
}};

async function callUrbanDictionary() {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();
