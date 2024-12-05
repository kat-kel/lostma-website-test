import {render, screen} from '@testing-library/react'
import Home from './Home'


test('loads and displays article on news feed', async () => {
  // ARRANGE
  render(<Home />)

  // ACT
  await screen.findByRole('h2')

  // ASSERT
  expect(screen.findByRole('h2')).toHaveTextContent('What is LostMa?')
})