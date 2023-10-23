
import { Container, Grid, Typography}  from '@mui/material'
import NoticiasProvider from './context/NoticiasProvider'
function App() {
 
  return (
    
    <NoticiasProvider>
    <Container>
      <header>
        <Typography align='center' marginY={5} component="h1" variant='h3'>
          Buscador de Noticias
        </Typography>
      </header>
    </Container>
    </NoticiasProvider>
  )
}

export default App
