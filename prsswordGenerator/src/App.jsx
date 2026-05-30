import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [cahrAllow, setCahrAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenater = useCallback(() => {
    
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) {
      str += "0123456789";
    }
    if (cahrAllow) {
      str += "!@#$%^&*()_+><:{}[]";
    }

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      
      pass += str.charAt(char);
    }
    setPassword(pass);
        
  }, [lenght, numberAllow, cahrAllow, setPassword]);
  useEffect(() => {
    passwordGenater();
  }, [lenght, numberAllow, cahrAllow, setPassword, passwordGenater]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black">
        <h1 className="text-black text-center">Password Genater</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="outline-none w-full py-1 px-3"
          />
          <button className="outline-none bg-amber-950 text-white px-3 py-0.5 stroke-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              s
              value={lenght}
              className="cursor-pointer "
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label> Lenght : {lenght}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <label>Number</label>
            <input type="checkbox" 
            className="cursor-pointer"
            onClick={(e) => {
                setNumberAllow(e.target.checked);
              }}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label>Special character</label>
            <input
              type="checkbox"
              className="cursor-pointer"
              onClick={(e) => {
                setCahrAllow(e.target.checked);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
