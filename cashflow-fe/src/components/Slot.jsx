import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const Slot = ({ name }) => {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    switch (name) {
      case 'Payday':
        setUrl('/assets/payday.png')
        break
      case 'Opportunity':
        setUrl('/assets/opportunity.png')
        break
      case 'Market':
        setUrl('/assets/market.png')
        break
      case 'Doodads':
        setUrl('/assets/doodads.png')
        break
      case 'Baby':
        setUrl('/assets/baby.png')
        break
      case 'Downsized':
        setUrl('/assets/downsized.png')
        break
      default:
        setUrl('/assets/charity.png')
        break
    }
  }, [])

  return <StyleImg src={url}></StyleImg>
}

//#region Props Type
Slot.propTypes = {
  name: PropTypes.string.isRequired,
}
//#endregion Props Type

export default Slot

//#region styled components
const StyleImg = styled.img({
  width: '4.75rem',
  height: '4.75rem',
})
//#endregion
