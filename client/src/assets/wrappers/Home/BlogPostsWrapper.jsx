import styled from "styled-components";

const BlogPostsWrapper = styled.section`
  padding: 8rem 0;
  display: ${(props) => props.display};

  p.design-font {
    color: var(--text-color-black);
  }

  background-color: ${(props) => {
    return "#e2e7ea";
  }}};

  .blog-posts {
    .title-wrapper {
      p,
      h1,
      h1.design-font {
        color: var(--text-color-black);
      }
    }

    color: var(--text-color-gray);

    .card {
      background-color: black;
      margin-bottom: 1.5rem;
      border: none;
      padding: 1rem;
      height: 450px;
      width: 100%;
      background-position: center center;
      background-size: cover;
      transition: all 0.3s;

        h4 {
            color: #00f8ca;
            margin-bottom:.25rem;
        }

       a{
        color:white;
        &:hover {
            color: var(--text-color-orange);
        }
       }
  
    }
  }
`;

export default BlogPostsWrapper;
