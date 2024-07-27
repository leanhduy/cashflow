import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext } from '@/utils'

const OpportunityStockSplitDetails = () => {
  const { card, playerData, setPlayerData, setActionType } =
    useContext(GameContext)

  //#region Event handlers
  const handleOK = () => {
    let newPlayerData = playerData
    // > Case 1 - Normal split: Doubling all the stocks in player's assets
    if (!card.arg1) {
      newPlayerData.assets.map((a) => {
        if (a.type === 'stock' && a.name === card.title) {
          a.quantity *= 2
        }
      })
    } else {
      // > Case 2 - Reverse split: Halving all the stocks in player's assets
      newPlayerData.assets.map((a) => {
        if (a.type === 'stock' && a.name === card.title) {
          a.quantity = Math.floor(a.quantity / 2)
        }
      })
    }

    setPlayerData(newPlayerData)
    setActionType('start')
  }

  //#endregion Event handlers

  return (
    <>
      <Title>{card.title}</Title>
      <Description>{card.description}</Description>
      <NoteImportant>{card.info}</NoteImportant>
      <Note>
        {`You are having
        ${playerData.assets
          .filter((a) => a.type === 'stock' && a.name === card.title)
          .reduce((total, asset) => total + asset.quantity, 0)}
        shares of this stock.`}
      </Note>
      <span style={{ flex: 1 }} />
      <MainActions>
        <ActionButton variant="contained" onClick={handleOK}>
          OK
        </ActionButton>
      </MainActions>
    </>
  )
}

export default OpportunityStockSplitDetails

//#region styled components
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

const NoteImportant = styled(Note)({
  color: colors.red.base,
})

const MainActions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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
