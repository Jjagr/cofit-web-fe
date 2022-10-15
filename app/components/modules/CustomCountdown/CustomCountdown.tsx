import Countdown from 'react-countdown';
import CountdownBox from '../../elements/CountdownBox/CountdownBox';

const CustomCountdown = () => {

  const COUNTDOWN_DAYS = 5;

  type RenderProps = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean
  }

  const renderer = ({ days, hours, minutes, seconds, completed } : RenderProps) => {
    if (completed) {
      // Render a completed state
      return <p>Kelar</p>;
    } else {
      // Render a countdown
      return (
        <div className="flex flex-row gap-2">
          <CountdownBox count={days} units="hari" />
          <CountdownBox count={hours} units="jam" />
          <CountdownBox count={minutes} units="menit" />
          <CountdownBox count={seconds} units="detik" />
        </div>
      );
    }
  };
  
  return (
    <Countdown 
      date={ Date.now() + (COUNTDOWN_DAYS * 86400000) }
      renderer={renderer}
    />
  )
}

export default CustomCountdown;
