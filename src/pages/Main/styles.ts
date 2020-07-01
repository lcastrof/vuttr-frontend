import styled from 'styled-components';

export const HeaderContent = styled.div`
  max-width: 840px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  span {
    color: #ebeaed;
  }
`;

export const Header = styled.div`
  height: 144px;
  background: #cc4c4c;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 47px;
    font-weight: Medium;
  }
`;

export const MainContent = styled.div`
  max-width: 840px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 20px;
`;

export const InitialBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;

  div {
    display: flex;
    align-items: center;

    form {
      display: flex;
    }

    p {
      color: #454545;
    }
  }
`;

export const Card = styled.div`
  background-color: #ffff;
  padding: 15px;
  border-radius: 10px;

  display: flex;
  flex: 1;
  flex-direction: column;

  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);

  & + div {
    margin-top: 21px;
  }

  div {
    display: flex;
    justify-content: space-between;

    a#title {
      text-decoration: underline;
      color: #244aa8;
      font-size: 24px;

      margin-bottom: 11px;
    }
  }

  p {
    color: #575757;
    font-size: 16px;

    margin-bottom: 11px;
  }
`;

export const Delete = styled.a`
  color: #575757;
  opacity: 90%;

  cursor: pointer;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;

  color: black;
`;
