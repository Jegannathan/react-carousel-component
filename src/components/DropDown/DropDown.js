import classes from './DropDown.module.css'

const DropDown = (props) => (
    <div className={classes.DropDown}>
        <select onChange={props.change} value={props.value} className={classes.DropDownSelect}>
            {props.options.map(category => (
                <option key={category.value} value={category.value}>
                    {category.name}
                </option>
            ))}
        </select>
    </div>
)

export default DropDown