import styled from 'styled-components'
import { Row, Col, Input, Button } from 'antd';
import * as jsPDF from 'jspdf'
const StyledWrapper = styled.div`
height:1000px;
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
`
const purchasing001_1 = () => {

    const handle = () => {
        var doc = new jsPDF()

        doc.text('Hello world!', 10, 10)
        doc.save('a4.pdf')
    }
    return (
        <StyledWrapper>
            <Button onClick={handle}>generrate</Button>
            <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
            <Row gutter={[8, 32]} align='middle' type="flex" justify="space-between">
                <Col className="gutter-row" span={2}>
                    <div className="gutter-box">ลำดับ</div>
                </Col >
                <Col className="gutter-row" span={2}>
                    <div className="gutter-box">ประเภท</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">รายการ</div>
                </Col>
                <Col className="gutter-row" span={2}>
                    <div className="gutter-box">จำนวน</div>
                </Col>
                <Col className="gutter-row" span={2}>
                    <div className="gutter-box">หน่วย</div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className="gutter-box">ราคา/หน่วย</div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className="gutter-box">จำนวนเงิน</div>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------------------    */}
            <Row gutter={[8, 32]} align='middle' type="flex" justify="space-between">
                {/* <div className="pd"></div> */}
                <Col className="gutter-row" span={2}>
                    <div className="gutter-box">1</div>
                    <div className="gutter-box">2</div>
                    <div className="gutter-box">3</div>
                    <div className="gutter-box">4</div>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                </Col>
                <Col className="gutter-row" span={2}>
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                </Col>
                <Col className="gutter-row" span={2}>
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                </Col>
                <Col className="gutter-row" span={4}>
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                </Col>
                <Col className="gutter-row" span={4}>
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                    <Input maxLength="6" placeholder="" />
                </Col>
            </Row>
        </StyledWrapper>
    )
}
export default purchasing001_1;