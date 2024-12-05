import {render, screen} from '@testing-library/react';

import { NewsPostLegend } from './views/news/Legend';


test('renders the correct content', () => {
    render(<NewsPostLegend />);  
    expect(screen.getByRole('listitem', {key: {value: /talk-key/i}})).toHaveTextContent('| Talk');
});