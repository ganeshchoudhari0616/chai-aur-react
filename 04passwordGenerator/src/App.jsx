import {useCallback, useEffect, useRef, useState} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef= useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*(){}~-=`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, characterAllowed, setPassword]);
  useEffect(()=>{
    passwordGenerator();
  },[length,numbersAllowed,characterAllowed,passwordGenerator])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select(0,5);
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          readOnly
          ref={passwordRef}
          placeholder="password"
          value={password}
          className="outline-none w-full py-1 px-3
    "
        />
        <button onClick={copyPasswordToClipboard} className="outline-noen bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            onChange={(e) => setLength(e.target.value)}
            value={length}
            min={6}
            max={100}
          />
          <label>Legth {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numbersAllowed} onChange={()=>setNumbersAllowed((prev)=> !prev)} />
          <label htmlFor="">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={characterAllowed} onChange={()=>setCharacterAllowed((prev)=> !prev)} />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
