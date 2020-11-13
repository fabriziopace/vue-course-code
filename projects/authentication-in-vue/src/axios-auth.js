import axios from 'axios'

const instance = axios.create({
  baseURL: 'googleApisUrl'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance