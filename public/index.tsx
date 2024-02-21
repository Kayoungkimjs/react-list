import axios from 'axios'

export const getGroupList = () =>
  axios
    .get('/group.json')
    .then((response) => {
      console.log('Response data:', response.data)
      return response
    })
    .catch((error) => {
      console.error('Error fetching group list:', error)
      throw error
    })

export const getItemsList = () =>
  axios
    .get('/items.json')
    .then((response) => {
      console.log('Response data:', response.data)
      return response
    })
    .catch((error) => {
      console.error('Error fetching group list:', error)
      throw error
    })
