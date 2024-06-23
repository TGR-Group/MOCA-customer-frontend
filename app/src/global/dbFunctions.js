import axios from 'axios'

/**demo用 */
import userDataSample  from '../assets/UserDataSample.json';
import storeDatasSample  from '../assets/StoreDatasSample.json';
import storeDataDetailSample  from '../assets/StoreDetail.json';
import queueSample  from '../assets/QueuesSample.json';

const DB_URL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = DB_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

export async function getUserData() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || Object.keys(userData) === 0) {
    /*** 本番用
            await axios.post('/register')
                .then(response => {
                    localStorage.setItem('userData', JSON.stringify(response.data));
                    console.log(response.data);
                    userData = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
    ***/
    /*** Demo用 ***/
        userData = userDataSample;
    }
    return userData;
};

export async function getStoreDatas() {
    /***
        await axios.get(DB_URL + '/programs')
            .then(response => {
                const storeDatas = response.data;
            })
            .catch(error => {
                const storeDatas = undefined;
                console.log(error);
            });
    ***/
    const storeDatas = storeDatasSample;
    return storeDatas;
}

export async function getStoreDataDetail(id) {
    /***
    let storeDataDetail = {};
        await axios.get(DB_URL + '/programs/' + id)
            .then(response => {
                storeDataDetail = response.data;
            })
            .catch(error => {
                storeDataDetail = undefined;
                console.log(error);
            });
    */
    const storeDataDetail = storeDataDetailSample[id];
    return storeDataDetail;
}

export async function getQueue() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || Object.keys(userData) === 0){
        userData =  getUserData();
    }
    /***
        await axios.get(DB_URL + '/visitor/queue',{
        headers: {
            'Authorization': `Bearer ${userData.token}`,
        },})
        .then(response => {
                const queue = response.data;
            })
        .catch(error => {
                const queue = undefined;
                console.log(error);

            });
            ***/
    const queue = queueSample;
    return queue;
}

export async function registerQueue(id) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || Object.keys(userData) === 0){
        userData =  getUserData();
    }
    /***
    axios.post(DB_URL + '/visitor/wait',{
            headers: {
                'Authorization': `Bearer ${userData.token}`,
            },
            programId: id,
        })
        .then(response => {
                const result = response.data;
            })
        .catch(error => {
                const result = undefined;
                console.log(error);

            });
    ***/
    const result = queueSample;
    sessionStorage.setItem("reserve", 1);
    return result;
}

export async function delateQueue(id) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || Object.keys(userData) === 0){
        userData =  getUserData();
    }
    /***
     axios.put(DB_URL + '/visitor/cancel',{
            headers: {
                'Authorization': `Bearer ${userData.token}`,
            },
            programId: id,
        })
        .then(response => {
                const result = response.data;
            })
        .catch(error => {
                const result = undefined;
                console.log(error);

            });
    ***/
    const result = queueSample;
    sessionStorage.setItem("reserve", 0);
    return result;
}