import Topbar from '../src/components/Topbar'
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css'
const StyledWrapper = styled.div`
.header{
    height: 40px;
    // background-color:red;
    padding: 20px 0px 0px 50px;
}
.block1{
    max-width: 120px;
    border-radius: 8px;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
    height: 523px;
    width: 33.3%
    background-color:pink;
}
#container {
    display: flex;
    justify-content: center;
    align-item: center;
    background: #37BC9B;
    // justify-content: space-evenly;
    height: 523px;
}
.box {
    width: 100%;
    height: 523px;
    line-height: 50px; 
    background: #434A54;
    color: #F5F7FA;
    // border: 1px solid #CCD1D9;
    text-align: center; 
    margin: auto;
  }
.footer {
    width: 100%;
    min-height:150px;
    background-color:#143C6D;
}
#box1 {
    background-color:green;
  }
  
#box2 {
    background-color:pink;
}

}
#box3 {
    background-corlor:red;
}
`
const main = () => {
    return (
        <StyledWrapper>
            <Topbar />
            <div className="header">
                สวัสดี : user_xxx
            </div>
            <div id="container">
                <div className="box" id="box1">
                    <Icon style={{ fontSize: '100px', color: '#08c' }} type="plus-square" />
                    sasas
                </div>
                <div className="box" id="box2">2</div>
                <div className="box" id="box3">3</div>
            </div>
            <div className="footer"></div>
        </StyledWrapper>
    )
}
export default main;