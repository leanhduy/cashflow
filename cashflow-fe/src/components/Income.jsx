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
                <ListItemLeft>{i.name}</ListItemLeft>
                <ListItemRight>
                  ${currencyFormatter.format(i.amount)}
                </ListItemRight>
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
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const CardHeader = styled.h3({
  backgroundColor: colors.green.base,
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

const ListHeader = styled.div({
  textAlign: 'right',
  fontSize: '.875rem',
  margin: 0,
  fontWeight: 800,
  padding: 0,
  borderBottom: `1px solid ${colors.purple.light}`,
})

const ListItem = styled.li({
  display: 'flex',
  fontSize: '.875rem',
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
  flex: '1 1 auto',
  fontSize: '.875rem',
  textAlign: 'right',
})
//#endregion styled components
