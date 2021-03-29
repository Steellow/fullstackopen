import React from "react";

const PersonList = ({ persons, filter, handleDelete }) => {
  return (
    <ul>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map((person) => (
          <li key={person.name}>
            {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default PersonList;
