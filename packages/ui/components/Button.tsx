"use client";

export const Button = () => {
  function handleButtonClick() {
    console.log("aaa");
  }

  return (
    <button className="text-2xl" onClick={handleButtonClick}>
      Boop
    </button>
  );
};
