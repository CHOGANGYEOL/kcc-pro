import styled, { css } from "styled-components";

const Button = (props) => {
  const { type, text, onClick, style, disabled, icon, size, styleType } = props;

  return (
    <CustomButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      icon={icon}
      size={size}
      $styleType={styleType}
    >
      {text}
      {icon && <div className="icon" />}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  border-radius: 8px;
  padding: ${({ style }) => style?.padding && style.padding};
  ${({ size }) => {
    switch (size) {
      case "Large":
        return css`
          padding: 0 16px 0 20px;
          height: 40px;
        `;
      case "Default":
        return css`
          padding: 0 12px 0 16px;
          height: 32px;
        `;
      case "Cell":
        return css`
          padding: 0 8px 0 12px;
          height: 28px;
        `;

      default:
        return;
    }
  }}

  ${({ $styleType }) => {
    switch ($styleType) {
      case "primary":
        return css`
          background-color: var(--tertiary-100);
          color: #fff;
          &:hover {
            background-color: var(--tertiary-80);
          }

          &:disabled {
            background-color: var(--gray-base-80);
          }
        `;

      case "secondary":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
          &:disabled {
            background-color: ;
          }
        `;
      case "primaryOutline":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
          &:disabled {
            background-color: ;
          }
        `;
      case "secondaryOutline":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
          &:disabled {
            background-color: ;
          }
        `;
      case "primaryText":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
          &:disabled {
            background-color: ;
          }
        `;
      case "secondaryText":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
          &:disabled {
            background-color: ;
          }
        `;
      default:
        return;
    }
  }}
  .icon {
    display: inline-block;
    width: 18px;
    aspect-ratio: 1/1;
    margin-left: 12px;
    background-image: url(${({ icon }) => icon});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default Button;
