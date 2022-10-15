
type Props = {
  count: Number,
  units: String,
}

const CountdownBox = ({count, units} : Props) => {
  return (
    <div className="bg-orange-gradient w-[75px] py-2 text-primary-50 rounded-12">
      <h2 className="xl:text-h2 text-h3 font-bold text-center">{count < 10 ? `0${count}` : count}</h2>
      <p className="text-body2 text-center">{units}</p>
    </div>
  )
}

export default CountdownBox;
