import React, { Component } from "react";
import "./adoption.scss";

import ApiService from "../../utils/api-service";

export default class Adoption extends Component {
  state = {
    pets: {
      cat: null,
      dog: null,
    },
    other: [],
    people: [],
    user: sessionStorage.getItem("petful-user-name") || null,
    error: null,
  };

  randomUsers = [
    "Alanis Morisette",
    "Sam Smith",
    "John Lennon",
    "Beyonce Knowles",
  ];

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => {
      // condition to see if user is at the top
      const { people, user } = this.state;
      if (!people.length || !user) return;

      if (people[0] === user && people.length < 5) {
        this.simulateUsers();
      } else if (people[0] !== user && people.length > 1) {
        this.simulateAdoption();
      }
    }, 5000);
  }

  simulateAdoption() {
    const { pets } = this.state;
    const petTypes = Object.entries(pets).filter(
      ([petType, pet]) => pet !== null
    );
    if (petTypes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * petTypes.length);
    const petToAdopt = petTypes[randomIndex][0] + "s";
    this.handleAdoption(petToAdopt);
  }

  handleAdoption = (type) => {
    ApiService.adopt(type).then(() => {
      const { people, user } = this.state;
      if (people[0] === user) {
        // forget the user
        sessionStorage.removeItem("petful-user-name");
        this.setState({
          user: null,
        });
      }
      this.getData();
    });
  };

  simulateUsers() {
    const newPerson = this.randomUsers[this.state.people.length - 1];
    ApiService.addPerson(newPerson).then(() => {
      this.getData();
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    // get pets
    ApiService.getPets()
      .then((pets) => {
        // get peeps
        ApiService.getPeople().then((people) => {
          // we got all we need
          ApiService.getAllPets().then((allPets) => {
            this.setState({
              pets: pets,
              people: people,
              other: [...allPets.cats.slice(1, 3), ...allPets.dogs.slice(1, 3)],
            });
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.user.value;

    // do stuff with api
    ApiService.addPerson(name).then(() => {
      // remember their name
      sessionStorage.setItem("petful-user-name", name);

      this.setState({
        user: name,
      });

      // get data
      this.getData();
    });
  };

  render() {
    const { people, pets, user, other } = this.state;
    const canAdopt = (!people.length && user) || people[0] === user;

    return (
      <div className="adoption">
        <section className="banner">
          <div className="content">
            <h1>Adoption</h1>
          </div>
        </section>

        <section className="pets container">
          <div className="row">
            {Object.entries(pets).map(([type, pet]) => {
              return pet ? (
                <div className="pet six columns" key={pet.name}>
                  <img src={pet.imageURL} alt={pet.description} />
                  <h3>{pet.name}</h3>
                  <p className="info">
                    {pet.breed} / {pet.gender} / {pet.age} yr
                    {pet.age !== 1 ? "s" : ""} old
                  </p>
                  <p className="story">{pet.story}</p>
                  <button
                    onClick={() => this.handleAdoption(type + "s")}
                    disabled={!canAdopt}
                    className="button-primary"
                  >
                    Adopt me!
                  </button>
                </div>
              ) : (
                <div className="pet six columns" key={type}>
                  <h3>No {type}s?</h3>
                  <p>
                    All our {type}s have found happy homes! Please check back
                    later.
                  </p>
                </div>
              );
            })}
          </div>
          <div className="row">
            {other.map((pet) => {
              return (
                <div className="pet three columns" key={pet.name}>
                  <img src={pet.imageURL} alt={pet.description} />
                  <h5>{pet.name}</h5>
                  <p className="info">
                    {pet.breed} / {pet.gender} / {pet.age} yr
                    {pet.age !== 1 ? "s" : ""} old
                  </p>
                  <p className="story">{pet.story}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="queue container">
          <h3>Get in line to change a life!</h3>
          <ul>
            {people.map((person) => (
              <li key={person} className={person === user ? "user" : ""}>
                {person}
              </li>
            ))}
            {!user ? (
              <li>
                <form className="name-form" onSubmit={this.handleAddUser}>
                  <input
                    autoComplete="off"
                    name="user"
                    type="text"
                    placeholder="Your name"
                  />
                  <button>Join waitlist</button>
                </form>
              </li>
            ) : (
              ""
            )}
          </ul>
        </section>
      </div>
    );
  }
}
