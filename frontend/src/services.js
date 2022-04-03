import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
export const GetTaskByID = async (id) => {
  try {
    const result = await instance
      .request({
        url: `/tasks/${id}`,
        method: 'GET',
      })
      .then((response) => {
        return response
      })
    return result
  } catch (e) {
    console.error(e)
    return e
  }
}
