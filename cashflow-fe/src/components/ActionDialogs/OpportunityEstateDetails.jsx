import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext } from 'react'
import {
  GameContext,
  currencyFormatter,
  getLoanAmount,
  takeLoan,
  checkWinningCondition,
} from '@/utils'

const OpportunityEstateDetails = () => {
  const { card, playerData, setPlayerData, setActionType } =
    useContext(GameContext)

  //#region Event handlers
  const handleBuy = () => {
    let newPlayerData = playerData
    // > Take a loan if cash is insufficient (cash < downpay). Otherwise just deduce the player's cash
    if (newPlayerData.cash < card.arg2) {
      newPlayerData = takeLoan(newPlayerData, card.arg2)
    } else {
      newPlayerData.cash -= card.arg2
    }
    // > Add new item to the player's Assets
    let newAsset = {
      id:
        newPlayerData.assets.length === 0
          ? 1
          : newPlayerData.assets.at(-1).id + 1,
      name: card.title,
      type: card.type,
      subtype: card.subtype,
      cost: card.arg1,
      downpay: card.arg2,
      mortgage: card.arg3,
      cashflow: card.arg4,
      unit: card.arg5,
    }
    newPlayerData.assets.push(newAsset)

    // > TODO: Add new item to the player's Liabilities (Will add in the future after repay is implemented)
    // let newLiability = {
    //   id:
    //     newPlayerData.liabilities.length === 0
    //       ? 1
    //       : newPlayerData.liabilities.at(-1).id + 1,
    //   name: card.title,
    //   type: 'estate',
    //   subtype: card.subtype,
    //   amount: card.arg3,
    // }

    // > Add to player's income, if stock has positive cashflow
    if (card.arg4 > 0) {
      let newIncome = {
        id:
          newPlayerData.assets.length === 0
            ? 1
            : newPlayerData.assets.at(-1).id + 1,
        name: card.title,
        amount: card.arg4,
      }
      newPlayerData.incomes.push(newIncome)
      checkWinningCondition(newPlayerData)
    }
    // > Update the context player context data
    setPlayerData(newPlayerData)

    setActionType('start')
  }

  const handleCancel = () => {
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
            <Details>
              <DetailsColumn>
                <Note>Cost: ${currencyFormatter.format(card.arg1)}</Note>
                {card.type === 'estate' && (
                  <Note>Cashflow: ${currencyFormatter.format(card.arg4)}</Note>
                )}
                {card.type === 'estate' && (
                  <Note>Downpay: ${currencyFormatter.format(card.arg2)}</Note>
                )}
              </DetailsColumn>
            </Details>
            {card.arg2 > playerData.cash && (
              <ImportantNote>{`(You don't have enough cash. Must take a loan of $${currencyFormatter.format(
                getLoanAmount(card.arg2 - playerData.cash)
              )})`}</ImportantNote>
            )}
          </Left>
          <Right>
            <ThumbnailImg
              src={
                card.type === 'estate'
                  ? './assets/images/estate.png'
                  : card.type === 'gold'
                  ? './assets/images/coin.png'
                  : './assets/images/land.png'
              }
            />
          </Right>
        </Top>
        <Bottom>
          <MainActions>
            <ActionButton variant="contained" onClick={handleBuy}>
              BUY
            </ActionButton>
            <ActionButton variant="contained" onClick={handleCancel}>
              CANCEL
            </ActionButton>
          </MainActions>
        </Bottom>
      </Container>
    </>
  )
}

export default OpportunityEstateDetails

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
  justifyContent: 'flex-start',
  columnGap: '1rem',
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
