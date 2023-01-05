import styled from "styled-components";

const DashboardWrapper = styled.div`
  overflow: auto;
  width: 100%;
  background-color: rgba(203, 203, 210, 0.15);

  //Custom CSS
  video#profile-video {
    width: 100%;
    box-shadow: rgb(189 167 167 / 75%) 0px 7px 29px 0px;
    border-radius: 10px;
  }

  .filtered-projects {
    &-results {
      background-color: #14242a;
    }
  }

  @media (min-width: 768px) {
    width: calc(100% - 200px);
  }

  //TITLE SECTION
  .main-dash-title {
    padding: 0 1.5rem;
    height: 72px;
    border-bottom: 1px solid lightgray;
    background-color: #e7e7e7;
  }

  //CONTAINER SECTION
  .dash-container {
    padding: 1.5rem;
    background-color: #e7e7e7;

    @media (min-width: 768px) {
      height: calc(100% - 72px);
      overflow-x: hidden;
    }

    &-section {
      // quill
      .quill {
        &-toolbar {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }

        .ql-editor {
          height: 200px;
        }
      }

      &-filtered {
        div.filtered-projects {
          .dropdown-menu {
            border: none;
            background: radial-gradient(
              187.6% 162.37% at 31.62% 76.54%,
              rgba(21, 21, 21, 0.88) 0%,
              rgba(40, 65, 102, 0.659655) 71.94%,
              rgba(56, 101, 168, 0.38) 100%
            );
            span.dropdown-item {
              color: white;
              &:hover {
                background: none;
                cursor: pointer;
                color: turquoise;
                svg,
                span {
                  color: turquoise;
                }
              }
            }
          }

          box-shadow: var(--shadow-2);
          button {
            margin-right: 1rem;
          }

          border-radius: 30px;
          img {
            border: 1px dashed white;
          }
          padding: 5px;
          transition: all 0.3s;

          &:hover,
          &:focus {
            background-color: #9bafb7;
            border-radius: 50px;
            padding: 5px;

            svg,
            p {
              color: white;
            }
          }

          a:hover {
            color: white !important;
          }
        }
      }

      //https://www.freecodecamp.org/news/css-box-shadow-property-with-examples/

      &-wrapper {
        padding: 1rem;
        background: #fff;
        border-radius: 5px;
        box-shadow: var(--shadow-1);
        border: 1px solid #c3c3c3;

        .btn:not(.dropdown-toggle) {
          box-shadow: -2px 2px rgb(42 39 39 / 47%);

          &:active {
            box-shadow: none;
          }
        }

        label {
          text-transform: lowercase;
          text-transform: lowercase;
          font-weight: 500;
          color: var(--text-color-orange);
          font-size: 14px;
        }

        h6 {
          text-transform: uppercase;
        }

        input.form-control {
          border-radius: 0;
          padding: 10px;
        }
      }
    }
  }
`;

export default DashboardWrapper;
