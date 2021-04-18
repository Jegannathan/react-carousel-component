import Slide from './Slide/Slide';
const Slides = (props) => {
    const {slides, slideIndex} = props;
    return (
        [...slides, ...slides, ...slides].map((slide, i,input) => {
            let offset = Math.floor(input.length / 2 + (slideIndex - i));
            return <Slide slide={slide} offset={offset} key={i} />;
          })
    )
}

export default Slides;