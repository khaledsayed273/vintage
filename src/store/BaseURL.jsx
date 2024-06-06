const { default: axios } = require("axios");


const BaseURL = axios.create({
    baseURL: process.env.baseUrl,
    
})

export default BaseURL