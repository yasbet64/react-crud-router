import React from 'react';
import { useHistory } from 'react-router';

const CrudTableRow=({el, setDataToEdit, deleteData})=>{
    let {name, autor,id}=el;
    let history = useHistory();

    const handleEdit=()=>{
        setDataToEdit(el)
        history.push(`/editar/${el.id}`);
    }
    
    return(
        
       <tr>
           <td>{name}</td>
            <td>{autor}</td>
             <td>
                <button onClick={handleEdit}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
        
    );
};

export default CrudTableRow