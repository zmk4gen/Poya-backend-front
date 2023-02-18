import axios from "axios";

const user = JSON.parse(window.localStorage.getItem('user'))

// console.log('user'+user.id);

axios.defaults.baseURL = process.env.VUE_APP_API_URL

if(user){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token 
}