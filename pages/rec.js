import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from "react";
import { CookiesProvider,useCookies } from 'react-cookie';
import SimpleDialog from '../components/recomendation'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home() {

    const [open, setOpen] = React.useState(false);
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };
  
    return (
      <div>
        <br />
        <Button variant="outlined" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <SimpleDialog
          open={open}
          onClose={handleClose}
        />
      </div>
    );
}
