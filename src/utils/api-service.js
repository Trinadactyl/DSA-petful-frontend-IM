import React from "react";
import { URL } from "dotenv";

function getPets() {
  fetch(`${URL}/pets`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function adopt(pet) {
  fetch(`${this.URL}/input`, {
    method: "POST",
    body: { type: JSON.stringify(pet) },
    headers: {
      "content-type": "application/json",
    },
  });
}

function getPeople() {
  fetch(`${URL}/people`)
    .then((res) => {
      res.json();
    })
    .then((data) => {
      return data;
    });
}
