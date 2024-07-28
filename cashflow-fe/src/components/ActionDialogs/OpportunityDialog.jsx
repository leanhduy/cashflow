import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext, drawCard } from '@/utils'

const OpportunityDialog = () => {
  const { setCard, setActionType } = useContext(GameContext)

  const handleSmallDeal = () => {
    let card = drawCard('opportunity', false)
    updateAction(card.type)
    setCard(card)
  }

  const handleBigDeal = () => {
    let card = drawCard('opportunity', true)
    setCard(card)
    updateAction(card.type)
    setCard(card)
  }

  const updateAction = (cardType) => {
    switch (cardType) {
      case 'stock':
        setActionType('opportunity-stock')
        break
      case 'stock-split':
        setActionType('opportunity-stock-split')
        break
      case 'estate':
        setActionType('opportunity-estate')
        break
      case 'estate-auto':
        setActionType('opportunity-estate-auto')
        break
      default:
        setActionType('start')
        break
    }
  }

  return (
    <>
      <Header>
        <Title>DEAL OPPORTUNITY</Title>
        <ThumbnailImg src="./assets/images/opportunity-thumb.png" />
      </Header>
      <Description>Which deal type do you want?</Description>
      <Note>
        Small deals cost $5,000 or less. Big deals cost $6,000 or more.
      </Note>
      <Note style={{ flex: 1 }} />
      <MainActions>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={handleSmallDeal}
        >
          SMALL
        </ActionButton>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={handleBigDeal}
          style={{ alignSelf: 'flex-end' }}
        >
          BIG
        </ActionButton>
      </MainActions>
    </>
  )
}

export default OpportunityDialog

//#region styled components
const Header = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
})

const ThumbnailImg = styled.img({
  width: '80px',
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
})

const MainActions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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
