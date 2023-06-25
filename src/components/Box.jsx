import './Box.css';

const Box = ({value, onClick}) => {
    const style = value === 'X' ? 'box box-x': 'box box-o';
  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}

export default Box