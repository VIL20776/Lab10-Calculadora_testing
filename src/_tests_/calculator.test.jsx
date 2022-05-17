/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import React from 'react'
import Calc from '../components/calculator'

describe('Test Render calculadora', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('Render calculadora', () => {
    render(<Calc />)
    const CalcElement = screen.getByTestId('test-display')
    expect(CalcElement).toBeInTheDocument()
  })
})
