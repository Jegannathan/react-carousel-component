import {useReducer, useState} from 'react';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDown/DropDown';
import Slides from '../../components/Slides/Slides';
import classes from './Carousel.module.css';
import slideReducer from '../../reducers/slideReducer';
import {slides, options}  from '../../constants/constant';

const initialState = {
    slideIndex: 0
};

const Carousel = () => {
    const [option, setOption] = useState("fruits");
    const [state, dispatch] = useReducer(slideReducer, initialState);
    const selectedSlides = slides.filter((slide) => slide.category === option);
    const handleChange = (event) => {
        setOption(event.target.value);
        dispatch({ type: "OPTION_CHANGED"})
    }
  
    return (
      <div className={classes.Container}>
        <div className={classes.SlideParent}>
            <div className={classes.Slides}>
                <Button click={() => dispatch({ type: "PREV", value: selectedSlides})} name={'‹'}/>
                <Slides slides={selectedSlides} slideIndex={state.slideIndex}/>
                <Button click={() => dispatch({ type: "NEXT", value: selectedSlides})} name={'›'}/>
            </div>
        </div>
        <DropDown value={option} change={handleChange} options={options}/>
      </div>
    );
}

export default Carousel;