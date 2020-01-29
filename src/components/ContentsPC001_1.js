import styled from 'styled-components'
import { Row, Col, Input, Button } from 'antd';
import 'antd/dist/antd.css'
const StyledWrapper = styled.div`
height:100%;
margin : 20px 50px 0 50px;
.gutter-example .ant-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    //background: #00a0e9;
    padding: 5px 0;
    text-align:center;
  }
  .example-input .ant-input {
    width: 200px;
    margin: 0 8px 8px 0;
  }
  .loca-date{
    text-align: left;
    padding:10px 0 15px 0;
}
Input {
    //width: 300px;
}
`
const purchasing001_1 = (props) => {

    return (
        <StyledWrapper>
            <div className="loca-date">
                เอกสารที่ :  <Input style={{ width: '100px' }}></Input>
            </div>
            <div className="loca-date">
                ลงวันที่ : &nbsp;&nbsp;&nbsp;<Input style={{ width: '100px' }}></Input>
            </div>

            <Row gutter={[16, 48]} align='middle' type="flex" justify="space-between">
                <Col span={2}><div className="gutter-box">ลำดับ</div></Col>
                <Col span={2}><div className="gutter-box">รายการ</div></Col>
                <Col span={2}><div className="gutter-box">จำนวน</div></Col>
                <Col span={2}><div className="gutter-box">หน่วย</div></Col>
                <Col span={2}><div className="gutter-box">ราคา/หน่วย</div></Col>
            </Row>
            <Row gutter={[16, 48]} align='middle' type="flex" justify="space-between">
                <Col span={2}><Input style={{ width: '100px' }} placeholder="" /></Col>
                <Col span={2}><Input style={{ width: '300px' }} placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
            </Row>
            <Row gutter={[16, 48]} align='middle' type="flex" justify="space-between">
                <Col span={2}><Input style={{ width: '100px' }} placeholder="" /></Col>
                <Col span={2}><Input style={{ width: '300px' }} placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
            </Row>
            <Row gutter={[16, 48]} align='middle' type="flex" justify="space-between">
                <Col span={2}><Input style={{ width: '100px' }} placeholder="" /></Col>
                <Col span={2}><Input style={{ width: '300px' }} placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
            </Row>
            <Row gutter={[16, 48]} align='middle' type="flex" justify="space-between">
                <Col span={2}><Input style={{ width: '100px' }} placeholder="" /></Col>
                <Col span={2}><Input style={{ width: '300px' }} placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
                <Col span={2}><Input placeholder="" /></Col>
            </Row>
        </StyledWrapper>
    )
}
export default purchasing001_1;