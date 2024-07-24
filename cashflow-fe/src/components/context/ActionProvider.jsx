import { useEffect, useState } from 'react'
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

const ActionProvider = () => {
  const [actionType, setActionType] = useState('doodad')
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
      default:
        setDialog(null)
        break
    }
  }, [actionType])
  return (
    <ActionContext.Provider value={{ actionType, setActionType }}>
      {dialog}
    </ActionContext.Provider>
  )
}

export default ActionProvider
