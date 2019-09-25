import React from "react";
import Button from "../../elements/Button/button";
import Select from "../../elements/field/Select";
import Field from '../../elements/field';
import style from './css/style.module.css'



const ViolationAdd = (props) => {
    const {violation, setViolation, count, setCount, t, errors, touched} = props;
    const onChange = (event) => {
        setCount(event.currentTarget.value)
    };
    return <div>
        <div>
            <div>
                <Select name='violationItems' title={t("inspections.violationItems")}
                        value={violation} t={t} onChange={setViolation}/>
            </div>
            <div>
                <Field name="violationsCount"
                       title={t("inspections.violationsCount")}
                       value={count} onChange={onChange}
                       errors={errors} touched={touched} type={'number'}/>
            </div>
        </div>
        <div className={style.buttons}>
            <div className={style.button}>
                <Button title={props.t("inspections.saveButton")} width={'60px'}/>
            </div>
            <div className={style.button}>
                <Button onClick={props.onClick} title={props.t("inspections.closeButton")} width={'60px'}/>
            </div>
        </div>
    </div>
};

export default ViolationAdd