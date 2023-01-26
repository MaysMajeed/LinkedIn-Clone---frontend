import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  Toolbar,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Button,
  Avatar,
} from "@mui/material";
import {
  Home,
  LinkedIn,
  Message,
  Notifications,
  People,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [user, setUser] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "white" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          {user ? (
            <Box
              sx={{
                display: "flex",
                height: "fit-content",
                alignItems: "center",
              }}
            >
              <IconButton size="large" edge="start" aria-label="menu">
                <Link to="/">
                  <LinkedIn
                    color="primary"
                    sx={{ width: "200", height: "200", fontSize: 40 }}
                  />
                </Link>
              </IconButton>
              <Box
                sx={{
                  backgroundColor: "#eef3f8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "fit-content",
                  borderRadius: 2,
                  color: "#616161",
                  padding: 0.5,
                }}
              >
                <Search size="large" edge="start" />
                <InputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ height: "5", borderRadius: 2 }}
                />
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
                borderRadius: 2,
                padding: 0.5,
                ml: { xs: 0, sm: 2, md: 5, lg: 7 },
              }}
            >
              <Link to="/">
                <img
                  alt="logo"
                  src={process.env.PUBLIC_URL + "/Linkedin-Logo.png"}
                  width="100px"
                  height="50px"
                />
              </Link>
            </Box>
          )}

          <BottomNavigation
            showLabels
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {user && (
              <BottomNavigationAction
                label="Home"
                icon={<Home />}
                href="/home"
              />
            )}

            {user && (
              <BottomNavigationAction
                label="My Network"
                icon={
                  <Badge badgeContent={0} color="error">
                    <People />
                  </Badge>
                }
              />
            )}
            {user && (
              <BottomNavigationAction
                label="Messaging"
                icon={
                  <Badge badgeContent={1} color="error">
                    <Message sx={{ fontSize: 22 }} />
                  </Badge>
                }
              />
            )}

            {user && (
              <BottomNavigationAction
                label="Notifications"
                icon={
                  <Badge badgeContent={4} color="error">
                    <Notifications sx={{ fontSize: 22 }} />
                  </Badge>
                }
              />
            )}
            {user && (
              <BottomNavigationAction
                sx={{ mr: { xs: 3, md: 5, lg: 7 } }}
                label="Me"
                onClick={handleClick}
                icon={
                  <Avatar
                    alt="ProfileImg"
                    //src={process.env.PUBLIC_URL + "/Avatar1.png"}
                  />
                }
              />
            )}

            {!user && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "fit-content",
                  borderRadius: 2,
                  padding: 0.5,
                  ml: { xs: 0, sm: 2, md: 5, lg: 7 },
                }}
              >
                <Button variant="text" href="/signup" sx={{ mr: 2 }}>
                  Join now
                </Button>

                <Button
                  variant="outlined"
                  href="/login"
                  sx={{
                    borderRadius: "24px",
                    mr: { xs: 0, sm: 2, md: 5 },
                    pr: 3,
                    pl: 3,
                    pt: 1,
                    pb: 1,
                  }}
                >
                  Sign in
                </Button>
              </Box>
            )}
          </BottomNavigation>
          <Menu open={open} onClose={handleClose} onClick={handleClose}>
            <MenuItem>Setting & privacy</MenuItem>
            <MenuItem>Help</MenuItem>
            <MenuItem>Language</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
