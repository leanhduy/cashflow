import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext, useEffect } from 'react'
import {
  GameContext,
  currencyFormatter,
  getTotalExpenseAmount,
  getLoanAmount,
  playSFX,
  takeLoan,
} from '@/utils'

/**
 *
 * @param {*} param0
 * @returns
 */
const DownsizedDialog = () => {
  const { playerData, setPlayerData, setActionType } = useContext(GameContext)

  /**
   * > Handle logic when player lands on `Downsized!` slot
   * * 1. Check the player’s cash amount after deduction
   * *    - If negative: force user to take a loan, add the loan to the liabilities & expenses of the user
   * *    - If positive: player’s cash is positive, do nothing
   * * 2. Deduce the player’s cash amount to a full amount of total expenses.
   * * 3. Remove the charity privilege (if you donated when landing on Charity before this turn)
   * * 4. Move to the Start Dialog
   */
  const handleDownsized = () => {
    let newPlayerData = playerData
    let totalExpenses = getTotalExpenseAmount(newPlayerData)
    // > Take loan if does not have enough cash
    if (newPlayerData.cash < totalExpenses) {
      newPlayerData = takeLoan(newPlayerData, totalExpenses)
    } else {
      newPlayerData.cash -= totalExpenses
    }
    newPlayerData.diceNum = 1
    newPlayerData.charityTurnLeft = 0
    setPlayerData(newPlayerData)
    setActionType('start')
  }

  useEffect(() => {
    setTimeout(() => {
      playSFX('/assets/sounds/downsized.mp3')
    }, 600)
  }, [])

  return (
    <>
      <Header>
        <Title>DOWNSIZED!</Title>
        <ThumbnailImg src="./assets/images/downsized-thumb.png" />
      </Header>
      <Description>Pay a full set of your expenses and charity</Description>
      <Note>
        Pay ${currencyFormatter.format(getTotalExpenseAmount(playerData))}
      </Note>
      {playerData.cash - getTotalExpenseAmount(playerData) < 0 && (
        <Note
          style={{ color: colors.red.base }}
        >{`(You don't have enough cash.You must take a loan of $${getLoanAmount(
          getTotalExpenseAmount(playerData) - playerData.cash
        )} to afford this.)`}</Note>
      )}
      <Note style={{ flex: 1 }} />
      <MainActions>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={handleDownsized}
        >
          PAY
        </ActionButton>
      </MainActions>
    </>
  )
}

export default DownsizedDialog

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
