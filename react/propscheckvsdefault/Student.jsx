
// // weuse proptypes for forming the input if comp epects num and recives sring it will break without using proptypes 
// // 
// import PropTypes from 'prop-types';
// function Student(props)
// {
//     PropTypes.checkPropTypes(Student.propTypes, props, 'prop',Student);


// //     Student.propTypes: This tells the library to use the rules you already wrote at the bottom of your file (name is string, age is number, etc.).

// // props: This passes the actual data you received from App.jsx (like "sss" for age) to the validator.

// // 'prop': This is a required string that tells the library what kind of data it is checking (standard for React props).

// // 'Student': This is the name that will show up in the error message (e.g., "Warning: Failed prop type in Student...").

//     return(
//         <div className="student">
//             <p>Name:{props.name}</p>
//             <p>Age:{props.age}</p>
//             {/* <p>Student:{!(props.isStudent)? "Yes": "No"}</p> */}
//             <p>Student:{(props.isStudent)? "Yes": "No"}</p>
//         </div>
//     );
// }
// Student.propTypes={
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool
// }
// export default Student



// default props asat 
import PropTypes from 'prop-types';
function Student({name="Guest", age= 0, isStudent=false})
{
    // let n = name;
    // let a = age;
    // let is = isStudent;
    const checkData = {name, age , isStudent};
    PropTypes.checkPropTypes(Student.propTypes, checkData, 'prop',Student);
    return(
        <div className="student">
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Student:{(isStudent)? "Yes": "No"}</p>
        </div>
    );
}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
export default Student

