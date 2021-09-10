import React from 'react';
import {NavLink} from 'react-router-dom'
import './login.css'
import image from '../../assets/images/login-img.png'
import profileImg from '../../assets/images/inst-profile-img.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Login = () => {
    return (
        <div className={'login'}>
            <div className={'login__block'}>
                <div className={'login__imageBlock'}>
                    <div className={'login__image'}>
                        <img src={image} alt="Login Image"/>
                    </div>
                    <div className={'login__profileImg'}>
                        <img src={profileImg} alt="Profile Image"/>
                    </div>
                </div>

                <div className={'login__formBlock'}>
                    <div className={'login__form'}>
                        <h1 className={'login__form-title'}>Instagram</h1>
                        <div className={'login__form-input'}>
                            <input type="text" placeholder={'Телефон,имя пользователя или эл.адрес'}/>
                        </div>
                        <div className={'login__form-input'}>
                            <input type="text" placeholder={'Пароль'}/>
                        </div>
                        <div className={'login__button'}>
                            <button type={'button'}>
                                Войти
                            </button>
                        </div>

                        <div className={'login__orBlock'}>
                            <div className={'login__orBlock-line'}></div>
                            <div className={'login__orBlock-text'}>или</div>
                            <div className={'login__orBlock-line'}></div>
                        </div>

                        <div className={'login__facebook'}>
                            <FontAwesomeIcon icon={['fab', 'facebook-square']} color={'#385185'} size={'m'}/>
                            <div className={'login__facebook-link'}>Войти через Facebook</div>
                        </div>
                        <div className={'login__passwordForget'}>
                            Забыли пароль?
                        </div>
                    </div>
                    <div className={'login__noAccount'}>
                        У вас еще нет аккаунта?
                        <NavLink to={'/registration'} className={'registration__link'}>Зарегистрироваться</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;