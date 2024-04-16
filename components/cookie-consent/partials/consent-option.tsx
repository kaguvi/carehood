import React from 'react'

interface ConsentOptionProps {
  name: string
  elementTitle: string
  elementDescription: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ConsentOption = ({name, elementTitle, elementDescription, checked, onChange}: ConsentOptionProps) => {
  const input = name == 'essential' ?
    <input type="checkbox" id={name} name={name} disabled checked={checked} />
    : <input type="checkbox" id={name} name={name} checked={checked} onChange={onChange}/>
  return (
    <div className="flex items-center justify-between space-x-2 border-b-2 border-gray-200">
      <label
        className="text-sm font-medium leading-5 flex flex-col space-y-1 my-2 py-2"
        htmlFor={name}>
        <span className="font-semibold">{elementTitle}</span>
        <span className="font-normal leading-snug">{elementDescription}</span>
      </label>
      {input}
    </div>
  )
}

export default ConsentOption