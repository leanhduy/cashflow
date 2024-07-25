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

/**
 * > Given a number of dice, return a total sum of all dice's value
 * > Min value of a die is 1, Max value of a die is 6
 * @param {*} diceNo an optional argument represents the number of dice. If this argument is not passed, default to 1
 * @returns The total sum of all dice
 */
export const rollDice = (diceNo = 1) => {
  return Math.floor(Math.random() * (6 * diceNo)) + 1
}

export const playRollDiceSFX = () => {
  const sfx = new Audio('/assets/sounds/roll.mp3')
  sfx.play()
}

//#region DOODADS
export const DOODADS = [
  {
    id: 1,
    title: 'Water Heater Leaks',
    description: 'Pay $450 for new one',
    info: '',
    cost: 450,
  },
  {
    id: 2,
    title: 'Go Out to Dinner',
    description: 'Spend $80',
    info: '',
    cost: 80,
  },
  {
    id: 3,
    title: 'Your Anniversary!',
    description: 'Spend $200',
    cost: 0,
  },
  {
    id: 4,
    title: 'Park in Handicapped Zone',
    description: 'Pay $100 fine',
    info: '',
    cost: 100,
  },
  {
    id: 5,
    title: 'Buy Big Screen TV',
    description: 'Pay $2000',
    info: '',
    cost: 2000,
  },
  {
    id: 6,
    title: 'College Tuition for your son',
    description: 'Spend 1500',
    info: '(If you have a child)',
    cost: 1500,
  },
  {
    id: 7,
    title: 'Buy toys for your kids',
    description: 'Spend $50',
    info: '',
    cost: 50,
  },
  {
    id: 8,
    title: 'Buy New Fishing Rod',
    description: '$100',
    info: '',
    cost: 100,
  },
  {
    id: 9,
    title: 'Play 2 Rounds of Golf',
    description: 'Pay $100',
    info: '',
    cost: 100,
  },
  {
    id: 10,
    title: 'Car Air Conditioning Dies',
    description: 'Pay $700',
    info: '',
    cost: 700,
  },
  {
    id: 11,
    title: 'Tax Audit',
    description: 'Pay Tax Authority $350',
    info: 'Ouch!',
    cost: 350,
  },
  {
    id: 12,
    title: 'Shopping!',
    description: 'Pay $350 for fabulous clothes',
    info: '',
    cost: 350,
  },
  {
    id: 13,
    title: 'Family Vacation!',
    description: 'Cost $2,000',
    info: '',
    cost: 2000,
  },
  {
    id: 14,
    title: 'Go To Casino!',
    description: 'Lose $200 at the tables',
    info: '',
    cost: 200,
  },
  {
    id: 15,
    title: 'Buy new playstation',
    description: '',
    info: 'Pay $400',
    cost: 400,
  },
  {
    id: 16,
    title: 'Play Your Lucky Lottery Number!',
    description: 'Lose $100',
    info: '',
    cost: 100,
  },
  {
    id: 17,
    title: 'Shopping Spree!',
    description: 'Pay $250',
    info: '',
    cost: 250,
  },
  {
    id: 18,
    title: 'Go to Ball Game',
    description: 'Pay $50',
    info: '',
    cost: 50,
  },
  {
    id: 19,
    title: 'Visit Dentist',
    description: 'Filling costs $100',
    info: '',
    cost: 0,
  },
  {
    id: 20,
    title: 'Buy New Tennis Racket',
    description: 'Pay $50',
    info: '',
    cost: 50,
  },
  {
    id: 21,
    title: 'Furniture Sale',
    description: 'Pay $300',
    info: 'Replace that old working table',
    cost: 300,
  },
  {
    id: 22,
    title: 'Go to a Concert',
    description: 'Dinner, Tickets, and Coffee sets you back $180',
    info: '',
    cost: 180,
  },
  {
    id: 23,
    title: 'Buy new smart phone',
    description: 'Pay $1200 for an Iphone',
    info: '',
    cost: 1200,
  },
  {
    id: 24,
    title: 'Go to Cafe',
    description: 'Pay $10',
    info: 'Buy a Cafe Lattee & Capuccino for you & your friend',
    cost: 10,
  },
  {
    id: 25,
    title: 'High School Reunion',
    description: 'Spend $250',
    info: '',
    cost: 250,
  },
  {
    id: 26,
    title: 'Repaint House',
    description: 'Cost you $600',
    info: '',
    cost: 600,
  },
  {
    id: 27,
    title: 'Buy Painting',
    description: 'Costs you $200',
    info: 'Could not resist new painting by local artist',
    cost: 200,
  },
  {
    id: 28,
    title: 'Buy your parent a gift',
    description: 'A brand new massage machine for your da and ma',
    info: '',
    cost: 1000,
  },
  {
    id: 29,
    title: 'Netflix Premium subscription',
    description: 'Pay $150',
    info: '',
    cost: 150,
  },
  {
    id: 30,
    title: 'Buy new bluetooth headset',
    description: 'Pay $500',
    info: '',
    cost: 500,
  },
  {
    id: 31,
    title: 'Birthday!',
    description: 'Take your family to the Amusement Park and spend $100',
    info: '',
    cost: 100,
  },
  {
    id: 32,
    title: 'Buy Coffee Machine',
    description: 'Pay $150',
    info: '',
    cost: 150,
  },
  {
    id: 33,
    title: 'Your Close Friend Wedding',
    description: 'Costs you $2,000',
    info: '',
    cost: 2000,
  },
  {
    id: 34,
    title: 'Buy new clothes',
    description: 'Pay $250',
    info: 'Your wife was influenced by some movies and need new clothes',
    cost: 250,
  },
  {
    id: 35,
    title: 'Rumor of Layoff',
    description: 'Pay $220 for tuition & books',
    info: 'Go back to school for added skills.',
    cost: 220,
  },
  {
    id: 36,
    title: 'Go to the Air Show',
    description: 'Pay $120',
    info: '',
    cost: 120,
  },
  {
    id: 37,
    title: 'Must have new sunglasses',
    description: 'Pay $70',
    info: '',
    cost: 70,
  },
  {
    id: 38,
    title: 'Buy new kitchen utensils',
    description: 'Pay $250',
    info: '',
    cost: 250,
  },
  {
    id: 39,
    title: 'Lunch with Friends',
    description: 'Pay $40',
    info: '',
    cost: 40,
  },
  {
    id: 40,
    title: 'Car need tires',
    description: 'Pay $300',
    info: '',
    cost: 30,
  },
]
//#endregion DOODADS

