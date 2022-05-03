import React, { useState } from 'react'

export default function Calc() {
  const [entry, setEntry] = useState(0) // entrada numerica
  const [display, setDisplay] = useState('') // campo de la salida de texto
  const [operation, setOperation] = useState('')

  const operations = Array.from('+-*/%=')

  // Agrega un numero al display
  const handleNumberClick = (num) => {
    let addedChar = display
    addedChar += num
    setDisplay(addedChar)
  }

  function handleOperatorClick(operator) {
    let value = entry
    switch (operator) {
      case '+':
        setOperation('+')
        if (display.indexOf('.') > -1) {
          value += parseFloat(display)
        } else {
          value += parseInt(display, 10)
        }
        setEntry(value)
        setDisplay('')
        break

      default:
        break
    }
  }

  function generateButtons() {
    const buttons = []
    for (let i = 9; i >= 1; i -= 1) {
      buttons.push(<button type="button" onClick={() => handleNumberClick(i)}>{i}</button>)
    }
    return buttons
  }

  return (
    <>
      <div id="resultDisplay">
        <input type="text" value={display} disabled />
      </div>
      <div id="numberKeyboard">
        {generateButtons()}
        <button type="button" className="bottom" onClick={() => handleNumberClick(0)}>0</button>
      </div>
      <div id="operationKeboard">
        {
          operations.map(
            (op) => <button type="button">{op}</button>,
          )
        }
      </div>
    </>
  )
}
