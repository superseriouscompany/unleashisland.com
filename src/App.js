import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.submit       = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state        = {
      form: {},
    }
  }

  handleChange(e) {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div className="App">
        <form className="application" onSubmit={this.submit}>
          <label>
            Name:
            <input name="name"
                   type="text"
                   value={this.state.form.name || ''}
                   onChange={this.handleChange}
              />
          </label>

          <label>
            Email:
            <input name="email"
                   type="text"
                   value={this.state.form.email || ''}
                   onChange={this.handleChange}
                  />
          </label>

          <input type="submit" value="Try it" />
        </form>
      </div>
    );
  }

  submit(e) {
    e.preventDefault()
    fetch('https://fchyjaf26f.execute-api.eu-west-1.amazonaws.com/production', {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      headers: { 'Content-Type': 'application/json' },
    }).then(function() {
      alert('Sent.')
      console.log('Sent.')
    }).catch(function(err){
      console.error(err)
      alert(err.message || JSON.stringify(err))
    })
  }
}

export default App;
