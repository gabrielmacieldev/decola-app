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

input {
    background: #5e3e98;
    border-radius: 30px;
    width: 100%;
    height: 55px;
    border: 2px solid white;
    text-indent: 10px;
    color: #3c2166;

}

input::placeholder {
color: #f3f3f3;
font-style: italic;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff6300;
    border-radius: 30px;
    border: 2px solid white;
    width: 100%;
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    color: #f3f3f3;
    cursor: pointer;
    
}

.signup {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
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
    margin-right: 12px;
}

.icons:hover {
    background-color: transparent;
}

`