import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMultiply } from "@fortawesome/free-solid-svg-icons"

import Box from "./Box"
import Row from "./Row"
import { useState } from "react"


export default function TicTacToe() {
  
  
  
  return (
    <div className="">
      <h1 className="text-center text-[crimson] text-4xl font-mono font-extrabold mt-20">
        Tic Tac Toe
      </h1>
      {/* <FontAwesomeIcon className="text-white text-[68px]" icon={faCircle} /> */}
      {/* <img src="src\assets\plus.png"/> */}
      <div className="GameBox mt-[128px] flex flex-col gap-4 items-center">
        <Row/>
      </div>


      <div className="flex justify-center mt-[7rem] gap-3">
        <button className="start text-lg text-white border p-2 rounded-md">Start Game</button>
        <button className="reset text-lg text-white border p-2 rounded-md">Reset Game</button>
      </div>
    </div>
  )
}