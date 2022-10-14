/** axios package
 * Request interception, corresponding interception, unified error handling
 */
import axios from 'axios'
import QS from 'qs'
const instance = axios.create();

instance.defaults.baseURL = 'http://admin.gamephylum.xyz/'
instance.defaults.timeout = 10000
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


instance.interceptors.request.use(
  config => {
    if(config.newApi){
      config.baseURL = 'https://api.infinityme.io'
    }
    return config
  },
  error => {
    return Promise.error(error)
  })

instance.interceptors.response.use(
  response => {
    const {status,data} = response
   
    if (status === 200) {
      return Promise.resolve(data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    console.error(`axios onReject ${error}`)

    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          break
        case 403:
          break
        case 404:
          break
        default:
      }
      return Promise.reject(error.response)
    }
  }
)





export default instance;