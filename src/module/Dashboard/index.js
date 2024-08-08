import { Container, Card, Tabs, Box, Tab } from "@mui/material";
import React from "react";
import BasicTabs from "../../components/BasicTabs"
const Dashboard = () => {
    const [currentValue, setCurrentValue] = React.useState(0);
    // currentValue, handleChange, data, children
    const handleChange = (event, value) => {
        setCurrentValue(value)
    }
    return <Container sx={{ backgroundColor: "#d1d6df", maxWidth: "100% !important", padding: "20px" }}>
        <Card sx={{ padding: 1 }}>
            <BasicTabs currentValue={currentValue} handleChange={handleChange} data={[{ id: 1, value: "Upcomming Appointments" }, { id: 2, value: "Previous Appointments" }, { id: 3, value: "Medical Records" }]}></BasicTabs>
        </Card>
    </Container>
}
export default Dashboard;