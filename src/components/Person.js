import React from "react";

function Person({ person }) {
  // destructure props in parameter
  return (
    <h2>
      My self {person.name}, I'm {person.age} years old, I' Known as{" "}
      {person.skill}
    </h2>
  );
}

export default Person;
