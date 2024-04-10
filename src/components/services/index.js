
export default class Api {
   

    fetch = ( url, method, body ) => {
        
        let opt = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text/plain, */*",
            },
            body: body,
        }
        return fetch(url, opt).then((response) => response.json())
    }


    fetchParams = (url, method, body, params) => {

        let opt = {
            method: method,
             headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text/plain, */*",
            },
            body: body,
        }
        if (params) {
            url += `${params}`;
        }

        return fetch(url, opt).then((response) => response.json())
    }
    
}
