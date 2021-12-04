import { Button } from 'components/Button/Button';

export const TimerControls = ({start, stop, reset}) => {

  return (
    <div>
      <Button name={"Start"} onClick={start}/>
      <Button name={"Stop"} onClick={stop}/>
      <Button name={"Reset"} onClick={reset}/>
    </div>
  )
}