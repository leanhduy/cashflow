import { mockLiabilities } from '@/__mocks__'
import { getMonthlyLoanPayment } from '@/utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe.only('Helper functions', () => {
  let liabilities
  beforeEach(() => {
    liabilities = mockLiabilities
  })
  describe('getMonthlyPayment() function', () => {
    it('should return 0 if loan principal is 0', () => {
      const liability = {
        id: 1,
        name: 'Home Mortgage',
        value: 0,
        type: 'home',
      }
      const monthly_loan = getMonthlyLoanPayment(liability)
      expect(parseInt(monthly_loan)).to.equal(0)
    })
    it('should return correct monthly payment for home loan', () => {
      const home_mortgage = liabilities.find((l) => l.type === 'home')
      const monthly_home_loan = getMonthlyLoanPayment(home_mortgage)
      expect(parseInt(monthly_home_loan)).to.equal(5500)
    })
    it('should return correct monthly payment for car loan', () => {
      const car_loan = liabilities.find((l) => l.type === 'car')
      const carLoanPayment = getMonthlyLoanPayment(car_loan)
      expect(parseInt(carLoanPayment)).to.equal(63)
    })
    it('should return correct monthly payment for credit loan', () => {
      const credit_loan = liabilities.find((l) => l.type === 'credit')
      const creditLoanPayment = getMonthlyLoanPayment(credit_loan)
      expect(parseInt(creditLoanPayment)).to.equal(90)
    })
    it('should return correct monthly payment for retails loan', () => {
      const retail_loan = liabilities.find((l) => l.type === 'retail')
      const retailLoanPayment = getMonthlyLoanPayment(retail_loan)
      expect(parseInt(retailLoanPayment)).to.equal(50)
    })
    it('should return correct monthly payment for bank loan', () => {
      const bank_loan = liabilities.find((l) => l.type === 'bank')
      const bankLoanPayment = getMonthlyLoanPayment(bank_loan)
      expect(parseInt(bankLoanPayment)).to.equal(1200)
    })
  })
})
