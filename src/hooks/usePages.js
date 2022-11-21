import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const usePages = (defaultValue = 1) => {
  const [value, setValue] = useState(defaultValue);
  const navigate = useNavigate();

  const [valueParams, setValueParams] = useSearchParams({});

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
    const searchPage = {
      page: event.target.value,
    };
    setValueParams(searchPage);
  };

  const nextValue = () => {
    setValue(value + 1);
    setValueParams({ page: value + 1 });
  };

  const prevValue = () => {
    setValue(value - 1);
    setValueParams({ page: value - 1 });
  };

  if (value <= 0) {
    setValue(1);
  }

  return [value, onValueChangeHandler, nextValue, prevValue, valueParams];
};

export default usePages;
