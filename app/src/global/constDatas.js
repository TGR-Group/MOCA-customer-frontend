import StoreDatasSample from '../assets/StoreDatasSample.json';
import UserDataSample from '../assets/UserDataSample.json';
import QueueSample from '../assets/QueuesSample.json';
import timeTableData from '../assets/TimeTables.json';
import StoreDataDetail from '../assets/StoreDetail.json';

export const API_URL = 'https://api.project-moca.com';
export const THIS_SITE_URL= 'https://app.project-moca.com/';
/*
axios.get(DB_URL+'/programs')
    .then(response => {
        const storeDatas = response.data;
    })
    .catch(error => {
        console.log(error);
        const storeDatas = undefined;
    });
*/


export const storeDatas = StoreDatasSample;
export const userData = UserDataSample;
export const queues = QueueSample;
export const timeTables = timeTableData;
export const storeDataDetail = StoreDataDetail;
