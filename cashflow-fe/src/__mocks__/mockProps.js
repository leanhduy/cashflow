export const mockFinancialStatus = {
  totalIncome: 2000,
  totalExpenses: 1280,
  cash: 670,
}

export const mockIncomes = [
  {
    id: 1,
    name: 'Programmer Salary',
    amount: 2500,
    type: 'salary',
  },
  {
    id: 2,
    name: '3/2 House',
    amount: 100,
    type: 'estate',
  },
  {
    id: 3,
    name: '2/1 Condo',
    amount: 2500,
    type: 'estate',
  },
  {
    id: 4,
    name: '20 Shares of 2BIG',
    amount: 200,
    type: 'dividends',
  },
  {
    id: 5,
    name: '100 Shares of CD',
    amount: 2000,
    type: 'dividends',
  },
  {
    id: 6,
    name: '100 Shares of AB',
    amount: 4000,
    type: 'dividends',
  },
]

export const mockAssets = [
  {
    id: 1,
    name: 'Shares of 2BIG',
    quantity: 5,
    value: 1200,
    type: 'Stocks/Funds/CDs',
  },
  {
    id: 2,
    name: 'Shares of ON2U',
    quantity: 10000,
    value: 5,
    type: '',
  },
  {
    id: 3,
    name: 'Startup',
    quantity: 1,
    value: 3000,
    type: 'Real Estate/Business',
  },
  {
    id: 4,
    name: 'Gold Coin',
    quantity: 1,
    value: 3000,
    type: 'Real Estate/Business',
  },
  {
    id: 5,
    name: '2/1 CONDO',
    quantity: 1,
    value: 60000,
    type: 'Real Estate/Business',
  },
  {
    id: 6,
    name: '3/2 HOUSE',
    quantity: 1,
    value: 50000,
    type: 'Real Estate/Business',
  },
  {
    id: 7,
    name: 'PLEX',
    quantity: 1,
    value: 200000,
    type: 'Real Estate/Business',
  },
]

export const mockChildExpense = {
  childNum: 1,
  expensePerChild: 200,
}

export const mockLiabilities = [
  {
    id: 1,
    name: 'Home Mortgage',
    value: 50000,
    type: 'home',
  },
  {
    id: 2,
    name: 'Car Loans',
    value: 3000,
    type: 'car',
  },
  {
    id: 3,
    name: 'Credit Cards',
    value: 3000,
    type: 'credit',
  },
  {
    id: 4,
    name: 'Retail Debt',
    value: 1000,
    type: 'retail',
  },
  {
    id: 5,
    name: 'Loan',
    value: 12000,
    type: 'bank',
  },
]

export const mockStartDialog = {
  playerName: 'Player 1',
  description: 'When you are ready, roll the dice and take your turn',
  note: 'Before you start your turn, review your financial statement. You may also use this time to repay liabilities or borrow money.',
}

export const mockRepayDialog = {
  title: 'PAY OFF LOAN',
  description: 'Select a liability on your statement sheet to repay your debt.',
  liabilities: mockLiabilities,
}

export const mockDownsizedDialog = {
  title: 'DOWNSIZED!',
  description: 'Pay a full set of your expenses and lose two turns and charity',
  expenses: 1500,
}

export const mockBabyDialogNew = {
  title: 'NEW BABY!',
  description: 'Congratulations! One child has been added to your dependents',
  expenses: 110,
}

export const mockBabyDialogLimitReached = {
  title: 'BABY LIMIT REACHED!',
  description: 'You cannot have more than 3 child',
  expenses: 0,
}
