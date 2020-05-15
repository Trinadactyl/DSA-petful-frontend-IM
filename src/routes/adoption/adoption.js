import React, { Component } from "react";
import "./adoption.scss";

export default class Adoption extends Component {
  state = {
    pets: {
      cat: null,
      dog: null,
    },

    people: [],
    user: null,
  };

  componentDidMount() {
    // do stuff
  }

  handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.user.value;
    // do stuff with api
    this.setState({
      user: name
    })
  }

  render() {
    const { people, pets, user } = this.state;
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
                <div className="pet four columns" key={pet.name}>
                  <img src={pet.imageURL} alt={pet.description} />
                  <h3>{pet.name}</h3>
                  <p className="info">
                    {pet.breed} / {pet.gender} / {pet.age} yr
                    {pet.age !== 1 ? "s" : ""} old
                  </p>
                  <p className="story">{pet.story}</p>
                  <button disabled={!canAdopt} className="button-primary">
                    Adopt me!
                  </button>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </section>

        <section className="queue container">
          <h3>Get in line to change a life!</h3>
          <ul>
            {people.map((person) => (
              <li key={person}>{person}</li>
            ))}
            <li className={user ? 'user' : ''}>
              {user !== null ? (
                user
              ) : (
                <form className="name-form" onSubmit={this.handleAddUser}>
                  <input autoComplete="off" name="user" type="text" placeholder="Your name" />
                  <button>Join waitlist</button>
                </form>
              )}
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
