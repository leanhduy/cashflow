import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext, useEffect } from 'react'
import { GameContext } from '@/utils'
import PaymentIcon from '@mui/icons-material/Payment'

const MarketDialog = () => {
  const { playerData, card, setActionType, setIsSellingAssets } =
    useContext(GameContext)

  useEffect(() => {
    const hasAssets =
      playerData.assets.filter(
        (asset) => asset.type === card.type && asset.subtype === card.subtype
      ).length > 0
        ? true
        : false
    if (hasAssets) {
      setIsSellingAssets(true)
    }
  }, [playerData])

  //#region event handlers
  const handlePass = () => {
    setIsSellingAssets(false)
    setActionType('start')
  }
  //#endregion event handlers

  return (
    <Container>
      <Top>
        <Left>
          <Header>
            <Title>{card.title}</Title>
          </Header>
          <Description>{card.description}</Description>
          <Note>{card.info}</Note>
          {playerData.assets.filter(
            (asset) =>
              asset.type === card.type && asset.subtype === card.subtype
          ).length === 0 ? (
            <ImportantNote>
              You have no assets that match this market card.
            </ImportantNote>
          ) : (
            <ImportantNote>
              Click on the Sell icon button{' '}
              {<PaymentIcon color="warning" style={{ alignSelf: 'center' }} />}
              for an asset on your Assets list to take this deal.
            </ImportantNote>
          )}
          <Details></Details>
        </Left>
        <Right>
          <ThumbnailImg src="/assets/images/stocks.png" />
        </Right>
      </Top>
      <Bottom>
        <MainActions>
          <ActionButton
            variant="contained"
            disableRipple
            onClick={handlePass}
            style={{ alignSelf: 'flex-end' }}
          >
            PASS
          </ActionButton>
        </MainActions>
      </Bottom>
    </Container>
  )
}

export default MarketDialog

//#region styled components
const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  fontSize: '.9rem',
})

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
  fontWeight: 500,
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
})

//#endregion styled components

//#endregion
