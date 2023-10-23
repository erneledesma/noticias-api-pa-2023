import { FormControl, InputLabel, Select, MenuItem } from  '@mui/material'

 const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertrainment', label: 'Entetenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'sport', label: 'Deportes'},
    { value: 'tecnology', label: 'Tecnología'},
 
 ]

const Formulario = () => {
    return ( 
        <form>
            <FormControl>
                <InputLabel>Catagoria</InputLabel>
                <Select
                 label='Categoria'
                 onChange={handleChangeCategoria}
                 value={categoria}
                >

                </Select>
            </FormControl>
        </form>
     );
}
 
export default Formulario;