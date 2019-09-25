import React from 'react';
import injectSheet from "react-jss";
import shapeIcon from '../../assets/img/shape.png'
import s from './UserInfo.module.css'
import iconDown from '../../assets/img/icondown.png'
import signOut from '../../assets/img/signout.png'
import editProfile from '../../assets/img/editprofile.png'
import {connect} from "react-redux";
import {compose} from "redux";
import {NavLink} from "react-router-dom";

let styles = {
    wrapperContent: {
        border: '1px solid #197c71',
        borderRadius: '30px',
        maxWidth: '25vh',
        minHeight: '3vh',

        display: 'grid',
        gridTemplateColumns: '1fr 5fr'
    },

    shapeIcon: {
        gridColumn: '1',
        background: '#197c71',
        width: '25px',
        borderRadius: '40px',
        margin: '5px'
    },

    userInfo: {
        paddingTop: '5px',
        gridColumn: '2',
        justifySelf: 'start',
        display: 'grid',
    },

    welcome: {
        fontSize: '8px',
        justifySelf: 'start'
    },

    userName: {
        fontSize: '10px',
        color: '#197c71',
        fontWeight: 'bold',
        justifySelf: 'start'
    },

    icon: {
        marginTop: '5px'
    },

    button: {
        gridColumn: '3',
    },

    login: {
        gridColumn: '2',
        textAlign: 'center',
        textDecoration: 'none',
        color: '#197c71',
        "&:hover": {
            textDecoration: 'outline'
        }
    }


};

const UserInfo = (props) => {
    const {classes, isAuth, user} = props;
    return <div className={isAuth && classes.wrapperContent}>
        {isAuth ? <>
                <div className={classes.shapeIcon}>
                    <img src={shapeIcon} className={classes.icon}/>
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.welcome}>
                        Welcome
                    </div>
                    <div className={classes.userName}>
                        {user.userName}
                    </div>
                </div>
                <div className={classes.button}>
                    <div className={s.topMenu}>
                        <div>
                            <button className={s.submenuLink}><img src={iconDown}/></button>
                            <div className={s.submenu}>
                                <button><img src={editProfile}/> Edit Account Information</button>
                                <button><img src={signOut}/>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            : <NavLink to={'/'} className={classes.login}>Sign In</NavLink>}
    </div>
};




const UserInfoContainer = (props) => {
    return <UserInfo {...props}/>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
        user: state.loginPage.user,
    }
}

export default compose(
    injectSheet(styles),
    connect(mapStateToProps)
)(UserInfoContainer);