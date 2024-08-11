import React from "react";
import CustomisedTable from "./CustomisedTable";
import { Button } from "react-bootstrap";
const Profile = () => {
    return <div>
        <div style={{}}>
            <img style={{ borderRadius: "50%", height: "100px", width: "100px" }} src={"https://img.freepik.com/premium-photo/portrait-beautiful-young-woman-with-vintage-camera-portrait-beautiful-young-woman-with-vi_912214-98925.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1717718400&semt=ais_user"} />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ gap: 20 }}>
            <Button variant="primary">View Health Card Detail</Button>{' '}
            <Button variant="primary">Edit Health Card Detail</Button>{' '}
        </div>
        {/* <CustomisedTable /></div> */}
    </div>
}
export default Profile;