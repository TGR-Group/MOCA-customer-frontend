import axios from 'axios'

const DB_URL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = DB_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

export async function getUserData() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null) {
        await axios.post('/register')
            .then(response => {
                    localStorage.setItem('userData', JSON.stringify(response.data));
                    console.log(response.data);
                    userData = response.data;
                })
            .catch(error => {
                    console.log(error);

                });
        };

    return userData;
};

export async function getStoreDatas() {
    await axios.get(DB_URL + '/programs')
        .then(response => {
                const storeDatas = response.data;
            })
        .catch(error => {
                const storeDatas = undefined;
                console.log(error);

            });
    return storeDatas;
}

export async function getStoreDataDetail(id) {
    await axios.get(DB_URL + '/programs/' + id)
        .then(response => {
                const storeDataDetail = response.data;
            })
        .catch(error => {
                const storeDataDetail = undefined;
                console.log(error);

            });
    return storeDataDetail;
}

export async function getQueue() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null) {
        userData = await getUserData();
    }
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
    return queue;
}

export async function registerQueue(id) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null) {
        userData = await getUserData();
    }
    await axios.post(DB_URL + '/visitor/wait',{
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
    return result;
}

export async function delateQueue(id) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (localStorage.getItem('userData') === null) {
        userData = await getUserData();
    }
    await axios.put(DB_URL + '/visitor/cancel',{
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
    return result;
}