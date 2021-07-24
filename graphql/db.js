
import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    
    if (limit > 0) {
        REQUEST_URL += `&limit=${limit}`;
    }

    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}

    
/* schema
type Person {
    id: Int!
    name: String!
    age: Int!
    gender: String!
  }
  
  type Query {
    people: [Person]!
    person(id: Int!): Person
  } 
*/

/* 
export const people = [
    {
        id: 1,
        name: "dh",
        age: 33,
        gender: "male"
    },
    {
        id: 2,
        name: "AAA",
        age: 20,
        gender: "female"
    },
    {
        id: 3,
        name: "BBB",
        age: 30,
        gender: "male"
    },
    {
        id: 4,
        name: "CCC",
        age: 40,
        gender: "female"
    },
    {
        id: 5,
        name: "DDD",
        age: 50,
        gender: "male"
    }
]

// db.js에서 함수를 만들수도 있다.
export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}; */