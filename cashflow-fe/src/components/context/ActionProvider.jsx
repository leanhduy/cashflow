import { useState } from 'react'
import { ActionContext } from '@/utils'
import PropTypes from 'prop-types'

const ActionProvider = ({ children }) => {
  const [actionType, setActionType] = useState('charity')

  return (
    <ActionContext.Provider value={{ actionType, setActionType }}>
      {children}
    </ActionContext.Provider>
  )
}

ActionProvider.propTypes = {
  children: PropTypes.node,
}

export default ActionProvider
