import React, { Component } from 'react';
import Form                 from './containers/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cover">
          <h1>
            Unleash Island
            <small>A coworking house in Portugal</small>
          </h1>
        </div>

        <section className="section">
          <h2>The Country</h2>
          <p>
            If admitted, you'll be living on a small island called Ilha do Baleal,
            connected to the mainland by a land bridge.
          </p>
          <div className="scroller">
            <div className="photos">
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <h2>The House</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="scroller">
            <div className="photos">
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <h2>The People</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="scroller">
            <div className="photos">
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
              <div className="photo">
                <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Applying</h2>
          <p>
            We are currently taking applications for the full three-month period of
            <strong>&nbsp;November 1st 2017 - January 31st 2018</strong>.
            We only have room to accept twelve applicants.
            Applying is quick and easy!
            To quote Hillary Duff, take a crazy chance:
          </p>
          <Form />
        </section>
      </div>
    );
  }
}

export default App;
