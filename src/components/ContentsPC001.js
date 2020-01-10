
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox, Typography, Menu } from 'antd';
import 'antd/dist/antd.css'
import Router from 'next/router'
const { Text } = Typography;
const StyledWrapper = styled.div`
    height:1000px;
    //background-color:#EAECEE;
    margin : 20px 50px 0 50px;
.titlepage{
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:40px;
    //background-color:red; 
    font-size: 20px;
    font-weight: bold;
    padding:20px 0 10px 0;
}
.loca-date{
    text-align: right;
    padding-top: 20px;
    #text{
        padding:10px 10px 0 0;
    }
}
.title-offer{
    text-align: left;
    padding: 20px 0 0 0;
    #detali{
        padding:0 0 0 10px;
    }
}
`

const Contents = () => {

    return (
        <StyledWrapper>
            <div className="titlepage">
                แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
            </div>
            <div className="loca-date">
                <span id='text'>เอกสารที่ มอ. 696 /</span> <Input style={{ width: '150px' }} maxLength="6" placeholder="123" />
            </div>
            <div className="loca-date">
                <span id='text'>ลงวันที่</span> <Input style={{ width: '150px' }} placeholder="27/11/2563" />
            </div>
            <div className="title-offer">
                <span>เรื่อง</span>   <span id='detali'>ขอให้ช่วยจัดหาพัสดุ</span> <br></br>
                <span>เรียน</span>   <span id='detali'>หัวหน้าเจ้าหน้าที่พัสดุ</span>
            </div>
            <p style={{ fontSize: "30px", paddingTop: '15px' }}>1) รายละเอียด</p>
            <span style={{ padding: '15px 0 0 150px' }}>ด้วยมหาวิทยาลัยการคอมพิวเตอร์ มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ ใช้ในวิชาโครงงาน วิชา 242-402 มีรายการดังต่อไปนี้</span>
        </StyledWrapper>
    )
}
export default Contents;