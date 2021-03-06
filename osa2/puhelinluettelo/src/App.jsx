import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [msg, setMsg] = useState(null);
  const [msgColor, setMsgColor] = useState("green");

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      if (window.confirm("Person is already added to the phonebook, do you want to replace the old number with a new one?")) {
        const oldPerson = persons.find((person) => person.name === newName);
        const updatedPerson = { ...oldPerson, number: newNumber };
        personService
          .replace(updatedPerson)
          .then((returnedObject) => {
            setPersons(persons.map((person) => (person === oldPerson ? returnedObject : person)));
            showNotification(`Modified ${newName}`, "green");
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            showNotification(`Information of ${newName} has already been removed from server`, "red");
            setPersons(persons.filter((person) => person.name !== newName));
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService.create(newPerson).then((returnedObject) => {
        setPersons(persons.concat(returnedObject));
        showNotification(`Added ${newName}`, "green");
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const showNotification = (msg, color) => {
    setMsg(msg);
    setMsgColor(color);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      personService.deletePerson(id);
      showNotification(`Deleted ${persons.find((person) => id === person.id).name}`, "green");
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={msg} color={msgColor} />
      <Filter value={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
