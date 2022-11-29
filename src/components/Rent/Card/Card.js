import React,{useState} from 'react'
import "./Card.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LivingIcon from '@mui/icons-material/Living';


const Card = ({item}) => {
    const [favorite,setFavorite] =useState(false)
    return (
        <div className="card">
            <span className="card-ribbon"></span>
            <p className="span-content">POPULAR</p>
            <div className="card-img">
                <img src={item.img} />
            </div>
            <div className="card-content">
                <div className="card-top-content">
                    <div className="card-price-address">
                        <div>
                            <span className="price">${item.price}{" "}</span>
                            <span className="per-month">/month</span>
                        </div>
                        <div>
                            <span className="city">{item.city}</span>
                        </div>
                    </div>
                    <div className="card-favourite" onClick={()=>setFavorite(!favorite)}>
                      {!favorite ? <FavoriteBorderIcon fontSize="small" style={{ color: "mediumslateblue" }} /> : <FavoriteIcon fontSize="small" style={{ color: "mediumslateblue" }}/>}  
                    </div>
                </div>
                <span className="address">{item.address}</span>
                <hr className="divider" />
                <div className="card-bottom-content">
                    <div className="bed bottom-flex">
                        <BedIcon className="icon" />
                        <span className="icon-text">{item.beds} Beds</span>
                    </div>
                    <div className="bath bottom-flex">
                        <BathtubIcon className="icon" />
                        <span className="icon-text">{item.bathrooms} Bathrooms</span>
                    </div>
                    <div className="area bottom-flex">
                        <LivingIcon className="icon" />
                        <span className="icon-text">{item.area} m</span>
                        <span className="area-square">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card