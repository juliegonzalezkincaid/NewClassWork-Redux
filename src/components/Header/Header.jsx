import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"


function Header (){

return (

    <>
    <AppBar position="static">
        <Toolbar>
            <Typography 
            variant="h6"
            component="div"
            sx={{flexGrow: 1 }}>
                Activity Log
            </Typography>
            <Button color="inherit">Add New</Button>
            <Button color="inherit">View List</Button>
        </Toolbar>
    </AppBar>
   
    
    
    </>


)

}
export default Header;