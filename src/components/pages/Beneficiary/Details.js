import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { beneficiaryDetailsAction } from '../../redux/actions/beneficiayAction';
import { useDispatch, useSelector } from 'react-redux';


export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { beneficiaryDetails } = useSelector((state) => state.beneficiary)

  useEffect(()=>{
    dispatch(beneficiaryDetailsAction({"param": id}))
  },[])



  return (
    <div className='container'>
      <div className='beneficiary-details'>
        <div className='detail-title'>
        <h3>Beneficiary Details</h3>
        <Link className='btn-back' to={"/dashboard"}>Back</Link>
        </div>
        {
          beneficiaryDetails &&
          <div className='details'>
              <p> Name : {beneficiaryDetails.name}</p>
             <p> Account Number : {beneficiaryDetails.accountno}</p>
              <p>Bank Name : {beneficiaryDetails.bankname}</p>
              <p>Type of Account : {beneficiaryDetails.typeofaccount}</p>
            </div>
        }
        </div>
    </div>
  )
}
