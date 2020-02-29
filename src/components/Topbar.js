import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
const StyledWrapper = styled.div`
    display:flex;
    align-item: center;
    height:40px;
    background-color:#143C6D;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,.15);
    padding: 0 24px;
.logo{
    display:flex;
    align-items: center;
    img {
       // width:50px;
        //height:40px;
        margin-right:10px;
        max-width:50px;
        max-height:40px;
    }
}
h3 {
    margin: 0;
    color:white;
    font-size:100%;
}
`
const TopBar = () => {
    return (
        <StyledWrapper>
            <div className="logo">
                <img src='static/images/PSULOGONEWENG3.png' />
                <h3>ระบบจัดซื้อ Purchasing system</h3>
            </div>

        </StyledWrapper>
    )
}
export default TopBar;