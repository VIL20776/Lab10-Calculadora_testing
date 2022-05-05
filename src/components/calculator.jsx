import React, { useState } from 'react'
import {
  modulo, division, multiplicacion, resta, suma,
} from '../operations/operations'

export default function Calc() {
  const [entry, setEntry] = useState(0) // entrada numerica
  const [display, setDisplay] = useState('') // campo de la salida de texto
  const [operation, setOperation] = useState('')
  const [clear, setClear] = useState(false)

  const operations = Array.from('+-*/%=')

  // Agrega un numero al display
  function handleNumberClick(num) {
    if (clear) {
      setDisplay('')
      setClear(false)
    }

    let addedChar = display
    addedChar += num
    setDisplay(addedChar)
  }

  // Formatea un numero para que solo muestre 9 caracteres
  function format(value) {
    const newStr = `${value}`
    return newStr.substring(0, 9)
  }

  // Valida la salida de texto
  function validDisplay() {
    if (display.length > 9) {
      setDisplay('ERROR')
      return false
    }
    return true
  }

  // Maneja las operaciones
  function handleOperatorClick(operator) {
    if (validDisplay()) {
      return
    }

    let value = entry
    switch (operator) {
      case '+':
        value = suma(display, value)
        break

      case '-':
        value = resta(display, value)
        break

      case '*':
        value = multiplicacion(display, value)
        break

      case '/':
        value = division(display, value)
        break

      case '%':
        value = modulo(display, value)
        break

      case '=':
        if (operation !== '=') handleOperatorClick(operation)
        break

      default:
        break
    }
    setClear(true)
    setEntry(value)
    setDisplay(format(value))
    setOperation(operator)
  }

  function generateNumberButtons() {
    const buttons = []
    for (let i = 9; i >= 1; i -= 1) {
      buttons.push(<button type="button" onClick={() => handleNumberClick(i)}>{i}</button>)
    }
    buttons.push(<button type="button" className="wideButton" onClick={() => handleNumberClick(0)}>0</button>)
    buttons.push(<button type="button" on onClick={() => handleNumberClick('.')}>.</button>)
    return buttons
  }

  return (
    <>
      <div id="resultDisplay">
        <input type="text" value={display} placeHolder="0" readOnly />
      </div>
      <div id="numberKeyboard">
        {generateNumberButtons()}
      </div>
      <div id="operationKeyboard">
        <button type="button" className="wideButton">C</button>
        {
          operations.map(
            (op) => <button type="button" onClick={() => handleOperatorClick(op)}>{op}</button>,
          )
        }
      </div>
    </>
  )
}
