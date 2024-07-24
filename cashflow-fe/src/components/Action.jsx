import styled from '@emotion/styled'
import { colors } from '@/styles'
import { ActionProvider } from '@/components'

const Action = () => {
  return (
    <Container>
      <ActionProvider />
    </Container>
  )
}

export default Action

//#region styled components
const Container = styled.div({
  alignItems: 'center',
  border: `2px solid ${colors.grey.base}`,
  borderRadius: '10px',
  boxShadow: 'rgba(12,12,12, 0.8) 4px 4px 4px',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '300px',
  padding: '1.25rem 2rem',
  rowGap: '.5rem',
  width: '80%',
})
//#endregion styled components
