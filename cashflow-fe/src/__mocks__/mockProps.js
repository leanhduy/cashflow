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
  playerName: 'Player',
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

export const mockOpportunityDialog = {
  title: 'DEAL OPPORTUNITY',
  description: 'Which deal type do you want?',
  info: 'Small deals cost $5,000 or less. Big deals cost $6,000 or more.',
}

export const mockSmallDeal = {
  id: 1,
  title: 'MUTUAL FUND - GRO4US FUND',
  description:
    'Weak earnings by most companies lead to weak price of mutual fund.',
  note: 'Trading Range: $10 to $30',
  type: 'stock',
  arg1: 10, // cost
  arg2: 0, // cashflow
  arg3: 10, // tradingMin
  arg4: 30, // tradingMax
}

export const mockBigDeal = {
  id: 1,
  title: '8-plex for Sale',
  description:
    'Professional person urgently needs cash to save partnership. 8-plex sale to raise capital, good opportunity for right person.',
  type: 'real-estate',
  arg1: 160000, // cost
  arg2: 1700, // cashflow
  arg3: 32000, // downpay
  arg4: 128000, // mortgage
}

export const mockMarket = {
  id: 1,
  title: 'APARTMENT HOUSE BUYER',
  description:
    'You are offered $25,000 per unit for all units in apartment houses of any size. Buyer has their own financing. If you sell, pay off the related mortgage and give up the cash flow you currently receive on this property.',
  type: 'real-estate',
  price: 25000, // selling cost
}

export const mockDoodad = {
  id: 1,
  title: 'GO OUT TO DINNER',
  description: 'Pay $80',
  cost: -80, // selling cost
}
