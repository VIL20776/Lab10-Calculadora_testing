import React, { useState } from 'react'

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
        if (display.indexOf('.') > -1) {
          if (value === 0) { value = parseFloat(display) } else value += parseFloat(display)
        }
        if (display.indexOf('.') === -1) {
          if (value === 0) { value = parseInt(display, 10) } else value += parseInt(display, 10)
        }
        break

      case '-':
        if (display.indexOf('.') > -1) {
          if (value === 0) { value = parseFloat(display) } else value -= parseFloat(display)
        }
        if (display.indexOf('.') === -1) {
          if (value === 0) { value = parseInt(display, 10) } else value -= parseInt(display, 10)
        }
        break

      case '*':
        if (display.indexOf('.') > -1) {
          if (value === 0) { value = parseFloat(display) } else value *= parseFloat(display)
        }
        if (display.indexOf('.') === -1) {
          if (value === 0) { value = parseInt(display, 10) } else value *= parseInt(display, 10)
        }
        break

      case '/':
        if (value === 0) { value = parseFloat(display) } else value /= parseFloat(display)
        break

      case '%':
        if (display.indexOf('.') > -1) {
          if (value === 0) { value = parseFloat(display) } else value %= parseFloat(display)
        }
        if (display.indexOf('.') === -1) {
          if (value === 0) { value = parseInt(display, 10) } else value %= parseInt(display, 10)
        }
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
    buttons.push(<button type="button" className="zero" onClick={() => handleNumberClick(0)}>0</button>)
    buttons.push(<button type="button">.</button>)
    return buttons
  }

  return (
    <>
      <div id="resultDisplay">
        <input type="text" value={display} readOnly />
      </div>
      <div id="numberKeyboard">
        {generateNumberButtons()}
      </div>
      <div id="operationKeboard">
        {
          operations.map(
            (op) => <button type="button" onClick={() => handleOperatorClick(op)}>{op}</button>,
          )
        }
      </div>
    </>
  )
}
