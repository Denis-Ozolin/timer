import { StyledButton } from './Button.styled';

export const Button = ({ name, onClick }) => {
  return (
    <StyledButton type='button' onClick={onClick}>{name}</StyledButton>
  )
}