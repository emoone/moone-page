'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import cn from 'clsx';
import { signIn, useSession } from 'next-auth/react';
import { useCallback } from 'react';

interface FormType {
  email: string;
  password: string;
}

/**
 * ANCHOR: 로그인 페이지
 * nextauth 기능을 사용할건데
 * 사용방법 파악 필요(TypeScript)
 * 1. adapter: 사용자 정의? 유형을 활용하여 구현이 예상한것과 일치하는 확인해주는건가?
 * /** @return { import("next-auth/adapters").Adapter }
 * function MyAdapter() {
 *   return {
 *      your adapter methods here
 *   }
 * }
 * 2. NextAuth 모듈: 여기에 다양한 모듈 아이템이 있는듯
 *  - session:
 */
const SignInComponent = () => {
  const { data: session, status } = useSession();

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<FormType> = useCallback(async data => {
    // console.log('data', data, 'session', session, 'status', status);
    // update({ name: data.email, password: data.password });

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: `/`,
    });

    console.log('submit', data);
    if (res?.ok) {
      console.log('login', res);
    } else {
      console.log('error', res);
      window.alert(JSON.stringify(res?.error));
    }
  }, []);

  if (status === 'loading') {
    return <p>로딩중...</p>;
  }

  if (status === 'authenticated') {
  }

  return (
    <section id="loginCon">
      <h1>로그인 페이지</h1>
      <p>signed in as {session?.user?.name}</p>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-[20px]"
      >
        <div className="emailCon flex flex-col gap-y-[5px]">
          <label className="font-medium" htmlFor="Email">
            Email:{' '}
          </label>
          <input
            className={cn('p-[5px_10px] text-base block ')}
            {...register('email')}
            id="Email"
            placeholder="email"
            autoComplete="username"
          />
        </div>

        <div className="pwCon flex flex-col gap-y-[5px]">
          <label className="font-medium" htmlFor="password">
            password:{' '}
          </label>
          <input
            type="password"
            className={cn('p-[5px_10px] text-base block ')}
            {...register('password')}
            name="password"
            id="password"
            placeholder="password"
            autoComplete="current-password"
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
