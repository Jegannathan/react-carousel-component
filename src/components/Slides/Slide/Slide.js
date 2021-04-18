import classes from './Slide.module.css';
const Slide = ({ slide, offset }) => {
    const active = offset === 0 ? true : null;
      return (
        <div
          className={classes.Slide}
          data-active={active}
          style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
          }}
        >
          <div
            className={classes.SlideContent}
            style={{
            backgroundImage: `url('${slide.image}')`
          }}
          >
            <div className={classes.SlideContentInner}>
              <h2 className={classes.SlideProductName}>{slide.name}</h2>
              <h3 className={classes.SlideProductPrice}>{'Rs:' +slide.price}</h3>
              <p className={classes.SlideProductCategory}>{slide.category}</p>
            </div>
          </div>
        </div>
          

    );
  }

  export default Slide;