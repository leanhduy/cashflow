import './App.css'
import { mockIncomes } from '@/__mocks__'
import Income from '@/components/Income'

function App() {
  return (
    <>
      <Income incomes={mockIncomes} />
    </>
  )
}

export default App
