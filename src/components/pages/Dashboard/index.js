import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Api from '../../services/callAPI';
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { fetchBeneficiayAction } from '../../redux/actions/beneficiayAction';
import { Link } from 'react-router-dom';

const api = new Api()

function Dashboard() {

  const dispatch = useDispatch();
  const { beneficiaries } = useSelector((state) => state.beneficiary)

  useEffect(() => {
    dispatch(fetchBeneficiayAction())
  },[])


  const handleDeleteUser = async(id) => {
    const confirmed = window.confirm('Are you sure you want to delete this beneficiary?');
    if (confirmed) {
      api.DeleteBeneficiaries({"param" : id})
      await new Promise((r) => setTimeout(r, 1000));
      dispatch(fetchBeneficiayAction())
    } else {
      console.log('User canceled delete beneficiary');
    }

  }

  // if(!beneficiaries.length){
  //   empty  = <h3>Please add the beneficiary</h3>
  // }

  return (  
    <div className='dashboard'>
    
        <div className='dashboard-title'>
          <h4>List of the Beneficiaries</h4>
          <Link className='btn btn-info' to={"/"}>Home</Link>
          <Link className='btn btn-info' to={"/beneficiary"}>Add New Beneficiary</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Account Number</th>
              <th>Bank Name</th>
              <th>Account Type</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>   
          <tbody>
             {
              beneficiaries?.map((item, index) => {
                return(
                  <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.accountno}</td>
                    <td>{item.bankname}</td>
                    <td>{item.typeofaccount}</td>
                    <td>
                      <Link to={`/beneficiaries/details/${item.id}`}><GrView /></Link>
                    </td>
                    <td>
                      <Link to={`/beneficiaries/edit/${item.id}`}><FaRegEdit /></Link>
                    </td>
                    <td>
                      <AiTwotoneDelete fill='red' onClick={() => handleDeleteUser(item.id)}/>
                    </td>
                  </tr>
                )
              })
             }
          </tbody>   
        </table>
    </div>

  )
}

export default Dashboard