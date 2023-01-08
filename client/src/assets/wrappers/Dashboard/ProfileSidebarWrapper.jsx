import styled from "styled-components";

const ProfileSidebarWrapper = styled.div`
  margin-right: 2rem;
  text-align: center;
  h4 {
    color: #dddddd;
  }

  .logo {
    margin-right: 3rem;
    width: 125px;
    height: 125px;
    margin: auto;
    position: relative;

    img {
      width: 100%;
      height: inherit;
      object-fit: cover;
      box-shadow: var(--shadow-4);
      border-radius: 50%;
      z-index: 111;
      position: relative;
      border: 4px solid #e7e7e7;
    }
  }
`;

export default ProfileSidebarWrapper;
