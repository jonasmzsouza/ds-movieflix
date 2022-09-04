import { AxiosRequestConfig } from 'axios';
import Button from 'components/Button';
import { FieldErrorsImpl, useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'utils/requests';
import { toast } from 'react-toastify';

import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    if (formData.text.trim().length === 0) {
      toast.warning('O campo text não pode estar em branco!', {
        theme: 'dark',
      });
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
        toast.success('Avaliação cadastrada com sucesso!', {
          theme: 'dark',
        });
      })
      .catch((error) => {
        toast.error('Erro ao cadastrar a avaliação', {
          theme: 'dark',
        });
      });
  };

  const onError = (errors: FieldErrorsImpl<FormData>) => {
    toast.warning(errors.text?.message, {
      theme: 'dark',
    });
  };

  return (
    <div className="base-card review-form-container">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="mb-4">
          <input
            {...register('text', {
              required: 'Campo text obrigatório',
            })}
            type="text"
            className={`form-control base-input ${
              errors.text ? 'is-invalid' : ''
            }`}
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
          <div className="invalid-feedback d-block">{errors.text?.message}</div>
        </div>
        <div className="review-submit">
          <Button text="Salvar Avaliação" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
