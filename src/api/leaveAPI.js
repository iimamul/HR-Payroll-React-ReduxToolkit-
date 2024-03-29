import axios from 'axios'

const api=axios.create({
    baseURL: import.meta.env.VITE_API_BASE +'/LeaveBalances'
  })

export function fetchLeaveEntries(){
  const data=api.get('/', {
              // params: {
              //   title: "iPhone 9"
              // }
            }).then((function (response) {
              // console.log(response.data)
              return response.data
             
            })).catch(function (error) {
              console.log(error)

            })
  // console.log(data)

  return data
}

export function addNewLeaveBalance(newLeave){
  // console.log(newLeave)
  const data=api.post('/', newLeave)
                .then((function (response) {
                  // console.log(response.data)
                  return response.data
                }))
                .catch(function (error) {
                  console.log(error)

                })
  // console.log(data)

  return data
}

export function updateLeaveBalance(leave){
  // console.log(newLeave)
  const data=api.put('/'+leave.id, leave)
                .then((function (response) {
                  // console.log(response.data)
                  return leave
                }))
                .catch(function (error) {
                  console.log(error)

                })
  // console.log(data)

  return data
}

