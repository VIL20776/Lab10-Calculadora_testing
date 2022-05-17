import React, { useState } from 'react'

export default function Calc() {
  const [entry, setEntry] = useState(0) // entrada numerica
  const [display, setDisplay] = useState('') // campo de la salida de texto
  const [operation, setOperation] = useState('') // operacion que se esta trabajando
  const [clear, setClear] = useState(false) // si la pantalla debe limpiarse

  // Agrega un numero al display
  function handleNumberPadClick(num) {
    let newDisplay = display

    if (clear) { // true: se limpia la pantalla
      newDisplay = ''
      setClear(false)
    }

    if (newDisplay.length >= 9) {
      return
    }

    if (num === '-') { // determina si hay cambio de signo
      if (newDisplay.startsWith('-')) {
        newDisplay = newDisplay.substring(1)
      } else {
        newDisplay = `-${newDisplay}`
      }
    } else {
      newDisplay += num
    }
    setDisplay(newDisplay)
  }

  // Valida un numero para que solo muestre 9 caracteres
  function validDisplay(value) {
    const newDisplay = `${value}`
    if (newDisplay.indexOf('.') > 8) { // decimales
      return 'ERROR'
    }
    if (newDisplay.indexOf('.') < 0 && newDisplay.length > 9) { // enteros
      return 'ERROR'
    }
    return newDisplay.substring(0, 9)
  }

  // Maneja los botones de operaciones
  function handleOperatorClick(operator) {
    setClear(true)

    let value = entry

    function operations(op) { // Maneja las operaciones
      const dValue = parseFloat(display)
      switch (op) {
        case '+':
          if (value === 0) { value = dValue } else value += dValue
          break

        case '-':
          if (value === 0) { value = dValue } else value -= dValue
          break

        case '*':
          if (value === 0) { value = dValue } else value *= dValue
          break

        case '/':
          if (value === 0) { value = dValue } else value /= dValue
          break

        case '%':
          if (value === 0) { value = dValue } else value %= dValue
          break

        case '=':
          if (operation !== '=') operations(operation)
          break

        default:
          break
      }
    }

    operations(operator)

    // Muestra resultado o error
    const newDisplay = validDisplay(value)
    setDisplay(newDisplay)
    if (operator === '=' || newDisplay === 'ERROR') {
      setEntry(0)
      setOperation('')
      return
    }
    setEntry(value)
    setOperation(operator)
  }

  function handleClearClick() { // Limpia todos los estados
    setClear(false)
    setDisplay('')
    setEntry(0)
    setOperation('')
  }

  function generateNumberPadButtons() { // Genera los botones del pad numerico
    const buttons = []
    for (let i = 9; i >= 0; i -= 1) {
      buttons.push(<button type="button" onClick={() => handleNumberPadClick(i)}>{i}</button>)
    }
    buttons.push(<button type="button" onClick={() => handleNumberPadClick('.')}>.</button>)
    buttons.push(<button type="button" onClick={() => handleNumberPadClick('-')}>+/-</button>)
    return buttons
  }

  function generateOperationPadButtons() { // Genera los botones del pad de operaciones
    const operations = Array.from('+-*/%=')
    return operations.map(
      (op) => <button type="button" onClick={() => handleOperatorClick(op)}>{op}</button>,
    )
  }

  return (
    <>
      <div id="resultDisplay" data-testid="test-display">
        <input type="text" value={display} placeholder="0" readOnly />
      </div>
      <div id="numberKeyboard">
        {generateNumberPadButtons()}
      </div>
      <div id="operationKeyboard">
        <button type="button" className="wideButton" onClick={() => handleClearClick()}>C</button>
        {generateOperationPadButtons()}
      </div>
    </>
  )
}
