// Write your code here
// import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>
              <ul className="list-container">
                <li className="list">Item 1</li>
                <li className="list">Item 2</li>
                <li className="list">Item 3</li>
                <li className="list">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-navbar-container">
              <h1 className="content-heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet,consectetur adipisiing elit,sed do
                elusmod tempor incididunt lut labore et dolore magna aliqua.Ut
                enim and minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="left-nav-heading">Right Navbar Menu</h1>
              <div className="right-navbar-ad-container">
                <p className="ad">Ad 1</p>
              </div>
              <div className="right-navbar-ad-container">
                <p className="ad">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
