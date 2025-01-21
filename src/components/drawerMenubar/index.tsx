"use client"
import { Box, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { useDrawerMenubar } from "./hook";
import Image from "next/image";
import styles from "./styles.module.css"
import { useEffect } from "react";
import BusinessIcon from '@mui/icons-material/Business';

export default function DrawerMenu() {
    const { isOpen, setIsOpen, toggleDrawer, selectMenu } = useDrawerMenubar();

    useEffect(() => {
        setIsOpen(false);
        setIsOpen(true);
    }, []);

    return (
        <Drawer open={isOpen} onClose={toggleDrawer}>
            <div className={styles.listWrap}>
                <List className={styles.list}>
                    <a className={styles.drawerLogo} onClick={() => selectMenu('/')}>
                        <Image
                            src="/images/white_logo.png"
                            alt="logo"
                            width={120} 
                            height={0}
                        />
                    </a>
                    <ListItem>
                        <ListItemButton onClick={() => selectMenu('/company')}>회사소개</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => selectMenu('/service')}>서비스소개</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => selectMenu('/inquire')}>문의하기</ListItemButton>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}