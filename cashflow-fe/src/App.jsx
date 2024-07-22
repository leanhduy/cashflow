import './App.css'
import Liabilities from '@/components/Liabilities'
import { mockLiabilities } from '@/__mocks__'

function App() {
  return (
    <>
      <Liabilities liabilities={mockLiabilities} />
    </>
  )
}

export default App
