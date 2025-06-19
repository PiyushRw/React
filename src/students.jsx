import PropTypes from 'prop-types'
function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>students: {props.isStudent ? "YES" : "No"}</p>

        </div>
    )
}
Student.propTypes ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
}
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
};
export default Student;