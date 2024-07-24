import styled from '@emotion/styled'
import './App.css'
import { Board, FinancialStatement } from '@/components'

function App() {
  return (
    <>
      <Container>
        <LeftSection>
          <FinancialStatement />
        </LeftSection>
        <RightSection>
          <RightTopSection></RightTopSection>
          <RightBottomSection>
            <Board />
          </RightBottomSection>
        </RightSection>
      </Container>
    </>
  )
}

export default App

//#region styled components
// > Uncomment when done implementing all sub-components (Board, Action)
const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const LeftSection = styled.div({
  margin: '.25rem auto',
})

const RightSection = styled.div({
  flex: '1 auto',
  display: 'flex',
  flexDirection: 'column',
})

const RightTopSection = styled.div({
  border: '1px solid black', // > Remove after done implementing
  display: 'flex',
  flexDirection: 'column',
  height: '30%',
})

const RightBottomSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 auto',
  justifyContent: 'center',
  alignItems: 'center',
})
//#endregion styled components
