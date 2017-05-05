import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.submit       = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.placeholderIndex = 0;
    this.state        = {
      form: {},
      placeholders: [
        'I was a professional wrestler in the WWF and I\'d come out to work on my dream of starring in movies.',
        'Freelance web and app design',
        'Making pigments from the cliffs and making art from the pigments',
        'Working on my independent film',
        'Putting together my business plan for a vegan food truck',
      ],
      handlePlaceholders: [
        '@therock on instagram',
        '@kevindavidcrowe on instagram',
        '@rosemaryhhall on instagram',
        '@valentina____p.a on instagram',
        '@tarynashh on instagram',
      ],
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

  componentDidMount() {
    this.timeout = setInterval(() => {
      const form = document.querySelector('form')
      if( !form.what ) { return; }
      this.placeholderIndex++
      if( this.placeholderIndex > this.state.placeholders.length - 1 ) { this.placeholderIndex = 0 }
      form['what'].placeholder = this.state.placeholders[this.placeholderIndex]
      form['who'].placeholder  = this.state.handlePlaceholders[this.placeholderIndex]
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    return (
      <form className="application" onSubmit={this.submit}>
        { !this.state.started ?
          <label>
            Can you be available November 1st - January 31st?
          </label>
        : !this.state.ready ?
          <div>
            <label>
              If admitted, what kind of work will you be doing?
              <textarea name="what"
                        type="text"
                        placeholder="I was a professional wrestler in the WWF and I'd come out to work on my dream of starring in movies."
                        value={this.state.form.what || ''}
                        onChange={this.handleChange}></textarea>
            </label>
            <label>
              Link us to your Instagram or Facebook or something so we know you’re a real person.
              <input name="who"
                     type="text"
                     placeholder="@therock on instagram"
                     value={this.state.form.who || ''}
                     onChange={this.handleChange}
                />
            </label>
          </div>
        :
          <label>
            Enter your email
            <input name="email"
                   type="email"
                   value={this.state.form.email || ''}
                   onChange={this.handleChange}
                  />
          </label>
        }

        { this.state.started ?
          <div className="buttons">
            <button className="solo">Submit</button>
          </div>
        :
          <div className="buttons">
            <button>Yes</button>
            <button className="no">No</button>
          </div>
        }            
      </form>
    );
  }

  submit(e) {
    e.preventDefault()
    if( !this.state.started ) {
      return this.setState({started: true})
    }
    if( !this.state.ready ) {
      return this.setState({ready: true})
    }

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
