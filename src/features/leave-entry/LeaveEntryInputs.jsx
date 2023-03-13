import React, { useState, useContext,useEffect } from 'react'
import './LeaveEntryInputs.css'
import { CancelButton, SaveButton } from '../../components/form-field/FormButton'
import InputField from '../../components/form-field/InputField'
import { Paper} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux'
// import { addLeave } from './leaveEntrySlice'
import { addNewLeave,updateLeave } from './leaveEntrySlice'
import { LeaveEntryContext } from './LeaveEntryContext'
import AutoCompleteField from '../../components/form-field/AutoCompleteField'
import { TextField } from '@mui/material'
import { getAllEmployees } from '../employee-setup/employeeSlice'
import Autocomplete from '@mui/material/Autocomplete';

const initialValue={
  employeeId: null,
  employeeName: '',
  leaveName:'',
  balanceDays:''
}

const LeaveEntryInputs = () => {
  //using context
  const {leaveData, setLeaveData}= useContext(LeaveEntryContext)

  // getting employees from store
  const employeeList = useSelector((state) => state.employeeStored)

  const dispatch = useDispatch()

  //Get employees on load
  useEffect(() => {
    dispatch(getAllEmployees())
  }, [])

  const formik=useFormik({
    initialValues:initialValue || leaveData,
    onSubmit:()=>{
      try {
            if(formik.values.id==0){
              dispatch(addNewLeave(formik.values))
              console.log(formik.values)}
            else
              dispatch(updateLeave(formik.values))
            formik.resetForm(initialValue)
      } catch (err) {
            console.error('Failed to save the post', err)
        
      } finally {
            // leaveEntryList.status='idle'
      }

    },
    validationSchema: Yup.object().shape({
      employee: Yup.mixed().required('Employee field is required'),
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
    // console.log(leaveData)
    formik.setValues(leaveData)
  }, [leaveData])


  // const [selectedValue, setSelectedValue] = useState(null);

  return (
    <>   
      <Paper style={{padding:'1rem', width:'30%'}}>
          <h2>Leave Type Entry</h2><hr/>
          <form onSubmit={formik.handleSubmit} className="inputContainer">
            <br/>
            {/* <div>{`value: ${selectedValue !== null ? `'${selectedValue.id}'` : 'null'}`}</div>
            <div>{`Display value: ${selectedValue !== null ? `'${selectedValue.employeeName}'` : 'null'}`}</div> */}
            <br/>
            <Autocomplete
                name="selectEmployee"
                value={formik.values.employeeId || null}
                options={employeeList.employees}
                getOptionLabel={(option) => option.employeeName ?? "" }
                isOptionEqualToValue={(option, value) => option.id === value}
                onChange={(event, newValue) => {
                  formik.setFieldValue('employeeId', newValue?.id);
                }}
                sx={{ width: 'auto' }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Employee"
                    error={formik.touched.employeeId && !!formik.errors.employeeId}
                    helperText={formik.touched.employeeId && formik.errors.employeeId}
                  />
                )}
            />


            <InputField 
              name='leaveName'
              className='inputBox'
              label='Leave Name' 
              type='text'
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur} 
              value={formik.values.leaveName}
              error={formik.touched.leaveName && !!formik.errors.leaveName}
              helperText={formik.touched.leaveName && formik.errors.leaveName}
            /> 
            {/* {formik.touched.leaveName && formik.errors.leaveName ? ( <div style={{color:'red'}}>{formik.errors.leaveName}</div>) : null} */}
            
            <InputField 
              name='balanceDays' 
              className='inputBox'
              type='number' 
              label='Balance Days' 
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur} 
              value={formik.values.balanceDays}
              error={formik.touched.balanceDays && !!formik.errors.balanceDays}
              helperText={formik.touched.balanceDays && formik.errors.balanceDays}
            /> 
            {/* {formik.touched.balanceDays && formik.errors.balanceDays ? ( <div style={{color:'red'}}>{formik.errors.balanceDays}</div>) : null} */}

            <div className="btnRow" style={{display:'flex'}}>
              <SaveButton type='submit' style={{marginRight:'1rem'}}>{formik.values.id ==0 ? 'Save':'Update'}</SaveButton>
              <CancelButton onClick={e=>formik.resetForm()}>Clear</CancelButton>
            </div>
          </form>
      </Paper>
    </>
  )
}

export default LeaveEntryInputs