import styled from '@emotion/styled'
import { Button, IconButton } from '@mui/material'
import { colors } from '@/styles'
import { useContext, useState } from 'react'
import {
  GameContext,
  currencyFormatter,
  getLoanAmount,
  takeLoan,
} from '@/utils'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const OpportunityStockDetails = () => {
  const { card, playerData, setPlayerData, setActionType } =
    useContext(GameContext)
  const [quantity, setQuantity] = useState(0)

  //#region Event handlers
  const handleBuy = (e) => {
    let unitPrice = card.arg1
    let newPlayerData = playerData
    e.preventDefault()
    if (quantity > 0) {
      setActionType('start')

      // > Take the loan
      if (playerData.cash < quantity * unitPrice) {
        newPlayerData = takeLoan(playerData, quantity * unitPrice)
      } else {
        newPlayerData.cash -= quantity * unitPrice
      }
      // > Add new item to the assets
      let newAsset = {
        id:
          playerData.assets.length === 0 ? 1 : playerData.assets.at(-1).id + 1,
        name: card.title,
        type: 'stock',
        amount: card.arg1 * quantity,
        cost: card.arg1,
        quantity: quantity,
      }
      newPlayerData.assets.push(newAsset)
      // > Add to player's income, if stock has positive cashflow
      if (card.arg4 > 0) {
        let newIncome = {
          id:
            playerData.assets.length === 0
              ? 1
              : playerData.assets.at(-1).id + 1,
          name: card.title,
          amount: card.arg4,
        }
        newPlayerData.incomes.push(newIncome)
      }
      // > Update the context player context data
      setPlayerData(newPlayerData)
    }
    setActionType('start')
  }

  const handlePass = () => {
    setActionType('start')
  }

  const handleInputChange = (e) => {
    let num = parseInt(e.target.value)
    setQuantity(isNaN(num) || num < 0 ? 0 : num)
  }

  //#endregion Event handlers

  return (
    <>
      <Title>{card.title}</Title>
      <Description>{card.description}</Description>
      {card.type === 'stock' && (
        <Details>
          <DetailsColumn>
            <Note>Cost: ${currencyFormatter.format(card.arg1)}</Note>
            <Note>Cashflow: ${currencyFormatter.format(card.arg4)}</Note>
          </DetailsColumn>
          <DetailsColumn>
            {card.type === 'stock' && (
              <Note>
                Trading Range: ${currencyFormatter.format(card.arg2)} to $
                {currencyFormatter.format(card.arg3)}
              </Note>
            )}
            {card.type === 'stock' && <Note>Shares owned: 0</Note>}
            {card.type === 'estate' && (
              <Note>Downpay: ${currencyFormatter.format(card.arg2)}</Note>
            )}
          </DetailsColumn>
        </Details>
      )}
      <span style={{ flex: 1 }} />
      <BuyForm onSubmit={handleBuy}>
        <InputContainer>
          <StyledInput
            type="text"
            value={quantity}
            onChange={handleInputChange}
            placeholder="Input number of stock..."
          />
          <InputActions>
            <InputButton aria-label="increase" size="small">
              <ArrowDropUpIcon />
            </InputButton>
            <InputButton aria-label="decrease" size="small">
              <ArrowDropDownIcon />
            </InputButton>
          </InputActions>
          <SideNote>
            {`shares for $${quantity * card.arg1}`}
            {quantity * card.arg1 > playerData.cash &&
              `. (Loan: $${getLoanAmount(
                quantity * card.arg1 - playerData.cash
              )})`}
          </SideNote>
        </InputContainer>
        <span style={{ flex: 1 }} />

        <MainActions>
          <ActionButton type="submit" variant="contained" disableRipple>
            BUY
          </ActionButton>
          <ActionButton
            variant="contained"
            disableRipple
            onClick={handlePass}
            style={{ alignSelf: 'flex-end' }}
          >
            PASS
          </ActionButton>
        </MainActions>
      </BuyForm>
    </>
  )
}

export default OpportunityStockDetails

//#region styled components
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

const SideNote = styled(Note)({
  marginLeft: '1rem',
  alignSelf: 'center',
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
  fontSize: '.9rem',
})

const DetailsColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
})

const BuyForm = styled.form({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
})

const InputContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

const InputActions = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const InputButton = styled(IconButton)({
  height: '18px',
  width: '18px',
})

const StyledInput = styled.input({
  fontSize: '.85rem',
  width: '30%',
  height: '70%',
})

//#endregion styled components
