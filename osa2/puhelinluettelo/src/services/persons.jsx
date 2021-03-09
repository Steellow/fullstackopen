import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const promise = axios.get(baseUrl);
  return promise.then((res) => res.data);
};

const create = (newObject) => {
  const promise = axios.post(baseUrl, newObject);
  return promise.then((res) => res.data);
};

const deletePerson = (id) => {
  console.log("Deleting " + id);
  axios.delete(baseUrl + "/" + id);
};

// Creating object before exporting to avoid: 'Warning : Assign object to a variable before exporting as module default'
const exportObject = {
  getAll,
  create,
  deletePerson,
};
export default exportObject;
