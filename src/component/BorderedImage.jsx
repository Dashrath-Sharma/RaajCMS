import React from 'react';
import style from '@css/borderedImage.module.css';

const BorderedImage = ({
    src,
    alt,
    className,
    borderColor = '#e6f0fb',
    borderWidth = '2px',
    borderStyle = 'solid',
    borderRadius = '40px 0 0 0',
    takeSpace = 20, // Default value in pixels
}) => {
    return (
        <div className={style.borderedImageContainer}>
            <div 
                className={style.borderedImage}
                style={{
                    '--border-color': borderColor,
                    '--border-width': borderWidth,
                    '--border-style': borderStyle,
                    '--border-radius': borderRadius,
                    '--take-space': `${takeSpace}px`,
                }}
            >
                <img src={src} alt={alt} className={className} />
            </div>
        </div>
    );
};

export default BorderedImage; 