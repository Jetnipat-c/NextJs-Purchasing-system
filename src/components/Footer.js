import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
const StyledWrapper = styled.div`
display:flex;
    align-items: center;
    min-height:108px;
    background-color:#143C6D;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,.15);
h3 {
    margin: 0;
    color:white;
    padding : 0 0 0 80px;
}
`

const Footer = () => {
    return (
        <StyledWrapper>
               <h3>Copyright © 2020 - 9999 CHEER-CoE ระบบจัดซื้อ (Purchasing system) </h3>  
        </StyledWrapper>
    )
}
export default Footer;