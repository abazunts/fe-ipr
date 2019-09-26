import React from "react";
import Button from "../../elements/Button/button";
import Select from "../../elements/field/Select";
import Field from '../../elements/field';
import style from './css/style.module.css'
import ModalViolation from "../Modal/ModalViolation";


const ViolationAdd = (props) => {
    const {count, setCount, t, errors, touched, i18n, state, setState, violationItems} = props;

    const onChange = (event) => {
        setCount(event.currentTarget.value)
    };

    const saveViolation = () => {
        const data = [...state.violations];
        data.push({title: 'Photocopied Book', count: count});
        setState({...state, violations: data});
        setCount(null);
        props.onClick()
    };
    return <div>
        <div>
            <div>
                <Select name='violationItems' title={t("inspections.violationItems")}
                        value={violationItems} t={t}  i18n={i18n}/>
            </div>
            <div>
                <Field name="violationsCount"
                       title={t("inspections.violationsCount")}
                       errors={errors} touched={touched} type={'number'} i18n={i18n} onChange={onChange} value={count}/>
            </div>
        </div>
        <div className={style.buttons}>
            <div className={style.button}>
                <Button title={props.t("inspections.saveButton")} width={'60px'} onClick={saveViolation}/>
            </div>
            <div className={style.button}>
                <Button onClick={props.onClick} title={props.t("inspections.closeButton")} width={'60px'}/>
            </div>
        </div>
    </div>
};

export default ViolationAdd