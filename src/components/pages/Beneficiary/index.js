import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBeneficiayAction,fetchBeneficiayAction } from '../../redux/actions/beneficiayAction';


const accountType = [
  {id : 1, name : "Savings Account"},
  {id : 2, name : "Current Account"},
  {id : 3, name : "Joint Account"},
]

const BeneficiaryForm = () => {

  const router = useNavigate()

  const dispatch = useDispatch();
  const { beneficiaries } = useSelector((state) => state.beneficiary)
  const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm();


  useEffect(() => {
    dispatch(fetchBeneficiayAction())
  },[])


  const onSubmit = async (data) => {
    const confirmed = window.confirm('Are you sure you want to add this beneficiary?');
    if (confirmed) {
      dispatch(addBeneficiayAction(data));
      await new Promise((r) => setTimeout(r, 1000));
      router("/dashboard");
    } else {
      console.log('User canceled adding beneficiary');
    }
  };
  

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='title'>
        <h3>Add New Beneficiary</h3>
      </div>
        <div className='form-group'>
          <label>Full Name</label>
          <input className='form-control' placeholder="Enter your full Name" {...register("name",{
            required: "Required Fields" })} />
          {errors.name && <span className='text-danger'>{errors.name.message}</span>}
        </div>
        <div className='form-group'>
          <label>Account Number</label>
          <input className='form-control' placeholder="Account Number" {...register("accountno",{
            required: "Required Fields",
            minLength: {
              value: 12,
              message: "Account number should be 12 digits"
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Account number should be numbers only"
            }
            }) } />
          {errors.accountno && <span className='text-danger'>{errors.accountno.message}</span>}
        </div>

        <div className='form-group'>
          <label>Bank name</label>
          <input className='form-control' placeholder="Bank name" {...register("bankname",{
            required: "Required Fields" }) } />
          {errors.bankname && <span className='text-danger'>{errors.bankname.message}</span>}
        </div>
        
        <div className='form-group'>
          <label>Type of account</label>
          <select 
            className='form-control' 
            name="typeofaccount" 
            {...register("typeofaccount", {
              required: "Required Fields",
              validate: value => value !== "select" 
            })}>
              <option value="">Select</option>
              {accountType?.map(item => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
          </select>
          {errors.typeofaccount && <span className='text-danger'>{errors.typeofaccount.message}</span>}
        </div>
      
      <div className='form-group'>
        <button className='btn btn-success' disabled={isSubmitting} type="submit">{isSubmitting ? "Loading" : "Submit"}</button>
      </div>
      </form>
    </div>
  );
};

export default BeneficiaryForm;
