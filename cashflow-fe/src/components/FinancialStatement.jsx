import { useContext } from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import {
  FinancialStatus,
  Income,
  Expenses,
  Assets,
  Liabilities,
} from '@/components'
import { GameContext } from '@/utils'

const FinancialStatement = () => {
  const { playerData } = useContext(GameContext)

  return (
    <StyledContainer>
      <StyledRow>
        <FinancialStatus />
      </StyledRow>
      <StyledRow>
        <StyledColumn>
          <Income incomes={playerData.incomes} />
        </StyledColumn>
        <StyledColumn>
          <Expenses
            expenses={playerData.expenses}
            childNum={playerData.childNum}
            expensePerChild={playerData.expensePerChild}
          />
        </StyledColumn>
      </StyledRow>
      <StyledRow>
        <StyledColumn>
          <Assets assets={playerData.assets}/>
        </StyledColumn>
        <StyledColumn>
          <Liabilities liabilities={playerData.liabilities} />
        </StyledColumn>
      </StyledRow>
    </StyledContainer>
  )
}

export default FinancialStatement

//#region prop types

//#endregion prop types

//#region styled Components
const StyledContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '10px',
  width: '100%',
  height: '100%',
})
const StyledRow = styled(Container)({
  display: 'flex',
  columnGap: '10px',
  flexDirection: 'row',
  height: '33%',
})

const StyledColumn = styled.div({
  width: '50%',
})
// #endregion styled components
