import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// 상단에 선언한 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 준다.
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

console.log(media);

const Box = styled.div`
  // props 로 넣어 준 값을 직접 전달 가능
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  // 반응형 디자인 = 일반 CSS 미디어쿼리를 사용
  width: 1024px;
  margin: 0 auto;
  /* @media (max-width: 1024px) {
    background: coral;
  }
  @media (max-width: 768px) {
    background: skyblue;
  } */
  ${media.desktop`
      background: coral;
    `}
  ${media.tablet`
    background: skyblue;
  `};
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  // & 문자, Sass 처럼 자기 자신 선택 가능
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  // inverted 값이 true 일 때, 특정 스타일 부여
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

function StyledComponent() {
  return (
    <Box color="black">
      <Button>안녕하세요.</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
}

export default StyledComponent;
