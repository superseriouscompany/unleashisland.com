import React, { Component } from 'react'

const people = [
  {
    name:     'Taryn Davis',
    tagline:  'blogger',
    imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=360',
    links:    [
      {
        url: 'https://www.soshewas.com',
        name: 'soshewas.com',
      },
      {
        url: 'https://www.instagram.com/tarynashh',
        name: '@tarynashh',
      },
      {
        url: 'https://www.instagram.com/hippielyhealthy',
        name: '@hippielyhealthy',
      },
    ],
    quote: "The morning sunrises, the sunset shared dinners, and every hour in between was time well spent. I return home with an abundance of gratitude and eagerness to embrace everything I experienced during my stay.",
  },
  {
    name: 'Kevin David Crowe',
    tagline: 'weirdo',
    imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=361',
    links: [
      {
        url: 'https://kevindavidcrowe.com',
        name: 'kevindavidcrowe.com',
      },
      {
        url: 'https://www.instagram.com/kevindavidcrowe',
        name: '@kevindavidcrowe',
      },
    ],
    quote: "<actual fart noise>",
  },
  {
    name: 'Taryn Davis',
    tagline: 'blogger',
    imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97360&w=360&h=361',
    links: [
      {
        url: 'https://www.soshewas.com',
        name: 'soshewas.com',
      },
      {
        url: 'https://www.instagram.com/tarynashh',
        name: '@tarynashh',
      },
      {
        url: 'https://www.instagram.com/hippielyhealthy',
        name: '@hippielyhealthy',
      },
    ],
    quote: "The morning sunrises, the sunset shared dinners, and every hour in between was time well spent. I return home with an abundance of gratitude and eagerness to embrace everything I experienced during my stay.",
  },
]

export default class Testimonials extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  return (
    <section className="section">
      <h2>The People</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="scroller">
        <div className="photos">
          { people.map((p) => (
            <div className="photo">
              <img src={p.imageUrl} />
              <div className="person">
                <div>
                  <strong>{p.name}</strong> <em>{p.tagline}</em>
                </div>
                { p.links.map((l) => (
                  <div>
                    <a href={l.url}>{l.name}</a>
                  </div>
                ))}
              </div>
              <blockquote>
                {p.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}
}
