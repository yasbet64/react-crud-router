import React, {useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";

const initailForm={
    name:"",
    autor:"",
    id:null,
};

const CrudForm=({createData,updateData,dataToEdit,setDataToEdit})=>{
    const [form, setForm] = useState({initailForm});
    let history = useHistory()

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initailForm);
        }
    }, [dataToEdit]);

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (!form.name || !form.autor) {
          alert("Datos incompletos");
          return;
        }
    
        if (form.id === null) {
          createData(form);
        } else {
          updateData(form);
        }
    
        handleReset();
    };

    const handleReset=(e)=>{
        setForm(initailForm);
        setDataToEdit(null);
        history.push("/")//regresa al home con history
    };

    return(
        <div>
            <h3>{dataToEdit ?"Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange}  value={form.name}></input>
                <input type="text" name="autor" placeholder="Autor"  onChange={handleChange} value={form.autor}></input>
                <input type="submit" value="Enviar" ></input>
                <input type="reset" value="Limpiar" onClick={handleReset} ></input>
            </form>
        </div>
    )
}

export default CrudForm;