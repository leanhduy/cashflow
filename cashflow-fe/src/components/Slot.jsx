import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { GameContext } from '@/utils'

const Slot = ({ id, name }) => {
  const [url, setUrl] = useState(null)
  const { currentSlot } = useContext(GameContext)

  const updateSlotUI = (slotName) => {
    switch (slotName) {
      case 'Payday':
        setUrl(
          currentSlot === id
            ? '/assets/images/payday-visited.png'
            : '/assets/images/payday.png'
        )
        break
      case 'Opportunity':
        setUrl(
          currentSlot === id
            ? '/assets/images/opportunity-visited.png'
            : '/assets/images/opportunity.png'
        )
        break
      case 'Market':
        setUrl(
          currentSlot === id
            ? '/assets/images/market-visited.png'
            : '/assets/images/market.png'
        )
        break
      case 'Doodads':
        setUrl(
          currentSlot === id
            ? '/assets/images/doodads-visited.png'
            : '/assets/images/doodads.png'
        )
        break
      case 'Baby':
        setUrl(
          currentSlot === id
            ? '/assets/images/baby-visited.png'
            : '/assets/images/baby.png'
        )
        break
      case 'Downsized':
        setUrl(
          currentSlot === id
            ? '/assets/images/downsized-visited.png'
            : '/assets/images/downsized.png'
        )
        break
      default:
        setUrl(
          currentSlot === id
            ? '/assets/images/charity-visited.png'
            : '/assets/images/charity.png'
        )
        break
    }
  }
  useEffect(() => {
    updateSlotUI(name)
  }, [id, name, currentSlot])

  return <StyleImg src={url}></StyleImg>
}

//#region Props Type
Slot.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}
//#endregion Props Type

export default Slot

//#region styled components
const StyleImg = styled.img({
  width: '4rem',
  height: '4rem',
})
//#endregion
