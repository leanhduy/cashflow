import {
  getLoanAmount,
  getMonthlyLoanPayment,
  getPayday,
  getTotalExpenseAmount,
  getTotalIncomeAmount,
} from '@/utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Helper functions', () => {
  let playerData
  beforeEach(() => {
    playerData = {
      profession: 'Doctor',
      salary: 13200,
      cash: 400,
      childNum: 0,
      incomes: [
        { id: 1, name: 'Doctor Salary', amount: 13200, type: 'salary' },
      ],
      assets: [],
      liabilities: [
        { id: 1, name: 'Home Mortgage', amount: 202000, type: 'home' },
        { id: 2, name: 'Car Loans', amount: 19000, type: 'car' },
        { id: 3, name: 'Credit Cards', amount: 9000, type: 'credit' },
        { id: 4, name: 'Retail Debt', amount: 1000, type: 'retail' },
        { id: 5, name: 'Loans', amount: 10000, type: 'bank' },
      ],
      expenses: [
        { id: 1, name: 'Taxes', amount: 2376 },
        { id: 2, name: 'Home Mortgage Payment', amount: 2058 },
        { id: 3, name: 'Car Loan Payment', amount: 400 },
        { id: 4, name: 'Credit Card Payment', amount: 270 },
        { id: 5, name: 'Retail Payment', amount: 50 },
        { id: 6, name: 'Other Expenses', amount: 2880 },
      ],
      expensePerChild: 640,
    }
  })

  describe('getMonthlyPayment() function', () => {
    it('should return 0 if loan principal is 0', () => {
      const liability = {
        id: 1,
        name: 'Home Mortgage',
        amount: 0,
        type: 'home',
      }
      const monthly_loan = getMonthlyLoanPayment(liability)
      expect(parseInt(monthly_loan)).to.equal(0)
    })
    it('should return correct monthly payment for home loan', () => {
      const home_mortgage = playerData.liabilities.find(
        (l) => l.type === 'home'
      )
      const monthly_home_loan = getMonthlyLoanPayment(home_mortgage)
      expect(parseInt(monthly_home_loan)).to.equal(2057)
    })
    it('should return correct monthly payment for car loan', () => {
      const car_loan = playerData.liabilities.find((l) => l.type === 'car')
      const carLoanPayment = getMonthlyLoanPayment(car_loan)
      expect(parseInt(carLoanPayment)).to.equal(399)
    })
    it('should return correct monthly payment for credit loan', () => {
      const credit_loan = playerData.liabilities.find(
        (l) => l.type === 'credit'
      )
      const creditLoanPayment = getMonthlyLoanPayment(credit_loan)
      expect(parseInt(creditLoanPayment)).to.equal(270)
    })
    it('should return correct monthly payment for retails loan', () => {
      const retail_loan = playerData.liabilities.find(
        (l) => l.type === 'retail'
      )
      const retailLoanPayment = getMonthlyLoanPayment(retail_loan)
      expect(parseInt(retailLoanPayment)).to.equal(50)
    })
    it('should return correct monthly payment for bank loan', () => {
      const bank_loan = playerData.liabilities.find((l) => l.type === 'bank')
      const bankLoanPayment = getMonthlyLoanPayment(bank_loan)
      expect(parseInt(bankLoanPayment)).to.equal(1000)
    })
  })

  describe('getTotalIncomeAmount', () => {
    it('should return 0 if there is no income', () => {
      playerData.incomes = []
      expect(getTotalIncomeAmount(playerData)).to.equal(0)
    })
    it('should return the correct monthly income', () => {
      expect(getTotalIncomeAmount(playerData)).to.equal(13200)
    })
  })

  describe('getTotalExpenseAmount', () => {
    it('should return 0 if there is no income', () => {
      playerData.expenses = []
      expect(getTotalExpenseAmount(playerData)).to.equal(0)
    })
    it('should return the correct monthly expense', () => {
      expect(getTotalExpenseAmount(playerData)).to.equal(8034)
    })
    it('should return the correct monthly expense if a child is added', () => {
      playerData.expenses.push({
        id: 7,
        name: 'Child Expenses (1)',
        amount: 640,
      })
      expect(getTotalExpenseAmount(playerData)).to.equal(8674)
    })
  })

  describe('getPayday', () => {
    it('should return the same monthly payday if no payday slot is passed.', () => {
      let newPayday = getPayday(1, 2, playerData)
      expect(newPayday).to.equal(0)
    })

    it('should return the correct payday amount if 0 payday slot is passed.', () => {
      let amount = getPayday(0, 2, playerData)
      expect(amount).to.equal(0)
    })

    it('should return the correct payday amount if 1 payday slot is passed.', () => {
      let payday =
        getTotalIncomeAmount(playerData) - getTotalExpenseAmount(playerData)
      let amount = getPayday(5, 9, playerData)
      expect(amount).to.equal(payday)
    })

    it('should return the correct payday amount if 2 payday slots are passed.', () => {
      let payday =
        getTotalIncomeAmount(playerData) - getTotalExpenseAmount(playerData)
      let amount = getPayday(7, 17, playerData)
      expect(amount).to.equal(payday * 2)
    })

    it('should return the correct payday amount if 3 payday slots are passed.', () => {
      let payday =
        getTotalIncomeAmount(playerData) - getTotalExpenseAmount(playerData)
      let amount = getPayday(23, 17, playerData)
      expect(amount).to.equal(payday * 3)
    })
  })

  describe('getLoanAmount', () => {
    it('should return 1000 with  difference less than 1000', () => {
      expect(getLoanAmount(1)).to.equal(1000)
      expect(getLoanAmount(99)).to.equal(1000)
    })
    it('should return correct multiple of 1000x for given difference', () => {
      expect(getLoanAmount(1001)).to.equal(2000)
      expect(getLoanAmount(9999)).to.equal(10000)
      expect(getLoanAmount(19999979)).to.equal(20000000)
    })
  })
})
