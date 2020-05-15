import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.scss";

import { Logo } from "../../images";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="container">
            <Logo />
          </div>
        </nav>

        <section className="hero">
          <div className="content">
            <h1>Change a life.</h1>
            <h2>Adopt today.</h2>
          </div>
        </section>

        <section className="process container">
          <h2>The Process</h2>
          <h3>Connecting you to shelters</h3>
          <p>
            Shelters include public shelters like the city and county animal
            shelters, animal control, police and health departments, dog
            wardens, and are often called the pound. There are also private
            shelters that might use the words “humane society” or “SPCA” in
            their name. They are all separate, independently run organizations
            or government offices. Just because shelters have similar names does
            not mean they are connected — just like different banks might have
            the word “bank” in their name.
          </p>
          <p>
            Shelters often have a physical facility, with staff, and operating
            hours. Some have volunteers and do adoption events around town too.
            If the pet you see on Adopt-a-Pet.com says that pet is at a Shelter
            and has an address with business hours, the easiest way to adopt
            that pet may be to go visit. That’s because some shelters are
            under-staffed and may not answer all phone calls or emails.
          </p>

          <h3>How it Works</h3>
          <p>Each shelter's adoption process is different. Here's an example of how a shelter adoption might work:</p>
          <ol>
            <li>
              You find a pet you want to adopt on Petful. We use a
              first-in-first-out system, and so you'll only be able to adopt the
              pets we've had the longest.
            </li>
            <li>
              You click <strong>Adopt</strong> and fill in your name. This gets sent to
              the shelter so they can get ready for you.
            </li>
            <li>
              One of the shelter volunteers calls you to arrange a time for you
              to go see the pet.
            </li>
            <li>
              You go to the shelter and see the pet. They're adorable! You fall
              in love.
            </li>
            <li>
              You give them your photo ID, pay the adoption fee (usually $25 to
              $125), get copies of the pet's vaccination records so you can get
              them licensedd.
            </li>
            <li>You take your new pet home!</li>
          </ol>
        </section>

        <footer>
          <div className="container">
            &copy; Petful 2020.
          </div>
          
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
