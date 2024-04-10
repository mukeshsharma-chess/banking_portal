import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountriesAction } from '../../redux/actions/countryAction';
import { addUserAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

const Customer = () => {

  const dispatch = useDispatch();
  const router = useNavigate()
  const { countries } = useSelector((state) => state.countries)
  const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm();


  useEffect(() => {
    dispatch(fetchCountriesAction())
  },[])

  const onSubmit = async (data) => {
    dispatch(addUserAction(data))
    await new Promise((r) => setTimeout(r, 1000));
    router("/dashboard")
  };

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='title'>
        <h3>Add Customer</h3>
      </div>
      <div className='form-group'>
        <label>Full Name</label>
        <input className='form-control' placeholder="Enter your full Name" {...register("name",{
          required: "Required Fields" })} />
        {errors.name && <span className='text-danger'>{errors.name.message}</span>}
      </div>
      <div className='form-group'>
        <label>Address</label>
        <input className='form-control' placeholder="address" {...register("address",{
          required: "Required Fields" }) } />
        {errors.address && <span className='text-danger'>{errors.address.message}</span>}
      </div>
      <div className='form-group'>
        <label>Country</label>
        <select 
          className='form-control' 
          name="country" 
          {...register("country", {
            required: "Required Fields",
            validate: value => value !== "select" 
          })}
        >
          <option value="">Select</option>
          {countries?.map(country => (
            <option key={country.id} value={country.name}>{country.name}</option>
          ))}
        </select>
        {errors.country && <span className='text-danger'>{errors.country.message}</span>}
      </div>
      <div className='form-group'>
        <label>Pincode</label>
        <input className='form-control' name="pincode" {...register("pincode",{
          required: "Required Fields",
          maxLength: {
            value: 6,
            message: "Pincode should be 6 digits"
          },
          pattern: {
            value: /^[0-9]*$/,
            message: "Pincode should be numbers only"
          }
          }) } />
        {errors.pincode && <span className='text-danger'>{errors.pincode.message}</span>}
      </div>
     
     <div className='form-group'>
      <button className='btn btn-success' disabled={isSubmitting} type="submit">{isSubmitting ? "Loading" : "Submit"}</button>
     </div>
    </form>
    </div>
  );
};

export default Customer;
