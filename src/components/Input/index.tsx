
import { ComponentProps, ElementRef, forwardRef} from 'react'

import { Input, InputContainer, Suffix } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  suffix?: string
}

export const InputText  = forwardRef<ElementRef<typeof Input>, TextInputProps>(
({ suffix,...props }: TextInputProps, ref) => { 
  return (
    <InputContainer >
      <Input ref={ref} {...props} />
      {!!suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )
})