import styled from 'styled-components';

const Wrapper = styled.div`
    .main-container {
        .landing-container {
            width: 100%;
            /* min-height: 95vh; */
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: hidden;
        }

        .form-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .contact-form {
            width: 80%;
        }
    }

    @media (max-width: 1610px) {
        .main-container {
            .form-container {
                h3 {
                    font-size: 1rem;
                    letter-spacing: 1px;
                }

                .form-control {
                    width: 30vw;
                }
            }
        }
    }

    @media (max-width: 1380px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 2.5rem;
                    filter: drop-shadow(2px 2px var(--primary-500));
                }
            }
        }
    }

    @media (max-width: 1180px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 2.2rem;
                }
            }
        }
    }

    @media (max-width: 1045px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 2rem;
                }
            }
        }
    }

    @media (max-width: 950px) {
        .main-container {
            .form-container {
                display: flex;
                flex-direction: column;

                h4 {
                    width: 85%;
                    margin-top: 3rem;
                }

                h3 {
                    line-height: 1.8;
                }
            }

            .contact-wrapper {
                width: 60vw;
            }

            .contact-form {
                width: 100%;
                margin: 3rem 0;

                .btn {
                    margin-top: 2rem;
                }

                .name,
                .email,
                .message {
                    width: 45vw;
                }

                .form-control {
                    width: 45vw;
                }
            }
        }
    }

    @media (max-width: 750px) {
        .main-container {
            .contact-wrapper {
                width: 70vw;
            }
        }
    }

    @media (max-width: 650px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 1.8rem;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 1.6rem;
                }

                h3 {
                    width: 60vw;
                }
            }

            .contact-wrapper {
                width: 80vw;
            }

            .contact-form {
                .name,
                .email,
                .message {
                    width: 60vw;
                }

                .form-control {
                    width: 60vw;
                }
            }
        }
    }

    @media (max-width: 370px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 1.4rem;
                }
            }
        }
    }
`;

export default Wrapper;
