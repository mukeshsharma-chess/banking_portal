
let baseUrl = process.env.REACT_APP_BASE_URL;

export const endpoints = {
   
    baseUrl,

    Countries: {
        countries:`${baseUrl}/countries`
    },
    User: {
        user:`${baseUrl}/users`
    },
    Beneficiary: {
        beneficiary:`${baseUrl}/Beneficiaries`
    },
}