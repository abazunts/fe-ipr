import React from 'react'
import injectSheet from 'react-jss';
import logo from '../../assets/img/saip-logo.png';
import NavbarContainer from "../Navbar/Navbar";
import UserInfo from "../Login/UserInfo";

let styles = {
    headerWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    logoWrapper: {
        gridRow: '1',
        marginLeft: '80px',
        maxWidth: '25vh'
    },

    logoImg: {
        width: '25vh',
    },

    menu: {
        gridRow: '1',
        height: '100%',
    },

    login: {
        gridRow: '1',
        textAlign: 'center',
    }

};


const Header = (props) => {
    const {classes} = props;
    return <div className={classes.headerWrapper}>
        <div className={classes.logoWrapper}>
            <img src={logo} className={classes.logoImg}/>
        </div>
        <div className={classes.menu}>
            <NavbarContainer/>
        </div>
        <div className={classes.login}>
           <UserInfo/>
        </div>
    </div>
};


const HeaderContainer = (props) => {
    return <Header {...props}/>
};

export default injectSheet(styles)(HeaderContainer);