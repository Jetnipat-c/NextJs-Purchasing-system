
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox, Typography, Menu } from 'antd';
import 'antd/dist/antd.css'
import Router from 'next/router'
const { Text } = Typography;
const StyledWrapper = styled.div`
    height:100%;
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
    padding:20px 0 20px 0;
}
.loca-date{
    text-align: right;
    #text{
        padding:10px 10px 0 0;
    }
}
.title-offer{
    text-align: left;
    padding: 10px 0 0 0;
    #detali{
        padding:0 0 0 10px;
    }
}
Input{
    margin: 10px 20px 10px 20px;
}
.block{
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height:35px;
}
.detail-table{
    display:flex;
    justify-content: space-around;
    width:100%;
    flex-direction: column;
    padding: 0 0 0 250px;
}
.layout-table{
    display:flex;
}
.footerpage > div{
    display:flex;
    width:100%
    justify-content:flex-end;
    flex-direction: column;
    background-color:red;
    .table-footerpage{
        display:flex;
        justify-content:flex-end;
    }
}

`

const Contents = () => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
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
            <p style={{ fontSize: "30px", padding: '15px 0 0 0px', marginBottom: "5px" }}>1) รายละเอียด</p>
            <div className="title-offer">
                <span >ด้วยมหาวิทยาลัยการคอมพิวเตอร์ มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ</span>   <Input style={{ width: '500px' }} placeholder="ใช้ในวิชาโครงงาน วิชา 242-402 มีรายการดังต่อไปนี้" /> <br></br>
                <span >ชื่อโครงการ (ถ้ามี)</span>   <Input style={{ width: '500px' }} placeholder=" " /><span >ชื่อโครงการ (ถ้ามี)</span> <br></br>
                <span >วันที่ต้องใช้พัสดุ</span>   <Input style={{ width: '500px' }} placeholder=" " /><br></br>
            </div>
            <p style={{ fontSize: "30px", paddingTop: '15px' }}>2) รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน</p>
            <div className="title-offer">
                <span >2.1 รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน (ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม) จำนวน</span> <Input style={{ width: '100px' }} placeholder=" ตัวอย่าง 1" /><span>แผ่น</span><br></br>
                <span style={{ paddingRight: '43px' }}>2.2 บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง จำนวน</span> <Input style={{ width: '100px' }} placeholder=" ตัวอย่าง 1" /><span>แผ่น</span><br></br>
                <span style={{ paddingRight: '107px' }} >2.3 บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง จำนวน</span> <Input style={{ width: '100px' }} placeholder=" ตัวอย่าง 1" /><span>แผ่น</span><br></br>
            </div>
            <p style={{ fontSize: "30px", paddingTop: '15px' }}>3) คณะกรรมการ</p>
            <div className="block">
                <span>คณะกรรมการพิจารณาผล</span>
                <span>คณะกรรมการตรวจรับพัสดุ</span>
            </div>
            <div className="layout-table">
                <div className="detail-table">
                    <div>
                        <span>3.1</span><Input style={{ width: '200px' }} placeholder="" /><span>ประธานกรรมการ</span><br></br>
                        <span>3.2</span><Input style={{ width: '200px' }} placeholder="" /><span>กรรมการ</span><br></br>
                        <span>3.3</span><Input style={{ width: '200px' }} placeholder="" /><span>กรรมการ</span> <br></br>
                    </div>
                </div>
                <div className="detail-table">
                    <div>
                        <span>3.1</span><Input style={{ width: '200px' }} placeholder="" /><span>ประธานกรรมการ</span><br></br>
                        <span>3.2</span><Input style={{ width: '200px' }} placeholder="" /><span>กรรมการ</span><br></br>
                        <span>3.3</span><Input style={{ width: '200px' }} placeholder="" /><span>กรรมการ</span> <br></br>
                    </div>
                </div>
            </div>
            <p style={{ fontSize: "30px", paddingTop: '15px' }}>4) แหล่งเงิน</p>
            <Checkbox onChange={onChange}>เงินอุดหนุนจากรัฐบาล ปี</Checkbox>
            <Input style={{ width: '200px' }} placeholder="" />
            <Checkbox onChange={onChange}>เงินรายได้  ปี</Checkbox>
            <Input style={{ width: '200px' }} placeholder="" />
            <Checkbox onChange={onChange}>เงินรายได้สะสม ปี</Checkbox>
            <Input style={{ width: '200px' }} placeholder="" />

            <div>
                <span style={{ paddingRight: '34px' }}>ทิศทาง</span>
                <Input style={{ width: '200px' }} placeholder="" /><br></br>

                <span style={{ paddingRight: '26px' }}>นโยบาย </span>
                <Input style={{ width: '200px' }} placeholder="" /><br></br>

                <span style={{ paddingRight: '29px' }}>แผนงาน</span>
                <Input style={{ width: '200px' }} placeholder="" />
                <span style={{ paddingRight: '35px' }}>งาน</span>
                <Input style={{ width: '200px' }} placeholder="" /><br></br>

                <span >หมวดรายจ่าย</span>
                <Input style={{ width: '200px' }} placeholder="" />
                <span >หมวดย่อย</span>
                <Input style={{ width: '200px' }} placeholder="" /><br></br>

                <span style={{ paddingRight: '15px' }}>ชื่อรายการ</span> <Input style={{ width: '200px' }} placeholder="" />
            </div>
            <Checkbox onChange={onChange}>เงินอื่นๆโปรดระบุ</Checkbox>
            <Input style={{ width: '200px' }} placeholder="" />
            <span>ตามที่แนบมาพร้อมนี้  </span>

                    <div style={{textAlign:'right'}}>
                        <span >(ลงชื่อ)</span>
                        <Input style={{ width: '200px' }} placeholder="" />
                        <span>ผู้ขอ</span>
                    </div>
                    <div style={{textAlign:'right', paddingRight: '24px'}}>
                        <Input style={{ width: '200px' }} placeholder="" />
                    </div>
                    <div style={{textAlign:'right',paddingRight: '24px'}}>
                        <span>เบอร์ติดต่อ</span>
                        <Input style={{ width: '200px' }} placeholder="" />
                    </div>  
        </StyledWrapper>
    )
}
export default Contents;