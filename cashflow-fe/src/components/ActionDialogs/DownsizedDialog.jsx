import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext, currencyFormatter } from '@/utils'

const DownsizedDialog = ({ title, description, expenses }) => {
  const { setActionType } = useContext(GameContext)
  return (
    <>
      <Header>
        <Title>{title}</Title>
        <ThumbnailImg src="./assets/downsized-thumb.png" />
      </Header>
      {description && <Description>{description}</Description>}
      <Note>Pay ${currencyFormatter.format(expenses)}</Note>
      <SubActions></SubActions>
      <MainActions>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('start')
          }}
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
  width: '96px',
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

DownsizedDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
}

//#endregion styled components
