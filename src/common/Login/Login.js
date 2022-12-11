import { getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsFillEyeFill, BsFillEyeSlashFill, BsFillShieldLockFill, BsPencilSquare } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { authProvider } from '../../app/Context/AuthProvider'
import { auth } from '../../app/firebase/configfb'

export default function Login() {
    const [showPass, setShowPass] = useState(false)
    const auths = getAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const handleLoginEmailPsw = (data) => {
        console.log('1');
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(auths.currentUser, {
                    displayName: data.name
                }).then(() => console.log('success'))
                navigate('/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Login failed,plz check email or psw again')
            });
    }
    return (
        <form
            onSubmit={handleSubmit(data => handleLoginEmailPsw(data))}
            className='container'>
            <h3 className='text-4xl font-medium text-center mt-8 mb-4'>LOGIN</h3>
            <div className="flex flex-row items-center mb-4">
                <BsPencilSquare style={{ fontSize: '24px', marginRight: '10px' }} />
                <div className="form-outline w-full flex-fill mb-0">
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        name='email'
                        className="form-control"
                        placeholder='Email' />
                    {errors.email && <p className='italic text-red-500'>Required value</p>}
                </div>
            </div>

            <div className="flex flex-row items-center mb-4">
                <BsFillShieldLockFill style={{ fontSize: '24px', marginRight: '10px' }} />
                <div className="form-outline w-full flex-fill mb-0">
                    <div className='flex relative'>
                        <input
                            {...register('password', {
                                required: true,
                                pattern: /^(?=.*[A-Z]).{8,}$/gm,
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                            })}
                            type={showPass ? "text" : "password"}
                            name='password'
                            className="form-control"
                            placeholder='Password'
                        />
                        {showPass ?
                            <BsFillEyeFill
                                style={{
                                    position: 'absolute',
                                    right: '4px',
                                    top: '25%'
                                }}
                                onClick={() => setShowPass(!showPass)} /> :
                            <BsFillEyeSlashFill
                                style={{
                                    position: 'absolute',
                                    right: '4px',
                                    top: '25%'
                                }}
                                onClick={() => setShowPass(!showPass)} />
                        }
                    </div>
                    {errors.password && <p className='italic text-red-500'>Required value</p>}
                </div>
            </div>
            <button
                type="submit"
                className="btn text-black btn-primary btn-lg"
            >Login</button>
        </form>
    )
}
