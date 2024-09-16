import React from "react";

interface ButtonProps {
  onClick: () => {};
  disabled: boolean;
}
export default function PrimaryButton(
  props: React.PropsWithChildren<ButtonProps>
) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className="primaryButton"
    >
      <span>{props.children}</span>
    </button>
  );
}
