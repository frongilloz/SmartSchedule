import React, { Component, Navbar, Brand } from 'react';
import { Link, Redirect } from 'react-router-dom'; // import the react-router-dom components

import '../assets/css/bootstrap.min.css';

//Nav link class to actively highlight the tab currently open
class NavLink extends Component {
  render() {
    return (
      <li className={'nav-item ' + (this.props.isActive ? 'active' : '')}>
        <Link
          className='nav-link'
          to={this.props.path}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </Link>
      </li>
    );
  }
}

//the main header
//The paths of each page is defined in the "Main.js" file
//The Router alternates between each page depending on the currently active page
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { path: '/schedule', text: 'Course Schedule', isActive: false },
        { path: '/four-year-plan', text: 'Four Year Plan', isActive: false },
        { path: '/about-us', text: 'About Us', isActive: false }
      ],
      logout: false
    };
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i === j;
    }
    this.setState({ links: links, logout: this.state.logout });
  }

  render() {
    console.log('INRENDER', this.props.isAdmin);
    if (this.state.logout) {
      this.setState({ links: this.state.links, logout: false });
      return <Redirect to='/' />;
    }
    return (
      <div>
         <nav
          className='navbar navbar-expand-md navbar-custom'
          sticky='top'
        >

          <Link className='navbar-brand' to='/'>
            Home
          </Link>
          <ul className='navbar-nav'>
            {this.state.links.map((link, i) => {
              if (
                link.text === 'Admin' &&
                (!this.props.email || this.props.isAdmin !== 'true')
              ) {
                return <div />;
              } else if (link.text === 'Client Portal' && !this.props.email) {
                return <div />;
              } else if (link.text === 'Sign Up' && this.props.email) {
                return <div />;
              } else {
                return (
                  <NavLink
                    path={link.path}
                    text={
                      link.text === 'Login'
                        ? this.props.email
                          ? 'Logout'
                          : 'Login'
                        : link.text
                    }
                    isActive={link.isActive}
                    key={link.path}
                    onClick={() => {
                      if (link.text === 'Login' && this.props.email) {
                        this.props.logout();
                        this.setState({
                          links: this.state.links,
                          logout: true
                        });
                      } else {
                        this.handleClick(i);
                      }
                    }}
                  />
                );
              }
            })}
          </ul>

        </nav>
      </div>

    );
  }
}

export default Header;
