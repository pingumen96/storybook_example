import React from 'react';
import { screen, render } from '@testing-library/react';

import UserProfile from './UserProfile';

describe('UserProfile', () => {
    it('renders as expected', () => {
        const { container } = render(<UserProfile />);
        expect(container).toMatchSnapshot();
    });
});