//#region SMALL DEALS
/**
 * > Type: Stock / Fund
 *   ? arg1: price
 *   ? arg2: tradingMin
 *   ? arg3: tradingMax
 *
 * > Type: Preferred stocks
 *   ? arg1: price
 *   ? arg2: tradingMin
 *   ? arg3: tradingMax
 *   ? arg4: dividend
 *
 * > Type: Real estate
 *   ? arg1: cost
 *   ? arg2: downpay
 *   ? arg3: mortgage
 *   ? arg4: cash flow
 */
export const SMALL_DEALS = [
  {
    id: 1,
    title: 'Mutual Fund - GRO4US Fund',
    description: 'Lower interest rates drive market and fund to strong showing',
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 30,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 2,
    title: 'Mutual Fund - GRO4US Fund',
    description:
      'Brilliant young fund manager. Everyone believes he has the Midas touch.',
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 20,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 3,
    title: 'Mutual Fund - GRO4US Fund',
    description:
      'Weak earnings by most companies lead to weak price of mutual fund.',
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 10,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 4,
    title: 'Mutual Fund - GRO4US Fund',
    description: `Powerhouse market drives strong fund's price up to record high.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 40,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 5,
    title: 'Mutual Fund - GRO4US Fund',
    description: `General market strength leads well managed fund's price to a strong level.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 30,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 6,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Booming market leads to record share price of this home electronics seller.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 40,
    arg2: 5,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 7,
    title: 'Stock - MYT4U Electronics Co.',
    description: `High inflation leads to poor share price for this home electronics seller.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 5,
    arg2: 5,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 8,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Company reorganizes! Massive losses due to over-expansion and recession. Stockholders lose 1/2 of their ownership rights.`,
    info: 'Reverse split 1 for 2',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 9,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Record interest rates lead to substandard share price for this home electronics seller.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 5,
    arg2: 5,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 10,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Strong market leads to strong share price for this home electronics seller.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 30,
    arg2: 5,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 11,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Business is up dramaticallly and the company is doing so well their shares have just split!.`,
    info: 'Split 2 for 1',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 12,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Trade war panic leads to record low share price for this home electronics seller.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 1,
    arg2: 5,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 13,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Weak market leads to sagging share price for this home electronics seller.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 10,
    arg2: 5,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 14,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Fast growing seller of home electronics headed by 32 year old Harvard grad.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 20,
    arg2: 5,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 15,
    title: 'Stock - MYT4U Electronics Co.',
    description: `Low interest rates lead to substantial share price for this home electronics seller.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 30,
    arg2: 5,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 16,
    title: 'Tenant Damages your Property',
    description:
      'Tenant fails to pay rent for 2 months and then skips town leaving damage to your rental property. Insurance covers most damage and costs, but you still are out of pocket $500.',
    info: 'Pay $500 if you own any rental property. (Bank will lend you the money on usual terms.)',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 17,
    title: 'Stock - OK4U Drug Co.',
    description: `Market strenth leads to high share price for this long time maker of medicines.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 40,
    arg2: 5,
    arg3: 40,
    arg4: 0,
  },
  {
    id: 18,
    title: 'Stock - OK4U Drug Co.',
    description: `Low inflation leads to high share price for this long time maker of medicines.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 20,
    arg2: 5,
    arg3: 40,
    arg4: 0,
  },
  {
    id: 19,
    ttitle: 'Stock - OK4U Drug Co.',
    description: `Company flounders! Massive losses due to tainted drug scandal. All stockholders lose 1/2 of their ownership rights.`,
    info: 'Reverse split 1 for 2',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 20,
    title: 'Stock - OK4U Drug Co.',
    description: `Booming market raises share price of this long time maker of medicines.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 50,
    arg2: 5,
    arg3: 40,
    arg4: 0,
  },
  {
    id: 21,
    title: 'Stock - OK4U Drug Co.',
    description: `Interest rates cripple share price of this long time maker of medicines.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 5,
    arg2: 5,
    arg3: 40,
    arg4: 0,
  },
  {
    id: 22,
    title: 'Stock - OK4U Drug Co.',
    description: `High interest rates cause poor share price of this long time maker of medicines.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 10,
    arg2: 5,
    arg3: 40,
    arg4: 0,
  },
  {
    id: 23,
    title: 'Stock - OK4U Drug Co.',
    description: `Inflation worries cause poor share price of this long time maker of medicines.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 10,
    arg2: 5,
    arg3: 40,
    arg4: 0,
  },
  {
    id: 24,
    title: 'Stock - OK4U Drug Co.',
    description: `Market panic causes crash in the shares of this long time maker of medicines.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 1,
    arg2: 5,
    arg3: 40,
    arg4: 0,
  },
  {
    id: 25,
    title: 'Stock - OK4U Drug Co.',
    description: `Long time maker of medicines; especially drugs for people over 70.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 30,
    arg2: 5,
    arg3: 40,
    arg4: 0,
  },
  {
    id: 26,
    title: 'Stock - OK4U Drug Co.',
    description: `Things are going so well for the company that their shares have just split!. Everyone who owns OK4U shares double the number of shares they own.`,
    info: 'Split 2 for 1',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 27,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Box office hit by dchildren's division causes record share price.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 40,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 28,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Strong demand for company's library of old movies on video leads to good share price`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 30,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 29,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Box office hit by children's division causes record share price.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 40,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 30,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Strong demand for company's library of old movies on video leads to good share price.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 30,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 31,
    title: 'Stock - ON2U Entertainment Co.',
    description: `New director of movie acquisitions brings revived prospects for share price.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 20,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 32,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Movie buyer fired after third mega-flot! Shares sink. Chairman's bonus cancelled`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 5,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 33,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Box office smash hit in adult division causes share price.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 30,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 34,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Recent merger strengthened market share of this leading company with good outlook.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 20,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 35,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Newest theme park loses record amount. Share price hits all-time low.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 10,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 36,
    title: 'Stock - ON2U Entertainment Co.',
    description: `Box office flow by musical extravaganza in core division causes poor share price.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 10,
    arg2: 10,
    arg3: 30,
    arg4: 0,
  },
  {
    id: 37,
    title: 'Preferred Stock - 2BIG Power',
    description: `High yield, preferred shares of major domestic electric power company. Dividend and price fixed at "fair" level by state utility commission.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 1200,
    arg2: 1200,
    arg3: 1200,
    arg4: 10,
  },
  {
    id: 38,
    title: 'You find a Great Deal!',
    description: `Older 3/2 house, repossessed by government agency. Ready to go with government financing and a tenant.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 35000, // cost
    arg2: 2000, // downpay
    arg3: 33000, // mortgage
    arg4: 220, // cash flow
  },
  {
    id: 39,
    title: 'You find a Great Deal!',
    description: `Company bought transferred manager's 3/2 house. No current tenant, has been on market 6 months, just reduced.`,
    info: 'Only you can buy at this price. Others may sell at this price.',
    arg1: 45000,
    arg2: 2000,
    arg3: 43000,
    arg4: 250,
  },
  {
    id: 40,
    title: 'Condo For Sale - 2BE/1BA',
    description:
      'Nice 2/1 condo available due to marriage of owner. Bad area. Needs work.',
    info: 'Use this yourself or sell to another player.',
    arg1: 50000,
    arg2: 5000,
    arg3: 45000,
    arg4: 100,
  },
  {
    id: 41,
    title: 'Condo For Sale - 2BE/1BA',
    description: `Parents sellings 2/1 condo used by their child in college town. Lots of demand for rentals in this area.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 40000,
    arg2: 4000,
    arg3: 36000,
    arg4: 140,
  },
  {
    id: 42,
    title: 'Condo For Sale - 2BE/1BA',
    description:
      'Older 2/1 condo offered by young couple who want to move up to a 3/2 house due to growing family. Available soon',
    info: 'Use this yourself or sell to another player.',
    arg1: 55000,
    arg2: 5000,
    arg3: 50000,
    arg4: 160,
  },
  {
    id: 43,
    title: 'Condo For Sale - 2BE/1BA',
    description: `Excellent 2/1 condo with many extras. For sale due to business success of owner. She's moving up, so can you.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 60000,
    arg2: 5000,
    arg3: 55000,
    arg4: -100,
  },
  {
    id: 44,
    title: 'Condo For Sale - 2BE/1BA',
    description: `Bank foreclosure! 2/1 condo in desirable neighborhood close to jobs and stores. Make offer, favorable financing by bank.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 40000,
    arg2: 5000,
    arg3: 35000,
    arg4: 220,
  },
  {
    id: 45,
    title: 'House For Sale - 3BE/2BA',
    description: `Not lived in for 6 months, this bank-foreclosed house just reduced. Loan includes estimated repair costs.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 50000,
    arg2: 0,
    arg3: 50000,
    arg4: 100,
  },
  {
    id: 46,
    title: 'House For Sale - 3BE/2BA',
    description: `Low down payment to pick up this 3/2 house, owner unexpectedly moving out of town. Right person will do well.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 50000,
    arg2: 3000,
    arg3: 47000,
    arg4: 100,
  },
  {
    id: 47,
    title: 'House For Sale - 3BE/2BA',
    description: `3/2 house in older area offered by Highway Department. Market has crashed. No bids at last week's auction.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 50000,
    arg2: 0,
    arg3: 50000,
    arg4: -100,
  },
  {
    id: 48,
    title: 'House For Sale - 3BE/2BA',
    description: `Nice 3/2 rental house suddenly available due to estate closing. Well maintained older property with existing tenant.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 65000,
    arg2: 5000,
    arg3: 60000,
    arg4: 160,
  },
  {
    id: 49,
    title: 'House For Sale - 3BE/2BA',
    description: `Nice 3/2 house available in depresed market due to layoffs. Would make good investment property for right buyer.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 50000,
    arg2: 4000,
    arg3: 46000,
    arg4: 200,
  },
  {
    id: 50,
    title: '10 Acres Raw Land',
    description: `Wonderful park-like setting with stream on 10 acres in undeveloped area. No roads, no utilities, no noise.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 5000,
    arg2: 0,
    arg3: 5000,
    arg4: 0,
  },
  {
    id: 51,
    title: 'Rare Gold Coin',
    description: `You spot an unusual 1500's Royal Spanish New World (Havana Mint Only) "pieces of eight" gold coin in good condition at a swap meet. One only, seller asks $500`,
    info: 'Use this yourself or sell to another player.',
    arg1: 500,
    arg2: 0,
    arg3: 500,
    arg4: 0,
  },
]
//#endregion SMALL DEALS

