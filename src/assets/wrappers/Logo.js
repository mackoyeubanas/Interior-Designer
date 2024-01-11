import styled from 'styled-components';

const Wrapper = styled.div`
    .logo-container {
        position: relative;
        width: 100%;
        margin: 4rem 0;
    }

    .logo {
        height: 45vh;
        margin: 2rem 0 1rem;
        border-radius: 50%;
        box-shadow: 2px 2px 10px 10px var(--primary-500);
        z-index: -1;
    }

    @media (max-width: 1200px) {
        .logo {
            height: 40vh;
        }
    }

    @media (max-width: 650px) {
        .logo {
            height: 35vh;
        }
    }

    @media (max-width: 480px) {
        .logo {
            height: 30vh;
        }
    }

    @media (max-width: 380px) {
        .logo {
            height: 25vh;
        }
    }
`;

export default Wrapper;
