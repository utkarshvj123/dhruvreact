import React from 'react';

const AboutUs = () => {
    // Define the styles as a JavaScript object
    const paragraphStyle = {
        fontSize: '18px',
        backgroundColor: '#778899',
        textAlign: 'center',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '800px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    return (
        <p style={paragraphStyle}>
            The HealthCard is a comprehensive digital health solution providing simplified and enhanced management of personal health records. With our health card you can store, access and share medical information securely and in a compact form. Sharing and consulting medical reports, prescriptions and patient records digitally and conveniently. The physical paper files can be difficult to carry, occupy more space and harder to compile, health card comes in handy here. Wherever you are, whenever you want you can have health records at your fingertips providing basic healthcare services to rural and remote areas too.
        </p>
    );
};

export default AboutUs;
