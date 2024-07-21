import FinancialStatus from '@/components/FinancialStatus'
import './App.css'
import { mockFinancialStatusProps } from '@/__mocks__'

function App() {
  return (
    <>
      <FinancialStatus {...mockFinancialStatusProps} />
    </>
  )
}

export default App
