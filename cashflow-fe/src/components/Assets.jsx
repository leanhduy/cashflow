import styled from '@emotion/styled'
import { colors } from '@/styles'
import PropTypes from 'prop-types'
import { currencyFormatter } from '@/utils/helpers'

const Assets = ({ assets }) => {
  return (
    <CardContainer>
      <CardHeader>ASSETS</CardHeader>
      <CardBody>
        <ListItemHeader>
          <ListItemLeft>Name</ListItemLeft>
          <ListItemRight>Cost</ListItemRight>
        </ListItemHeader>
        <StyledList>
          {assets &&
            assets.map((i) => (
              <ListItem key={i.id}>
                <ListItemLeft>
                  {i.quantity > 1 ? i.quantity : ''} {i.name}
                </ListItemLeft>
                <ListItemRight>
                  ${currencyFormatter.format(i.quantity * i.value)}
                </ListItemRight>
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
//#endregion styled components
