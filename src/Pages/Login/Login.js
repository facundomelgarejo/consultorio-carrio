import React, {useState} from "react";
/* import './bootstrap/dist/css/bootstrap.min.css'; */
import logo from '../../assets/logo/logo-diente.jpg';

import './Login.css';

import Label from "./Components/Label/Label";
import Title from "./Components/Title/Title";
import Input from "../../Commons/Input/Input";
import Button from "../../Commons/Button/button"

const Login = () => {

    const [user, setUser] = useState(''); //guardo el valor ingresado en usuario
    const [password, setPassword] = useState(''); //guardo el valor ingresado en password
    const [passwordError, setPasswordError] = useState (false);
    const [isLogin, setIsLogin] = useState(false); 

    function handleChange(name, value){
        if(name === 'usuario'){
            setUser(value);
        } else{ 
            if (value.length < 6 ) {
                setPasswordError(true);
            }else{
                    setPasswordError(false);
                    setPassword(value);
            }
        }
            
    
    }
 
    function ifMatch (param){
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'admin' && param.password === '123456'){ //storageLocal
                const { user, password } = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.stringify('account', account);
                setIsLogin(true);
            } else{
                setIsLogin(false);
            }
        } else {
            setIsLogin(false);
        }
    }

    function handleSubmit(){
        let account = {user, password}
         if (account) {
             console.log('account: ',account)
         }
    };
    
    return(
        <div className="login-container">
            
            <div className="container-header">
                    
                    <div className="logo-diente">    
                        <img
                        src={logo} alt="logo-diente"
                        className="logo-style"
                        />
                    </div>
                    
                    <div className="titulo-nombre">
                        <Title text="Consultorio Dental"/>
                    </div>

                    <div className="titulo-doctor">
                      <Title text='Od. Luis Guillermo Carrio H.'/>
                    </div>
            </div>

            <div className="login-content" >
                <Label text= "Usuario"/>
                
                <Input 
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    placeholder: 'Ingrese su usuario',
                    type: 'text',
                }}
                handleChange={handleChange}
                
            />

                <Label text= "Contraseña"/>
                <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    placeholder: 'Ingrese su contraseña',
                    type: 'password',
                   }}
                handleChange={handleChange}
                param={passwordError}
                />
            </div>
            
            {passwordError &&
            <Label param={passwordError} text="Contraseña incompleta"> </Label>
            } 
            <div className="container-button">
                <Button onClick={handleSubmit} text='Ingresar'/>
            </div>
            
        </div>
    )
}

export default Login;