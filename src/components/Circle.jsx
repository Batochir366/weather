export const Circle = ({ classname }) => {
  return (
    <div
      className={
        `border border-t-[#fff] border-r-[#fff] border-black border-opacity-[0.08] rotate-45 border-solid absolute z-1 ` +
        classname
      }
    ></div>
  );
};
