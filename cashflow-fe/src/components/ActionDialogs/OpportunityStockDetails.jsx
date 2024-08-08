import { colors } from '@/styles'
import {
  GameContext,
  checkWinningCondition,
  currencyFormatter,
  getLoanAmount,
  takeLoan,
} from '@/utils'
import styled from '@emotion/styled'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
} from '@mui/material'
import { useContext, useEffect, useState } from 'react'

const OpportunityStockDetails = () => {
  const { card, playerData, setPlayerData, setActionType } =
    useContext(GameContext)
  const [quantity, setQuantity] = useState(0)
  const [isBuyingMore, setIsBuyingMore] = useState(true)
  const [hasStock] = useState(() => {
    // Check if player has stock
    if (
      playerData.assets.filter(
        (a) => a.type === 'stock' && a.name === card.title
      ).length > 0
    ) {
      return true
    }
    return false
  })

  //#region Side-Effects
  useEffect(() => {
    if (hasStock) {
      setIsBuyingMore(false)
    }
  }, [hasStock])
  //#endregion

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
        subtype: null,
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
        checkWinningCondition(newPlayerData)
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
    console.log('num: ', num)
    setQuantity((q) => {
      if (isNaN(num) || num < 0) {
        console.log('Case 1: ', q)
        return q
      }
      console.log('Case 2: ', num)
      return num
    })
  }

  const handleSell = () => {
    let newPlayerData = playerData
    let shares = newPlayerData.assets
      .filter((a) => a.type === 'stock' && a.name === card.title)
      .reduce((total, a) => total + a.quantity, 0)
    let cash = card.arg1 * shares
    // > Add shares to the player cash
    newPlayerData.cash += cash
    // > Remove stocks from player's assets
    newPlayerData.assets = [
      ...newPlayerData.assets.filter((a) => a.name !== card.title),
    ]
    // > Update the player data context
    setPlayerData(newPlayerData)
    setActionType('start')
  }

  const increaseStockCount = () => {
    setQuantity((q) => q + 1)
  }

  const decreaseStockCount = () => {
    if (quantity > 0) {
      setQuantity((q) => q - 1)
    }
  }

  const toggleBuyMode = (e) => {
    if (!e.target.checked) {
      setQuantity(0)
    }
    setIsBuyingMore(e.target.checked)
  }

  //#endregion Event handlers

  return (
    <>
      <Top>
        <Left>
          <Header>
            <Title>{card.title}</Title>
          </Header>
          <Description>{card.description}</Description>
          {card.info !== '' && <Note>{card.info}</Note>}
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
                {card.type === 'stock' && (
                  <Note>
                    {`Shares owned:
                    ${playerData.assets
                      .filter(
                        (a) => a.type === 'stock' && a.name === card.title
                      )
                      .reduce((total, asset) => total + asset.quantity, 0)}`}
                  </Note>
                )}
                {card.type === 'estate' && (
                  <Note>Downpay: ${currencyFormatter.format(card.arg2)}</Note>
                )}
                {hasStock && (
                  <ImportantNote>
                    {`(Click SELL to sell ALL stocks for $${currencyFormatter.format(
                      playerData.assets
                        .filter(
                          (a) => a.type === 'stock' && a.name === card.title
                        )
                        .reduce((total, a) => total + a.quantity, 0) * card.arg1
                    )})`}
                  </ImportantNote>
                )}
              </DetailsColumn>
            </Details>
          )}
          {card.arg2 > playerData.cash && (
            <ImportantNote>{`(You don't have enough cash. Must take a loan of $${currencyFormatter.format(
              getLoanAmount(card.arg2 - playerData.cash)
            )})`}</ImportantNote>
          )}
        </Left>
        <Right>
          <ThumbnailImg src="/assets/images/stocks.png" />
        </Right>
      </Top>
      <Bottom>
        <BuyForm onSubmit={handleBuy}>
          <InputContainer>
            <StyledInput
              label="Number of stock"
              size="small"
              type="text"
              value={quantity}
              onChange={handleInputChange}
              disabled={!isBuyingMore}
            />
            <InputActions>
              <InputButton
                aria-label="increase stock amount"
                size="small"
                onClick={increaseStockCount}
              >
                <ArrowDropUpIcon />
              </InputButton>
              <InputButton
                aria-label="decrease stock amount"
                size="small"
                onClick={decreaseStockCount}
              >
                <ArrowDropDownIcon />
              </InputButton>
            </InputActions>
            {/* Checkbox */}
            {hasStock && (
              <FormControlLabel
                control={<Checkbox onChange={toggleBuyMode} />}
                label="Buy more?"
              />
            )}
            {/* Side note */}
            {quantity > 0 && (
              <SideNote>
                {`Buy ${quantity} shares for $${currencyFormatter.format(
                  quantity * card.arg1
                )}`}
                {quantity * card.arg1 > playerData.cash &&
                  `. (Loan: $${getLoanAmount(
                    quantity * card.arg1 - playerData.cash
                  )})`}
              </SideNote>
            )}
          </InputContainer>

          <MainActions>
            <ActionButton
              type="submit"
              variant="contained"
              disableRipple
              disabled={quantity === 0}
            >
              BUY
            </ActionButton>
            {card.type === 'stock' &&
              playerData.assets.filter(
                (a) => a.type === 'stock' && a.name === card.title
              ).length > 0 && (
                <ActionButton
                  variant="contained"
                  disableRipple
                  onClick={handleSell}
                  disabled={isBuyingMore}
                >
                  SELL
                </ActionButton>
              )}
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
      </Bottom>
    </>
  )
}

export default OpportunityStockDetails

//#region styled components
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
  fontWeight: 700,
  color: colors.red.base,
})

const SideNote = styled(Note)({
  // paddingLeft: '.25rem',
  margin: 0,
  padding: 0,
  alignSelf: 'center',
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
  columnGap: '.5rem',
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

const StyledInput = styled(TextField)({
  fontSize: '1rem',
  width: '30%',
})

//#endregion styled components
