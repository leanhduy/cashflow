import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { GameContext } from '@/utils'
import { currencyFormatter } from '@/utils'

const BuyDialog = ({
  title,
  description,
  note,
  cost,
  arg1,
  arg2,
  arg3,
  arg4,
}) => {
  const { setActionType } = useContext(GameContext)

  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Logic is not implemented at the moment')
    setActionType('start')
  }
  return (
    <>
      <BuyForm onSubmit={handleSubmit}>
        <div>
          Buy{' '}
          <StyledInput
            type="text"
            value={amount}
            onChange={(e) => {
              let num = parseInt(e.target.value)
              setAmount(isNaN(num) ? 0 : num)
            }}
          />{' '}
          for <span>${currencyFormatter.format(amount * cost)}</span>
        </div>
        <MainActions>
          <ActionButton type="submit" variant="contained" disableRipple>
            BUY
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
      </BuyForm>
    </>
  )
}

BuyDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string,
  note: PropTypes.string,
  arg1: PropTypes.number,
  arg2: PropTypes.number,
  arg3: PropTypes.number,
  arg4: PropTypes.number,
}

export default BuyDialog

//#region styled components
const BuyForm = styled.form({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
})

const StyledInput = styled.input({
  fontSize: '12px',
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

//#endregion styled components
