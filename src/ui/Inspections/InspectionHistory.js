import React from 'react';
import MaterialTable from 'material-table';
import {connect} from "react-redux";
import {compose} from "redux";
import {translate} from "react-i18next";
import {withRouter} from "react-router-dom";
import InspectionInfo from "./InspectionInfo";
import Button from "../../elements/Button/button";
import injectSheet from "react-jss";

const styles = {
    addButton: {
        marginBottom: '20px',
        textAlign: 'right',
    }
};

const InspectionsHistory = (props) => {
    const {t, classes} = props;
    return <div>
        {!props.id ?
            <div>
                <div className={classes.addButton}>
                    <Button title={t("inspections.btnNewInspection")}/>
                </div>
                <MaterialTable
                    title="Inspections"
                    columns={props.columns}
                    data={props.data}
                    onRowClick={(event, rowData) => {
                        props.history.push(`../inspections/${rowData.id}`);
                    }}
                />
            </div>
            : <InspectionInfo id={props.id}/>}

    </div>
};

const InspectionsHistoryContainer = (props) => {
    const {columnsTable, t} = props;
    const columns = Object.keys(columnsTable).map(key => ({title: t('inspections.' + key), field: key}));
    return <InspectionsHistory {...props} columns={columns}/>
};

const mapStateToProps = (state, props) => {
    return {
        data: state.historyPage.data,
        columnsTable: state.historyPage.columnsTable,
        id: props.match.params.id
    }
};


export default compose(
    injectSheet(styles),
    withRouter,
    connect(mapStateToProps, null),
    translate("common"),
)(InspectionsHistoryContainer)