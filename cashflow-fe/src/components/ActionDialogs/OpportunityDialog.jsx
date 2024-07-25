import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext } from '@/utils'

const OpportunityDialog = ({ title, description, info }) => {
  const { setActionType } = useContext(GameContext)
  return (
    <>
      <Header>
        <Title>{title}</Title>
        <ThumbnailImg src="./assets/opportunity-thumb.png" />
      </Header>
      {description && <Description>{description}</Description>}
      <Note>{info}</Note>
      <MainActions>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('opportunity-details')
          }}
        >
          SMALL
        </ActionButton>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('opportunity-details')
          }}
          style={{ alignSelf: 'flex-end' }}
        >
          BIG
        </ActionButton>
      </MainActions>
    </>
  )
}

OpportunityDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.string,
}

export default OpportunityDialog

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
  width: '100%',
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
  width: '120px',
  '&:active': {
    opacity: 0.8,
    transform: 'scale(0.9)',
  },
})

//#endregion styled components
