import React from "react";
import { URL } from "dotenv";

function getPets() {
  fetch(`${URL}/pets`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("No more pets probably");
      }
    })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function adopt(petType) {
  fetch(`${this.URL}/pets`, {
    method: "DELETE",
    body: { type: JSON.stringify(petType) },
    headers: {
      "content-type": "application/json",
    },
  });
}

function getPeople() {
  fetch(`${URL}/people`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("No more people somehow");
      }
    })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      return data;
    });
}

function addPerson(newName) {
  fetch(`${this.URL}/people`, {
    method: "Post",
    body: { type: JSON.stringify({ name: newName }) },
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
};
