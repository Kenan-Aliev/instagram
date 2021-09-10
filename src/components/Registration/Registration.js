import React from 'react';
import './registration.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";


const Registration = () => {

    const inputs = [
        {name: 'email', placeholder: 'Моб.телефон или эл.адрес', type: 'text'},
        {name: 'email', placeholder: 'Имя и фамилия', type: 'text'},
        {name: 'email', placeholder: 'Имя пользователя', type: 'text'},
        {name: 'email', placeholder: 'Пароль', type: 'password'},
    ]
    return (
        <div className={'registration'}>
            <div className="registration__block">
                <div className={'registration__form'}>
                    <h1 className={'registration__title'}>Instagram</h1>
                    <p className={'registration__description'}>Зарегистрируйтесь, чтобы смотреть фото и видео ваших
                        друзей.</p>
                    <div className={'registration__facebook'}>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} size={'m'} color={'white'}/>
                        <div>Войти через Facebook</div>
                    </div>
                    <div className={'registration__orBlock'}>
                        <div className={'registration__orBlock-line'}></div>
                        <div className={'registration__orBlock-text'}>или</div>
                        <div className={'registration__orBlock-line'}></div>
                    </div>
                    <div className={'registration__inputs'}>
                        {inputs.map((input) => {
                            return (
                                <div className={'registration__inputs-input'}>
                                    <input {...input}/>
                                </div>
                            )
                        })}
                    </div>

                    <div className={'registration__btn'}>
                        Регистрация
                    </div>
                </div>
                <div className={'accountIsHave'}>
                    Есть аккаунт?
                    <NavLink to={'/'} className={'accountIsHave-link'}>
                        Вход
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Registration;