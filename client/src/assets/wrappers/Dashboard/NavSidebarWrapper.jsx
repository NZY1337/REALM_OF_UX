import styled from "styled-components";

const NavSidebarWrapper = styled.div`
    .navbar {
        margin-top: 2rem;

        &-nav {
        a.active {
            color: lightgray;
            background: #e7e7e7;
            color: black;
            font-weight: 100;
            padding: 10px;
            border-left: 4px solid var(--text-color-orange);
            border-top-left-radius: 15px;
        }

        a {
            color: #fff;
            margin-bottom: 0.5rem;
            padding: 10px;

            &:hover {
            svg,
            span {
                color: var(--text-color-orange);
            }
            }
            span {
            font-size: 1rem;
            }
            svg {
            margin-right: 10px;
            width: 20px;
            height: 20px;
            }
        }
        flex-direction: column;
        }
    }
    
`

export default NavSidebarWrapper