//#region BIG DEALS
/**
 * > Structure of a big deals
 *
 * > Real estate
 *   ? arg1: cost
 *   ? arg2: downpay
 *   ? arg3: mortgage
 *   ? arg4: cashflow
 */
export const BIG_DEALS = [
  {
    id: 1,
    title: '8-plex for sale',
    description:
      'Reinvesting owner offers 8-plex for sale at reasonable price. Financing already in place. All it needs is your down payment',
    info: 'Use this yourself or sell to another player. 51% ROI, may sell for $200,000 to $280,000.',
    arg1: 220000,
    arg2: 40000,
    arg3: 180000,
    arg4: 1700,
  },
  {
    id: 2,
    title: '8-plex for sale',
    description:
      'Professional person urgently needs cash to save partnership. 8-plex sale to raise capital, good opportunity for right person.',
    info: 'Use this yourself or sell to another player',
    arg1: 160000,
    arg2: 32000,
    arg3: 128000,
    arg4: 1700,
  },
  {
    id: 3,
    title: '8-plex for sale',
    description:
      'Retiring investor/owner offers his 8-plex at current appraisal value. Professional lawn service and management. Full records.',
    info: 'Use this yourself or sell to another player.',
    arg1: 240000,
    arg2: 40000,
    arg3: 200000,
    arg4: 950,
  },
  {
    id: 4,
    title: '8-plex for sale',
    description:
      'Owner legal troubles lead to forced sale of this 8-plex. No qualifying on this loan, as mortgage holder is cooperating.',
    info: 'Use this yourself or sell to another player',
    arg1: 200000,
    arg2: 40000,
    arg3: 160000,
    arg4: 1600,
  },
  {
    id: 5,
    title: '4-plex for sale',
    description:
      '4-plex available - forced sale. Out-of-state, financially distressed owned years behind on taxes. Some records available.',
    info: 'Use this yourself or sell to another player.',
    arg1: 80000,
    arg2: 16000,
    arg3: 64000,
    arg4: 750,
  },
  {
    id: 6,
    title: '4-plex for sale',
    description:
      'Project 4-plex for sale in rehabilitating neighborhood. Owner being forced out by income tax liens',
    info: 'Use this yourself or sell to another player.',
    arg1: 80000,
    arg2: 20000,
    arg3: 60000,
    arg4: 400,
  },
  {
    id: 7,
    title: '4-plex for sale',
    description:
      'Older 4-plex next to new highway for sale. Owner/oocupant moving to quieter area. Priced for quick sale.',
    info: 'Use this yourself or sell to another player.',
    arg1: 90000,
    arg2: 15000,
    arg3: 75000,
    arg4: 500,
  },
  {
    id: 8,
    title: '4-plex for sale',
    description:
      '4-plex for sale by owner, moving to another state. Full records, fully rented, low occupant turnover in good neightborhood.',
    info: 'Use this yourself or sell to another player.',
    arg1: 140000,
    arg2: 32000,
    arg3: 108000,
    arg4: 2000,
  },
  {
    id: 9,
    title: '4-plex for sale',
    description:
      'Nice, well maintain 4-plex in good neighborhood. Stable tenants, positive cash flow, few problems. Full records.',
    info: 'Use this yourself or sell to another player.',
    arg1: 125000,
    arg2: 15000,
    arg3: 110000,
    arg4: 600,
  },
  {
    id: 10,
    title: '4-plex for sale',
    description:
      '4-plex in recovering neighborhood. Fully rented, repairs kept up. Needs your down payment and patience.',
    info: 'Use this yourself or sell to another player.',
    arg1: 100000,
    arg2: 20000,
    arg3: 80000,
    arg4: 800,
  },
  {
    id: 11,
    title: 'House for Sale 3BR/2BA',
    description:
      'Divorce leads to sale of this 3/2 house in an area full of owner occupied homes. Has been on the market 5 months.',
    info: 'Use this yourself or sell to another player.',
    arg1: 70000,
    arg2: 20000,
    arg3: 50000,
    arg4: 500,
  },
  {
    id: 12,
    title: 'House for Sale 3BR/2BA',
    description:
      'Good investment potential in this 3/2 house if you can be patient. Positive cash flow even though rents are weak.',
    info: 'Use this yourself or sell to another player.',
    arg1: 65000,
    arg2: 8000,
    arg3: 57000,
    arg4: 300,
  },
  {
    id: 13,
    title: 'House for Sale 3BR/2BA',
    description:
      '3/2 house on golf course offers potential capital gain pus current cash flow. Good rentals and nice financing.',
    info: 'Use this yourself or sell to another player.',
    arg1: 75000,
    arg2: 7000,
    arg3: 68000,
    arg4: 300,
  },
  {
    id: 14,
    title: 'House for Sale 3BR/2BA',
    description:
      'Businessman liquidating this 3/2 house, needs cash to save his business. Currently occupied by happy tenant.',
    info: 'Use this yourself or sell to another player.',
    arg1: 65000,
    arg2: 7000,
    arg3: 58000,
    arg4: 150,
  },
  {
    id: 15,
    title: 'House for Sale 3BR/2BA',
    description:
      'Split level 3/2 house on out of way golf course offered by heirs of owner. Golf membership included.',
    info: 'Use this yourself or sell to another player.',
    arg1: 115000,
    arg2: 10000,
    arg3: 105000,
    arg4: -100,
  },
  {
    id: 16,
    title: 'House for Sale 3BR/2BA',
    description:
      'Nice 3/2 house with in ground pool and full applicances available in upper middle class area. Good schools.',
    info: 'Use this yourself or sell to another player.',
    arg1: 125000,
    arg2: 20000,
    arg3: 105000,
    arg4: -100,
  },
  {
    id: 17,
    title: 'House for Sale 3BR/2BA',
    description:
      'Downsized manager must sell this 3/2 house, cannot afford payments on new salary. Area in transition.',
    info: 'Use this yourself or sell to another player.',
    arg1: 70000,
    arg2: 9000,
    arg3: 61000,
    arg4: 300,
  },
  {
    id: 18,
    title: 'House for Sale 3BR/2BA',
    description:
      'Transferred skilled tradesman kept this 3/2 house in excellent condition, so it commands top dollar rentals in older neightborhood.',
    info: 'Use this yourself or sell to another player.',
    arg1: 67000,
    arg2: 12000,
    arg3: 55000,
    arg4: 400,
  },
  {
    id: 19,
    title: 'Automated Business for Sale',
    description:
      'Successful 4 bay coin operated auto wash near busy intersection. Seller is moving to retirement community out of state.',
    info: 'Use this yourself or sell to another player.',
    arg1: 125000,
    arg2: 25000,
    arg3: 100000,
    arg4: 1800,
  },
  {
    id: 20,
    title: 'Automated Business for Sale',
    description:
      '30 video/pinball machines at long term contract locations for sale by overextended owner. Owner is desperate.',
    info: 'Use this yourself or sell to another player.',
    arg1: 100000,
    arg2: 20000,
    arg3: 80000,
    arg4: 1600,
  },
  {
    id: 21,
    title: 'Automated Business for Sale',
    description:
      'Successful coin telephone business available due to death of owner. heirs live out of state. All locations on long term contract.',
    info: 'Use this yourself or sell to another player.',
    arg1: 200000,
    arg2: 40000,
    arg3: 160000,
    arg4: 2700,
  },
  {
    id: 22,
    title: 'Automated Business for Sale',
    description:
      'Personal bankruptcy sale of busy, successful laundromat on busy highway. Absentee owner, contract cleaning.',
    info: 'Use this yourself or sell to another player.',
    arg1: 150000,
    arg2: 30000,
    arg3: 120000,
    arg4: 2500,
  },
  {
    id: 23,
    title: '20 Acres for Sale',
    description:
      '20 acres of vacant land, currently zoned residential. Possiblity of good appreciation if rezoned commercial.',
    info: 'Use this yourself or sell to another player.',
    arg1: 20000,
    arg2: 20000,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 24,
    title: 'Tenant Damages your Property',
    description:
      'Tenant refuses to pay rent after losing job. When you get him evicted you discover significant damages to your property. Insurance covers most damages and costs, but you are out of pocket $1,000.',
    info: 'Pay $1,000 if you own any rental real estate. (Bank loan available on usual terms.)',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 25,
    title: 'Limited Partner Wanted',
    description:
      'Non-franchise sandwich shop doubling the number of locations Owner needs additional equity capital to get operating loan.',
    info: 'Use this yourself or sell to another player.',
    arg1: 30000,
    arg2: 30000,
    arg3: 0,
    arg4: 1500,
  },
  {
    id: 26,
    title: 'Limited Partner Wanted',
    description: `Auto Dealer wants to expand into leasing 2 and 3 years old cars. Needs capital as car maker's finance company is not interested.`,
    info: 'Use this yourself or sell to another player.',
    arg1: 30000,
    arg2: 30000,
    arg3: 0,
    arg4: 1000,
  },
  {
    id: 27,
    title: 'Limited Partner Wanted',
    description:
      'Successful doctor expanding office and clinic. Needs partner to fund equity portion of construction costs.',
    info: 'Use this yourself or sell to another player.',
    arg1: 25000,
    arg2: 25000,
    arg3: 0,
    arg4: 1000,
  },
  {
    id: 28,
    title: 'Limited Partner Wanted',
    description:
      'Successful pizza chain expanding into production of frozen pizzas for grocery stores. Owner needs capital for equipment.',
    info: 'Use this yourself or sell to another player.',
    arg1: 20000,
    arg2: 20000,
    arg3: 0,
    arg4: 800,
  },
  {
    id: 29,
    title: 'Pizza Franchise for Sale',
    description:
      'Healthy-pizza company franchise. Trend in nutritious fast-food booming. Next to college. High traffic.',
    info: 'Use this yourself or sell to another player.',
    arg1: 500000,
    arg2: 100000,
    arg3: 400000,
    arg4: 5000,
  },
  {
    id: 30,
    title: 'Duplex for Sale',
    description:
      'Duplex owner must sell to pay hospital bills. Two tenants in place, all records, good investment opportunity.',
    info: 'Use this yourself or sell to another player',
    arg1: 60000,
    arg2: 12000,
    arg3: 48000,
    arg4: 400,
  },
  {
    id: 31,
    title: 'Duplex for Sale',
    description:
      'Tenants in place at this investment duplex! Owner has income tax problems, needs to sell quickly.',
    info: 'Use this yourself or sell to another player',
    arg1: 45000,
    arg2: 8000,
    arg3: 37000,
    arg4: 320,
  },
  {
    id: 32,
    title: 'Duplex for Sale',
    description:
      'This duplex is the best in the neighborhood! Proud owner retiring to another state to be near her grandchildren.',
    info: 'Use this yourself or sell to another player.',
    arg1: 70000,
    arg2: 7000,
    arg3: 63000,
    arg4: 140,
  },
  {
    id: 33,
    title: 'Duplex for Sale',
    description:
      'Well maintained duplex in the desirable area available due to transfer of owner. Excellent investment opportunity for right buyer.',
    info: 'Use this yourself or sell to another player.',
    arg1: 60000,
    arg2: 6000,
    arg3: 54000,
    arg4: 300,
  },
  {
    id: 34,
    title: 'Duplex for Sale',
    description:
      'Owner moving out of this duplex due to growing family. Tenant remains, well maintained, excellent landscaping.',
    info: 'Use this yourself or sell to another player.',
    arg1: 50000,
    arg2: 8000,
    arg3: 42000,
    arg4: 240,
  },
  {
    id: 35,
    title: 'Bed & Breakfast for Sale',
    description:
      'Owner retiring, wants out NOW. Great clientele in resort community. 5BR/3BA',
    info: 'Use this yourself or sell to another player.',
    arg1: 150000,
    arg2: 30000,
    arg3: 120000,
    arg4: 1000,
  },
  {
    id: 36,
    title: 'Apartment House for Sale',
    description:
      '2 buildings totaling 24 units for sale. Owner managed with on-site assistant. Retirement prompts sale.',
    info: 'Use this yourself or sell to another player.',
    arg1: 575000,
    arg2: 75000,
    arg3: 500000,
    arg4: 3400,
  },
  {
    id: 37,
    title: 'Apartment House for Sale',
    description:
      '12 units apartment house offered by out-of-state heirs of handyman/owner. Long waiting list for apartments in this building.',
    info: 'Use this yourself or sell to another player.',
    arg1: 350000,
    arg2: 50000,
    arg3: 300000,
    arg4: 2400,
  },
  {
    id: 38,
    title: 'Apartment House for Sale',
    description:
      '24 unit older building near community college available from retiring owner/builder. Fully rented, nice cash flow.',
    info: 'Use this yourself or sell to another player.',
    arg1: 550000,
    arg2: 50000,
    arg3: 500000,
    arg4: 2800,
  },
  {
    id: 39,
    title: 'Car Wash for Sale',
    description:
      'Family car wash for sale. Family feuding. Wants out ASAP. Prime location in highgrowth area.',
    info: 'Use this yourself or sell to another player.',
    arg1: 350000,
    arg2: 50000,
    arg3: 300000,
    arg4: 1500,
  },
  {
    id: 40,
    title: 'Apartment Complex for Sale',
    description:
      '60 units complex available from pension fund that foreclosed on builder/owner. On-site management in place.',
    info: 'Use this yourself or sell to another player.',
    arg1: 1200000,
    arg2: 200000,
    arg3: 1000000,
    arg4: 11000,
  },
  {
    id: 41,
    title: 'Sewer Line Breaks',
    description:
      'Water everywhere at your 8-plex! Broken sewer line needs repair immediately!',
    info: 'If you own an 8-plex, pay $2,000 for new line. (Bank loan available on usual terms)',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 42,
    title: 'Small shopping mall for sale',
    description:
      'Bank has taken back mall from bankrupt owner. Mall is currently 50% occupied. Just listed today.',
    info: 'Use this yourself or sell to another player.',
    arg1: 50000,
    arg2: 50000,
    arg3: 0,
    arg4: 800,
  },
]
//#endregion BIG DEALS

