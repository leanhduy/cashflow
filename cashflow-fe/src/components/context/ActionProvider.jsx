import { useState } from 'react'
import { ActionContext } from '@/utils'
import PropTypes from 'prop-types'

const ActionProvider = ({ children }) => {
  const [actionType, setActionType] = useState('start')
  const [currentSlot, setCurrentSlot] = useState(0)

  return (
    <ActionContext.Provider
      value={{ actionType, setActionType, currentSlot, setCurrentSlot }}
    >
      {children}
    </ActionContext.Provider>
  )
}

ActionProvider.propTypes = {
  children: PropTypes.node,
}

export default ActionProvider
