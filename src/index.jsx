import React from 'react'
import { createRoot } from 'react-dom/client'
import Calc from './components/calculator'

const root = createRoot(document.getElementById('calc'))
root.render(<Calc />)
