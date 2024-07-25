import styled from '@emotion/styled'
import './App.css'
import { Board, FinancialStatement, Action, GameProvider } from '@/components'

function App() {
  return (
    <GameProvider>
      <Container>
        <LeftSection>
          <FinancialStatement />
        </LeftSection>
        <RightSection>
          <RightTopSection>
            <Action />
          </RightTopSection>
          <RightBottomSection>
            <Board />
          </RightBottomSection>
        </RightSection>
      </Container>
    </GameProvider>
  )
}

export default App

//#region styled components
const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: '97vh',
})

const LeftSection = styled.div({
  margin: '.25rem auto',
  height: '100%',
  width: '45%',
})

const RightSection = styled.div({
  flex: '1 auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '55%',
})

const RightTopSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '1rem',
  height: '40%',
})

const RightBottomSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60%',
})
//#endregion styled components
