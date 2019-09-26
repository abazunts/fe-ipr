import React, {Fragment} from 'react'
import injectSheet from 'react-jss';
import {NavLink, withRouter} from "react-router-dom";
import s from "./navbar.module.css";
import iconDown from "../../assets/img/menu-icon.png";
import Media from 'react-media';

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
        "&:hover": {
            background: '#e5f0ef'
        }
    },
    activeTitle: {
        textDecoration: 'none',
        color: 'white',
        background: '#197c71',
        "&:hover": {
            background: '#197c71'
        }
    },

    wrapperNavbarRtl: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },


};


const Navbar = (props) => {
    const {classes, i18n} = props;
    return <div className={i18n.language === 'en' ? classes.wrapperNavbar : classes.wrapperNavbarRtl}>

        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
        }}>
            {matches => (
                <Fragment>
                    {matches.small || matches.medium && <div className={classes.button}>
                        <div className={s.topMenu}>
                            <div>
                                <button className={s.submenuLink}><img src={iconDown}/></button>
                                <div className={s.submenu}>
                                    <button onClick={()=> {props.history.push(`../`)}}>Home</button>
                                    <button onClick={()=> {props.history.push(`../inspections`)}}>Inspection</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {matches.large && <>
                        <NavLink exact to={'/'} className={classes.title}
                                 activeClassName={classes.activeTitle}>Home</NavLink>


                        <NavLink to={'/inspections'} className={classes.title}
                                 activeClassName={classes.activeTitle}>Inspections</NavLink></>
                    }
                </Fragment>
            )}
        </Media>





        {/*<NavLink to={'/applications'} className={classes.title}*/}
        {/*         activeClassName={classes.activeTitle}>Applications</NavLink>*/}


        {/*<NavLink to={'/works'} className={classes.title} activeClassName={classes.activeTitle}>Works</NavLink>*/}

        {/*<NavLink to={'/resources'} className={classes.title}*/}
        {/*         activeClassName={classes.activeTitle}>Resources</NavLink>*/}

        {/*<NavLink to={'/support'} className={classes.title} activeClassName={classes.activeTitle}>Support</NavLink>*/}


    </div>
};


const NavbarContainer = (props) => {
    return <Navbar {...props}/>
};

export default withRouter(injectSheet(styles)(NavbarContainer));


