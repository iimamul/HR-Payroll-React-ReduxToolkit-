import axios from 'axios'

const api=axios.create({
    baseURL:'https://dummyjson.com/'
  })

export function fetchLeaveEntries(){
  const data=api.get('/products', {
              params: {
                title: "iPhone 9"
              }
            }).then(function (response) {
              console.log(response)
              
            }).catch(function (error) {
              console.log(error)

            })


  return data.products
}
  


