import axios from 'axios';
const myApiKey = 
'AIzaSyBX3SMoSxzqWsAQddIapUn_Pno7krv9gD4';
export const makeRequest = async(myPrompt) =>{
    return axios.get(`http://18.209.63.251:8080/prompt`,{
        params:{
            prompt : myPrompt,
            apiKey : myApiKey
        }
    });
}
