import {apiInstance} from "./apiInstance";
import {reactLocalStorage} from "reactjs-localstorage";

const loginApi = {
    login(values) {
        debugger
        return new Promise((res,rej) => {
            if(values.email == 'artem.bazunts@intexsteel.kz' && values.password == 1){
                res({status: 'ok', user: {userId: '1', userName: 'Artem', role: 'inspector'}})
            } else res({status: 'error', message:'Invalid email or password'})
        })
        // return apiInstance.post('', email, password).then(response => {
        //     return response;
        // }).catch( err => err)
    },

    isAuth() {
        return new Promise((res,rej) => {
            const auth = reactLocalStorage.getObject('auth');
            debugger
            if(auth.userId){
                res({status: 'ok', auth})
            } else res({status: 'error', message:'You are not authorized'})
        })
        // return apiInstance.get('').then(response => {
        //     return response;
        // }).catch( err => err)
    },



};

export default loginApi;