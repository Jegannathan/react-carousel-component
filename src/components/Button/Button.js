import classes from './Button.module.css'

const Button = (props) => (
    <button className={classes.SlideButton} onClick={props.click}>{props.name}</button>
)

export default Button;