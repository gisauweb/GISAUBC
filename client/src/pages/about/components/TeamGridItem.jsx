import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";
import './TeamGridItem.css'; // For custom styling

export default function TeamGridItem({ item }) {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Box className="card">
				<Box className="card-content" sx={{ display: 'flex', alignItems: 'center', padding: 0 }}>
					<Box
						component="img"
						src={item.image}
						alt="team-member"
						className="team-image"
						sx={{
							width: '50%',
							height: '50%',
							borderRadius: '15px',
							marginRight: 2,
						}}
					/>

					<Box sx={{ flexGrow: 1 }}>
						<Typography variant="body2" className="position" sx={{ textTransform: "uppercase", fontWeight: "bold" }} color="primary">
							{item.position}
						</Typography>
						<Typography variant="h6" className="name" sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
							{item.name}
						</Typography>
						<Typography variant="body2" className="education">
							{item.education}
						</Typography>

						<Box className="social-icons" sx={{ marginTop: 1 }}>
							<IconButton href={item.instagram} className='social-icon' target="_blank" color="primary">
								<CiInstagram />
							</IconButton>
							<IconButton href={item.linkedin} className='social-icon' target="_blank" color="primary">
								<CiLinkedin />
							</IconButton>
							<IconButton href={item.spotify} className='social-icon' target="_blank" color="primary">
								<FaSpotify />
							</IconButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
}
