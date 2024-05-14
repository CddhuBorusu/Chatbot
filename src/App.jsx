import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function Answer(){
    setAnswer("Loading...");
    const response= await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBXCLm5s1IDWT6WEgwPL3S9P3bIm-yZc80",
      method: "post",
      data:{"contents":[{"parts":[{"text":question}]}]},

    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <>
      <h1 className='bg-green-300 p-8 rounded-md font-bold text-3xl'>CHATBOT-prototype</h1>
      <textarea className='border rounded w-full' value={question} onChange={(e) => setQuestion(e.target.value)} cols="30" rows="10" placeholder='Enter Question!'></textarea>
      <button
            type="submit"
            className="bg-green-300 p-3 rounded-md hover:bg-green-400 transition-all duration-300"
            disabled={Answer}
          >
            Generate answer
          </button>
      <pre>{answer}</pre>
    </>
  )
}

export default App
