// import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Divider, LinearProgress } from '@mui/material'
import { colors } from '../styles'
import {
  currencyFormatter,
  getPassiveIncome,
  GameContext,
  getTotalExpenseAmount,
  getTotalIncomeAmount,
} from '@/utils'
import { useContext } from 'react'

const FinancialStatus = () => {
  const { playerData } = useContext(GameContext)
  return (
    <StyledContainer>
      <Title>INCREASE PASSIVE INCOME TO ESCAPE THE RAT RACE</Title>
      <ProgressContainer>
        <ProgressTopTitle>
          TOTAL EXPENSES: $
          {currencyFormatter.format(getTotalExpenseAmount(playerData))}
        </ProgressTopTitle>
        <Box sx={{ width: '100%' }}>
          <Progress
            variant="determinate"
            value={
              (getPassiveIncome(playerData.assets) /
                getTotalIncomeAmount(playerData)) *
              100
            }
          />
          <ProgressBottomTitle>
            PASSIVE INCOME: $
            {currencyFormatter.format(getPassiveIncome(playerData.assets))}
          </ProgressBottomTitle>
        </Box>
      </ProgressContainer>
      <DashboardContainer>
        <DashboardTopRow>
          <span>CASH</span>
          <span>${currencyFormatter.format(playerData.cash)}</span>
        </DashboardTopRow>
        <DashboardRow>
          <span>Total Income:</span>
          <span>
            ${currencyFormatter.format(getTotalIncomeAmount(playerData))}
          </span>
        </DashboardRow>
        <DashboardRow>
          <span>Total Expenses:</span>
          <span>
            $-{currencyFormatter.format(getTotalExpenseAmount(playerData))}
          </span>
        </DashboardRow>
        <StyledDivider />
        <DashboardRow>
          <span>PAYDAY</span>
          <span>
            $
            {currencyFormatter.format(
              getTotalIncomeAmount(playerData) -
                getTotalExpenseAmount(playerData)
            )}
          </span>
        </DashboardRow>
      </DashboardContainer>
    </StyledContainer>
  )
}

export default FinancialStatus

//#region styled Components
const StyledContainer = styled(Container)({
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Title = styled.h1({
  color: colors.red.base,
  fontSize: '1.125rem',
  textAlign: 'center',
  width: '100%',
  marginBottom: '.5rem',
})

const ProgressContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '70%',
  marginBottom: '.5rem',
})

const Progress = styled(LinearProgress)({
  border: `3px solid ${colors.purple.dark}`,
  '&.MuiLinearProgress-root': {
    height: '1rem',
    backgroundColor: colors.silver.base,
  },
  '& .MuiLinearProgress-bar': {
    backgroundColor: colors.purple.base,
  },
})

const ProgressTopTitle = styled.p({
  fontSize: '.85rem',
  fontWeight: 700,
})
const ProgressBottomTitle = styled.p({
  fontSize: '.85rem',
  fontWeight: 700,
})

const DashboardContainer = styled.div({
  display: 'flex',
  alignSelf: 'center',
  flexDirection: 'column',
  width: '60%',
})

const DashboardRow = styled.div({
  display: 'flex',
  fontSize: '.9rem',
  flexDirection: 'row',
  margin: '.25rem 0',
  justifyContent: 'space-between',
})

const DashboardTopRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1.25rem',
  fontWeight: '700',
  margin: '.25rem 0',
  justifyContent: 'space-between',
})

const StyledDivider = styled(Divider)({
  backgroundColor: colors.black.base,
  height: '1px',
})
// #endregion styled components
