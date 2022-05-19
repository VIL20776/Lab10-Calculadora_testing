/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Calc from '../components/calculator'

describe('Test llamada a boton cambio de signo', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('Render calculadora', () => {
    render(<Calc />)
    const calcScreen = screen.getByTestId('test-screen')
    const calcBtn = screen.getByTestId('test-numBtn-9')
    const calcSignBtn = screen.getByTestId('test-signBtn')
    fireEvent.click(calcBtn)
    fireEvent.click(calcSignBtn)
    expect(calcScreen).toHaveDisplayValue('-9')
  })
})
