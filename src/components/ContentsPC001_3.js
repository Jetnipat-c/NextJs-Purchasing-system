import styled from 'styled-components'
import { Row, Col, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import React, { Component } from 'react';
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
    margin: 15px;
}
`
class MyComponent extends Component {
    render() {
        return (
            <StyledWrapper>
            <div className="title-offer">
                <div>
                    <span>1.ชื่อโครงการ : </span> <Input></Input>
                </div>
                <div>
                    <span>2.หน่วยงานเจ้าของโครงการ : </span> <Input></Input>
                </div>
                <div>
                    <span>3.วงเงินงบประมาณที่ได้รับจัดสรร : </span> <Input></Input> <span>บาท</span>
                </div>
                <div>
                    <span>4.วันที่กำหนดราคากลาง (ราคาอ้างอิง) : </span> <Input></Input>
                </div>
                <div>
                    <span>เป็นเงิน </span> <Input></Input> <span>บาท ราคา/หน่วย (ถ้ามี)</span> <Input></Input> <span>บาท</span>
                </div>
                <div>
                    <span>5.แหล่งที่มาของราคากลาง (ราคาอ้างอิง) : </span> <Input></Input>
                </div>
                <div>
                    <div>5.1<Input></Input></div>
                    <div>5.2<Input></Input></div>
                    <div>5.3<Input></Input></div>
                    <div>5.4<Input></Input></div>
                    <div>5.5<Input></Input></div>
                </div>
                <span>6.รายชื่อคณะกรรมการกำหนดราคากลาง (ราคาอ้างอิง) ทุกคน : </span>
                <div>
                    <div>5.1<Input></Input><span>ลงลายมือชื่อ</span><Input></Input></div>
                    <div>5.2<Input></Input><span>ลงลายมือชื่อ</span><Input></Input></div>
                    <div>5.3<Input></Input><span>ลงลายมือชื่อ</span><Input></Input></div>
                </div>
            </div>

        </StyledWrapper>
        );
    }
}

export default MyComponent;
// const purchasing001_2 = (props) => {

//     return (
//         <StyledWrapper>
//             <div className="title-offer">
//                 <div>
//                     <span>1.ชื่อโครงการ : </span> <Input></Input>
//                 </div>
//                 <div>
//                     <span>2.หน่วยงานเจ้าของโครงการ : </span> <Input></Input>
//                 </div>
//                 <div>
//                     <span>3.วงเงินงบประมาณที่ได้รับจัดสรร : </span> <Input></Input> <span>บาท</span>
//                 </div>
//                 <div>
//                     <span>4.วันที่กำหนดราคากลาง (ราคาอ้างอิง) : </span> <Input></Input>
//                 </div>
//                 <div>
//                     <span>เป็นเงิน </span> <Input></Input> <span>บาท ราคา/หน่วย (ถ้ามี)</span> <Input></Input> <span>บาท</span>
//                 </div>
//                 <div>
//                     <span>5.แหล่งที่มาของราคากลาง (ราคาอ้างอิง) : </span> <Input></Input>
//                 </div>
//                 <div>
//                     <div>5.1<Input></Input></div>
//                     <div>5.2<Input></Input></div>
//                     <div>5.3<Input></Input></div>
//                     <div>5.4<Input></Input></div>
//                     <div>5.5<Input></Input></div>
//                 </div>
//                 <span>6.รายชื่อคณะกรรมการกำหนดราคากลาง (ราคาอ้างอิง) ทุกคน : </span>
//                 <div>
//                     <div>5.1<Input></Input><span>ลงลายมือชื่อ</span><Input></Input></div>
//                     <div>5.2<Input></Input><span>ลงลายมือชื่อ</span><Input></Input></div>
//                     <div>5.3<Input></Input><span>ลงลายมือชื่อ</span><Input></Input></div>
//                 </div>
//             </div>

//         </StyledWrapper>
//     )
// }
// export default purchasing001_2;