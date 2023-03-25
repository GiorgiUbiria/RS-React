import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

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

  it('form is reset after submit', () => {
    render(<AddForm page={'Add a Form'} />);

    const nameInput = screen.getByLabelText('Name');
    const surnameInput = screen.getByLabelText('Surname');
    const zipCodeInput = screen.getByLabelText('ZIP Code');
    const birthDateInput = screen.getByLabelText('Birth Date');
    const deliveryDateInput = screen.getByLabelText('Delivery Date');
    const cityInput = screen.getByLabelText('City');
    const consentInput = screen.getByLabelText('I consent to my personal data');

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    fireEvent.change(zipCodeInput, { target: { value: '12345' } });
    fireEvent.change(birthDateInput, { target: { value: '2020-01-01' } });
    fireEvent.change(deliveryDateInput, { target: { value: '2021-02-01' } });
    fireEvent.change(cityInput, { target: { value: 'Tbilisi' } });
    fireEvent.click(consentInput);

    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Doe')).toBeInTheDocument();
    expect(screen.getByDisplayValue('12345')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2020-01-01')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2021-02-01')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Tbilisi')).toBeInTheDocument();
    expect(consentInput).toBeChecked();

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('form is not submitted if consent is not checked', () => {
    render(<AddForm page={'Add a Form'} />);
    const consentInput = screen.getByLabelText('I consent to my personal data');
    expect(consentInput).not.toBeChecked();
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('Consent is required')).toBeInTheDocument();
  });
});
