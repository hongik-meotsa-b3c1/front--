import React, {useState, useEffect, createContext } from "react";
import { Form, Input, Button, notification} from "antd";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {SmileOutlined, FrownOutlined} from "@ant-design/icons";
import Password from "antd/lib/input/Password";
import Signup from "./Signup";

function Classnet(){
    const navigate = useNavigate();
 
    const onFinish = values => {

            const {classnetid, classnetpw} = values;
            const data = {classnetid, classnetpw};

            Axios.post("http://localhost:8000/accounts/classnet/", data)
            .then(response => {
                console.log("classnet post데이터")
                console.log(response.data)
                notification.open({
                    message: "클래스넷 인증 성공",
                    description:"회원가입 페이지로 이동합니다",
                    icon: <SmileOutlined style={{ color: "#108ee9" }}/>
                });
                    navigate("/accounts/signup");     
            
            })
            .catch(error => {
                console.log("classnet post오류")
                console.log(error)
                notification.open({
                    message: "클래스넷 인증실패",
                    description:"아이디/암호를 확인하세요 혹은 이미 인증된 계정입니다",
                    icon: <FrownOutlined style={{ color: "#ff3333" }}/>
                });
            })
    }

        
    return(
        
        <Form
        name="basic"

        labelCol={{ span: 8,}}
        wrapperCol={{span: 16,}}

        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        //autoComplete="off"
      >

        <Form.Item
          label="클래스넷 아이디"
          name="classnetid"
          rules={[
            { required: true, message: 'Please input your id!',},
          ]}
       
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="클래스넷 비밀번호"
          name="classnetpw"
          rules={[
            { required: true, message:'Please input your password!',},
          ]}
         
        >
          <Input.Password />
        </Form.Item>

  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            클래스넷 인증하기
          </Button>
        </Form.Item>
      </Form>  
    );  

    
   
        
}

export default Classnet;