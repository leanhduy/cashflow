import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { colors } from '@/styles'
import { useContext, useState } from 'react'
import { GameContext } from '@/utils'
import { currencyFormatter } from '@/utils'
import { BuyDialog } from '@/components'

const OpportunityDetailsDialog = ({
  title,
  description,
  note,
  arg1,
  arg2,
  arg3,
  arg4,
  type,
}) => {
  const { setActionType } = useContext(GameContext)
  const [isBuying, setIsBuying] = useState(false)
  return (
    <>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {note && <Note>{note}</Note>}
      <Note>Cost: ${currencyFormatter.format(arg1)}</Note>
      <Note>Cashflow: ${currencyFormatter.format(arg2)}</Note>
      {type === 'stock' && (
        <Note>
          Trading Range: ${currencyFormatter.format(arg3)} to $
          {currencyFormatter.format(arg4)}
        </Note>
      )}
      {type === 'stock' && <Note>Shares owned: 0</Note>}
      {type === 'real-estate' && (
        <Note>Downpay: ${currencyFormatter.format(arg3)}</Note>
      )}
      <span style={{ flex: 1 }}></span>
      {isBuying && (
        <BuyDialog
          title={title}
          description={description}
          note={note}
          cost={arg1}
          cashflow={arg2}
          tradingMin={arg3}
          tradingMax={arg4}
          type={type}
        />
      )}

      <MainActions style={{ visibility: isBuying ? 'hidden' : 'visible' }}>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            if (type === 'stock') {
              setIsBuying(true)
            } else {
              // > TODO: Recalculate Financial statement
              setActionType('start')
            }
          }}
        >
          BUY
        </ActionButton>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('start')
          }}
          style={{ alignSelf: 'flex-end' }}
        >
          PASS
        </ActionButton>
      </MainActions>
    </>
  )
}

OpportunityDetailsDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string,
  note: PropTypes.string,
  arg1: PropTypes.number,
  arg2: PropTypes.number,
  arg3: PropTypes.number,
  arg4: PropTypes.number,
}

export default OpportunityDetailsDialog

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

const MainActions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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
  width: '120px',
  '&:active': {
    opacity: 0.8,
    transform: 'scale(0.9)',
  },
})

//#endregion styled components
