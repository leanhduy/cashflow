import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext } from 'react'
import { GameContext, getLoanAmount } from '@/utils'

const DoodadDialog = () => {
  const { card, playerData, setActionType } = useContext(GameContext)
  const doodads = card
  /**
   * > Handle Doodads logic
   */
  const handleDoodads = () => {
    if (playerData.cash < doodads.cost) {
      let loanAmount = getLoanAmount(doodads.cost - playerData.cash)
      playerData.cash += loanAmount - doodads.cost
      let idx = playerData.liabilities.findIndex((l) => l.name === 'Loans')
      if (idx > -1) {
        playerData.liabilities[idx].amount += loanAmount
        playerData.expenses.find((e) => e.name === 'Loans Payment').amount +=
          loanAmount * 0.1
      } else {
        playerData.liabilities.push({
          id: playerData.liabilities.length + 1,
          name: 'Loans',
          amount: loanAmount,
          type: 'bank',
        })
        playerData.expenses.push({
          id: playerData.expenses.length + 1,
          name: 'Loans Payment',
          amount: loanAmount * 0.1,
        })
      }
    } else {
      playerData.cash -= doodads.cost
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
