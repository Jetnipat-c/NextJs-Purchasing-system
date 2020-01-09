
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
const StyledWrapper = styled.div`
    display:flex;
    width:100%;
    height:620px;
    background-color:black;
.box1{
    height:100%;
    width:33.3%;
    background-color:green;
}
.box2{
    height:100%;
    width:33.3%;
    background-color:blue;
}
.box3{
    height:100%;
    width:33.3%;
    background-color:yellow;
}
`

const Contents = () => {
    return (
        <StyledWrapper>
                   <div className="box1" ></div>
                   <div className="box2" ></div>
                   <div className="box3" ></div>
        </StyledWrapper>
    )
}
export default Contents;