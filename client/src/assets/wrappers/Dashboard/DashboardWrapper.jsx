import styled from "styled-components";

const DashboardWrapper = styled.div`
  overflow: auto;
  width: 100%;
  background-color: rgba(203, 203, 210, 0.15);

  @media (min-width: 768px) {
    width: calc(100% - 200px);
  }

  //TITLE SECTION
  .main-dash-title {
    padding: 1.5rem;
    height: 72px;
    border-bottom: 1px solid lightgray;
    background-color: #e7e7e7;
  }

  //CONTAINER SECTION
  .dash-container {
    padding: 1.5rem;
    background-color: #e7e7e7;

    @media (min-width: 768px) {
      height: calc(100% - 85px);
    }

    // PROJECTS
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
        box-shadow: var(--shadow-4);

        .form-control {
          box-shadow: var(--shadow-2);
        }
      }

      img {
        border-radius: 28px;
      }
    }
  }
`;

export default DashboardWrapper;
