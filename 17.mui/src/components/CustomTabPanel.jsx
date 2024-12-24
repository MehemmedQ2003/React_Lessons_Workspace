/* eslint-disable react/prop-types */
const CustomTabPanel = (props) => {
    const {value, index, children} = props;
    return (
        <div>
            {
                value === index && <div>{children}</div>
            }
        </div>
    )
}

export default CustomTabPanel
