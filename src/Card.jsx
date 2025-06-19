import pic from './assets/526887.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-img" alt='profile image' src={pic}></img>
            <h2 className='card-title'>games</h2>
            <p className='card-text'>they are fun to play</p>
        </div>    
    );
}

export default Card;