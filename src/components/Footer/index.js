import React from 'react'
import gitLogo from '../../assets/cover/github-512.webp'
import linkLogo from '../../assets/cover/LinkedIn_logo_initials.png'
import twitterLogo from '../../assets/cover/twitterLogo.png'

function Footer() {
  return (
    <section className="footer-container">
      <a href="https://github.com/duhjeffmeister">
        <img
          src={gitLogo}
          className="footer-logo-git"
          style={{ width: '3%' }}
          alt="logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/jlsmall1990/">
        <img
          src={linkLogo}
          className="footer-logo-linkedin"
          style={{ width: '3%' }}
          alt="logo"
        />
      </a>
      <a href="https://twitter.com/duhjeffmeister">
        <img
          src={twitterLogo}
          className="footer-logo-twitter"
          style={{ width: '3%' }}
          alt="logo"
        />
      </a>
    </section>
  )
}

export default Footer
