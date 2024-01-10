import { useState } from "react";

const H = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleOpen = () => {
    setIsOpenForm(!isOpenForm);
    setIsOpenForm((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <button onClick={handleOpen}>aa</button>
      {isOpenForm && <Form />}
    </>
  );
};

const Form = () => {
  return <h2>FOrm</h2>;
};
