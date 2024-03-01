import styles from "./styles.module.css";

const ErrorMessage = ({ errorMessage }: { errorMessage?: string }) => {
  return (
    <div className={styles.error}>
      {errorMessage ?? "Ошибка получения погоды"}
    </div>
  );
};

export default ErrorMessage;
