import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAction } from '../../redux/actions/userAction';
import { AiTwotoneDelete } from "react-icons/ai";
import Api from '../../services/callAPI';
import Customer from '../Customer';
import { Link } from 'react-router-dom';


const api = new Api()
// import { increment, decrement } from '../../redux/actions/countAction';

function Home() {

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserAction())
  },[])

  const handleDeleteUser = async(id) => {
    api.DeleteUsers({"param" : id})
    await new Promise((r) => setTimeout(r, 1000));
    dispatch(fetchUserAction())
  }


  return (
    <div className='container'>
      <Customer />
      {/* {users && users.length ? 
        <div className='user-dashboard'>
        <div className='user-titel'>
        <h4>Customer List</h4>
        <Link className='btn btn-info' to={"/dashboard"} >Beneficiary</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Country</th>
              <th>Pincode</th>
              <th></th>
            </tr>
          </thead>   
          <tbody>
             {
              users?.map((item, index) => {
                return(
                  <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.country}</td>
                    <td>{item.pincode}</td>
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
        :
        <Customer />
      } */}
    </div>

  )
}

export default Home