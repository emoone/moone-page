'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import cn from 'clsx';
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
 *
 */
const SignUpComponent = () => {
  // const { data: session, status, update } = useSession();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: { email: '', password: '' },
  });

  const passwordWatch = watch('password');

  const onSubmit: SubmitHandler<FormType> = useCallback(async data => {
    // console.log('data', data, 'session', session, 'status', status);
    // update({ name: data.email, password: data.password });

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('error', error);
      window.alert(JSON.stringify(error || '회원가입 실패'));
    }
  }, []);

  return (
    <section id="loginCon">
      <h1>회원가입 페이지</h1>
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
            className={cn('p-[5px_10px] text-base block')}
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '이메일 형식이 아닙니다.',
              },
            })}
            id="Email"
            placeholder="email"
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>

        <div className="pwCon flex flex-col gap-y-[5px]">
          <label className="font-medium" htmlFor="password">
            password:{' '}
          </label>
          <input
            type="password"
            className={cn('p-[5px_10px] text-base block')}
            {...register('password', { required: '비밀번호 필수 입니다.' })}
            name="password"
            id="password"
            placeholder="password"
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
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
export default SignUpComponent;
