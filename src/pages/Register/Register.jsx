
'use client';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onChange" });

    const onSubmit = data => {
        console.log(data);
    };

    const password = useRef(null);
    password.current = watch("password", "");

    return (
        <div className="grid justify-center my-13 mt-7">
            <form onSubmit={e => e.preventDefault()} className="flex w-64 flex-col gap-2">
                <div>
                    <div className="mb-2 block">
                        <Label className=' text-white' htmlFor="name" value="Name" />
                    </div>
                    <TextInput className='w-80' {...register("name", { required: true })} id="name" type="text" sizing="md"
                        color={errors.name && "failure"}
                        helperText={
                            errors.name &&
                            <span>
                                <span className="font-medium">Oops!</span> name is required!
                            </span>

                        }
                    />
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label className=' text-white' htmlFor="email4" value="Email" />
                    </div>
                    <TextInput className='w-80' {...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })} id="email4" type="email" rightIcon={HiMail} placeholder="xxxx@xxxx.com" required
                        color={errors.email && "failure"}
                        helperText={
                            errors.email &&
                            <span>
                                <span className="font-medium">Oops!</span> Invalid Email!
                            </span>
                        }
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className=' text-white' htmlFor="userName" value="User Name" />
                    </div>
                    <TextInput className='w-80' {...register("userName", { required: true, pattern: /^\S*$/ })} id="userName" type="text" sizing="md"
                        color={errors.userName && "failure"}
                        helperText={
                            errors.userName &&
                            <span>
                                <span className="font-medium">Required!</span> and no spacanig
                            </span>
                        }
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className=' text-white' htmlFor="password" value="Password" />
                    </div>
                    <TextInput className='w-80' {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/ })} id="password" type="password" required
                        color={errors.password && "failure"}
                        helperText={
                            errors.password &&
                            <span>
                                <span className="font-medium">Required!</span> password must be at least one [lowercase,uppercase, digit, special character from @,*,%,$,#]
                            </span>
                        }
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className=' text-white' htmlFor="rePassword" value="confirm Password" />
                    </div>
                    <TextInput className='w-80' {...register("rePassword", {
                        validate: value => {
                            return value === password.current
                        }
                    })} id="rePassword" type="password" required
                        color={errors.rePassword && "failure"}
                        helperText={
                            errors.rePassword &&
                            <span>
                                <span className="font-medium">The passwords don't match</span>
                            </span>
                        }
                    />
                </div>

                <Button className='w-32 mt-6 mx-24' onClick={handleSubmit(onSubmit)} type="submit">Submit</Button>
            </form>
        </div>
    );
}
export default Register