import React from 'react'
import { render, screen } from '@testing-library/react'
import TestPage from '@/pages/test'

describe('Test', () => {
	it('render heading', () => {
		render(<TestPage />)
	
		const heading = screen.getByRole('heading', {
			name: 'This is Test Page'
		})

		expect(heading).toBeInTheDocument()
	})
})
