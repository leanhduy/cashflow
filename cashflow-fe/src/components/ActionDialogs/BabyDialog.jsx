import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { colors } from '@/styles'
import { useContext, useEffect } from 'react'
import { GameContext, currencyFormatter, playSFX } from '@/utils'

const BabyDialog = () => {
  const { playerData, setPlayerData, setActionType } = useContext(GameContext)
  const childNum = playerData.childNum

  useEffect(() => {
    if (playerData.childNum < 3) {
      setTimeout(() => {
        playSFX('/assets/sounds/baby.mp3')
      }, 600)
    }
  }, [])

  const handleBaby = () => {
    const newPlayerData = playerData
    if (childNum === 0) {
      newPlayerData.childNum += 1
      newPlayerData.expenses.push({
        id: newPlayerData.expenses.length + 1,
        name: `Child Expenses (${newPlayerData.childNum})`,
        amount: newPlayerData.childNum * newPlayerData.expensePerChild,
      })
      newPlayerData.expen
    } else if (childNum < 3) {
      let idx = newPlayerData.expenses.findIndex(
        (e) => e.name === `Child Expenses (${playerData.childNum})`
      )
      newPlayerData.childNum += 1
      newPlayerData.expenses[
        idx
      ].name = `Child Expenses (${newPlayerData.childNum})`
      newPlayerData.expenses[idx].amount =
        newPlayerData.childNum * newPlayerData.expensePerChild
    }
    setPlayerData({ ...newPlayerData })
    setActionType('start')
  }

  return (
    <>
      <Header>
        <Title>
          {playerData.childNum < 3 ? 'NEW BABY!' : 'BABY LIMIT REACHED!'}
        </Title>
        <ThumbnailImg src="./assets/images/baby-thumb.png" />
      </Header>
      <Description>
        {playerData.childNum < 3
          ? 'Congratulations! One child has been added to your dependents'
          : 'Each player cannot have more than 3 child.'}
      </Description>
      {childNum < 3 && (
        <Note style={{ color: colors.red.base }}>
          Child Expenses will be increased by $
          {currencyFormatter.format(playerData.expensePerChild)}
        </Note>
      )}
      <Note style={{ flex: 1 }} />
      <MainActions>
        <ActionButton variant="contained" disableRipple onClick={handleBaby}>
          OK
        </ActionButton>
      </MainActions>
    </>
  )
}

export default BabyDialog

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

//#endregion
