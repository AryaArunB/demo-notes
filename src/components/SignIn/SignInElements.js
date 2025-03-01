import styled from "styled-components";
import {Link} from "react-router-dom";
export const Container=styled.div`
min-height:692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background:linear-gradient(
    108deg,
    rgba(1,147,86,1) 0%,
    rgba(10,201,122,1) 100%,

);
`;
export const FormWrap=styled.div`
height: 100%;
display:flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 480px) {
height:80%;
}
background-color: grey;
`;
export const Icon=styled(Link)`
margin-top: 32px;
margin-left: 32px;
text-decoration: none;
color: #fff;
font-size: 32px;
font-weight: 500;
@media screen and (max-width: 480px) {
margin-left: 16px;
margin-top: 8px;
}
`;
export const FormContent=styled.form`
height: 100%;
display:flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 480px) {
padding:  10px;
}
`;
export const Form=styled.form`
background: #010101;
max-width: 400px;
width: 100%;
height: auto;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
@media screen and (max-width: 480px) {
    padding:  32px 32px;

}
`;
export const FormH1=styled.h1`
text-align: center;
margin-bottom: 40px;
color: #fff;
font-size: 24px;
font-weight: 400;
`;
export const FormInput=styled.input`
margin-bottom: 32px;
padding: 16px 16px;
border: none;
border-radius: 4px;
`;
export const FormButton=styled.button`
background: #01bf71;
padding: 16px 0px;
border: none;
border-radius: 4px;
color:#fff;
font-size: 20px;
curson: pointer;
`;
export const Text=styled.span`
text-align:center;
margin-top:24px;
color:#fff;
font-size: 14px;
`;
export const FormLabel=styled.label`
margin-bottom: 8px;
color: #fff;
font-size: 14px;
`;
export const VideoBg = styled.div`
width: 100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`