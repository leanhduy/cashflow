export const currencyFormatter = new Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
})

// > The fixed info for each type for loans in-game
export const LOAN_DETAILS = {
  HOME: {
    loan_term: 240,
    monthly_interest: 11,
  },
  CAR: {
    loan_term: 60,
    monthly_interest: 0.8,
  },
  CREDIT: {
    monthly_interest: 3,
  },
  RETAIL: {
    monthly_interest: 5,
  },
  BANK: {
    monthly_interest: 10,
  },
}

/**
 * > Calculate the monthly payment from a liability item
 * @param {*} liability The liability object
 * @returns The monthly payment amount
 */
export const getMonthlyLoanPayment = (liability) => {
  if (liability.value === 0) {
    return 0
  }
  /**
   * > Formula for HOME & CAR LOANS
   * > M = ( P * r * (1+r)^n ) / ( (1 + r)^n - 1 )
   * > M: monthly payment
   * > r: monthly interest rates (%)
   * > P: Loan principal
   * > n: Loan terms (in months)
   *
   * > Formula for Credit, Retails, Bank loan
   * > M = P * r
   */
  let r, n, M
  let P = liability.value
  switch (liability.type) {
    case 'home':
      r = LOAN_DETAILS.HOME.monthly_interest / 100
      n = LOAN_DETAILS.HOME.loan_term
      M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      break
    case 'car':
      r = LOAN_DETAILS.CAR.monthly_interest / 100
      n = LOAN_DETAILS.CAR.loan_term
      M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      break
    case 'credit':
      r = LOAN_DETAILS.CREDIT.monthly_interest / 100
      M = P * r
      break
    case 'retail':
      r = LOAN_DETAILS.RETAIL.monthly_interest / 100
      M = P * r
      break
    case 'bank':
      r = LOAN_DETAILS.BANK.monthly_interest / 100
      M = P * r
      break
    default:
      return 0
  }
  return M
}

export const BOARD_SLOTS = [
  { id: 0, name: 'Payday' },
  { id: 1, name: 'Opportunity' },
  { id: 2, name: 'Market' },
  { id: 3, name: 'Opportunity' },
  { id: 4, name: 'Doodads' },
  { id: 5, name: 'Opportunity' },
  { id: 6, name: 'Baby' },
  { id: 7, name: 'Opportunity' },
  { id: 8, name: 'Payday' },
  { id: 9, name: 'Opportunity' },
  { id: 10, name: 'Market' },
  { id: 11, name: 'Opportunity' },
  { id: 12, name: 'Doodads' },
  { id: 13, name: 'Opportunity' },
  { id: 14, name: 'Downsized' },
  { id: 15, name: 'Opportunity' },
  { id: 16, name: 'Payday' },
  { id: 17, name: 'Opportunity' },
  { id: 18, name: 'Market' },
  { id: 19, name: 'Opportunity' },
  { id: 20, name: 'Doodads' },
  { id: 21, name: 'Opportunity' },
  { id: 22, name: 'Charity' },
  { id: 23, name: 'Opportunity' },
]
