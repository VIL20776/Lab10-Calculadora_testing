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
    const calcResBtn = screen.getByTestId('test-opBtn-=')
    const calcClearBtn = screen.getByTestId('test-clearBtn')
    fireEvent.click(calcBtn2)
    fireEvent.click(calcSumBtn)
    fireEvent.click(calcClearBtn)
    expect(calcScreen).toHaveDisplayValue('')
    fireEvent.click(calcBtn7)
    fireEvent.click(calcResBtn)
    expect(calcScreen).toHaveDisplayValue('7')
  })
})
