import {
  StyledErrorText,
  StyledInput,
  StyledInputWrapper,
} from '@/styles/NBInput.styles';

export interface InputProps {
  id: string;
  type: 'text' | 'password' | 'email';
  onError: string | undefined;
  onTouched: boolean | undefined;
  placeholder?: string;
  iconChildren?: React.ReactNode;
  value: React.HTMLInputTypeAttribute;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputWrapperProps {
  hasError?: boolean;
}

export const NBInput = (props: InputProps) => (
  <StyledInputWrapper
    hasError={props.onTouched && props.onError ? true : false}>
    <StyledInput
      id={props.id}
      type={props.type}
      value={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
    <StyledErrorText>
      {props.onTouched && props.onError && props.onError}
    </StyledErrorText>
  </StyledInputWrapper>
);
