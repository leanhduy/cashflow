import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext, rollDice } from '@/utils'

const StartDialog = ({ playerName, description, note }) => {
  const { setActionType, setCurrentSlot } = useContext(GameContext)
  const handleRoll = () => {
    let move = rollDice()
    setCurrentSlot((slot) => (slot + move) % 23)
  }
  return (
    <>
      <Title>
        {playerName}
        {`'s turn.`}
      </Title>
      {description && <Description>{description}</Description>}
      {note && <Note>{note}</Note>}
      <SubActions>
        <ActionButton
          variant="contained"
          color="warning"
          startIcon={<img src="/assets/bank.png" />}
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
          startIcon={<img src="/assets/repay.png" />}
          disableRipple
          onClick={() => {
            setActionType('repay')
          }}
        >
          REPAY
        </ActionButton>
      </SubActions>
      <MainActions>
        <ActionButton
          variant="contained"
          startIcon={<img src="/assets/dice.png" />}
          disableRipple
          onClick={handleRoll}
        >
          ROLL
        </ActionButton>
      </MainActions>
    </>
  )
}

StartDialog.propTypes = {
  playerName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
}

export default StartDialog

//#region styled components
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
  margin: '1rem',
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
  '&:active': {
    opacity: 0.8,
    transform: 'scale(0.9)',
  },
})

//#endregion styled components

//#endregion
