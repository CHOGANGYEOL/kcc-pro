import styled, { css } from "styled-components";
import CheckOff from "../../images/CheckOff.png";
import CheckOn from "../../images/CheckOn.png";

const CustomCheckbox = (props) => {
  const { data, id, values, setValues } = props;

  return (
    <CheckboxWrap>
      {data.map((el) => {
        const isChecked = values[id].includes(el.value);
        return (
          <CheckboxEl
            key={"checkbox_" + el.idx}
            htmlFor={el.value}
            checked={isChecked}
          >
            <div className="customCheck" />
            <span>{el.label}</span>
            <input
              type="checkbox"
              id={el.value}
              checked={isChecked}
              onClick={() =>
                setValues((prev) => {
                  if (isChecked) {
                    return {
                      ...prev,
                      [id]: values[id].filter((value) => value !== el.value),
                    };
                  } else {
                    return { ...prev, [id]: [...values[id], el.value] };
                  }
                })
              }
              readOnly={true}
            />
          </CheckboxEl>
        );
      })}
    </CheckboxWrap>
  );
};

const CheckboxEl = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  .customCheck {
    display: inline-block;
    width: 16px;
    aspect-ratio: 1/1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${CheckOff});
    ${({ checked }) =>
      checked &&
      css`
        background-image: url(${CheckOn});
      `}
  }
  span {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    display: none;
  }
`;
const CheckboxWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export default CustomCheckbox;
