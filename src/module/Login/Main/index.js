import React, { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, Paper, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, Tabs, Tab, CardMedia } from '@mui/material';
import { userData } from '../../globalFunctionAndValues';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "white",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        // margin: "60px 20px 0px 20px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        // margin: 10,
        backgroundColor: "transparent",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: 10,
    },
    submit: {
        margin: 10,
    },
}));

const UserLogin = (classes, details, currentSelectedIndex, handleFormHandler, formValue, handleFormChanges) => {
    console.log(details, ".......details......", currentSelectedIndex)
    return <Grid sx={{ marginTop: 30 }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
            transition: "none",
            boxShadow: "none"
        }}>
            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar> */}
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
<<<<<<< HEAD
                        id="Username"
                        label="Username"
                        name="Username"
                        autoComplete="Username"
=======
                        id="userName"
                        label="Username"
                        name="userName"
                        autoComplete="username"
>>>>>>> 83d7d91 (last working)
                        autoFocus
                        value={formValue?.userName}
                        // onChange={() => handleFormChanges(formValue?.userName, "userName")}
                        onChange={handleFormChanges}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formValue?.password}
                        // onChange={() => handleFormChanges(formValue?.password, "password")}
                        onChange={handleFormChanges}

                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleFormHandler}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid> */}
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </Grid>
    </Grid>
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function LoginMain() {
    const [value, setValue] = React.useState(0);
    const [formValue, setFormValue] = React.useState({ userName: "hello", password: "hello" })
    const classes = useStyles();
    console.log(formValue, ".........formValue")
    const handleFormSubmit = () => {
        // return console.log(valueRef.current.value) //on clicking button accesing current value of TextField and outputing it to console 
        // const clonningValue{ ...formValue }
        // clonningValue[type]
        // setFormValue(clonningValue[type])
    }
    const handleFormChanges = (event) => {
        const { name, value } = event.target;
        // console.log(type.target.name, "......type....", type.target.value)
        // const clonningValue = { ...formValue }
        // clonningValue[type] = value
        // setFormValue(clonningValue)
        setFormValue({
            ...formValue,
            [name]: value,
        });
    }
    const handleChange = (event, newValue) => {
        console.log(newValue, "......newValue")
        setValue(newValue);
    };


    return (
        <div className='d-flex' style={{ height: "-webkit-fill-available" }}>
            <div style={{ width: "55%" }}>
                {/* <CardMedia
                    component='iframe'
                    title='test'
                    src='../../assets/test.mp4'
                /> */}
            </div>
            <Box className={classes.root}
                sx={{
                    flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%", width: "45%", transition: " box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                    boxSizing: "border-box"
                }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{
                        borderRight: 1, borderColor: 'divider', width: "30%", "& .MuiTabs-flexContainer": {
                            display: "flex",
                            alignItems: "center", justifyContent: "center",
                            height: "100%",
                            textAlign: "left"
                        }
                    }}
                >{userData.map((obj, index) =>
                    <Tab label={obj.name} value={index} key={obj.id} />
                )}
                </Tabs>
                {/* {userData.map((obj, index) => */}
                <TabPanel value={value} index={value} key={userData[value].id}>
                    {UserLogin(classes, userData[value], value, handleFormSubmit, formValue, handleFormChanges)}
                </TabPanel>
                {/* )} */}
            </Box>
        </div>

    );
}