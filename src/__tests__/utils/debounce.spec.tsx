import React from 'react';
import { render } from '@testing-library/react';
import { useDebounce } from '@utils/debounce';

describe('Debounce', () => {
  it('should be able return to prop value', () => {
    const Component: React.FC<{ text: string }> = ({ text }) => {
      const value = useDebounce(text, 1000);
      return <h1 data-testid="text">{value}</h1>;
    };
    const wrapper = render(<Component text="Olá Mundo" />);
    const test = wrapper.getByTestId('text').textContent;
    expect(test).toBe('Olá Mundo');
  });
});
