import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
const StyledWrapper = styled.div`
    display:flex;
    align-items: flex-end;
    height:70px;
    background-color:white;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,.15);
h3 {
    margin: 0;
    color:black;
    padding : 0 0 0 80px;
}
`
const Header = () => {
    return (
        <StyledWrapper>
               <h3>สวัสดี : user_name</h3>
        </StyledWrapper>
    )
}
export default Header;