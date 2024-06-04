import StoreDatasSample from '../assets/StoreDatasSample.json';
import UserDataSample from '../assets/UserDataSample.json';
import QueueSample from '../assets/QueuesSample.json';
import timeTableData from '../assets/TimeTables.json';

export const DB_URL = 'http://192.168.100.5:8122';
export const THIS_SITE_URL= 'https://localhost:5173/';
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

