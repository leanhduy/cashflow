import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { ActionContext } from '@/utils'

const Slot = ({ id, name }) => {
  const [url, setUrl] = useState(null)
  const { currentSlot } = useContext(ActionContext)

  useEffect(() => {
    switch (name) {
      case 'Payday':
        setUrl(
          currentSlot === id
            ? '/assets/payday-visited.png'
            : '/assets/payday.png'
        )
        break
      case 'Opportunity':
        setUrl(
          currentSlot === id
            ? '/assets/opportunity-visited.png'
            : '/assets/opportunity.png'
        )
        break
      case 'Market':
        setUrl(
          currentSlot === id
            ? '/assets/market-visited.png'
            : '/assets/market.png'
        )
        break
      case 'Doodads':
        setUrl(
          currentSlot === id
            ? '/assets/doodads-visited.png'
            : '/assets/doodads.png'
        )
        break
      case 'Baby':
        setUrl(
          currentSlot === id ? '/assets/baby-visited.png' : '/assets/baby.png'
        )
        break
      case 'Downsized':
        setUrl(
          currentSlot === id
            ? '/assets/downsized-visited.png'
            : '/assets/downsized.png'
        )
        break
      default:
        setUrl(
          currentSlot === id
            ? '/assets/charity-visited.png'
            : '/assets/charity.png'
        )
        break
    }
  }, [])

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
