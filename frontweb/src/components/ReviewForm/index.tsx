import Button from 'components/Button';
import './styles.css';

const ReviewForm = () => {
  return (
    <div className="base-card review-form-container">
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Deixe sua avaliação aqui"
            name="avaliacao"
          />
        </div>
        <div className="login-submit">
          <Button text="Salvar Avaliação" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
