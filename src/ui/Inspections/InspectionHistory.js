import React from 'react';
import MaterialTable from 'material-table';
import {connect} from "react-redux";
import {compose} from "redux";
import {translate} from "react-i18next";
import {withRouter} from "react-router-dom";
import InspectionInfo from "./InspectionInfo";

const InspectionsHistory = (props) => {
    return <div>
        {!props.id ?
            <MaterialTable
                title="Inspections"
                columns={props.columns}
                data={props.data}
                onRowClick={(event, rowData) => {
                    props.history.push(`../inspections/${rowData.id}`);
                }}
            />
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
    withRouter,
    connect(mapStateToProps, null),
    translate("common"),
)(InspectionsHistoryContainer)