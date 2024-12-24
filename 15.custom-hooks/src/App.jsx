import './App.css'
// ! import useCounter from './hooks/useCounter'
// ? import useToggle from './hooks/useToggle';
import useCopyToClipboard from './hooks/useCopyToClipboard'
import { MdOutlineContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


function App() {
  // ! const {count, increase, decrease} = useCounter();

  // ? const [open, toggle] = useToggle();

  const [copied, copy] = useCopyToClipboard("My text to copy");

  return (
    <div>
      {/* <div>
        <div>{count}</div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div> */}

      
      {/* <div>
          <button onClick={toggle} style={{background: open ? 'red': 'green', color: open ? 'white': 'black' ,margin: '10px'}}>Toggle</button>
          {open && open ? <div style={{background: 'red', color: "white"}}>Open</div> : <div style={{background: 'green', color: "black"}}>Close</div>}
      </div> */}
      

      <div>
        <button onClick={copy}>{copied ? <FaCheck /> : <MdOutlineContentCopy />}</button>
      </div>
    </div>
  )
}

export default App
