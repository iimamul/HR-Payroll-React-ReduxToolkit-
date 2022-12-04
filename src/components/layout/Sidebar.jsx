import React,{ useState } from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { IconButton, ListItemButton, ListItemIcon, ListItemText,ListItem } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Divider from '@mui/material/Divider';

const Sidebar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            {/* <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>
                            Login
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List> */}
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Divider />
        </Drawer>
        <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuOpenIcon/>
        </IconButton>
    </>
  )
}

export default Sidebar