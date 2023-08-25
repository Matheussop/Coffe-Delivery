
import { ComponentProps } from 'react'
import { Input, InputContainer, Suffix } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  suffix?: string
}

export function InputText({ suffix, ...props }: TextInputProps) { 
  return (
    <InputContainer >
      <Input type="text" {...props} />
      {!!suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )
}