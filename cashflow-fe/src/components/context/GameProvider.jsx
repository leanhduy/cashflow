import { useState } from 'react'
import { GameContext } from '@/utils'
import PropTypes from 'prop-types'

const GameProvider = ({ children }) => {
  const [actionType, setActionType] = useState('start')
  const [currentSlot, setCurrentSlot] = useState(0)

  return (
    <GameContext.Provider
      value={{ actionType, setActionType, currentSlot, setCurrentSlot }}
    >
      {children}
    </GameContext.Provider>
  )
}

GameProvider.propTypes = {
  children: PropTypes.node,
}

export default GameProvider
