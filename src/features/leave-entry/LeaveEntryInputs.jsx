import React, { useState } from 'react'
import './LeaveEntryInputs.css'
import { CancelButton, SaveButton } from '../../components/form-field/FormButton'
import InputField from '../../components/form-field/InputField'
import { Paper} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux'
import { addLeave } from './leaveEntrySlice'


const initialValue={
  leaveName:'',
  allowedDays:0
}

const LeaveEntryInputs = () => {

  const leaveEntryList = useSelector((state) => state.leaveEntries)
  const dispatch = useDispatch()


  const formik=useFormik({
    initialValues:initialValue,
    onSubmit:(values)=>{
        dispatch(addLeave(formik.values))
        formik.resetForm(initialValue)
    },
    validationSchema: Yup.object({
      leaveName: Yup.string()
            .max(10, 'Leave Name must be 10 charcter or less')
            .required('Leave Name is Required'),
      allowedDays: Yup.number()
            .required('Allowed days is Required')
            .max(20,'Max value should be 20'),
    })
  })

 
  return (
    <>   
      <Paper style={{padding:'1rem', width:'30%'}}>
          <h2>Leave Type Entry</h2><hr/>
          <form onSubmit={formik.handleSubmit} className="inputContainer">
            <InputField 
              name='leaveName'
              className='inputBox'
              label='Leave Name' 
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur} 
              value={formik.values.firstName}
            /> 
            {formik.touched.leaveName && formik.errors.leaveName ? ( <div>{formik.errors.leaveName}</div>) : null}
            
            <InputField 
              name='allowedDays' 
              className='inputBox'
              type='number' 
              label='Allowed Days' 
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur} 
              value={formik.values.allowedDays}
            /> 
            {formik.touched.allowedDays && formik.errors.allowedDays ? ( <div>{formik.errors.allowedDays}</div>) : null}

            <div className="btnRow" style={{display:'flex'}}>
              <SaveButton type='submit' style={{marginRight:'1rem'}}>Save</SaveButton>
              <CancelButton onClick={e=>formik.resetForm()}>Clear</CancelButton>
            </div>
          </form>
      </Paper>
    </>
  )
}

export default LeaveEntryInputs