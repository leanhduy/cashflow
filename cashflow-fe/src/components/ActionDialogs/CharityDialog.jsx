import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext, currencyFormatter } from '@/utils'

const CharityDialog = () => {
  const { setActionType } = useContext(GameContext)
  const totalIncome = 2100 // > Replace this with the context that store player total income
  return (
    <>
      <Header>
        <Title>GIVE TO CHARITY?</Title>
        <ThumbnailImg src="./assets/images/charity-thumb.png" />
      </Header>
      <Description>
        Donate 10% of your total income to role 1 or 2 dice over the next 3
        turns.
      </Description>
      <Note>
        Donate $
        {currencyFormatter.format(parseInt((totalIncome * 0.1).toFixed()))}
      </Note>
      <MainActions>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            // > PLACEHOLDER: Logic to update the financial statement HERE
            setActionType('start')
          }}
        >
          DONATE
        </ActionButton>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('start')
          }}
          style={{ alignSelf: 'flex-end' }}
        >
          PASS
        </ActionButton>
      </MainActions>
    </>
  )
}

export default CharityDialog

//#region styled components
const Header = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
})

const ThumbnailImg = styled.img({
  width: '96px',
})

const Title = styled.h2({
  color: colors.red.base,
  margin: 0,
})

const Description = styled.span({
  fontWeight: 500,
  width: '100%',
  alignSelf: 'flex-start',
})

const Note = styled.span({
  fontWeight: 700,
  alignSelf: 'flex-start',
  flex: 1,
})

const MainActions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '1rem',
  width: '100%',
  '& button': {
    fontSize: '20px',
  },
  '& img': {
    width: '36px',
  },
})

const ActionButton = styled(Button)({
  fontWeight: 800,
  width: '120px',
  '&:active': {
    opacity: 0.8,
    transform: 'scale(0.9)',
  },
})

//#endregion styled components
