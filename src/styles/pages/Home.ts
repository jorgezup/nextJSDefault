import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  main {
    margin-top: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    svg {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    h1 {
      font-size: 54px;
      color: ${props => props.theme.lightMode.colors.primary};
      /* margin-top: 40px; */
    }
  }

  p {
    margin-top: 24px;
    font-size: 24;
    line-height: 32px;
  }

  footer {
    margin-top: auto;

    p {
      font-size: 12px;
    }
  }
`
