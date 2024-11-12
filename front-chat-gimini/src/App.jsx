import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { makeRequest } from './api/gimini.api'
import './App.css'
import {ChatPage} from './pages/ChatPage';

function App() {
  // const [text , setText] = useState('');
  // const [response, setResponse] = useState('');
  // const [prompt, setPrompt] = useState('');
  // const [messages, setMessages] = useState([]);
  


  // const obtenerRespuesta = async () => {
  //   try {
  //     const request = await makeRequest(prompt);
  //     const data = await request.data;
  //     console.log(data.candidates[0].content.parts[0].text);
  //     setResponse(data.candidates[0].content.parts[0].text);
  //     setText(data.text);
  //     const newMessage = {pregunta : prompt ,respuesta: data.candidates[0].content.parts[0].text};
      
  //     setMessages([...messages, newMessage]);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
 
  return (
    <div>

      {/* <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Enter your prompt"
      />
      <button onClick={obtenerRespuesta}>
        Consultar 
      </button>
      <div>
        {messages.map((item, indice)=>
        (
          <div key={indice}>
              <h1>Pregunta</h1>
              <h3>{item.pregunta}</h3>
              <h1>Respuesta</h1>
              <h3>{item.respuesta}</h3>
          </div>
        ) )}
      </div> */}
      <ChatPage/>
      
    </div>
  );
}

export default App
