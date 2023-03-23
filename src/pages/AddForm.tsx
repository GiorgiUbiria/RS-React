import React, { Component, createRef } from 'react';
import FormCard from '../components/FormCard';
import { cities } from '../data/GeorgianCities';
import { CityType } from '../types/CityType';
import { ErrorType } from '../types/ErrorType';
import { FormCardType } from '../types/FormCardType';
import { AddFormProps, State } from '../types/AddFormInterface';
import '../styles/FormCard.css';

class AddForm extends Component<AddFormProps, State> {
  nameRef = createRef<HTMLInputElement>();
  surnameRef = createRef<HTMLInputElement>();
  zipCodeRef = createRef<HTMLInputElement>();
  birthDateRef = createRef<HTMLInputElement>();
  deliveryDateRef = createRef<HTMLInputElement>();
  cityRef = createRef<HTMLSelectElement>();
  consentRef = createRef<HTMLInputElement>();
  maleRef = createRef<HTMLInputElement>();
  femaleRef = createRef<HTMLInputElement>();
  fileRef = createRef<HTMLInputElement>();

  state: State = {
    cards: [] as FormCardType[],
    errors: {} as ErrorType,
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = this.nameRef.current?.value as string;
    const surname = this.surnameRef.current?.value as string;
    const zipCode = this.zipCodeRef.current?.value as string;
    const birthDate = this.birthDateRef.current?.value as string;
    const deliveryDate = this.deliveryDateRef.current?.value as string;
    const city = this.cityRef.current?.value as string;
    const consent = this.consentRef.current?.checked as boolean;
    const gender = this.maleRef.current?.checked
      ? (this.maleRef.current?.value as string)
      : (this.femaleRef.current?.value as string);
    const file = this.fileRef.current?.files?.[0] as File;

    const errors = {} as ErrorType;
    if (!name) {
      errors.name = 'Name is required';
    } else if (!/^[A-Z]/.test(name)) {
      errors.name = 'Name should start with an uppercase letter';
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      errors.name = 'Name should only contain letters';
    } else if (!/^[\x00-\x7F]+$/.test(name)) {
      errors.name = 'Name should only be in English';
    }

    if (!surname) {
      errors.surname = 'Surname is required';
    } else if (!/^[A-Z]/.test(surname)) {
      errors.surname = 'Surname should start with an uppercase letter';
    } else if (!/^[a-zA-Z]+$/.test(surname)) {
      errors.surname = 'Surname should only contain letters';
    } else if (!/^[\x00-\x7F]+$/.test(surname)) {
      errors.surname = 'Surname should only be in English';
    }

    if (!zipCode) {
      errors.zipCode = 'ZIP Code is required';
    } else if (!/^[1-9]\d*$/.test(zipCode)) {
      errors.zipCode = 'ZIP Code should contain only positive integer numbers';
    } else if (zipCode.length < 4) {
      errors.zipCode = 'ZIP Code should be at least 4 characters long';
    }

    if (!birthDate) {
      errors.birthDate = 'Birth date is required';
    } else {
      const today = new Date();
      const selectedDate = new Date(birthDate);
      if (selectedDate >= today) {
        errors.birthDate = 'Birth date should be before today';
      }
    }

    if (!deliveryDate) {
      errors.deliveryDate = 'Delivery date is required';
    } else {
      const today = new Date();
      const selectedDate = new Date(deliveryDate);
      if (selectedDate <= today) {
        errors.deliveryDate = 'Delivery date should be after today';
      }
    }

    if (!city) {
      errors.city = 'City is required';
    }

    if (!consent) {
      errors.consent = 'Consent is required';
    }

    if (!gender) {
      errors.gender = 'Gender is required';
    }

    if (!file) {
      errors.file = 'Profile picture is required';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const newCard = {
      name,
      surname,
      zipCode,
      birthDate,
      deliveryDate,
      city,
      consent,
      gender,
      file,
    };

    this.setState((prevState: State) => ({
      cards: [...prevState.cards, newCard],
      errors: {},
    }));

    const form = e.target as HTMLFormElement;
    form.reset();
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <h1>{this.props.page}</h1>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          onSubmit={this.handleSubmit}
          data-testid="form"
        >
          <div className="names" style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" ref={this.nameRef} />

              {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="surname">Surname</label>
              <input type="text" id="surname" ref={this.surnameRef} />

              {errors.surname && <span style={{ color: 'red' }}>{errors.surname}</span>}
            </div>
          </div>

          <label htmlFor="zipCode">ZIP Code</label>
          <input type="text" id="zipCode" ref={this.zipCodeRef} />

          {errors.zipCode && <span style={{ color: 'red' }}>{errors.zipCode}</span>}

          <label htmlFor="birthDate">Birth Date</label>
          <input type="date" id="birthDate" ref={this.birthDateRef} />

          {errors.birthDate && <span style={{ color: 'red' }}>{errors.birthDate}</span>}

          <label htmlFor="deliveryDate">Delivery Date</label>
          <input type="date" id="deliveryDate" ref={this.deliveryDateRef} />

          {errors.deliveryDate && <span style={{ color: 'red' }}>{errors.deliveryDate}</span>}

          <label htmlFor="country">City</label>
          <select id="country" ref={this.cityRef}>
            <option value="">Select city</option>
            {cities.map((city: CityType) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}

          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="male">
                Male <input type="radio" value="Male" id="male" name="gender" ref={this.maleRef} />
              </label>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="female">
                Female{' '}
                <input type="radio" value="Female" id="female" name="gender" ref={this.femaleRef} />
              </label>
            </div>

            {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
          </div>

          <label htmlFor="consent">
            I consent to my personal data{' '}
            <input type="checkbox" id="consent" ref={this.consentRef} />
          </label>

          {errors.consent && <span style={{ color: 'red' }}>{errors.consent}</span>}

          <label htmlFor="file">Profile Picture</label>
          <input type="file" id="file" ref={this.fileRef} />

          {errors.file && <span style={{ color: 'red' }}>{errors.file}</span>}

          <button type="submit">Submit</button>
        </form>

        <div>
          <h2>Form Cards</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {this.state.cards.map((card: FormCardType) => (
              <FormCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default AddForm;
