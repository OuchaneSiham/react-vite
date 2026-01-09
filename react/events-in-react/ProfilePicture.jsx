function ProfilePicture()
{
    const img = "./src/assets/pp.jpg"
    const handleclick = () => console.log("u clicked the image");
    const handleclcikE = (e) => {
        e.target.style.display = "none";
    }
    return(
        // <img  onClick={handleclick} src={img}></img>
        <img  onClick={(e) => handleclcikE(e)} src={img}></img>
    );
}
export default ProfilePicture