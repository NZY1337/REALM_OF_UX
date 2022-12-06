import styled from "styled-components";

const AboutWrapper = styled.div`
    .about-me {
        svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-left: 5px;
        }

        img {
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }

        &-description {
            &-info {
                background-color: #fff;
                position:relative;
                left:-100px;
                bottom:-100px;
                padding:3rem;
            }

            h5 u {
                color: var(--text-color-orange);
                font-weight:bold;
            }

            p {
                position: relative;
                padding-left: 1.5rem;
                &:after {
                    display:block;
                    position:absolute;
                    content:"";
                    height:100%;
                    width:3px;
                    background-color: var(--text-color-orange);
                    top:0;
                    left:0;
                }
            }
        }

        &-technologies {
            .tech-holder {
                // text-align: center;  
                display:flex;
            }

            .mongo-db {
                color: #023430;
            }
    
            .react {
                color: #61dafb;
            }
    
            .javascript {
                color: #cf8618;
            }
    
            .node-js {
                color: #026e00;
            }
    
            .css3 {
                color: #9b3b3b;
            }
        }
    }

    

    .banner-section-container {
        h1 {
            font-weight:300!important;
        }
    }
`;

export default AboutWrapper;
