import styled from "styled-components";

const AboutWrapper = styled.div`
    background-color: #0e0ea3;
    background-image: radial-gradient(#602364 0.8px,#dbdbdb 0.8px);
    background-size: 16px 16px;

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
            color:white;

            &-info {
                @media (min-width: 992px) {
                    left:-100px;
                    bottom:-100px;
                    position:relative;
                }
                
                border-radius: 5px;
                background: radial-gradient( 187.6% 162.37% at 31.62% 76.54%, rgba(21,21,21,0.88) 0%, rgba(40,65,102,0.659655) 71.94%, rgba(56,101,168,0.38) 100% );
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

        &-technologies {
            @media (min-width: 992px) {
                padding-top: 10rem;
                padding-bottom: 4rem;
            }

            padding: 3rem 0;
        }

        &-technologies__info {
            background: rgba(255,255,255, .9);
            padding: 1.5rem;
            box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px;
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
    

    .banner-section-container {
        h1 {
            font-weight:300!important;

            @media (max-width: 991px) {
                font-size: 4vw;
            }

            @media (max-width: 767px) {
                font-size: 6vw;
            }

            @media (max-width: 575px) {
                font-size: 6vw;
            }
        }
    }
`;

export default AboutWrapper;
