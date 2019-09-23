import React from 'react'
import injectSheet from 'react-jss';
import {NavLink} from "react-router-dom";

let styles = {
    wrapperNavbar: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
    },


    title: {
        textDecoration: 'none',
        padding: '18px',
        color: '#197c71',
    },
    activeTitle: {
        textDecoration: 'none',
        color: 'white',
        background: '#197c71',
    },


};


const Navbar = (props) => {
    const {classes} = props;
    return <div className={classes.wrapperNavbar}>

        <NavLink exact to={'/'} className={classes.title} activeClassName={classes.activeTitle}>Home</NavLink>


        <NavLink to={'/inspections'} className={classes.title}
                 activeClassName={classes.activeTitle}>Inspections</NavLink>


        <NavLink to={'/applications'} className={classes.title}
                 activeClassName={classes.activeTitle}>Applications</NavLink>


        <NavLink to={'/works'} className={classes.title} activeClassName={classes.activeTitle}>Works</NavLink>

        <NavLink to={'/resources'} className={classes.title}
                 activeClassName={classes.activeTitle}>Resources</NavLink>

        <NavLink to={'/support'} className={classes.title} activeClassName={classes.activeTitle}>Support</NavLink>


    </div>
};


const NavbarContainer = (props) => {
    return <Navbar {...props}/>
};

export default injectSheet(styles)(NavbarContainer);


