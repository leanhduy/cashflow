import { useEffect, useState } from 'react'
import { ActionContext } from '@/utils'
import {
  StartDialog,
  RepayDialog,
  DownsizedDialog,
  BabyDialog,
} from '@/components'
import {
  mockStartDialog,
  mockRepayDialog,
  mockDownsizedDialog,
  mockBabyDialogNew,
} from '@/__mocks__'

const ActionProvider = () => {
  const [actionType, setActionType] = useState('baby')
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
