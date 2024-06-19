"use client"
import React, { useState, useEffect } from "react"


interface LayerSetting {
  layer_type: number; //0:outer, 1:inner
  enable: boolean;
  thickness: number;
}

interface LayerProps {
  row: number;
  layer_setting: LayerSetting;
  onChange: (row:number, new_layer_setting: LayerSetting)=>void

}

function Layer({row, layer_setting, onChange}: LayerProps) {
  const [layer_enable, set_layer_enable] = useState(layer_setting.enable)
  const [layer_type, set_layer_type] = useState(layer_setting.layer_type)
  const [layer_thickness, set_layer_thickness] = useState(layer_setting.thickness)

  const handleChangeLayerEnable = (e:React.ChangeEvent<HTMLInputElement>)=>{
    onChange(row, {layer_type:layer_type, enable:e.target.checked, thickness:layer_thickness})
  }
  const handleChangeLayerType = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    onChange(row, {layer_type:Number(e.target.value), enable:layer_enable, thickness:layer_thickness})
  }
  const handleChangeLayerThickness = (e:React.ChangeEvent<HTMLInputElement>)=>{
    onChange(row, {layer_type:layer_type, enable:layer_enable, thickness:Number(e.target.value)})
  }

  return (
    <div className="flex gap-4 border rounded p-4">
      <div>
       <input
        type="checkbox"
        checked={layer_setting.enable}
        onChange={handleChangeLayerEnable}
        />
      </div>
      <div>{row+1}:</div>
      <div>
        <label className="mr-2">層のタイプ</label>
        <select
          className="bg-gray-600 rounded"
          value={layer_type}
          onChange={handleChangeLayerType}
        >
          <option value="0">外層</option>
          <option value="1">内層</option>
        </select>
      </div>
      <div>
        <label className="mr-2">厚み</label>
        <input 
          className="bg-gray-600 mr-2 rounded px-2"
          type="number" 
          value={layer_thickness}
          onChange={handleChangeLayerThickness}
        ></input>
        oz
      </div>

    </div>
  )

}

export default function TraceWidthCalculator(){
  const [circuit, set_circuit] = useState(0)
  const [layers, set_layers] = useState<LayerSetting[]>([])

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
    set_layers((prev)=>{
      const new_layers = [...prev]
      new_layers.push({layer_type:0, enable:true, thickness:0.0})
      return new_layers
    })
  }

  const handleChangeLayer = (row:number, new_layer_setting: LayerSetting)=>{
    set_layers((prev)=>{
      const new_layers = [...prev]
      new_layers[row] = new_layer_setting
      return new_layers
    })
  }

  return (
    <div className="flex flex-col justify-center px-60">
      <div className="text-center text-base font-normal pb-10">
        <h2 className="text-xl font-semibold">PCBトレース幅計算機</h2>
        <p className="text-sm font-medium pb-5">- PCB Trace Width Calculator -</p>
        <p>ここではpcbのトレース幅を電流値や銅の厚みなどのパラメータから計算します。</p>
      </div>
      <div className="">
        <h3 className="text-lg font-semibold pb-4">パラメータ設定</h3>
        <div className="flex-flex-col pb-10">
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

      <div className="pb-20">
        <h3 className="text-lg font-semibold pb-4">レイヤー設定</h3>
        <div className="flex flex-col gap-4">
        {
          layers.map((layer,i) =>(
            <Layer
              key={i}
              row={i}
              layer_setting={layer}
              onChange={handleChangeLayer}
            ></Layer>
          ))
        }
        </div>

        <button 
          className="px-5 mt-10 rounded-full bg-green-500"
          onClick={handleAddLayer}
        >
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Layer
          </div>
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold pb-4">計算結果</h3>
        <button className="rounded-full bg-green-500 px-5">計算実行</button>

      </div>

    </div>

  )
}