//#region MARKETS

export const MARKETS = [
  {
    id: 1,
    title: 'Plex Buyer',
    description:
      'Buyer offers $25,000 per unit for all units in any combination of duplexes, 4-pexes, or 8-plexes. Has own financing.',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 30000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 2,
    title: 'Plex Buyer',
    description:
      'Buyer offers $30,000 per unit for all units in any combination of duplexes, 4-pexes, or 8-plexes. Has own financing.',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 40000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 3,
    title: 'Plex Buyer',
    description:
      'Buyer offers $35,000 per unit for all units in any combination of duplexes, 4-pexes, or 8-plexes. Has own financing.',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 4,
    title: 'Plex Buyer',
    description:
      'Buyer offers $40,000 per unit for all units in any combination of duplexes, 4-pexes, or 8-plexes. Has own financing.',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 40000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 5,
    title: 'Plex Buyer',
    description:
      'Buyer offers $45,000 per unit for all units in any combination of duplexes, 4-pexes, or 8-plexes. Has own financing.',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 45000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 6,
    title: 'Plex Buyer',
    description:
      'Buyer offers $20,000 per unit for all units in any combination of duplexes, 4-pexes, or 8-plexes. Has own financing.',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 20000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 7,
    title: 'Apartment House Buyer',
    description:
      'Buyer offers $25,000 per unit for all units in apartment houses of any size. Has own financing. [His 1031 tax deferred exchange time is running out].',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 25000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 8,
    title: 'Apartment House Buyer',
    description:
      'Buyer offers $45,000 per unit for all units in apartment houses of any size. Has own financing. [His 1031 tax deferred exchange time is running out].',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 45000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 9,
    title: 'Apartment House Buyer',
    description:
      'Buyer offers $30,000 per unit for all units in apartment houses of any size. Has own financing. Buyer has funds from sale of complex in another city.',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 30000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 10,
    title: 'Apartment House Buyer',
    description:
      'Buyer offers $40,000 per unit for all units in apartment houses of any size. Has own financing, needs to invest now.',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 40000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 11,
    title: 'House Buyer 3BR/2BA',
    description:
      'You are offered $135,000 for a 3/2 rental house. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 135000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 12,
    title: 'House Buyer 3BR/2BA',
    description:
      'You are offered $110,000 for a 3/2 rental house. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 110000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 13,
    title: 'House Buyer 3BR/2BA',
    description:
      'You are offered $140,000 for a 3/2 rental house. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 140000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 14,
    title: 'House Buyer 3BR/2BA',
    description:
      'You are offered $100,000 for a 3/2 rental house. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 100000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 15,
    title: 'House Buyer 3BR/2BA',
    description:
      'You are offered $65,000 for a 3/2 rental house. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 65000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 16,
    title: 'Condo Buyer 2BR/1BA',
    description:
      'You are offered $50,000 for a 2/1 rental condo. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 50000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 17,
    title: 'Condo Buyer 2BR/1BA',
    description:
      'You are offered $65,000 for a 2/1 rental condo. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 65000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 18,
    title: 'Condo Buyer 2BR/1BA',
    description:
      'You are offered $55,000 for a 2/1 rental condo. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 55000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 19,
    title: 'Condo Buyer 2BR/1BA',
    description:
      'You are offered $60,000 for a 2/1 rental condo. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 60000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 20,
    title: 'Condo Buyer 2BR/1BA',
    description:
      'You are offered $70,000 for a 2/1 rental condo. Buyer has own financing',
    info: 'If you sell, pay off the related mortgage and give up the cashf flow you currently receive on this property',
    arg1: 70000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 21,
    title: 'Limited Partnership Sold',
    description:
      'The business has been sold and you receive twice your original cost for your share of it.',
    info: 'Every limited partnership is affected. If you own a limited partnership, receive cash and reduce your cash flow immediately.',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 22,
    title: 'Small Business Improves',
    description:
      'The small business you founded has found a major company to distribute its product. Your sales increase 150%.',
    info: 'If you owns a business, you will have your cashflow increased by $400 per month on all such businesses',
    arg1: 400,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 23,
    title: 'Small Business Improves',
    description:
      'The small business you founded won an industry awared for its product innovation. Great publicity causes your sales to double.',
    info: 'If you owns a business, you will have your cashflow increased by $250 per month on all such businesses',
    arg1: 250,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 24,
    title: 'Car Wash Buyer',
    description:
      'Red hot buyer looking for a car wash bargain. Has $250,000 cash ready to spend. That is his limit.',
    info: 'If you own a car wash, you may sell at this price. If you sell, pay off the related mortgage and give up the cash flow you currently receive on this property.',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 25,
    title: 'Builder Wants Land',
    description:
      'City planners require builder to put in 10 acre park or they will not approve new subdivision. Builder needs 10 acres with stream.',
    info: 'Cash offer of $150,000 to you if you own such a property.',
    arg1: 150000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 26,
    title: 'Demand for Bed & Breakfast',
    description:
      'Couple burned out from the corporate jobs are ready for a change. Have lots of cash. Looking for a profitable Bed & Breakfast. They will pay $250,000 today.',
    info: 'If you own a Bed & Breakfast, you can can sell at this price.',
    arg1: 250000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 27,
    title: 'Inflation Hits!',
    description:
      'Inflation goes to 10%. Interest rates climb to 20% on home loans.',
    info: 'All 3/2 rental houses that you own are now in foreclosure. You financed with variable rate mortages. You must give your 3/2 house(s) back to the bank. You lose your cash flow from these properties.',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 28,
    title: 'Software Company Buyer',
    description:
      'Large integrated software company offers $100,000 cash for inventive software program and related company.',
    info: 'If you owns a software company, you may sell at this price. If you sell, give up the cash flow you currently receive from this company.',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 29,
    title: 'Iterest Rates Drop!',
    description: 'Interest rates on home loans drop to 5%',
    info: 'If you own any 3/2 rental houses you may sell them for $50,000 more than the original cost.',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 30,
    title: 'Shopping Mall Wanted',
    description:
      'Major retailer is moving to your town. Looking for small shopping mall to purchases.',
    info: 'There are ready to pay $100,000 to you if you own a small shopping mall.',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 31,
    title: 'Buyer for 20 Acres',
    description:
      'Builder wants a 20-acre parcel of land. He will re-zone it from residential to commercial.',
    info: 'Cash offer of $200,000 to everyone who owns 20 acres of residential land.',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 32,
    title: 'Widget Company Buyer',
    description:
      'Engineer/Inventor who owns machinery company offers $50,000 cash for inventive method of making widgets.',
    info: 'If you own a widget company, you may sell at this price',
    arg1: 50000,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 33,
    title: 'Price of Gold Soars',
    description:
      'Rioting in Middle East. Oil prices threatened. Price of gold skyrockets to $600 per ounce.',
    info: 'If you own 1 once Krugerrands may sell at this price',
    arg1: 600,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
  {
    id: 34,
    title: 'Collector Wants Gold Coins',
    description:
      'Collector looking for authentic 1500 Royal Spanish New World (Havana mint only) pieces-of-eight gold coins',
    info: 'Cash offer of $5,000 for each coin to everyone',
    arg1: 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
  },
]
//#endregion MARKETS
