import React from 'react';
import {Field} from 'formik';
import './style.css';
import injectSheet from "react-jss";

const styles = {
    row: {
        marginTop: "30px",
        marginBottom: "5px",
    },

    title: {
        color: "#676767",
        fontSize: "16px",
        fontWeight: "600",
        paddingBottom: "6px",
        textAlign: 'left'
    },

    field: {
        width: "100%",
        height: "41px",
        borderRadius: "5px",
        border: "1px solid #e4e8ee",
        backgroundColor: "#ffffff",
        outline: "none",
        padding: "10px 15px",
        boxSizing: "border-box",
        color: "#3f4751",
        fontSize: "16px",
        fontWeight: "500",
    },

    fieldError: {
        marginTop: "5px",
        color: "#da2626",
    }
};

const FieldWrapper = (props) => {
    const {classes} = props;
    return <div className={classes.row}>
        <div className={classes.title}>
            {props.title}
        </div>
        <Field className={classes.field} {...props}>
            {props.children}
        </Field>
        {props.errors[props.name] && props.touched[props.name] ? (
            <div className={classes.fieldError}>
                {props.t(props.errors[props.name])}
            </div>
        ) : null}
    </div>
};

export default injectSheet(styles)(FieldWrapper);