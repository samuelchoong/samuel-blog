import React from 'react';
import { Link } from "gatsby";

function Copyright() {
  return (
    <footer>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Samuel Choong
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </footer>
  );
}

export default function Footer(props) {
  return (
    <footer>
      <div className="p-5">
        <nav className="level">
          <div className="level-item has-text-centered">
            <Copyright />
          </div>
          <div className="level-item has-text-centered">
            <a href={`https://www.feedspot.com/infiniterss.php?q=site:${process.env.BASE_URL}/rss.xml`} target="__blank" rel="noreferrer">Follow RSS</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}