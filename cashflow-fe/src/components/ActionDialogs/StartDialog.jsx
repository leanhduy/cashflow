import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext, rollDice, playSFX, BOARD_SLOTS, drawCard } from '@/utils'

const StartDialog = () => {
  const {
    playerData,
    setPlayerData,
    currentSlot,
    setActionType,
    setCurrentSlot,
    setPrevSlot,
    setCard,
  } = useContext(GameContext)

  /**
   * > Handle the logic of rolling dice
   * * 1. If player is under the effect of charity (can roll multiple dice):
   * *  - Reduce the number of charityTurn to 1
   * *  - If remaining number of charityTurnLeft is 1, reset the number of dice to 1
   * * 2. Set the prevSlot to the current slotId
   * * 3. Set the currentSlot to the next slotId the player will land on
   * * 4. Set the action type to the type of target slot
   * * 5. Draw a random card and store it in game data context
   */
  const handleRoll = () => {
    let move = rollDice(playerData.diceNum)
    let slotId = (currentSlot + move) % 23
    let card = drawCard(BOARD_SLOTS[slotId].type)

    if (playerData.charityTurnLeft === 1) {
      setPlayerData((prev) => ({
        ...prev,
        diceNum: 1,
      }))
    }
    if (playerData.charityTurnLeft > 0) {
      setPlayerData((prev) => ({
        ...prev,
        charityTurnLeft: playerData.charityTurnLeft - 1,
      }))
    }

    setPrevSlot(currentSlot)
    setCurrentSlot((slot) => (slot + move) % 23)
    setActionType(BOARD_SLOTS[slotId].type)
    setCard(card)
    playSFX('/assets/sounds/roll.mp3')
  }
  return (
    <>
      <Header>
        <Title>{`Player's turn.`}</Title>
      </Header>
      <Description>
        When you are ready, roll the dice and take your turn
      </Description>
      <Note>
        Before you start your turn, review your financial statement. You may
        also use this time to repay liabilities or borrow money.
      </Note>
      <SubActions>
        <ActionButton
          variant="contained"
          color="warning"
          startIcon={<img src="/assets/images/bank.png" />}
          disableRipple
          onClick={() => {
            setActionType('borrow')
          }}
        >
          BORROW
        </ActionButton>
        <ActionButton
          variant="contained"
          color="warning"
          startIcon={<img src="/assets/images/repay.png" />}
          disableRipple
          onClick={() => {
            setActionType('repay')
          }}
        >
          REPAY
        </ActionButton>
      </SubActions>
      <Note style={{ flex: 1 }} />
      <MainActions>
        <ActionButton
          variant="contained"
          startIcon={<img src="/assets/images/dice.png" />}
          disableRipple
          onClick={handleRoll}
        >
          ROLL
        </ActionButton>
      </MainActions>
    </>
  )
}

export default StartDialog

//#region styled components
const Header = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
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
  flex: 1,
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

const SubActions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  columnGap: '2rem',
  margin: '1rem',
  width: '100%',
  '& button': {
    fontSize: '16px',
    width: '128px',
  },
  '& img': {
    width: '24px',
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

//#endregion
