import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import Avatar from "..//..//../assets/profileimg.png";
import user from "../../../app.config";
import "./header.css";
import { Link } from "react-router-dom";

const Header=()=>{
    const [AnchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpenActions = (e) => {
        setAnchorEl(e.currentTarget);
      };
      const handleCloseActions = () => {
        setAnchorEl(null);
      };
      const openProfile = ()=>{
        <Link to = "/profile"/>
      }
    
      const handleClickOpenDialog = () => {
        setOpen(true);
      };
    
      const handleCloseDialog = () => {
        setOpen(false);
      }
    return(
    <>
      <header>
        <h2>
          <label htmlFor="nav-toggle">
            <span className="las la-bars"></span>
          </label>
          <span className="health_unit_name">Hostel Management</span>
        </h2>
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <div className="" style={{ fontSize: "42px", marginRight: 20 }}>
            <i className="las la-bell"></i>
          </div>
          <div
            className="user-wrapp"
            aria-controls="reception-actions"
            aria-haspopup="true"
            onClick={handleOpenActions}
            style={{ cursor: "pointer" }}
          >
            <img src={Avatar} alt="" width="40px" height="40px" />
            <div className="">
            {/* <h4>{user ? `${user.name.split(" ")[0]}` : "Username"}</h4> */}
              <small>{user.role}</small>
            </div>
          </div>
        </div>
        </header>

      <Menu
        id="reception-actions"
        anchorEl={AnchorEl}
        keepMounted
        disableScrollLock={true}
        open={Boolean(AnchorEl)}
        onClose={handleCloseActions}
      >
        <Link to ="/profile">
        <MenuItem>
          <span style={{ fontSize: 24, marginRight: 10 }}>
         <i className="las la-user-alt"></i>
          </span>
          Profile
        </MenuItem>
        </Link>
        <MenuItem onClick={handleClickOpenDialog}>
          <span style={{ fontSize: 24, marginRight: 10 }}>
         <i className="las la-sign-out-alt"></i>
          </span>
          Log out
        </MenuItem>
      </Menu>

      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Log Out</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would like to Log Out. Click 'Cancel' to close, Log Out to Continue
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            autoFocus
            onClick={() => {
              const token_stored = localStorage.getItem("valuee");
              if (token_stored) {
                localStorage.removeItem("valuee");
              } else {
                sessionStorage.removeItem("valuee");
              }
              window.location.replace("/");
            }}
          >
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </>

    );
    
}
export default Header;