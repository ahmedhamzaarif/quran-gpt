import React from 'react'

const Header = ({isSticky}) => {
  return (
    <header id="header" className={isSticky ? 'stickyHeader' : ''}>
        <nav className="navbar navbar-expand-md">
          <div className="container">
              <a className="navbar-brand" href="/"><img src={isSticky ? "logo-light.png" : "logo.png"} alt="QuranGPT" /></a>
              <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                  <a className="navbar-brand" href="/"><img src="passGen.png" alt="" /></a>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                      <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#features">Features</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#faq">FAQs</a>
                      </li>
                  </ul>
              </div>
              </div>
          </div>
        </nav>
      </header>
  )
}

export default Header