import axios from 'axios'

const api=axios.create({
    baseURL:'https://localhost:7126/api/Employees'
  })

export function fetchEmployees(){
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

