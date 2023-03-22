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
  genderRef = createRef<HTMLInputElement>();
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
    const gender = this.genderRef.current?.value as string;
    const file = this.fileRef.current?.files?.[0] as File;

    const errors = {} as ErrorType;
    if (!name) {
      errors.name = 'Name is required';
    } else if (!/^[A-Z]/.test(name)) {
      errors.name = 'Name should start with an uppercase letter';
    }
    if (!surname) {
      errors.surname = 'Surname is required';
    } else if (!/^[A-Z]/.test(surname)) {
      errors.surname = 'Surname should start with an uppercase letter';
    }
    if (!zipCode) {
      errors.zipCode = 'ZIP Code is required';
    }
    if (!birthDate) {
      errors.birthDate = 'Birth date is required';
    }
    if (!deliveryDate) {
      errors.deliveryDate = 'Delivery date is required';
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
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={this.nameRef} />

          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" ref={this.surnameRef} />

          {errors.surname && <span style={{ color: 'red' }}>{errors.surname}</span>}

          <label htmlFor="zipCode">ZIP Code</label>
          <input type="text" id="zipCode" ref={this.zipCodeRef} />

          {errors.zipCode && <span style={{ color: 'red' }}>{errors.zipCode}</span>}

          <label htmlFor="birthDate">Birth Date</label>
          <input type="date" id="birthDate" ref={this.birthDateRef} />

          {errors.birthDate && <span style={{ color: 'red' }}>{errors.birthDate}</span>}

          <label htmlFor="deliveryDate">Delivery Date</label>
          <input type="date" id="deliveryDate" ref={this.deliveryDateRef} />

          {errors.deliveryDate && <span style={{ color: 'red' }}>{errors.deliveryDate}</span>}

          <label htmlFor="country">Country</label>
          <select id="country" ref={this.cityRef}>
            <option value="">Select city</option>
            {cities.map((city: CityType) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}

          <label htmlFor="male"> Male</label>
          <input type="radio" value="Male" id="male" ref={this.genderRef} />

          {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}

          <label htmlFor="consent">Consent</label>
          <input type="checkbox" id="consent" ref={this.consentRef} />

          {errors.consent && <span style={{ color: 'red' }}>{errors.consent}</span>}

          <label htmlFor="file">Profile Picture</label>
          <input type="file" id="file" ref={this.fileRef} />

          {errors.file && <span style={{ color: 'red' }}>{errors.file}</span>}

          <button type="submit">Submit</button>
        </form>

        <div>
          <h2>Form Cards</h2>
          {this.state.cards.map((card: FormCardType) => (
            <FormCard key={card.name} card={card} />
          ))}
        </div>
      </>
    );
  }
}

export default AddForm;
