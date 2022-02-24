import React from "react";
import { Formik } from "formik";

const Formulario = () => {
    
        return(
            <div className="formulario">
                <div className="sub-form">
                <h1>Contáctenos</h1>
             <Formik
                 initialValues={{
                     nombre: "",
                     correo: "",
                     comentario: ""
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

                      //Validación comentario
                      if(!valores.comentario){
                        errores.comentario = "Por favor ingresa un comentario"  
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
                            <label htmlFor="nombre">Nombre</label><br/>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre"
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.nombre && errors.nombre && <p>{errors.nombre}</p>}
                        </div>
                        <div>
                            <label htmlFor="correo">Correo</label><br/>
                            <input 
                                type="email" 
                                id="correo" 
                                name="correo"
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.correo && errors.correo && <p>{errors.correo}</p>}
                        </div>
                        <div>
                            <label htmlFor="comentario">Comentario</label><br/>
                            <textarea
                                type="text" 
                                id="comentario" 
                                name="comentario"
                                value={values.comentario}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.comentario && errors.comentario && <p>{errors.comentario}</p>}
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                )}
              </Formik>
              </div>
            </div>
        )
    
}

export default Formulario;