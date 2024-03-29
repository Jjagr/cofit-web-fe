import Countdown from 'react-countdown';
import CountdownBox from '../../elements/CountdownBox/CountdownBox';

const CustomCountdown = () => {
  type RenderProps = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean
  }

  const renderer = ({ days, hours, minutes, seconds, completed }: RenderProps) => {
    if (completed) {
      // Render a completed state
      return <div className="flex flex-row gap-2">
        <CountdownBox count={0} units="hari" />
        <CountdownBox count={0} units="jam" />
        <CountdownBox count={0} units="menit" />
        <CountdownBox count={0} units="detik" />
      </div>;
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
      date={new Date(2022, 9, 20, 0, 0, 0)}
      renderer={renderer}
    />
  )
}

export default CustomCountdown;
