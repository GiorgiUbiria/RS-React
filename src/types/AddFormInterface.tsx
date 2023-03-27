import { ErrorType } from './ErrorType';
import { FormCardType } from './FormCardType';

export interface AddFormProps {
  page: string;
}

export type State = {
  cards: FormCardType[];
  errors: ErrorType;
  isFormSubmitted: boolean;
};
