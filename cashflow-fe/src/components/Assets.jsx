import styled from '@emotion/styled'
import { colors } from '@/styles'
import PropTypes from 'prop-types'
import { currencyFormatter, GameContext } from '@/utils'
import { useContext } from 'react'
import PaymentIcon from '@mui/icons-material/Payment'

const Assets = ({ assets }) => {
  const {
    card,
    isSellingAssets,
    playerData,
    setPlayerData,
    setIsSellingAssets,
    setActionType,
  } = useContext(GameContext)

  const handleSell = (asset) => {
    let newPlayerData = playerData
    // > Calculate the amount of cash received
    const cash =
      asset.unit * card.arg1 - asset.mortgage > 0
        ? asset.unit * card.arg1 - asset.mortgage
        : 0
    // > Remove item from the Assets section
    newPlayerData.assets = [
      ...newPlayerData.assets.filter((a) => a.id !== asset.id),
    ]
    newPlayerData.cash += cash
    setIsSellingAssets(false)
    setPlayerData(newPlayerData)
    setActionType('start')
  }

  return (
    <CardContainer>
      <CardHeader>ASSETS</CardHeader>
      <CardBody>
        <ListItemHeader>
          <ListItemLeft>Name</ListItemLeft>
          <ListItemRight>Cost</ListItemRight>
          <ListItemIcon />
        </ListItemHeader>
        <StyledList>
          {assets &&
            assets.map((i) => (
              <ListItem key={i.id}>
                <ListItemLeft>
                  {i.quantity >= 1 ? i.quantity : ''} {i.name}
                </ListItemLeft>
                <ListItemRight>
                  ${currencyFormatter.format(i.cost)}
                </ListItemRight>
                <ListItemIcon>
                  {isSellingAssets &&
                    i.type === card.type &&
                    i.subtype === card.subtype && (
                      <PaymentIcon
                        color="warning"
                        onClick={() => {
                          handleSell(i)
                        }}
                      />
                    )}
                </ListItemIcon>
              </ListItem>
            ))}
        </StyledList>
      </CardBody>
    </CardContainer>
  )
}

//#region prop types
Assets.propTypes = {
  assets: PropTypes.array,
}
//#endregion prop types

export default Assets

//#region styled components
const CardContainer = styled.div({
  backgroundColor: colors.white,
  border: `1px solid ${colors.purple.base}`,
  borderRadius: '12px',
  height: '100%',
  maxWidth: '400px',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
})

const CardHeader = styled.h3({
  backgroundColor: colors.blue.dark,
  borderRadius: '10px 10px 0 0',
  color: colors.white,
  fontWeight: 700,
  height: '1.5rem',
  margin: 0,
  padding: '.25rem',
  textAlign: 'center',
})

const CardBody = styled.div({
  margin: '.25rem 1rem 0',
  paddingRight: '1rem',
  height: '70%',
})

const StyledList = styled.ul({
  overflowY: 'scroll',
  height: '100%',
  scrollbarWidth: 'none',
  paddingInlineStart: 0,
  margin: 0,
})

const ListItemHeader = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 0,
  '& span': {
    fontWeight: 800,
  },
})

const ListItem = styled.li({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '.375rem 0',
  columnGap: '10px',
})

const ListItemLeft = styled.span({
  borderBottom: `1px solid ${colors.purple.light}`,
  flex: '1 1 150px',
  fontSize: '.875rem',
  textAlign: 'left',
})
const ListItemRight = styled.span({
  borderBottom: `1px solid ${colors.purple.light}`,
  flex: '1 1 20px',
  fontSize: '.875rem',
  textAlign: 'right',
})

const ListItemIcon = styled.span({
  flex: '1 1 24px',
  fontSize: '.875rem',
  textAlign: 'left',
  alignSelf: 'flex-start',
  '&:hover': {
    cursor: 'pointer',
  },
  '& svg': {
    '&:hover': {
      opacity: 0.8,
    },
    '&:active': {
      transform: 'scale(.8)',
    },
  },
})
//#endregion styled components
