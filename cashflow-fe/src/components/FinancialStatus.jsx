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
          <p>CASH</p>
          <p>${currencyFormatter.format(cash)}</p>
        </DashboardTopRow>
        <DashboardRow>
          <p>Total Income:</p>
          <p>${currencyFormatter.format(totalIncome)}</p>
        </DashboardRow>
        <DashboardRow>
          <p>Total Expenses:</p>
          <p>$-{currencyFormatter.format(totalExpenses)}</p>
        </DashboardRow>
        <StyledDivider />
        <DashboardRow>
          <p>PAYDAY</p>
          <p>
            ${totalIncome - totalExpenses < 0 ? '-' : ''}
            {currencyFormatter.format(totalIncome - totalExpenses)}
          </p>
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
  fontSize: '1.25rem',
  textAlign: 'center',
  width: '50%',
})

const ProgressContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '80%',
})

const Progress = styled(LinearProgress)({
  border: `3px solid ${colors.purple.dark}`,
  '&.MuiLinearProgress-root': {
    height: '2rem',
    backgroundColor: colors.silver.base,
  },
  '& .MuiLinearProgress-bar': {
    backgroundColor: colors.purple.base,
  },
})

const ProgressTopTitle = styled.p({
  fontWeight: 700,
})
const ProgressBottomTitle = styled.p({
  fontWeight: 700,
})

const DashboardContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
})

const DashboardRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '.25rem 0',
})

const DashboardTopRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: '1.5rem',
  fontWeight: '700',
  margin: '.5rem 0',
})

const StyledDivider = styled(Divider)({
  backgroundColor: colors.black.base,
  height: '1px',
})
// #endregion styled components
