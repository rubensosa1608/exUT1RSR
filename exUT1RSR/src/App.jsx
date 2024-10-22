import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Noticia from './components/Noticia'; 
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

function App() {
  const [count, setCount] = useState(0)

  const noticias = [
    {
        id: 1,
        noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        avatar: '../public/avatar01.png',
        alt: 'Imagen del cielo',
        titulo: 'titulo 1',
        fecha: '19 de Octubre de 2024',
        altAvatar: 'Imagen del avatar 1',
        imagenUrl: '../public/sky.jpg',
        likes: 233
    },
    {
      id: 2,
      noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avatar: '../public/avatar02.png',
      alt: 'Imagen del mar',
      titulo: 'titulo 2',
      fecha: '14 de Febrero de 2024',
      altAvatar: 'Imagen del avatar 2',
      imagenUrl: '../public/sea.jpg',
      likes: 23
  },
  {
    id: 3,
    noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatar: '../public/avatar03.png',
    alt: 'Imagen de mario',
    titulo: 'titulo 3',
    fecha: '16 de Agosto de 2024',
    altAvatar: 'Imagen del avatar 3',
    imagenUrl: '../public/mario.jpg',
    likes: 16
},
{
  id: 4,
  noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  avatar: '../public/avatar04.png',
  alt: 'Imagen de tux',
  titulo: 'titulo 4',
  fecha: '19 de Noviembre de 2024',
  altAvatar: 'Imagen del avatar 4',
  imagenUrl: '../public/tux.jpg',
  likes: 100
},
    

  ]

  return (

 <Container>
        <Grid container>
          {noticias.map((n) => (
              <Grid item key={n.id}  sx={{paddingBottom: 5}}>
                <Noticia 
                  avatar = {n.avatar}
                  altAvatar = {n.altAvatar}
                  titulo = {n.titulo}
                  fecha = {n.fecha}
                  imagenUrl= {n.imagenUrl}
                  alt = {n.alt}
                  noticia = {n.noticia}
                  likes = {n.likes}
                  />
              </Grid>
          ))}
      </Grid>

  </Container>
  )
}

export default App
