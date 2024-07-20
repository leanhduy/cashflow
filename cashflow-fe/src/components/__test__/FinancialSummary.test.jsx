import { render, screen } from '@testing-library/react'
import FinancialStatus from '@/components/FinancialStatus'
import { describe, expect, it } from 'vitest'
import { mockFinancialStatusProps } from '@/__mocks__'

describe.only('Financial Summary', () => {
  describe('Testing UI', () => {
    let TITLE_TEXT = 'INCREASE PASSIVE INCOME TO ESCAPE THE RAT RACE'
    it('should render correct elements on the UI', () => {
      render(<FinancialStatus {...mockFinancialStatusProps} />)
      screen.debug()
      const title = screen.getByRole('heading')
      expect(title).toBeInTheDocument()
      expect(title.textContent).to.equal(TITLE_TEXT)
    })
  })
})
