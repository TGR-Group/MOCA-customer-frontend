import axios from 'axios'


const DB_URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = DB_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export async function getUserData() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || Object.keys(userData) === 0) {
            await axios.post('/register')
                .then(response => {
                    localStorage.setItem('userData', JSON.stringify(response.data));
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
    await axios.get('/programs')
        .then(response => {
            storeDatas = response.data.programs;
        })
        .catch(error => {
            storeDatas = undefined;
            console.log(error);
        });
    return storeDatas;
}

export async function getStoreDataDetail(id) {
    let storeDataDetail = {};
    await axios.get('/program/' + id)
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
        await getUserData().then((data) => {
        userData = data;
    });;
    }
    let queue = [];
    await axios.get('/visitor/queue',{
        auth: {
            username: userData.id,
            password: userData.token,
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
        await getUserData().then((data) => {
        userData = data;
    });;
    }
    let result = undefined;
    await axios.post('/visitor/wait',{
        programId: id,
        },{
        auth: {
            username: userData.id,
            password: userData.token,
        },
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
        await getUserData().then((data) => {
        userData = data;
    });;
    }
    let result = undefined;
    await axios.post('/visitor/cancel',{
            programId: id,
        },{
        auth: {
            username: userData.id,
            password: userData.token,
        },
        })
        .then(response => {
                result = response.data;
            })
        .catch(error => {
                console.log(error);

            });
    return result;
}
