import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { colors } from '@/styles'
import { useContext, useState } from 'react'
import { GameContext } from '@/utils'

const MarketDialog = ({ market }) => {
  const { setActionType } = useContext(GameContext)
  // > Need to update the `Assets` component to add sell button
  const [hasAssets, setHasAssets] = useState(false)
  const { id, title, description, type, price } = market
  return (
    <>
      <Header>
        <Title>{title}</Title>
        <ThumbnailImg src="./assets/market-thumb.png" />
      </Header>
      {description && <Description>{description}</Description>}
      <Note>
        {hasAssets
          ? `Click on the sell button next to the assets you want to sell.`
          : `You have no assets that match this market card.`}
      </Note>
      <Note style={{ flex: 1 }}></Note>
      <MainActions>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('start')
          }}
        >
          DONE
        </ActionButton>
      </MainActions>
    </>
  )
}

MarketDialog.propTypes = {
  market: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default MarketDialog

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

const ActionButton = styled(Button)({
  fontWeight: 800,
  '&:active': {
    opacity: 0.8,
    transform: 'scale(0.9)',
  },
})

//#endregion styled components

//#endregion
