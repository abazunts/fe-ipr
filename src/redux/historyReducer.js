import {columnsTableHistory} from "../models/tableData";
import {nationality} from "../assets/nationality/nationality";
import {reactLocalStorage} from "reactjs-localstorage";

const SET_SELECTED_ROW = 'ENFORCEMENT/HISTORY_REDUCER/SET_SELECTED_ROW';
const SET_INSPECTION = 'ENFORCEMENT/HISTORY_REDUCER/SET_INSPECTION';

const inspectionType = ['Visit', 'Report', 'Complain'];

const initState = {
        data: [
            {
                id: '0',
                startTime: '12.09.2019',
                violation: false,
                inspectionType: 'Visit',
                complain: 1,
                shopName: 'Test Name',
                shopLocation: 'Location',
                ownerName: 'Artem',
                ownerPhone: '3121-21-212-5',
                ownerId: 214,
                licenseNumber: 12121,
                licenseDate: '18.09.2019',
                inspectionDate: '28.09.2019',
                inspectionTime: '13:10:50',
                employeeName: 'Employee Name',
                employeeId: '12',
                nationality: ['ssdvs', 'sdvsdv', 'sdfsdffs'],
                violationItems: ['violation 1', 'violation 2', 'violation 2'],
                violationsCount: 3,
                notes: 'notes text',
                shopPersonName: 'Shop Person Name',
                signature: 'Signature',
                shopPersonNationality: 'Shop Person Nationality',
                shopPersonId: 'Shop Person ID',
                inspectorName: 'Inspection Name',
                inspectionSignature: 'Inspection Signature',
                inspectionEndTime: '18.09.2019 16:30:00',
                attachments: []
            },
            {
                id: '1',
                startTime: '12.09.2019',
                violation: false,
                inspectionType: 'Visit',
                complain: 1,
                shopName: 'Test Name',
                shopLocation: 'Location',
                ownerName: 'Artem',
                ownerPhone: '3121-21-212-5',
                ownerId: 214,
                licenseNumber: 12121,
                licenseDate: '18.09.2019',
                inspectionDate: '28.09.2019',
                inspectionTime: '13:10:50',
                employeeName: 'Employee Name',
                employeeId: '12',
                nationality: ['ssdvs', 'sdvsdv', 'sdfsdffs'],
                violationItems: ['violation 1', 'violation 2', 'violation 2'],
                violationsCount: 3,
                notes: 'notes text',
                shopPersonName: 'Shop Person Name',
                signature: 'Signature',
                shopPersonNationality: 'Shop Person Nationality',
                shopPersonId: 'Shop Person ID',
                inspectorName: 'Inspection Name',
                inspectionSignature: 'Inspection Signature',
                inspectionEndTime: '18.09.2019 16:30:00',
                attachments: []
            },
            {
                id: '2',
                startTime: '12.09.2019',
                violation: false,
                inspectionType: 'Visit',
                complain: 1,
                shopName: 'Test Name',
                shopLocation: 'Location',
                ownerName: 'Artem',
                ownerPhone: '3121-21-212-5',
                ownerId: 214,
                licenseNumber: 12121,
                licenseDate: '18.09.2019',
                inspectionDate: '28.09.2019',
                inspectionTime: '13:10:50',
                employeeName: 'Employee Name',
                employeeId: '12',
                nationality: ['ssdvs', 'sdvsdv', 'sdfsdffs'],
                violationItems: ['violation 1', 'violation 2', 'violation 2'],
                violationsCount: 3,
                notes: 'notes text',
                shopPersonName: 'Shop Person Name',
                signature: 'Signature',
                shopPersonNationality: 'Shop Person Nationality',
                shopPersonId: 'Shop Person ID',
                inspectorName: 'Inspection Name',
                inspectionSignature: 'Inspection Signature',
                inspectionEndTime: '18.09.2019 16:30:00',
                attachments: []
            },
            {
                id: '3',
                startTime: '12.09.2019',
                violation: false,
                inspectionType: 'Visit',
                complain: 1,
                shopName: 'Test Name',
                shopLocation: 'Location',
                ownerName: 'Artem',
                ownerPhone: '3121-21-212-5',
                ownerId: 214,
                licenseNumber: 12121,
                licenseDate: '18.09.2019',
                inspectionDate: '28.09.2019',
                inspectionTime: '13:10:50',
                employeeName: 'Employee Name',
                employeeId: '12',
                nationality: ['ssdvs', 'sdvsdv', 'sdfsdffs'],
                violationItems: ['violation 1', 'violation 2', 'violation 2'],
                violationsCount: 3,
                notes: 'notes text',
                shopPersonName: 'Shop Person Name',
                signature: 'Signature',
                shopPersonNationality: 'Shop Person Nationality',
                shopPersonId: 'Shop Person ID',
                inspectorName: 'Inspection Name',
                inspectionSignature: 'Inspection Signature',
                inspectionEndTime: '18.09.2019 16:30:00',
                attachments: []
            }
        ],

        rowId: null,

        columnsTable: columnsTableHistory,
        nationality: nationality,
        violationItems: [{value: 'Photocopied Book'}, {value: 'Imitated Book'},
            {value: 'Cassette'}, {value: 'DVD-CD'}, {value: 'Cassette Copy Machine'},
            {value: 'DVD-CD Copy Machine'}, {value: 'PC Desktop'}, {value: 'Laptob'},
            {value: 'Flash Memory'}, {value: 'Hardisk'}, {value: 'Receiver'}, {value: 'Phone Memory Card'}]
    }
;


const historyReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SELECTED_ROW:
            return {
                ...state,
                rowId: action.rowId,
            };
        case SET_INSPECTION:
            return {
                ...state,
                data: [...state.data, action.data],
            };
        default:
            return state
    }
};

export const setSelectedRow = (rowId) => ({type: SET_SELECTED_ROW, rowId});
export const setInspection = (data) => ({type: SET_INSPECTION, data});


export const addInspection = (inspection) => (dispatch) => {
    debugger

    reactLocalStorage.setObject('inspections', null);
};

export default historyReducer;

