import React from 'react';
import { Link } from "gatsby";
import ThemeToggle from './ThemeToggle'

export default function AppHeader({seo}) {
  const twitterMessage = seo?.title ? `Check out my latest publish article "${seo.title}"` : "Join my newsletter for more latest update!"
  const twitterUrl = seo?.url || ""
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h3 className="title">Samuel Choong</h3>
        </Link>
        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/blogs">
            Blog
          </Link>
          <Link className="navbar-item" to="/snippets">
            Snippets
          </Link>
          <Link className="navbar-item" to="/portfolios">
            Portfolios
          </Link>
          <Link className="navbar-item" to="/about-me">
            About me
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <ThemeToggle className="is-flex is-align-self-center mr-5"/>
              <p className="control">
                <a
                  className="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://samuelchoong.com"
                  rel="noreferrer"
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=${twitterMessage}&hashtags=scblog&url=${process.env.BASE_URL}/${twitterUrl}`}>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              {/* <p className="control">
                <a className="button is-primary" href="/">
                  <span>Login</span>
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}