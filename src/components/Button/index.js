import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ButtonStyled, LinkStyled } from "./styles";

export const Button = ({ label, onPress, linkTo, type = "button" }) => (
  <Fragment>
    {onPress ? (
      <ButtonStyled type={type} onClick={onPress}>
        {label}
      </ButtonStyled>
    ) : (
      <LinkStyled to={linkTo}>{label}</LinkStyled>
    )}
  </Fragment>
);
