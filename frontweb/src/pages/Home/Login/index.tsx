import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'utils/requests';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        console.log('SUCESSO', response);
      })
      .catch((error) => {
        console.log('ERRO', error);
      });
  };

  return (
    <div className="base-card login-card">
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username')}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div>
          <input
            {...register('password')}
            type="password"
            className="form-control base-input"
            placeholder="Senha"
            name="password"
          />
        </div>
        <div className="login-submit">
          <Button text="Fazer login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
