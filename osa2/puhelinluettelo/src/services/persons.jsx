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

export default {
  getAll,
  create,
};
