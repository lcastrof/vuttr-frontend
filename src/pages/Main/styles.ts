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
  box-shadow: 1px 1px 15px grey;
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
  padding: 0 20px;
`;

export const InitialBar = styled.div`
  display: flex;
`;

export const OptionSelect = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #454545;
  }
`;
