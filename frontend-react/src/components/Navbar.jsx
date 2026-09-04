import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#1976d2",
        zIndex: 1201,
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          BOMS
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Avatar sx={{ ml: 2 }}>A</Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;