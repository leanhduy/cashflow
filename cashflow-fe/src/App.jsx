import './App.css'
import { mockAssets } from '@/__mocks__'
import Assets from '@/components/Assets'

function App() {
  return (
    <>
      <Assets assets={mockAssets} />
    </>
  )
}

export default App
