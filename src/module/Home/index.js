import React from "react";

const Home = () => {
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#22222',
       
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', 
        padding: '20px',
        margin: '0',
    };

    const headingStyle = {
        fontSize: '2.5em',
        color: '#2c3e50', 
        marginBottom: '20px',
    };

    const paragraphStyle = {
        fontSize: '1.2em',
        color: '#b93648', 
        textAlign: 'center',
        maxWidth: '800px',
        lineHeight: '1.6',
        padding: '10px',
        backgroundColor: '#eb98e6', 
        borderRadius: '8px', // 
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}><b>Welcome to HealthCard</b></h1>
            <p style={paragraphStyle}>
                The HealthCard is a cutting-edge digital health solution designed to streamline and enhance the management of your personal health records. With HealthCard, you can easily store, access, and share your medical information securely. Say goodbye to bulky paper files and hello to a compact and accessible way to manage your health. Whether you're at home or on the go, HealthCard ensures your health records are always at your fingertips, improving access to basic healthcare services even in remote areas.
            </p>
        </div>
    );
};

export default Home;
