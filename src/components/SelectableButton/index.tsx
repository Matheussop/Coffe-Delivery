
import { ComponentProps, cloneElement} from 'react'
import { ButtonContainer, IconContainer } from "./styles";

export interface SelectableButtonProps extends ComponentProps<typeof ButtonContainer> {
  icon: JSX.Element
  text: string
  typeMethod: 'credit' | 'debit' | 'money'
  isSelect: 'credit' | 'debit' | 'money'
}

export function SelectableButton({ text, icon, isSelect, typeMethod, ...props }: SelectableButtonProps) { 
  props.selected = typeMethod === isSelect ? true : false;	
  
  return (
    <ButtonContainer {...props}>
      {icon && 
        <IconContainer>
          {cloneElement(icon, { size: '1.2rem' })}
        </IconContainer>
      }
      {text}
    </ButtonContainer>
  )
}