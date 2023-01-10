import styled from "styled-components";

const AboutWrapper = styled.div`
    background-color: #fff;
  

    .iqUxfx {
        p { font-weight:400 }
    }

    .about-me {
        svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-left: 5px;
        }

        img {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            border-radius: 5px;

            @media (max-width: 991px) {
                width: 200px;
                height: 200px;
                object-fit: cover;
                border-radius: 50%;
                position: relative;
                bottom: -30px;
            }
        }

        &-description {
            &-info {
                border-radius: 5px;
            }

            h5 u {
                color: var(--text-color-orange);
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

       
        &-technologies__info {
            background: black;
            color:#fff;
            padding: 1.5rem;
            border-radius: 5px;
        
            p {
                font-weight: bold;
            }
          
            &-stack {
                display:flex;
                flex-wrap: wrap;

                .tech-holder {
                    margin-right: 1rem;
                    display:flex;
                    
                    p {
                        font-weight:400;
                    }
                }
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

            .figma {
                color: #F24E1E;
            }
    
            .css3 {
                color: #9b3b3b;
            }
        }
    }
`;

export default AboutWrapper;
