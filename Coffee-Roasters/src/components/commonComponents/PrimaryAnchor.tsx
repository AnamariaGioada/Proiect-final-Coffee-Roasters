import { Link } from "react-router-dom";
import React from "react";

interface ButtonProps {
  to: string;
}
export default function PrimaryAnchor(
  props: React.PropsWithChildren<ButtonProps>
) {
  return (
    <Link to={props.to}>
      <span className="primaryButton">{props.children}</span>
    </Link>
  );
}
