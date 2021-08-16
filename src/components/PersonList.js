import React from "react";
import Person from "./Person";
function PersonList() {
  const persons = [
    {
      id: 1,
      name: "Tony Stark",
      age: 50,
      skill: "IronMan 🧑‍💻",
    },
    {
      id: 2,
      name: "Steve Rogers",
      age: 100,
      skill: "CapAmerica 🛡️",
    },
    {
      id: 3,
      name: "Thor",
      age: 1000,
      skill: "Thunder 🔨",
    },
    {
      id: 4,
      name: "Bruce Banner",
      age: 50,
      skill: "Hulk ✊",
    },
  ];
  const personList = persons.map((person) => (
    // <h2>
    //   My self {person.name}, I'm {person.age} years old, I' Known as{" "}
    //   {person.skill}
    // </h2>
    <Person key={person.id} person={person}/>
  ));
  return <div>{personList}</div>;
}

export default PersonList;
