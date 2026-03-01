'use client';
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputFields from "@/components/forms/InputFields";
import SelectFields from "@/components/forms/SelectFields";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues:{
        fullName:'',
        email:'',
        password:'',
        country:'in',
        investmentGoals:'Growth',
        riskTolerance:'Medium',
        preferredIndustry:'Techonology'
    },
    mode:'onBlur'
  },);
  const onSubmit = async (data:SignUpFormData) => {
    try{
        console.log(data);
    } catch(e){
        console.log(e);
    }
  }
    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputFields 
                 name='fullName'
                 label='Full Name'
                 placeholder='Keshav Gupta'
                 register={register}
                 error={errors.fullName}
                 validation={{required: 'Full name is required', minLength: 2}}
                />
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

                <CountrySelectField 
                 name="country"
                 label="Country"
                 error={errors.country}
                 control={control}
                 required
                />
                   
                <SelectFields 
                name='investmentGoals'
                label='Investment Goals'
                placeholder='Select your investment goals'
                control={control}
                options={INVESTMENT_GOALS}
                error={errors.investmentGoals}
                required
                />
                <SelectFields 
                name='riskTolerance'
                label='Risk Tolerance'
                placeholder='Select your risk level'
                control={control}
                options={RISK_TOLERANCE_OPTIONS}
                error={errors.riskTolerance}
                required
                />
                <SelectFields 
                name='preferredIndustry'
                label='Preferred Industry'
                placeholder='Select your preferred industry'
                control={control}
                options={PREFERRED_INDUSTRIES}
                error={errors.preferredIndustry}
                required
                />


               <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                {isSubmitting ? "Creating Account" : "Start Your Investment Journey"}
               </Button>

               <FooterLink text="Already have an account?" linkText="Sign in" href="/sign-in" />

            </form>
        </>
    );
}

export default SignUp;
