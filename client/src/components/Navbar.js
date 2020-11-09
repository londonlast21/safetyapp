import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';

const Navbar= () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };


  const  loggedIn  = Auth.loggedIn();

  // get username from logged in user??
  // const username = ;
  const { data: userData } = useQuery(QUERY_ME);
  const user = userData.username;

  console.log(user);



  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const navBar = loggedIn ? (

    

    // menu from user who is logged in
    <Menu pointing size="huge" color="grey">
      <Menu.Item
        name={loggedIn}
        active
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name='logout'
          onClick={logout}
        />
      </Menu.Menu> 
    </Menu>

    


  ) : (
    // menu from when user is logged out
    <Menu pointing size="huge" color="grey">
    <Menu.Item
      name='home'
      active={activeItem === 'home'}
      onClick={handleItemClick}
      as={Link}
      to="/"
    />
    <Menu.Item
      name='login'
      active={activeItem === 'login'}
      onClick={handleItemClick}
      as={Link}
      to="/login"
    />
    <Menu.Item
      name='signup'
      active={activeItem === 'signup'}
      onClick={handleItemClick}
      as={Link}
      to="/signup"
    />
  
    </Menu>

  )

    return navBar;
  }


export default Navbar;