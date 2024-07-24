// import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Divider, LinearProgress } from '@mui/material'
import { colors } from '../styles'
import { currencyFormatter } from '@/utils'
import PropTypes from 'prop-types'

const FinancialStatus = ({ totalExpenses, totalIncome, cash }) => {
  return (
    <StyledContainer>
      <Title>INCREASE PASSIVE INCOME TO ESCAPE THE RAT RACE</Title>
      <ProgressContainer>
        <ProgressTopTitle>
          TOTAL EXPENSES: ${currencyFormatter.format(totalExpenses)}
        </ProgressTopTitle>
        <Box sx={{ width: '100%' }}>
          <Progress
            variant="determinate"
            value={((totalIncome - totalExpenses) / totalIncome) * 100}
          />
          <ProgressBottomTitle>
            PASSIVE INCOME: $
            {currencyFormatter.format(totalIncome - totalExpenses)}
          </ProgressBottomTitle>
        </Box>
      </ProgressContainer>
      <DashboardContainer>
        <DashboardTopRow>
          <span>CASH</span>
          <span>${currencyFormatter.format(cash)}</span>
        </DashboardTopRow>
        <DashboardRow>
          <span>Total Income:</span>
          <span>${currencyFormatter.format(totalIncome)}</span>
        </DashboardRow>
        <DashboardRow>
          <span>Total Expenses:</span>
          <span>$-{currencyFormatter.format(totalExpenses)}</span>
        </DashboardRow>
        <StyledDivider />
        <DashboardRow>
          <span>PAYDAY</span>
          <span>
            ${totalIncome - totalExpenses < 0 ? '-' : ''}
            {currencyFormatter.format(totalIncome - totalExpenses)}
          </span>
        </DashboardRow>
      </DashboardContainer>
    </StyledContainer>
  )
}

export default FinancialStatus

//#region prop types
FinancialStatus.propTypes = {
  totalExpenses: PropTypes.number.isRequired,
  totalIncome: PropTypes.number.isRequired,
  cash: PropTypes.number.isRequired,
}
//#endregion prop types

//#region styled Components
const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Title = styled.h1({
  color: colors.red.base,
  fontSize: '1.125rem',
  textAlign: 'center',
  width: '100%',
  margin: 0,
})

const ProgressContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  marginTop: '.25rem',
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
