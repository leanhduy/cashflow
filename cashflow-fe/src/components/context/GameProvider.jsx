import { useState } from 'react'
import { GameContext } from '@/utils'
import PropTypes from 'prop-types'
import { generatePlayerData } from '@/utils'

const GameProvider = ({ children }) => {
  const [actionType, setActionType] = useState('start')
  const [currentSlot, setCurrentSlot] = useState(0)
  const [playerData, setPlayerData] = useState(generatePlayerData)

  return (
    <GameContext.Provider
      value={{
        actionType,
        setActionType,
        currentSlot,
        setCurrentSlot,
        playerData,
        setPlayerData,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

GameProvider.propTypes = {
  children: PropTypes.node,
}

export default GameProvider
