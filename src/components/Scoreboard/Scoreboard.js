import { DateContainer, Date, DateGap } from './Scoreboard.styled';

export const Scoreboard = ({ time }) => {
  const seks = ("0"+ Math.floor((time / 1000) % 60)).slice(-2);
  const mins = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const hours = ("0"+ Math.floor((time / 3600000) % 60)).slice(-2)
  
  return (
    <DateContainer>
      <Date>{hours}</Date>
      <DateGap>:</DateGap>
      <Date>{mins}</Date>
      <DateGap>:</DateGap>
      <Date>{seks}</Date>
    </DateContainer>
  )
}