import {useState,useEffect} from'react';


export function ClienteList()
{
 
    const [Nombre,SetNombre]  = useState("");

    useEffect(()=> {
        SetNombre("Marcelino heredia Fernandez");
    }, []);
    
    return(
        <>
          <p className='texto' >{Nombre}</p>
        </>
    )
}

