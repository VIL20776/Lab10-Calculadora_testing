/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Calc from '../components/calculator'

describe('Test error', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('Render calculadora', () => {
    render(<Calc />)
    const calcScreen = screen.getByTestId('test-screen')
    const calcBtn = screen.getByTestId('test-numBtn-9')
    const calcMultBtn = screen.getByTestId('test-opBtn-*')
    const calcResBtn = screen.getByTestId('test-opBtn-=')
    for (let i = 0; i < 5; i += 1) {
      fireEvent.click(calcBtn)
    }
    fireEvent.click(calcMultBtn)
    for (let i = 0; i < 5; i += 1) {
      fireEvent.click(calcBtn)
    }
    fireEvent.click(calcResBtn)
    expect(calcScreen).toHaveDisplayValue('ERROR')
  })
})
