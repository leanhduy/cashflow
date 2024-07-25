import styled from '@emotion/styled'
import { colors } from '@/styles'
import { BOARD_SLOTS } from '@/utils'
import { Slot } from '@/components'

const Board = () => {
  return (
    <BoardContainer>
      <TopLane>
        {BOARD_SLOTS.filter((slot) => slot.id < 6).map((slot) => (
          <Slot key={slot.id} id={slot.id} name={slot.name} />
        ))}
      </TopLane>
      <RightLane>
        {BOARD_SLOTS.filter((slot) => slot.id >= 6 && slot.id < 12).map(
          (slot) => (
            <Slot key={slot.id} id={slot.id} name={slot.name} />
          )
        )}
      </RightLane>
      <BottomLane>
        {BOARD_SLOTS.filter((slot) => slot.id >= 12 && slot.id < 18)
          .reverse()
          .map((slot) => (
            <Slot key={slot.id} id={slot.id} name={slot.name} />
          ))}
      </BottomLane>
      <LeftLane>
        {BOARD_SLOTS.filter((slot) => slot.id >= 18)
          .reverse()
          .map((slot) => (
            <Slot key={slot.id} id={slot.id} name={slot.name} />
          ))}
      </LeftLane>
    </BoardContainer>
  )
}

export default Board

//#region styled components
const BoardContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(7, 1fr)',
  width: '28rem',
  height: '28rem',
  boxSizing: 'border-box',
})

const LaneStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.white,
  fontSize: '1rem',
  fontWeight: 'bold',
}

const TopLane = styled.div({
  ...LaneStyle,
  gridColumn: '1 / 7',
  gridRow: '1 / 2',
})

const RightLane = styled.div({
  ...LaneStyle,
  gridColumn: '7 / 8',
  gridRow: '1 / 7',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
})

const BottomLane = styled.div({
  ...LaneStyle,
  gridColumn: '2 / 8',
  gridRow: '7 / 8',
})

const LeftLane = styled.div({
  ...LaneStyle,
  gridColumn: '1 / 2',
  gridRow: '2 / 8',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
})
//#endregion styled components
