import React from "react";
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css';

export const Input = ({ type, label, name, placeholder, onChange }) => {

    return (
        <>
            <span>{label}</span>
            <input
                type={type == 'text' ? 'text' : "number"}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export const CardDisplay = ({ label, image, alt }) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                image={image}
                alt={alt}
            />
            <CardContent>
                <span>{label}</span>
                <Typography gutterBottom variant="h5" component="div">
                    Hello
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    )
}

export const FooterDisplay = ({ label }) => {
    return (
        <footer>
            <div className="footerwrapper">
                <h2>{label}</h2>
                <br></br>
                <div className="icons">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>
        </footer>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(['string', 'number']),
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    name: 'Enter a value',
    label: 'label',
    placeholder: 'Enter a value',
    onChange: undefined
}

CardDisplay.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

CardDisplay.defaultProps = {
    label: 'Enter label',
    image: 'Enter image',
    alt: 'Enter alt'
}

FooterDisplay.propTypes = {
    label: PropTypes.string.isRequired
}

FooterDisplay.defaultProps = {
    label: 'Enter footer label',
}
