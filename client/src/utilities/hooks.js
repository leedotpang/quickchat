import { useEffect } from "react";

export const useAsync = (asyncFn, onSuccess) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then(({ data }) => {
      if (!isActive) return;
      onSuccess(data);
    });
    return () => {
      isActive = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
