import React from "react";
import { Formik } from "formik";

const Formulario = () => {
    
        return(
            <>
             <Formik
                 initialValues={{
                     nombre: "",
                     correo: ""
                 }}            
                 validate={(valores) => {
                     let errores = {};

                      //Validación nombre
                      if(!valores.nombre){
                          errores.nombre = "Por favor ingresa un nombre"  
                      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                         errores.nombre = "El nombre solo puede contener letras y espacios"
                      }

                      //Validación correo
                      if(!valores.correo){
                        errores.correo = "Por favor ingrese un correo válido"  
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                       errores.correo = "Por favor digite un correo válido"
                    }

                      return errores;
                 } }
                 onSubmit={(valores, {resetForm}) => {
                     resetForm()
                 }}
             >
                 {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre"
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
                        </div>
                        <div>
                            <label htmlFor="correo">Correo</label>
                            <input 
                                type="email" 
                                id="correo" 
                                name="correo"
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.correo && errors.correo && <div>{errors.correo}</div>}
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                )}
              </Formik>
            </>
        )
    
}

export default Formulario;