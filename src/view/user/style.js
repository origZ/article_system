import styled from "styled-components";

export const UserWrapper = styled.div`
  height: 100%;
  .ant-layout {
    height: 100%;
  }

  .header {
    padding: 0;
  }

  .logo {
    width: 200px;
    height: 60px;
    background: url(${require('@/assets/image/logo.png')}) no-repeat center / 160px auto;
  }

  .layout-content {
    overflow-y: auto;
  }

  .user-info {
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 20px;
    color: #fff;
    
    .user-name {
      margin-right: 20px;
    }
    
    .user-logout {
      display: inline-block;
      cursor: pointer;
    }
  }
  .ant-layout-header {
    padding: 0 !important;
  }
`