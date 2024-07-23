import './App.css'
import Expenses from '@/components/Expenses'
import { mockChildExpense, mockLiabilities } from '@/__mocks__'

function App() {
  return (
    <>
      <Expenses liabilities={mockLiabilities} {...mockChildExpense} />
    </>
  )
}

export default App
