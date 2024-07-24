import styled from '@emotion/styled'
import { Button, IconButton } from '@mui/material'
import { useContext, useState } from 'react'
import { ActionContext } from '@/utils'
import { colors } from '@/styles'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const BorrowDialog = () => {
  const { setActionType } = useContext(ActionContext)

  const [amount, setAmount] = useState(0)

  const handleBorrow = (e) => {
    e.preventDefault()
    alert('Borrow Logic is not implemented at the moment')
    setActionType('start')
  }
  return (
    <>
      <Header>
        <Title>TAKE OUT A LOAN!</Title>
        <ThumbnailImg src="./assets/borrow-thumb.png" />
      </Header>
      <Description>
        Loan must be in multiples of $1,000 at 10% interest per month.
      </Description>
      <Note style={{ flex: 1 }} />
      <BorrowForm onSubmit={handleBorrow}>
        <InputContainer>
          {/* <span>Amount: $</span> */}
          <StyledInput
            type="text"
            value={amount}
            onChange={(e) => {
              let num = parseInt(e.target.value)
              setAmount(isNaN(num) ? 0 : num)
            }}
          />
          <InputActions>
            <InputButton aria-label="delete" size="small">
              <ArrowDropUpIcon />
            </InputButton>
            <InputButton aria-label="delete" size="small">
              <ArrowDropDownIcon />
            </InputButton>
          </InputActions>
        </InputContainer>
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
      </BorrowForm>
    </>
  )
}

export default BorrowDialog

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
  flex: 1,
})

const BorrowForm = styled.form({
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
  height: '24px',
  width: '24px',
})

const StyledInput = styled.input({
  fontSize: '1.5rem',
  width: '30%',
  height: '100%',
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
