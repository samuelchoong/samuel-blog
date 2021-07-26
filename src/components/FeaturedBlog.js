import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

export default function FeaturedBlog() {

  return (
    <div class="columns">
    <div class="column is-4">
      <figure class="image">
        <StaticImage src="../images/home.jpeg" alt="main profile image"/>
      </figure>
    </div>
    <div class="column is-8">
        <p className="title is-4">I'm Samuel Choong</p>
        <p className="subtitle is-6">I'm a software engineer and writer. Main purpose of this website is to document what I've learned time by time and marked the evolution of web programming.</p>
    </div>
    
  </div>
  );
}