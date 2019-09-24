import React from 'react';
import HeaderContainer from "./ui/Header/Header";
import injectSheet from "react-jss";
import {Route} from "react-router-dom";
import LoginContainer from "./ui/Login/Login";

let styles = {
    wrapperContent: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f9f9f9',
        height: '100vh',
    },

    header: {
        boxShadow: '1px 31px 18px -27px #c5c5c5'
    },

    content: {
        alignSelf: 'center',
    },

    footer: {
        position: "absolute",
        left: '0',
        bottom: '0',
        width: '100%',
        height: '40px',
        background: 'white',
        textAlign: 'center',
        paddingTop: '10px',
        color: '#888888',
        fontSize: '12px'
    },

};

const App = (props) => {
    const {classes} = props;
    return (
        <div className={classes.wrapperContent}>
            <div className={classes.header}>
                <HeaderContainer/>
            </div>
            <div className={classes.content}>
                <Route exact path={'/'} render={() => <LoginContainer/>}/>
            </div>
            <div className={classes.footer}>
                <span>All rights reserved for the Saudi Authority for Intellectual Property © 2019</span>
            </div>

            {/*<Route  exact path={'/'} render={() => <div>Home</div> }/>*/}
        </div>
    );
};

export default injectSheet(styles)(App);

