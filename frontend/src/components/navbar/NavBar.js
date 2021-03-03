import React, { Component } from 'react';
import {MenuItems} from "./menuItems"
import {Button} from '../button'
import './navBar.css'

//TO DO: need to import images and update image codes (logo, fab fas) within nav bar
//TO DO: link logo to home page

class NavBar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return(
      <nav className='navBarItems'>
        <h1 className='navBarLogo'>Katie Stapleton<i className="fab fa-react"></i></h1>
        <div className='menuIcon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        {/* map menu items into nav bar*/}
        <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.clName} href={item.link}>
                {item.label}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign In</Button>
      </nav>
    )
  }  
}

export default NavBar


/* 
https://create-react-app.dev/docs/using-the-public-folder/
https://create-react-app.dev/docs/adding-images-fonts-and-files/ 
https://daveceddia.com/react-image-tag/
^^use this last website for logo

code grepper
<img src={process.env.PUBLIC_URL + '/yourPathHere.jpg'} /> 

youtube create nav bar from scratch
https://www.youtube.com/watch?v=fL8cFqhTHwA

consider reviewing the first tutorial about layout, header, footer
https://www.youtube.com/watch?v=LyEc2fGCR90&t=1086s
*/