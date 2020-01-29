import styled from 'styled-components'
import { Row, Col, Input, Button } from 'antd';
import 'antd/dist/antd.css'
const StyledWrapper = styled.div`
height:100%;
margin : 20px 50px 0 50px;
.title-offer{
    text-align: left;
    font-size:17px;
    padding: 10px 0 0 0;
    #detali{
        padding:0 0 0 10px;
    }
}
Input {
    width: 300px;
}
`
const purchasing001_2 = (props) => {

    return (
        <StyledWrapper>
            <div className="title-offer">
                <span>ชื่อโครงการ : </span> <Input></Input>
                <span>หน่วยงานเจ้าของโครงการ : </span> <Input></Input>
                <span>วงเงินงบประมาณที่ได้รับจัดสรร : </span> <Input></Input> <span>บาท</span>
                <span>วันที่กำหนดราคากลาง (ราคาอ้างอิง) : </span> <Input></Input>
                <span>ชื่อโครงการ : </span> <Input></Input>
            </div>
        </StyledWrapper>
    )
}
export default purchasing001_2;