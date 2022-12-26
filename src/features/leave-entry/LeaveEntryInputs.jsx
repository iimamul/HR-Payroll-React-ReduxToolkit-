import React, { useState, useContext,useEffect } from 'react'
import './LeaveEntryInputs.css'
import { CancelButton, SaveButton } from '../../components/form-field/FormButton'
import InputField from '../../components/form-field/InputField'
import { Paper} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import { useDispatch } from 'react-redux'
// import { addLeave } from './leaveEntrySlice'
import { addNewLeave,updateLeave } from './leaveEntrySlice'
import { LeaveEntryContext } from './LeaveEntryContext'


const initialValue={
  id:0,
  leaveName:'',
  balanceDays:''
}

const LeaveEntryInputs = () => {
  //using context
  const {leaveData, setLeaveData}= useContext(LeaveEntryContext)

  // const leaveEntryList = useSelector((state) => state.leaveEntries)
  const dispatch = useDispatch()


  const formik=useFormik({
    initialValues:initialValue || leaveData,
    onSubmit:()=>{
      try {
            // console.log(formik.values)
            // dispatch(addLeave(formik.values))
            // leaveEntryList.status="loading"
            if(formik.values.id==0)
              dispatch(addNewLeave(formik.values))
            else
              dispatch(updateLeave(formik.values))
            formik.resetForm(initialValue)
      } catch (err) {
            console.error('Failed to save the post', err)
        
      } finally {
            // leaveEntryList.status='idle'
      }

    },
    validationSchema: Yup.object({
      leaveName: Yup.string()
            .max(20, 'Leave Name must be 20 charcter or less')
            .required('Leave Name is Required'),
      balanceDays: Yup.number()
            .required('Allowed days is Required')
            .max(30,'Max value should be 30'),
    })
  })

  //set context value on edit
   useEffect(() => {
    console.log(leaveData)
    formik.setValues(leaveData)
  }, [leaveData])


  return (
    <>   
      <Paper style={{padding:'1rem', width:'30%'}}>
          <h2>Leave Type Entry</h2><hr/>
          <form onSubmit={formik.handleSubmit} className="inputContainer">
            <InputField 
              name='leaveName'
              className='inputBox'
              label='Leave Name' 
              type='text'
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur} 
              value={formik.values.leaveName}
            /> 
            {formik.touched.leaveName && formik.errors.leaveName ? ( <div>{formik.errors.leaveName}</div>) : null}
            
            <InputField 
              name='balanceDays' 
              className='inputBox'
              type='number' 
              label='Balance Days' 
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur} 
              value={formik.values.balanceDays}
            /> 
            {formik.touched.balanceDays && formik.errors.balanceDays ? ( <div>{formik.errors.balanceDays}</div>) : null}

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