import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMultiply } from "@fortawesome/free-solid-svg-icons"

import circle from "../assets/circle.png"
import plus from "../assets/cross.png"
import Row from "./Row"
import { useState } from "react"


export default function Box() {
  let data = ["", "", "", "", "", "", "", "", ""];
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const tog = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      // e.target.innerHTML = `<FontAwesomeIcon className="text-white text-[68px]" icon={faMultiply} />`;
      e.target.innerHTML = `<img src="${circle}"/>`;
      data[num] = "x";
      setCount(++count);
    } else {
      // e.target.innerHTML = `<FontAwesomeIcon className="text-white text-[68px]" icon={faCircle} />`;
      e.target.innerHTML = `<img src="${plus}"/>`;
      data[num] = "o";
      setCount(++count);
    }
    ifWin(data);
  }

  const ifWin = () => {
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      win(data);
    }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      win(data);
    }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      win(data);
    }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      win(data);
    }else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      win(data);
    }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      win(data);
    }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      win(data);
    }else if(data[3]===data[4] && data[4]===data[6] && data[6]!==""){
      win(data);
    }

  }

  const win = (d) => {
    setLock(true);
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="row1 flex gap-5">
        <div onClick={(e) => {tog(e, 0)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
        </div>

        <button onClick={(e) => {tog(e, 1)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
        </button>

        <button onClick={(e) => {tog(e, 2)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
          
        </button>

      </div>

      <div className="row1 flex gap-5">
        <button onClick={(e) => {tog(e, 3)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
        </button>

        <button onClick={(e) => {tog(e, 4)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
        </button>

        <button onClick={(e) => {tog(e, 5)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
        </button>

      </div>

      <div className="row1 flex gap-5">
        <button onClick={(e) => {tog(e, 6)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
        </button>

        <button onClick={(e) => {tog(e, 7)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
        </button>

        <button onClick={(e) => {tog(e, 8)}} className="bg-slate-200 w-20 h-20 flex justify-center items-center rounded-lg">
        </button>

      </div>

    </div>
  )
}