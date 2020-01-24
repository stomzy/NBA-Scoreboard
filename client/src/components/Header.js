import React from 'react'

export default function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark primary-color">

      <div className="container">
        <a className="navbar-brand" href="#!"><img src='https://pbs.twimg.com/profile_images/1051916190061404161/jzwKNnwY_normal.jpg' alt="Smiley face" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>

    </nav>
    </header>
  )
}
