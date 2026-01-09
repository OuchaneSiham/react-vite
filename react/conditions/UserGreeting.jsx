import PropTypes from "prop-types";


function UserGreeting({isLoggedIn=false, username="Guest"})
{
    const checkdata = {isLoggedIn, username};
    // PropTypes.checkPropTypes(UserGreeting.propTypes, props, 'prop', UserGreeting)
    PropTypes.checkPropTypes(UserGreeting.propTypes, checkdata, 'prop', UserGreeting)
    // if(props.isLoggedIn){
    //     return <h2>welcome {props.username}</h2>
    // }
    // else {
    //     return <h2>please log in to continue</h2>
    // }
    // if(props.isLoggedIn){

    // }
    // return (props.isLoggedIn? <h2 className="isTrue">welcome {props.username}</h2>:
    //                             <h2 className="isFalse">please log in to continue</h2>)
    // const welcomeMsj = <h2 className="isTrue">welcome {props.username}</h2>;
    // const loginprompt =  <h2 className="isFalse">please log in to continue</h2>;
    // return (props.isLoggedIn? welcomeMsj: loginprompt);

    const welcomeMsj = <h2 className="isTrue">welcome {username}</h2>;
    const loginprompt =  <h2 className="isFalse">please log in to continue</h2>;
    return (isLoggedIn? welcomeMsj: loginprompt);
}

UserGreeting.propTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
export default UserGreeting