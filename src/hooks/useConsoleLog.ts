import { useEffect } from "react";

export const useConsoleLog = ({
  name,
  content,
}: {
  name: string;
  content?: { [key: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any
}) => {
  useEffect(() => {
    if (content) {
      console.log(`${name}::: `, content);
    }
  }, [name, content]);
};
