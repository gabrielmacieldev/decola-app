import styled from "styled-components"

export const Image = styled.img`

z-index: -1;

`
export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


.logo {
    @media (max-width: 1600px) {
        width: 782px;
    }
    @media (max-width: 1300px) {
        width: 625px;
    }
    @media (max-width: 1000px) {
        width: 500px;
    }
    @media (max-width: 800px) {
        width: 470px;
    }

    @media (max-width: 600px) {
        width: 450px;
    }

    @media (max-width: 400px) {
        width: 400px;
    }

    @media (max-width: 394px) {
        width: 385px;
    }

    @media (max-width: 385px) {
        width: 375px;
    }

    @media (max-width: 387px) {
        width: 375px;
    }

    @media (max-width: 376px) {
        width: 370px;
    }

    @media (max-width: 280px) {
        width: 270px;
    }

    @media (max-width: 270px) {
        width: 250px;
    }

    @media (max-width: 250px) {
        width: 230px;
    }

    @media (max-width: 230px) {
        width: 150px;
    }
}


input {
    background: #dfdfdf;
    border-radius: 30px;
    width: 365px;
    height: 55px;
    margin-top: 1vh;
    margin-bottom: 18px;
    border: none;
    /* padding-left: 10px; */
    text-indent: 10px;
    color: #3c2166;

    @media (max-width: 400px) {
        width: 300px;
    } 
}

button {
    background: orange;
    border-radius: 30px;
    width: 365px;
    height: 55px;
    margin-top: 1vh;
    border: none;
    font-size: 20px;
    font-weight: bold;
    color: #f3f3f3;
    cursor: pointer;
    margin-bottom: 47px; 
}

.signup {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    
}

span {
    font-weight: bold;
    color: #3c2166
}

span {
    cursor: pointer;
}

.icons {
    margin-right: 5px;
}

.icons:hover {
    background-color: transparent;
}

`