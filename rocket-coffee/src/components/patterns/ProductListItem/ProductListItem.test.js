import { render, fireEvent } from '@testing-library/react';
import { OnSale, SoldOut, Standard } from './ProductListItem.stories';

it('shows on sale label when isOnSale', () => {
    const { getByText } = render(<OnSale/>)
    expect(getByText(`(On Sale)`))
        .toBeInTheDocument()
})

it('disables the button when disabled', () => {
    const { getByText } = render(<SoldOut />)
    expect(getByText(`Sold out`))
        .toHaveAttribute('disabled')
})

it('calls callback when button Add to Cart pressed', () => {
    const mockAddToCart = jest.fn()
    const { getByText } = render(<Standard onAddToCart={ mockAddToCart }/>)
    fireEvent.click(getByText(`Add to cart`))
    expect(mockAddToCart)
        .toHaveBeenCalled()
})