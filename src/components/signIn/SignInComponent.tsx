'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LoginType {
  email: string;
  password: string;
}

/**
 * ANCHOR: 로그인 페이지
 */
const SignInComponent = () => {
  const { register, handleSubmit } = useForm<LoginType>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<LoginType> = data => {
    console.log('data', data);
  };

  return (
    <section id="loginCon">
      <h1>로그인 페이지</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="emailCon">
          <label htmlFor="emailForm">Email: </label>
          <input {...register('email')} id="emailForm" placeholder="email" />
        </div>
        <div className="pwCon">
          <label htmlFor="pwForm">password: </label>
          <input
            {...register('password')}
            name="pwForm"
            id="pwForm"
            placeholder="password"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="inline-flex items-center justify-center w-full p-1 text-white bg-black rounded-sm"
        />
      </form>
    </section>
  );
};
export default SignInComponent;
