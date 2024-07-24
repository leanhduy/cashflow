import { useEffect, useState } from 'react'
import { ActionContext } from '@/utils'
import { StartDialog, RepayDialog, DownsizedDialog } from '@/components'
import {
  mockStartDialog,
  mockRepayDialog,
  mockDownsizedDialog,
} from '@/__mocks__'

const ActionProvider = () => {
  const [actionType, setActionType] = useState('downsized')
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
