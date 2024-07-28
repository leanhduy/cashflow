import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext } from 'react'
import {
  GameContext,
  currencyFormatter,
  getLoanAmount,
  takeLoan,
} from '@/utils'

const OpportunityEstateAutoDetails = () => {
  const { card, playerData, setPlayerData, setActionType } =
    useContext(GameContext)

  //#region Event handlers
  const handleOK = () => {
    // > Pay if own any real estate
    if (
      playerData.assets.filter((asset) => asset.type === 'estate').length > 0
    ) {
      let newPlayerData = playerData

      // > Take loan if cash is insufficient
      if (card.arg1 > newPlayerData.cash) {
        newPlayerData = takeLoan(newPlayerData, card.arg1)
      } else {
        newPlayerData.cash -= card.arg1
      }

      // > Update the context player context data
      setPlayerData(newPlayerData)
    }
    setActionType('start')
  }

  //#endregion Event handlers

  return (
    <>
      <Container>
        <Top>
          <Left>
            <Header>
              <Title>{card.title}</Title>
            </Header>
            <Description>{card.description}</Description>
            <Note>{card.info}</Note>
            {card.type === 'estate' && (
              <Details>
                <DetailsColumn>
                  <Note>Cost: ${currencyFormatter.format(card.arg1)}</Note>
                  <Note>Cashflow: ${currencyFormatter.format(card.arg4)}</Note>
                  <Note>Downpay: ${currencyFormatter.format(card.arg2)}</Note>
                </DetailsColumn>
              </Details>
            )}
            {card.arg1 > playerData.cash && (
              <ImportantNote>{`(You don't have enough cash. Must take a loan of $${currencyFormatter.format(
                getLoanAmount(card.arg1 - playerData.cash)
              )})`}</ImportantNote>
            )}
          </Left>
          <Right>
            <ThumbnailImg src="./assets/images/damage.png" />
          </Right>
        </Top>
        <Bottom>
          <MainActions>
            <ActionButton variant="contained" onClick={handleOK}>
              OK
            </ActionButton>
          </MainActions>
        </Bottom>
      </Container>
    </>
  )
}

export default OpportunityEstateAutoDetails

//#region styled components
const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  fontSize: '.9rem',
})

const Top = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  columnGap: '1rem',
})

const Bottom = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const Left = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  rowGap: '.125rem',
})

const Right = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
})

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
  padding: 0,
})

const ImportantNote = styled(Note)({
  fontWeight: 500,
  color: colors.red.base,
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

const Details = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  color: colors.blue.dark,
  width: '100%',
})

const DetailsColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
})

//#endregion styled components
