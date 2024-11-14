import axios from 'axios';
const myApiKey = 
'AIzaSyDrWBkVr3JnS1jDFH68yWbUZiZNNWzbGPg';
export const makeRequest = async(myPrompt) =>{
    return axios.get(`https://api-chat-gpt-nilton.duckdns.org/prompt`,{
        params:{
            prompt : myPrompt,
            apiKey : myApiKey
        }
    });
};
