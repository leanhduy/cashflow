import styled from '@emotion/styled'
import { colors } from '@/styles'
import { useContext, useEffect, useState } from 'react'
import { GameContext } from '@/utils'
import {
  StartDialog,
  RepayDialog,
  DownsizedDialog,
  BabyDialog,
  OpportunityDialog,
  OpportunityStockDetails,
  MarketDialog,
  DoodadDialog,
  CharityDialog,
  BorrowDialog,
  OpportunityStockSplitDetails,
  OpportunityEstateDetails,
  OpportunityEstateAutoDetails,
} from '@/components'
import { mockRepayDialog, mockMarket } from '@/__mocks__'

const Action = () => {
  const { actionType } = useContext(GameContext)
  const [dialog, setDialog] = useState(null)
  useEffect(() => {
    switch (actionType) {
      case 'start':
      case 'payday':
        setDialog(<StartDialog />)
        break
      case 'repay':
        setDialog(<RepayDialog {...mockRepayDialog} />)
        break
      case 'downsized':
        setDialog(<DownsizedDialog />)
        break
      case 'baby':
        setDialog(<BabyDialog />)
        break
      case 'opportunity':
        setDialog(<OpportunityDialog />)
        break
      case 'opportunity-stock':
        setDialog(<OpportunityStockDetails />)
        break
      case 'opportunity-stock-split':
        setDialog(<OpportunityStockSplitDetails />)
        break
      case 'opportunity-estate':
        setDialog(<OpportunityEstateDetails />)
        break
      case 'opportunity-estate-auto':
        setDialog(<OpportunityEstateAutoDetails />)
        break
      case 'market':
        setDialog(<MarketDialog market={mockMarket} />)
        break
      case 'doodads':
        setDialog(<DoodadDialog />)
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
  height: '275px',
  padding: '1.25rem 2rem',
  rowGap: '.5rem',
  width: '80%',
  overflowY: 'auto',
})
//#endregion styled components
