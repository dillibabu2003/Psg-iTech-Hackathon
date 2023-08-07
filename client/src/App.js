
import "./App.css"
import MainPage from './Components/MainPage/MainPage';
import ChatBot from './Components/ChatBot/ChatBot';
import { Routes,Route } from 'react-router';
import NavBar from "./Components/NavBar/NavBar";

function App(){

  return (    
  <>
     <NavBar/>
     <Routes>   
                <Route path="/" element={<MainPage/>}/>
                <Route path="/chatbot" element={<ChatBot/>}/>
    </Routes>
  </>
  )
}
export default App;