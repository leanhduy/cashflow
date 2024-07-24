import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { colors } from '@/styles'
import { useContext } from 'react'
import { ActionContext } from '@/utils'

const DoodadDialog = ({ doodad }) => {
  const { setActionType } = useContext(ActionContext)
  const { title, description } = doodad
  return (
    <>
      <Header>
        <Title>{title}</Title>
        <ThumbnailImg src="./assets/doodads-thumb.png" />
      </Header>
      <Description>{description}</Description>
      <Note style={{ flex: 1 }} />
      <MainActions>
        <ActionButton
          variant="contained"
          disableRipple
          onClick={() => {
            setActionType('start')
          }}
        >
          PAY
        </ActionButton>
      </MainActions>
    </>
  )
}

//#region Prop types
DoodadDialog.propTypes = {
  doodad: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.number,
  }),
}
//#endregion Prop types

export default DoodadDialog

//#region styled components
const Header = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
})

const ThumbnailImg = styled.img({
  width: '96px',
})

const Title = styled.h2({
  color: colors.red.base,
  margin: 0,
})

const Description = styled.span({
  fontWeight: 700,
  alignSelf: 'flex-start',
})

const Note = styled.span({
  fontWeight: 700,
  alignSelf: 'flex-start',
  flex: 1,
})

const MainActions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  margin: '1rem',
  width: '100%',
  '& button': {
    fontSize: '20px',
  },
  '& img': {
    width: '36px',
  },
})

const ActionButton = styled(Button)({
  fontWeight: 800,
  '&:active': {
    opacity: 0.8,
    transform: 'scale(0.9)',
  },
})

//#endregion styled components
