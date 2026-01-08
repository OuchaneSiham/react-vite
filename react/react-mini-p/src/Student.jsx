
// weuse proptypes for forming the input if comp epects num and recives sring it will break without using proptypes 
// 
import PropTypes from 'prop-types';
function Student(props)
{
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            {/* <p>Student:{!(props.isStudent)? "Yes": "No"}</p> */}
            <p>Student:{(props.isStudent)? "Yes": "No"}</p>
        </div>
    );
}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
export default Student