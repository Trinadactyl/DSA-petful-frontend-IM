import config from "../config";

const { API_URL } = config;

function getPets() {
  return fetch(`${API_URL}/pets`).then((res) => {
    if (res.status !== 200) {
      throw new Error("No more pets probably");
    }
    return res.json();
  });
}

function getAllPets() {
  return fetch(`${API_URL}/pets/all`).then((res) => {
    if (res.status !== 200) {
      throw new Error("NO PETS");
    }
    return res.json();
  });
}

function adopt(petType) {
  const data = {
    type: petType,
  };

  return fetch(`${API_URL}/pets`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
}

function getPeople() {
  return fetch(`${API_URL}/people`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("No more people somehow");
      }
      return res.json();
    })
    .then((data) => data.people);
}

function addPerson(newName) {
  const newPerson = {
    name: newName,
  };

  return fetch(`${API_URL}/people`, {
    method: "Post",
    body: JSON.stringify(newPerson),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.status !== 201) {
      throw new Error(
        "that was invalid data Malcom cmon (or my api messed up maybe)"
      );
    }
  });
}

export default {
  addPerson,
  getPeople,
  adopt,
  getPets,
  getAllPets,
};
