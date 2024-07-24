import styled from '@emotion/styled'
import { colors } from '@/styles'
import { useContext, useEffect, useState } from 'react'
import { ActionContext } from '@/utils'
import {
  StartDialog,
  RepayDialog,
  DownsizedDialog,
  BabyDialog,
  OpportunityDialog,
  OpportunityDetailsDialog,
  MarketDialog,
  DoodadDialog,
  CharityDialog,
  BorrowDialog,
} from '@/components'
import {
  mockStartDialog,
  mockRepayDialog,
  mockDownsizedDialog,
  mockBabyDialogNew,
  mockOpportunityDialog,
  mockBigDeal,
  mockMarket,
  mockDoodad,
} from '@/__mocks__'

const Action = () => {
  const { actionType } = useContext(ActionContext)
  const [dialog, setDialog] = useState(null)
  useEffect(() => {
    switch (actionType) {
      case 'start':
        setDialog(<StartDialog {...mockStartDialog} />)
        break
      case 'repay':
        setDialog(<RepayDialog {...mockRepayDialog} />)
        break
      case 'downsized':
        setDialog(<DownsizedDialog {...mockDownsizedDialog} />)
        break
      case 'baby':
        setDialog(<BabyDialog {...mockBabyDialogNew} />)
        break
      case 'opportunity':
        setDialog(<OpportunityDialog {...mockOpportunityDialog} />)
        break
      case 'opportunity-details':
        setDialog(<OpportunityDetailsDialog {...mockBigDeal} />)
        break
      case 'market':
        setDialog(<MarketDialog market={mockMarket} />)
        break
      case 'doodad':
        setDialog(<DoodadDialog doodad={mockDoodad} />)
        break
      case 'charity':
        setDialog(<CharityDialog />)
        break
      case 'borrow':
        setDialog(<BorrowDialog />)
        break
      default:
        setDialog(null)
        break
    }
  }, [actionType])
  return <Container>{dialog}</Container>
}

export default Action

//#region styled components
const Container = styled.div({
  alignItems: 'center',
  border: `2px solid ${colors.grey.base}`,
  borderRadius: '10px',
  boxShadow: 'rgba(12,12,12, 0.8) 4px 4px 4px',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '450px',
  padding: '1.25rem 2rem',
  rowGap: '.5rem',
  width: '80%',
})
//#endregion styled components
