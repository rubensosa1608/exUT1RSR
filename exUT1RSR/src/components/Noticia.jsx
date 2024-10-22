import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Card, CardContent, CardMedia, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Noticia = ({avatar, titulo, fecha, imagenUrl, noticia, likes, alt, altAvatar}) => {
    const [meGusta, setMeGusta] = useState(false);

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const manejarMeGusta = () => {
        setMeGusta(!meGusta);
    };

    const handleClose = () => {
        setOpen(false);
      };
    
    
      const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);
      }

    return (
        <Card>

        <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
        <CardMedia
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          image={avatar}
          alt = {altAvatar}
        />
      
        <div style={{ textAlign: 'center', flexGrow: 1 }}>
          <h1 style={{ margin: '0', fontSize: '18px' }}>{titulo}</h1>
          <h4 style={{ margin: '0', fontSize: '14px', color: 'gray' }}>{fecha}</h4>
        </div>
      
        <MoreVertIcon />
        </CardContent>

        <CardContent>
            <CardMedia 
              style={{ width: '100%', height: '194px'}}
              image={imagenUrl}
              alt = {alt}
            />
            <div>
                <p>{noticia}</p>
            </div>
        </CardContent >

        <CardContent  style={{ display: 'flex', alignItems: 'center' }}>
        {meGusta ? likes + 1: likes}
        <IconButton onClick={manejarMeGusta}>
        {meGusta ? <FavoriteIcon color="success" /> : <FavoriteBorderIcon />}
        </IconButton>
        {meGusta ? <IconButton onClick={handleOpen}> <ShareIcon/></IconButton> : <IconButton disabled> <ShareIcon/></IconButton>}
        </CardContent>

        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Compartir"}
        </DialogTitle>
        <DialogContent>

          <DialogContentText>
          {"¿A través de que plataforma quieres compartir?"}
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>

            <IconButton onClick = {handleClose}>
                <WhatsAppIcon />
            </IconButton>
            <IconButton  onClick = {handleClose}>
                <TelegramIcon />
            </IconButton>
        </DialogActions>
      </Dialog>

      </Card>
    

    );
};

export default Noticia;