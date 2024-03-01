import styles from "./styles.module.css";

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className={styles.error}>
      <p>Ошибка получения погоды:</p>
      <p>{errorMessage.toString()}</p>
    </div>
  );
};

export default ErrorMessage;
