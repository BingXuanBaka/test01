export function IconButton(props: {
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?:()=>void;
}) {
  return (
    <button
      onClick={!props.disabled ? props.onClick : void 0}
      className={`w-10 h-10 flex justify-center items-center 
      ${props.disabled && "opacity-50 cursor-not-allowed"}
      ${props.className}`}
    >
      {props.children}
    </button>
  );
}
