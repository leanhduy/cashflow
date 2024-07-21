import styled from '@emotion/styled'
import { colors } from '@/styles'
import PropTypes from 'prop-types'
import { currencyFormatter } from '@/utils/helpers'

const Income = ({ incomes }) => {
  return (
    <CardContainer>
      <CardHeader>INCOME</CardHeader>
      <CardBody>
        <ListHeader>Cash Flow</ListHeader>
        <StyledList>
          {incomes &&
            incomes.map((i) => (
              <ListItem key={i.id}>
                <p>{i.name}</p>
                <p>${currencyFormatter.format(i.amount)}</p>
              </ListItem>
            ))}
        </StyledList>
      </CardBody>
    </CardContainer>
  )
}

//#region prop types
Income.propTypes = {
  incomes: PropTypes.array,
}
//#endregion prop types

export default Income

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
})

const ListHeader = styled.div({
  textAlign: 'right',
  fontSize: '1.15rem',
  fontWeight: 700,
  borderBottom: `1px solid ${colors.purple.light}`,
})

const ListItem = styled.li({
  borderBottom: `1px solid ${colors.purple.light}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '.5rem 0',
})
//#endregion styled components
