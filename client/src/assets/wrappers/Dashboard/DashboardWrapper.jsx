import styled from "styled-components";

const DashboardWrapper = styled.div`
  overflow: auto;

  @media (min-width: 768px) {
    width: calc(100% - 260px);
  }

  width: 100%;
  background-color: rgba(203, 203, 210, 0.15);

  //TITLE SECTION
  .main-dash-title {
    padding: 2rem;
    border-bottom: 1px solid lightgray;
    background-color: #f4f4f4;
  }

  //CONTAINER SECTION
  .dash-container {
    padding: 2rem;
    background-color: #f4f4f4;

    @media (min-width: 768px) {
      height: calc(100% - 85px);
    }

    &-projects {
      // quill
      .quill {
        .ql-editor {
          height: 200px;
        }
      }

      &-filtered {
        div {
          a:hover {
            color: black !important;
          }
        }
      }

      &-wrapper {
        padding: 1rem;
        background: #fff;
        border-radius: 5px;
      }
      img {
        border-radius: 28px;
      }
    }
  }
`;

export default DashboardWrapper;
