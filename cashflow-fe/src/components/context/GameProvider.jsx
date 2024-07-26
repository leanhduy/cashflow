import { useEffect, useState } from 'react'
import { GameContext, generatePlayerData, getPayday } from '@/utils'
import PropTypes from 'prop-types'
import {} from '@/utils'

const GameProvider = ({ children }) => {
  const [actionType, setActionType] = useState('start')
  const [prevSlot, setPrevSlot] = useState(-1)
  const [currentSlot, setCurrentSlot] = useState(0)
  const [playerData, setPlayerData] = useState(generatePlayerData)

  // Update player's in-game data
  useEffect(() => {
    if (prevSlot > 0) {
      let newCash =
        playerData.cash + getPayday(prevSlot, currentSlot, playerData)
      setPlayerData((data) => ({ ...data, cash: newCash }))
    }
  }, [currentSlot])

  return (
    <GameContext.Provider
      value={{
        actionType,
        setActionType,
        currentSlot,
        setCurrentSlot,
        playerData,
        setPlayerData,
        prevSlot,
        setPrevSlot,
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
