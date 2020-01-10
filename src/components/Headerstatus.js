import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox,Typography  } from 'antd';
import 'antd/dist/antd.css'
import React, { useState } from 'react';
const { Text } = Typography;
const StyledWrapper = styled.div`
    display:flex;
    align-items: flex-end;
    height:70px;
    background-color:white;
    //box-shadow: 0 4px 6px 0 rgba(0,0,0,.15);
    border-bottom: 1.5px solid #2DAAE1;
    margin : 0 50px 0 50px;

h2 {
    margin: 0; 
    color:black;
    padding: 10px 0 0 10px;
}
h3 {
    margin: 0; 
    padding: 0 0 0 10px;
}
`
const Header = props => {
    const [stateStatus, setstateStatus] = useState('Not yet logged in');
    return (
        <StyledWrapper>
            <h3>ย้อนกลับ >></h3><h2>{stateStatus}</h2>
        </StyledWrapper>
    )
}
export default Header;