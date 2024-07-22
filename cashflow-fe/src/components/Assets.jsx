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
          <ListItemMiddle>Value</ListItemMiddle>
          <ListItemRight>Cost</ListItemRight>
        </ListItemHeader>
        <StyledList>
          {assets &&
            assets.map((i) => (
              <ListItem key={i.id}>
                <ListItemLeft>
                  {i.quantity > 1 ? i.quantity : ''} {i.name}
                </ListItemLeft>
                <ListItemMiddle>{i.quantity}</ListItemMiddle>
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
  borderBottom: `1px solid ${colors.purple.light}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '.5rem 0',
})

const ListItemLeft = styled.span({
  flex: '1 1 100px',
})
const ListItemMiddle = styled.span({
  flex: '1 1 50px',
})
const ListItemRight = styled.span({
  flex: '1 1 20px',
})
//#endregion styled components
