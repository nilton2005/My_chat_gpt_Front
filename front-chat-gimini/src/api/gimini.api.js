import axios from 'axios';
const myApiKey = 
'AIzaSyBX3SMoSxzqWsAQddIapUn_Pno7krv9gD4';
export const makeRequest = async(myPrompt) =>{
    return axios.get(`https://api-chat-gpt-nilton.duckdns.org/prompt`,{
        params:{
            prompt : myPrompt,
            apiKey : myApiKey
        }
    });
};
