import React from "react";
import backgroundImage from '.';
import VideoBackground from "../../assets/videobg";
import "./style.css";

const Home = () => {
    
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

    const headingStyle = {
        fontSize: '2.5em',
        color: '#484af1', 
        marginBottom: '20px',
    };

    const paragraphStyle = {
        fontSize: '1.2em',
        color: '#181a1c', 
        textAlign: 'center',
        maxWidth: '800px',
        lineHeight: '1.6',
        padding: '10px',
        backgroundColor: '#6b9ce5', 
        borderRadius: '8px', // 
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}><b>Welcome to HealthCard</b></h1>
            <p style={paragraphStyle}>
                The HealthCard is a cutting-edge digital health solution designed to streamline and enhance the management of your personal health records. With HealthCard, you can easily store, access, and share your medical information securely. Say goodbye to bulky paper files and hello to a compact and accessible way to manage your health. Whether you're at home or on the go, HealthCard ensures your health records are always at your fingertips, improving access to basic healthcare services even in remote areas.
            </p>
            <div className="app">
      <VideoBackground />
      {/* Add other content/components here */}
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is some content over the video background.</p>
      </div>
    </div>
        </div>
    );
};

export default Home;
