
import axios from 'axios';


const myHook = axios.create({
  baseURL: 'https://dummyjson.com'
})

const usePublicAxiosHook = () => {
  return myHook
}

export default usePublicAxiosHook