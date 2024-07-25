import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext } from '@/utils'

const RepayDialog = ({ title, description, liabilities }) => {
  const { setActionType } = useContext(GameContext)
  return (
    <>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <Note style={{ flex: 1 }} />
      <MainActions>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('start')
          }}
          style={{ alignSelf: 'flex-end', visibility: 'hidden' }}
        >
          OK
        </ActionButton>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('start')
          }}
          style={{ alignSelf: 'flex-end' }}
        >
          CANCEL
        </ActionButton>
      </MainActions>
    </>
  )
}

RepayDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liabilities: PropTypes.array,
}

export default RepayDialog

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
  '&:active': {
    opacity: 0.8,
    transform: 'scale(0.9)',
  },
})

//#endregion styled components
