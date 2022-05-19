/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Calc from '../components/calculator'

describe('Test operaciones', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('Render calculadora', () => {
    render(<Calc />)
    const calcScreen = screen.getByTestId('test-screen')
    const calcBtn2 = screen.getByTestId('test-numBtn-2')
    const calcBtn7 = screen.getByTestId('test-numBtn-7')
    const calcSumBtn = screen.getByTestId('test-opBtn-+')
    const calcRestBtn = screen.getByTestId('test-opBtn--')
    const calcMultBtn = screen.getByTestId('test-opBtn-*')
    const calcModBtn = screen.getByTestId('test-opBtn-%')
    const calcResBtn = screen.getByTestId('test-opBtn-=')
    fireEvent.click(calcBtn2)
    fireEvent.click(calcBtn2)
    fireEvent.click(calcModBtn)
    fireEvent.click(calcBtn7)
    fireEvent.click(calcSumBtn)
    expect(calcScreen).toHaveDisplayValue('1')
    for (let i = 0; i < 5; i += 1) {
      fireEvent.click(calcBtn7)
    }
    fireEvent.click(calcRestBtn)
    expect(calcScreen).toHaveDisplayValue('77778')
    fireEvent.click(calcBtn7)
    fireEvent.click(calcMultBtn)
    expect(calcScreen).toHaveDisplayValue('77771')
    fireEvent.click(calcBtn7)
    fireEvent.click(calcResBtn)
    expect(calcScreen).toHaveDisplayValue('544397')
  })
})
