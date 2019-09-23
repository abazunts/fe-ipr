import React from 'react';
import HeaderContainer from "./ui/Header/Header";
import injectSheet from "react-jss";

let styles = {
    wrapperContent: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f9f9f9'
    },

    header: {
        boxShadow: '1px 31px 18px -27px #c5c5c5'
    }

};

const App = (props) => {
    const {classes} = props;
    return (
        <div className={classes.wrapperContent}>
            <div className={classes.header}>
                <HeaderContainer/>
            </div>
            <div>
                Content
            </div>
            <div>
                Footer
            </div>
        </div>
    );
};

export default injectSheet(styles)(App);

