import React from "react";
import { Stack, Box, IconButton, Avatar, Tooltip , Typography} from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { NotificationsNoneOutlined, VideoCallOutlined, YouTube	 } from "@mui/icons-material";
const Navbar = () => (
	<Stack
		direction="row"
		alignItems="center"
		p={0.7}
		sx={{
			position: "sticky",
			backgroundColor: "#000",
			top: 0,
			justifyContent: "space-between",
			zIndex: 999
		}}>
      <Link to="/" style={{display: "flex", alignItems : "center"}}>
        {/* <img src={logo} alt="logo" height={40}/> */}
		<YouTube fontSize="large" sx={{ color : '#1b37b4' , mr: '10px '}}/>
		<Typography variant="h6" sx={{color : '#fff'}}>
			Vixy<span style={{color : '#1b37b4'}}>Tube</span>
		</Typography>
      </Link>

      <SearchBar/>
	  <Box sx={{display : 'flex' , alignItems : 'center' , justifyContent: 'center'}}>
		<Tooltip title="Create" arrow> 
			<IconButton sx={{color : '#fff'  , mr: "15px" }} className="icon-button">
				<VideoCallOutlined/>
			</IconButton>
		</Tooltip>
		<Tooltip title="Notifications" arrow >
			<IconButton  sx={{color : '#fff' , mr: "15px" }} className="icon-button">
				<NotificationsNoneOutlined/>

			</IconButton>

		</Tooltip>
		<Tooltip title="John Doe" arrow>
			<IconButton sx={{color : '#fff' }}>
				<Avatar sx={{ width: 35, height: 35 }}> J </Avatar>

			</IconButton>

		</Tooltip>

	  </Box>
    </Stack>
);

export default Navbar;
