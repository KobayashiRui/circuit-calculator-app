"use client"
import React, { useState, useEffect } from "react"


interface LayerSetting {
  type: number; //0:outer, 1:inner
  enable: boolean;
  thickness: number;
}

export default function TraceWidthCalculator(){
  const [circuit, set_circuit] = useState(0)
  const [layers, set_layers] = useState([])

  useEffect(()=>{
  },[])

  const handleChangeCircuit = (e:React.ChangeEvent<HTMLInputElement>) =>{
    console.log("change")
    console.log(e.target.value)
    const new_circuit = Number(e.target.value)
    set_circuit(new_circuit)
  }

  const handleAddLayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Add Layer")

  }

  return (
    <div className="flex flex-col justify-center px-60">
      <div className="text-center text-base font-normal pb-10">
        <h2 className="text-xl font-semibold">PCBトレース幅計算機</h2>
        <p className="text-sm font-medium pb-5">- PCB Trace Width Calculator -</p>
        <p>ここではpcbのトレース幅を電流値や銅の厚みなどのパラメータから計算します。</p>
      </div>
      <div className="flex flex-col pb-10">
        <h3 className="text-lg font-semibold pb-4">パラメータ設定</h3>
        <div className="">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="text-right pr-5">電流値: </td>
                <td className="text-left">
                  <input 
                    className="bg-gray-600 mr-2 rounded px-2"
                    type="number" 
                    value={circuit}
                    onChange={handleChangeCircuit}
                  ></input>
                  A
                </td>
              </tr>
              <tr>
                <td className="text-right pr-5">周辺温度: </td>
                <td className="text-left">
                  <input 
                    className="bg-gray-600 mr-2 rounded px-2"
                    type="number" 
                  ></input>
                  ℃
                </td>
              </tr>
              <tr>
                <td className="text-right pr-5">温度上昇: </td>
                <td className="text-left">
                  <input 
                    className="bg-gray-600 mr-2 rounded px-2"
                    type="number" 
                  ></input>
                  ℃
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold pb-4">レイヤー設定</h3>

        <button 
          className="flex w-40 justify-center rounded-full bg-green-500"
          onClick={handleAddLayer}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Layer
        </button>
      </div>

    </div>

  )
}