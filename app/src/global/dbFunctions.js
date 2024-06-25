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
            await axios.post('/register')
                .then(response => {
                    localStorage.setItem('userData', JSON.stringify(response.data));
                    console.log(response.data);
                    userData = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
    }
    return userData;
};

export async function getStoreDatas() {
    let storeDatas = [];
    await axios.get(DB_URL + '/programs')
        .then(response => {
            storeDatas = response.data;
        })
        .catch(error => {
            storeDatas = undefined;
            console.log(error);
        });
    return storeDatas;
}

export async function getStoreDataDetail(id) {
    let storeDataDetail = {};
    await axios.get(DB_URL + '/programs/' + id)
        .then(response => {
            storeDataDetail = response.data;
        })
        .catch(error => {
            storeDataDetail = undefined;
            console.log(error);
        });
    return storeDataDetail;
}

export async function getQueue() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || Object.keys(userData) === 0){
        userData =  getUserData();
    }
    let queue = [];
    await axios.get(DB_URL + '/visitor/queue',{
        headers: {
            'Authorization': `Bearer ${userData.token}`,
        },})
        .then(response => {
                queue = response.data;
            })
        .catch(error => {
                console.log(error);

            });
    return queue;
}

export async function registerQueue(id) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || Object.keys(userData) === 0){
        userData =  getUserData();
    }
    let result = undefined;
    await axios.post(DB_URL + '/visitor/wait',{
            headers: {
                'Authorization': `Bearer ${userData.token}`,
            },
            programId: id,
        })
        .then(response => {
                result = response.data;
            })
        .catch(error => {
                console.log(error);

            });
    return result;
}

export async function delateQueue(id) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || Object.keys(userData) === 0){
        userData =  getUserData();
    }
    let result = undefined;
    await axios.put(DB_URL + '/visitor/cancel',{
            headers: {
                'Authorization': `Bearer ${userData.token}`,
            },
            programId: id,
        })
        .then(response => {
                result = response.data;
            })
        .catch(error => {
                console.log(error);

            });
    return result;
}