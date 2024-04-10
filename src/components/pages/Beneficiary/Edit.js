import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addBeneficiayAction,beneficiaryDetailsAction } from '../../redux/actions/beneficiayAction';
import Api from '../../services/callAPI';

const api = new Api();

const accountType = [
  {id : 1, name : "Savings Account"},
  {id : 2, name : "Current Account"},
  {id : 3, name : "Joint Account"},
]

const EditForm = () => {

  const router = useNavigate()

  const dispatch = useDispatch();
  const { id } = useParams();

  const { beneficiaryDetails } = useSelector((state) => state.beneficiary)


  const { register, handleSubmit, formState:{ errors, isSubmitting }, setValue } = useForm();

  useEffect(()=>{
    dispatch(beneficiaryDetailsAction({"param": id}))
  },[router])


  useEffect(() => {
    if (beneficiaryDetails) {
      setValue('name', beneficiaryDetails.name);
      setValue('accountno', beneficiaryDetails.accountno);
      setValue('bankname', beneficiaryDetails.bankname);
      setValue('typeofaccount', beneficiaryDetails.typeofaccount);
    }
  }, [beneficiaryDetails, setValue]);


  const onSubmit = async (data) => {
    const confirmed = window.confirm('Are you sure you want to update this beneficiary?');
    if (confirmed) {
      api.UpdateBeneficiaries({data, "param" : id});
      await new Promise((r) => setTimeout(r, 1000));
      router("/dashboard");
    } else {
      console.log('User canceled adding beneficiary');
    }
  };
  
  console.log("firstbeneficiaryDetails", beneficiaryDetails)

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='title'>
        <h3>Edit Beneficiary</h3>
      </div>
        {/* <Link className='btn btn-primary' to={"/dashboard"}>Back on Dashboard</Link> */}
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
        {/* <input className='form-control' placeholder="Type of account." {...register("typeofaccount.",{
          required: "Required Fields",
          
          }) } /> */}
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
      <button className='btn btn-success' disabled={isSubmitting} type="submit">{isSubmitting ? "Loading" : "Update"}</button>
     </div>
     <div className='form-group'>
      <Link to={"/dashboard"} className='btn btn-info'>Cancel</Link>
     </div>
    </form>
    </div>
  );
};

export default EditForm;
