import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';
import axios from 'axios';

import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';

export function Login() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'icaro@icaro.com',
      password: '123444',
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
          className='w-48'
        />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'
        onSubmit={handleSignIn}
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon children={<Envelope />} />
            <TextInput.Input
              placeholder='Digite seu email'
              id='email'
              type='email'
            />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon children={<Lock />} />
            <TextInput.Input
              placeholder='********'
              id='password'
              type='password'
            />
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <CheckBox id='remember' />
          <Text size='sm' className='text-gray-200'>
            Lembrar de min por 30 dias
          </Text>
        </label>
        <Button type='submit' size='md' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text as size='sm'>
          <a href='#' className='text-gray-400 underline font-'>
            Esqueceu sua senha?
          </a>
        </Text>
        <Text as size='sm'>
          <a href='#' className='text-gray-400 underline font-'>
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
