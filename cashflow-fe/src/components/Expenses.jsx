import styled from '@emotion/styled'
import { colors } from '@/styles'
import PropTypes from 'prop-types'
import { currencyFormatter, getMonthlyLoanPayment } from '@/utils'

const Expenses = ({ liabilities, childNum, expensePerChild }) => {
  return (
    <CardContainer>
      <CardHeader>EXPENSES</CardHeader>
      <CardBody>
        <ListItemHeader>
          <ListItemLeft>Name</ListItemLeft>
          <ListItemRight>Amount</ListItemRight>
        </ListItemHeader>
        <StyledList>
          {liabilities &&
            liabilities.map((i) => (
              <ListItem key={i.id}>
                <ListItemLeft>{i.name} Payment</ListItemLeft>
                <ListItemRight>
                  $
                  {currencyFormatter.format(
                    getMonthlyLoanPayment(i).toFixed(0)
                  )}
                </ListItemRight>
              </ListItem>
            ))}
          <ListItem>
            <ListItemLeft>Child Expenses ({childNum})</ListItemLeft>
            <ListItemRight>
              ${currencyFormatter.format(childNum * expensePerChild)}
            </ListItemRight>
          </ListItem>
        </StyledList>
      </CardBody>
    </CardContainer>
  )
}

//#region prop types
Expenses.propTypes = {
  liabilities: PropTypes.array,
  childNum: PropTypes.number.isRequired,
  expensePerChild: PropTypes.number.isRequired,
}
//#endregion prop types

export default Expenses

//#region styled components
const CardContainer = styled.div({
  backgroundColor: colors.white,
  border: `1px solid ${colors.purple.base}`,
  borderRadius: '12px',
  maxWidth: '400px',
  margin: 0,
  padding: 0,
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
})

const CardHeader = styled.h2({
  backgroundColor: colors.purple.dark,
  borderRadius: '10px 10px 0 0',
  color: colors.white,
  fontWeight: 700,
  height: '2.5rem',
  margin: 0,
  padding: '.5rem',
  textAlign: 'center',
})

const CardBody = styled.div({
  margin: '1rem',
  paddingRight: '1rem',
  height: '60%',
})

const StyledList = styled.ul({
  overflowY: 'scroll',
  height: '100%',
  scrollbarWidth: 'none',
  paddingInlineStart: 0,
  margin: 0,
})

const ListItemHeader = styled.div({
  borderBottom: `2px solid ${colors.purple.base}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 0,
  '& span': {
    fontWeight: 800,
  },
})

const ListItem = styled.li({
  // borderBottom: `1px solid ${colors.purple.light}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '.5rem 0',
  columnGap: '1rem',
})

const ListItemLeft = styled.span({
  borderBottom: `1px solid ${colors.purple.light}`,
  flex: '1 1 100px',
  textAlign: 'left',
})
const ListItemRight = styled.span({
  borderBottom: `1px solid ${colors.purple.light}`,
  flex: '1 1 20px',
  textAlign: 'center',
})
//#endregion styled components
