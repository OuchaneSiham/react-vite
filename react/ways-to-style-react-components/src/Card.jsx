import profilePic from './assets/pp.jpg'
function Card()
{
    return (
        <div className="card">
            {/* <img src="https://via.placeholder.com/150" alt="profile picture"></img> */}
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">siham ouchane</h2>
            <p className='card-text'>just a random text written here i think, me i do coding</p>
        </div>
    );
}
export default Card