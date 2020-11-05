import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (

    // menu from user who is logged in
    <Menu pointing size="huge" color="grey">

        <Menu.Item
        name='home'
        //active={activeItem === 'home'}
        as={Link}
        to="/"
        />
        <Menu.Item
        name='login'
        //active={activeItem === 'login'}
        as={Link}
        to="/login"
        />
        <Menu.Item
        name='signup'
        //active={activeItem === 'signup'}
        as={Link}
        to="/signup"
        />
    
        </Menu>
    )
};


export default Navbar;