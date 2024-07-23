// import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import {
  FinancialStatus,
  Income,
  Expenses,
  Assets,
  Liabilities,
} from '@/components'
import {
  mockFinancialStatus,
  mockAssets,
  mockIncomes,
  mockLiabilities,
  mockChildExpense,
} from '@/__mocks__'

const FinancialStatement = () => {
  return (
    <StyledContainer>
      <StyledRow>
        <FinancialStatus {...mockFinancialStatus} />
      </StyledRow>
      <StyledRow>
        <StyledColumn>
          <Income incomes={mockIncomes} />
        </StyledColumn>
        <StyledColumn>
          <Expenses liabilities={mockLiabilities} {...mockChildExpense} />
        </StyledColumn>
      </StyledRow>
      <StyledRow>
        <StyledColumn>
          <Assets assets={mockAssets} />
        </StyledColumn>
        <StyledColumn>
          <Liabilities liabilities={mockLiabilities} />
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
  width: '50%',
  maxWidth: '640px',
  height: '97vh',
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
