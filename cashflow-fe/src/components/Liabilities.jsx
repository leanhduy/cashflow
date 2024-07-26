import styled from '@emotion/styled'
import { colors } from '@/styles'
import PropTypes from 'prop-types'
import { currencyFormatter, GameContext } from '@/utils'
import PaymentIcon from '@mui/icons-material/Payment'
import { useContext } from 'react'

const Liabilities = ({ liabilities }) => {
  const { actionType } = useContext(GameContext)
  const handleRepay = () => {
    alert('Repay logic not implemented!')
  }
  return (
    <CardContainer>
      <CardHeader>LIABILITIES</CardHeader>
      <CardBody>
        <ListItemHeader>
          <ListItemLeft>Name</ListItemLeft>
          <ListItemRight>Amount</ListItemRight>
          {actionType === 'repay' && <ListItemIcon />}
        </ListItemHeader>
        <StyledList>
          {liabilities &&
            liabilities.map((i) => (
              <ListItem key={i.id}>
                <ListItemLeft>{i.name}</ListItemLeft>
                <ListItemRight>
                  ${currencyFormatter.format(i.amount)}
                </ListItemRight>
                {actionType === 'repay' && (
                  <ListItemIcon>
                    <PaymentIcon color="warning" onClick={handleRepay} />
                  </ListItemIcon>
                )}
              </ListItem>
            ))}
        </StyledList>
      </CardBody>
    </CardContainer>
  )
}

//#region prop types
Liabilities.propTypes = {
  liabilities: PropTypes.array,
}
//#endregion prop types

export default Liabilities

//#region styled components
const CardContainer = styled.div({
  backgroundColor: colors.white,
  border: `1px solid ${colors.purple.base}`,
  borderRadius: '12px',
  maxWidth: '400px',
  margin: 0,
  padding: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const CardHeader = styled.h3({
  backgroundColor: colors.orange.dark,
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
  alignItems: 'center',
})

const ListItemLeft = styled.span({
  borderBottom: `1px solid ${colors.purple.light}`,
  flex: '1 1 150px',
  fontSize: '.875rem',
  textAlign: 'left',
})
const ListItemRight = styled.span({
  borderBottom: `1px solid ${colors.purple.light}`,
  flex: '1 1 auto',
  fontSize: '.875rem',
  textAlign: 'right',
})
const ListItemIcon = styled.span({
  flex: '1 1 24px',
  fontSize: '.875rem',
  textAlign: 'right',
  alignSelf: 'center',
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
