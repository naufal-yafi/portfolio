const GroupButton = (props: any) => {
  return (
    <div
      className={`w-full flex flex-col-reverse md:flex-row justify-center gap-4 ${
        props.centerEver ? "" : "md:justify-start"
      }`}
    >
      {props.children}
    </div>
  );
};

GroupButton.defaultProps = {
  centerEver: false,
};

export default GroupButton;
