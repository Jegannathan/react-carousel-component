import {useReducer, useState} from 'react';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDown/DropDown';
import Slides from '../../components/Slides/Slides';
import classes from './Carousal.module.css';
import slideReducer from '../../reducers/slideReducer';
import {slides, options}  from '../../constants/constant';

const initialState = {
    slideIndex: 0
};

const Carousel = () => {
    const [option, setOption] = useState("fruits");
    const [state, dispatch] = useReducer(slideReducer, initialState);
    const handleChange = (event) => {
        setOption(event.target.value);
    }
  
    return (
      <div className={classes.Container}>
        <div className={classes.SlideParent}>
            <div className={classes.Slides}>
                <Button click={() => dispatch({ type: "PREV" })} name={'‹'}/>
                <Slides slides={slides} value={option} slideIndex={state.slideIndex}/>
                <Button click={() => dispatch({ type: "NEXT" })} name={'›'}/>
            </div>
        </div>
        <DropDown value={option} change={handleChange} options={options}/>
      </div>
    );
}

export default Carousel;