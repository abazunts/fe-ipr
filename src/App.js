import React from 'react';
import HeaderContainer from "./ui/Header/Header";
import injectSheet from "react-jss";
import {Route} from "react-router-dom";
import LoginContainer from "./ui/Login/Login";
import InspectionsHistoryContainer from "./ui/Inspections/InspectionHistory";
import NewInspectionContainer from "./ui/Inspections/NewInspectionForm";

let styles = {
    wrapperContent: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f9f9f9',
        height: '100vh',
        overflowY: 'auto',
    },
    header: {
        boxShadow: '1px 31px 18px -27px #c5c5c5',
        position: "sticky",
        top: '0',
    },

    content: {
        alignSelf: 'center',
        marginTop: '50px',
        maxWidth: '100vh',
        maxHeight: '70vh',
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
        <div {...props} className={classes.wrapperContent}>
            <div className={classes.header}>
                <HeaderContainer/>
            </div>
            <div className={classes.content}>
                <Route exact path={'/login'} render={() => <LoginContainer/>}/>
                <Route exact path={'/inspections/:id?'} render={() => <InspectionsHistoryContainer/>}/>
                <Route exact path={'/inspections/add'} render={() => <NewInspectionContainer/>}/>
            </div>
            <div className={classes.footer}>
                <span>All rights reserved for the Saudi Authority for Intellectual Property © 2019</span>
            </div>

            {/*<Route  exact path={'/'} render={() => <div>Home</div> }/>*/}
        </div>
    );
};

const AppContainer = (props) => {
    const [innerWidth, setInnerWidth] = React.useState(0)
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, []);

    return <App {...props} innerWidth={innerWidth}/>
};


export default injectSheet(styles)(AppContainer);

