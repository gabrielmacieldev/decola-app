import styled from "styled-components"

export const Image = styled.div`
position: absolute;
width: 100%;
height: 100%;
z-index: 0;
img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`
export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
flex-direction: column;
height: 100vh;
z-index: 1;
padding: 0 40px;

.logo {
    max-width: 250px;
    width: 70%;
}
.form {
    display: flex;
    height: 80%;
    width: 100%;
    max-width: 365px;
    justify-content: end;
    flex-direction: column;
    align-items: center;
    gap: 18px;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f3f3;
    border-radius: 30px;
    border: 2px solid white;
    width: 100%;
    height: 55px;
    font-size: 20px;
    font-weight: 900;
    color: #3c2166;
    cursor: pointer;
}

button:hover {
    background-color: #3c2166;
    color: #f3f3f3;
}

.form {
    margin-bottom: 40px;
    margin-top: 120px;
    gap: 20px;
}

.foguete {
    width: 30px;
    margin-top: 12px;
}

ul, li, a {
    display: flex;
    justify-content: flex-end;
    margin-left: 90px;
    margin-top: 15px;
    font-size: 30px;
    cursor: pointer;
    color: #f3f3f3;
}

`