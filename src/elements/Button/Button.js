import React from 'react';
import injectSheet from "react-jss";

let styles = {
    button: {
        cursor: 'pointer',
        background: '#00a19b',
        border: 'none',
        borderRadius: '25px',
        color: 'white',
        padding: '10px',
        width: '150px',
        boxShadow: '1px 3px 14px -1px  #009A94',

    },
    buttonWrapper: {

    }
};

const Button = props => {
    const {classes} = props;
    return <div className={classes.buttonWrapper}>
        <button className={classes.button} onClick={props.onClick}>
            <span>{props.title}</span>
        </button>
    </div>

};

export default injectSheet(styles)(Button)