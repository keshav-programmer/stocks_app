'use client';

import FooterLink from "@/components/forms/FooterLink";
import InputFields from "@/components/forms/InputFields";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
const SignIn = () => {
        const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
      } = useForm<SignInFormData>({
        defaultValues:{
            email:'',
            password:'',
        },
        mode:'onBlur'
      },);
      const onSubmit = async (data:SignInFormData) => {
        try{
            console.log(data);
        } catch(e){
            console.log(e);
        }
      }
    return (
        <>
            <h1 className="form-title">Log In Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputFields 
                 name='email'
                 label='Email'
                 placeholder='xyz@email.com'
                 register={register}
                 error={errors.email}
                 validation={{required: 'email name is required', pattern: /^\w+@\w+\.\w+$/, message:'Email is required'}}
                />
                <InputFields 
                 name='password'
                 label='Password'
                 placeholder='Enter a strong password'
                 type='password'
                 register={register}
                 error={errors.password}
                 validation={{required: 'Full name is required', minLength: 8}}
                />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                {isSubmitting ? "Logging In" : "Log in"}
               </Button>

               <FooterLink text="Dont Have An Account?" linkText="Create an Account" href="/sign-up" />
            </form>
        </>
    );
}

export default SignIn;
