import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mockIncomes } from '@/__mocks__'
import Income from '../Income'

describe('Income component', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should render correct elements for a Income component', () => {
    render(<Income incomes={mockIncomes} />)
    const title = screen.getByRole('heading')
    const listheader = screen.getByText(/Cash Flow/)
    expect(title).toBeInTheDocument()
    expect(listheader).toBeInTheDocument()
    expect(title.textContent).to.equal('INCOME')
  })

  it('should render correct number of incomes', () => {
    render(<Income incomes={mockIncomes} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems.length).to.equal(mockIncomes.length)
  })

  it('should render correctly when no incomes are provided', () => {
    render(<Income />)
    const listItems = screen.queryAllByRole('listitem')
    expect(listItems.length).to.equal(0)
  })

  // > Return to this one later, when we fully know how to mock module
  // it('should format income amount correctly', () => {
  //   render(<Income incomes={mockIncomes} />)
  //   mockIncomes.forEach((income) => {
  //     expect(currencyFormatter.format).toHaveBeenCalledWith(income.amount)
  //   })
  // })

  // ? This technique is called 'snapshot testing'
  // ? Purpose: Capture the rendered output and detect any unintended changes in the component over time.
  it('should match the snapshot', () => {
    const { asFragment } = render(<Income incomes={mockIncomes} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
