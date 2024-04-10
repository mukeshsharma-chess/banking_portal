

import Api from '.';
import { endpoints } from './endpoints';


export default class callAPI extends Api {


    Countries(data){
        let url = endpoints.Countries.countries
        return this.fetch(url, "GET", null, data ).then(response => response)
    }

    User(data) {
        let url = endpoints.User.user
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }

    Users(data){
        let url = endpoints.User.user
        return this.fetch(url, "GET", null, data ).then(response => response)
    }


    DeleteUsers(data){
        let url = endpoints.User.user
        return this.fetchParams(url, "DELETE", null, `/${data.param}` ).then(response => response)
    }

    Beneficiary(data) {
        let url = endpoints.Beneficiary.beneficiary
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }

    Beneficiaries(data){
        let url = endpoints.Beneficiary.beneficiary
        return this.fetch(url, "GET", null, data ).then(response => response)
    }


    BeneficiaryDetails(data){
        console.log("BeneficiaryDetails", data)
        let url = endpoints.Beneficiary.beneficiary
        return this.fetchParams(url, "GET", null, `/${data.param}` ).then(response => response)
    }

    DeleteBeneficiaries(data){
        let url = endpoints.Beneficiary.beneficiary
        return this.fetchParams(url, "DELETE", null, `/${data.param}` ).then(response => response)
    }

    UpdateBeneficiaries(item){
        let url = endpoints.Beneficiary.beneficiary
        return this.fetchParams(url, "PUT", JSON.stringify(item.data), `/${item.param}` ).then(response => response)
    }

}