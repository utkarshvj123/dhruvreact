import React from 'react';
import backgroundImage from '.'

const AboutUs = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#dee2e6',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', 
        padding: '20px',
        margin: '0',
    };
    const paragraphStyle = {
        fontSize: '1.2em',
        color: '#181a1c', 
        textAlign: 'center',
        maxWidth: '800px',
        lineHeight: '1.6',
        padding: '10px',
        backgroundColor: '#a0b6dd', 
        borderRadius: '8px',
        display: 'flex',
    };

    return (
        <div style={containerStyle}>
        <p style={paragraphStyle}>
            The HealthCard is a comprehensive digital health solution providing simplified and enhanced management of personal health records. With our health card you can store, access and share medical information securely and in a compact form. Sharing and consulting medical reports, prescriptions and patient records digitally and conveniently. The physical paper files can be difficult to carry, occupy more space and harder to compile, health card comes in handy here. Wherever you are, whenever you want you can have health records at your fingertips providing basic healthcare services to rural and remote areas too.
        </p>
        </div>
    );
};

export default AboutUs;
