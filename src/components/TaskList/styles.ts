import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  width: 400px;
  height: 400px;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  input {
    width: 288px;
    height: 48px;
    border-radius: 2px;
    background-color: #fff;
    padding: 14px 16px 15px;
    font-size: 16px;
    color: #303030;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    outline: none;

    &::placeholder {
      color: #909090;
    }
  }

  button {
    width: 48px;
    height: 48px;
    border-radius: 100px;
    border: 0;
    background-color: #40d9b8;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Content = styled.div`
  ul {
    list-style: none;

    li {
      width: 352px;
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      background-color: #eeeeee;
      margin-bottom: 8px;
      border-radius: 2px;

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
    }
  }
`;

export const IsEmpty = styled.div`
  width: 352px;
  height: 280px;
  background-color: #f2f2f2;
  border: 1px dashed #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 12px;
    color: #606060;
    font-style: normal;
    font-weight: 400;
  }
`;
