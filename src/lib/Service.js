
export const fetchRequest = (url, method, params = '', withAuth = false) => {
    return new Promise(function (resolve, reject) {
        let fetchInitData = {
            method: method,
        }
        if (params !== '') {
            fetchInitData.body = JSON.stringify(params);
        }
        fetch(url, fetchInitData)
            .then((response) => response.json())
            .then((responseData) => {
                resolve(responseData)
            })
            .catch((err) => {
                reject(err);
            });
    })
}
