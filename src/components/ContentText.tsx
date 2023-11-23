export const ContentText = (props: any) => {
  return (
    <div
      className={`${
        props.absolute === false ? "static" : "absolute"
      } w-full px-6 lg:px-32 flex ${
        props.align === "right"
          ? "justify-end text-end"
          : "justify-start text-start"
      }`}
    >
      <div className={`w-full ${props.absolute === false ? '' : 'lg:w-2/5'}`}>{props.children}</div>
    </div>
  );
};

export const ContentTitle = (props: any) => {
  return (
    <h1 className="text-5xl md:text-6xl italic font-light">{props.children}</h1>
  );
};

export const ContentDescription = (props: any) => {
  return <p className="mt-5 font-light">{props.children}</p>;
};

export const ContentButton = (props: any) => {
  return (
    <div
      className={`flex items-center gap-4 mt-10 ${
        props.align === "right"
          ? "justify-end text-end"
          : "justify-start text-start"
      }`}
    >
      {props.children}
    </div>
  );
};
