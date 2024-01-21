const { default: axios } = require("axios");

const BaseURL = axios.create({
    baseURL: "https://admin.vintage-artgallery.com/api/v1/"
})


export default BaseURL