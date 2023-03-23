import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AddForm from './AddForm';

describe('Add Form', () => {
  it('renders heading on the Add Form page', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Add a Form');
  });

  it('renders a form', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('renders a name input', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('renders a surname input', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByLabelText('Surname')).toBeInTheDocument();
  });

  it('renders a zip code input', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByLabelText('ZIP Code')).toBeInTheDocument();
  });

  it('renders a birth date input', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByLabelText('Birth Date')).toBeInTheDocument();
  });

  it('renders a delivery date input', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByLabelText('Delivery Date')).toBeInTheDocument();
  });

  it('renders a city input', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByLabelText('City')).toBeInTheDocument();
  });

  it('renders a consent input', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByLabelText('I consent to my personal data')).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    render(<AddForm page={'Add a Form'} />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
