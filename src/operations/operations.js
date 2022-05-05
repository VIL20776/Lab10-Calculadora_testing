export function suma(display, value) {
  let val
  if (display.indexOf('.') > -1) {
    if (value === 0) { val = parseFloat(display) } else val += parseFloat(display)
  }
  if (display.indexOf('.') === -1) {
    if (value === 0) { val = parseInt(display, 10) } else val += parseInt(display, 10)
  }
  return val
}

export function resta(display, value) {
  let val
  if (display.indexOf('.') > -1) {
    if (value === 0) { val = parseFloat(display) } else val -= parseFloat(display)
  }
  if (display.indexOf('.') === -1) {
    if (value === 0) { val = parseInt(display, 10) } else val -= parseInt(display, 10)
  }
  return val
}

export function multiplicacion(display, value) {
  let val
  if (display.indexOf('.') > -1) {
    if (value === 0) { val = parseFloat(display) } else val *= parseFloat(display)
  }
  if (display.indexOf('.') === -1) {
    if (value === 0) { val = parseInt(display, 10) } else val *= parseInt(display, 10)
  }
  return val
}

export function division(display, value) {
  let val
  if (value === 0) { val = parseFloat(display) } else val /= parseFloat(display)
  return val
}

export function modulo(display, value) {
  let val
  if (display.indexOf('.') > -1) {
    if (value === 0) { val = parseFloat(display) } else val %= parseFloat(display)
  }
  if (display.indexOf('.') === -1) {
    if (value === 0) { val = parseInt(display, 10) } else val %= parseInt(display, 10)
  }
  return val
}
