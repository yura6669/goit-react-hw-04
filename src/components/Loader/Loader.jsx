import { RingLoader } from "react-spinners";
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}><RingLoader color="blue" /></div>
  )
}

export default Loader