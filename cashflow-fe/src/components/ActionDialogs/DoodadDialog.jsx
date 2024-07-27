import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext, getLoanAmount, takeLoan } from '@/utils'

const DoodadDialog = () => {
  const { card, playerData, setPlayerData, setActionType } =
    useContext(GameContext)
  const doodads = card
  /**
   * > Handle Doodads logic
   */
  const handleDoodads = () => {
    if (playerData.cash < doodads.cost) {
      let newPlayerData = takeLoan(playerData, doodads.cost)
      setPlayerData(newPlayerData)
    } else {
      setPlayerData((data) => ({ ...data, cash: data.cash - doodads.cost }))
    }
    setActionType('start')
  }

  return (
    <>
      <Header>
        <Title>{doodads.title}</Title>
        <ThumbnailImg src="./assets/images/doodads-thumb.png" />
      </Header>
      <Description>{doodads.description}</Description>
      {doodads.info && <Note>{doodads.info}</Note>}
      {playerData.cash < doodads.cost && (
        <Note
          style={{ color: colors.red.base }}
        >{`(You don't have enough cash.You must take a loan of $${getLoanAmount(
          doodads.cost - playerData.cash
        )} to afford this.)`}</Note>
      )}
      <Note style={{ flex: 1 }} />
      <MainActions>
        <ActionButton variant="contained" disableRipple onClick={handleDoodads}>
          PAY
        </ActionButton>
      </MainActions>
    </>
  )
}

export default DoodadDialog

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
  fontWeight: 700,
  alignSelf: 'flex-start',
})

const Note = styled.span({
  fontWeight: 700,
  alignSelf: 'flex-start',
})

const MainActions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
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
