import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${require('@/assets/image/login.png')}) center/cover;
  
  .login-container {
    width: 440px;
    height: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 50px rgba(0, 0, 0, .1);

    .logo {
      display: block;
      margin: 0 auto 20px;
      width: 200px;
      height: 60px;
    }

    .btn {
      width: 100%;
      height: 100%;
    }
  }


`