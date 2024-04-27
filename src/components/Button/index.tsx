import { ButtonContainer } from './styles'

export type Props = {
  title: string
  onClick?: () => void
  children: string
  disabled?: boolean
  className?: string
}

const Button = ({ title, children, onClick, disabled, className }: Props) => {
  return (
    <ButtonContainer
      type="submit"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
