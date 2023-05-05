
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const Protected_routing = ({isAuthenticatin,Children })=>{
  if(!isAuthenticatin){
    return<Navigate to={"/Login"} /> 
    
  }
  return Children?Children:<Outlet/>


};
export default Protected_routing
