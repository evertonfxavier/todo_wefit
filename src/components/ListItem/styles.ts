import styled from "styled-components";

export const Container = styled.li<{ isDeleted?: boolean }>`
  width: 352px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #eeeeee;
  margin-bottom: 8px;
  border-radius: 2px;
  animation: ${(props) => (props.isDeleted ? "hiddeItem" : "showItem")} 0.6s;

  p {
    font-size: 14px;
    color: #606060;
  }

  button {
    background: transparent;
    border: 0;
    display: flex;

    img {
      width: 12.44px;
      height: 16px;
    }
  }

  @keyframes hiddeItem {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(50px);
    }
  }
  @keyframes showItem {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
