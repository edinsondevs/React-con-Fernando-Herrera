import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title, body, id, date, imageUrls = []}) => {
	const dispatch = useDispatch();
	const newTitle = useMemo(() => {
		return title.length > 15 ? title.substring(0, 15) + "..." : title;
	}, [title]);

	const onClickNote = () => {
		dispatch(setActiveNote({ title, body, id, date, imageUrls }));
	};

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={onClickNote}>
				<ListItemIcon>
					<TurnedInNotOutlinedIcon />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={newTitle}></ListItemText>
					<ListItemText secondary={body}></ListItemText>
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
