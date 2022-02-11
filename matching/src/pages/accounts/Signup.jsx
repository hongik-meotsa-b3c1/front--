import React, {useState, useEffect, createContext } from "react";
import { Form, Input, Button, notification} from "antd";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {SmileOutlined, FrownOutlined} from "@ant-design/icons";



function Signup(){

    const navigate = useNavigate();
 
    const [fieldsErrors, setFieldErrors] = useState({});
   
    const onFinish = values => {

        let classnetId = "";
        

        Axios.get("http://localhost:8000/accounts/classnet/")
        .then(response => {
                console.log("signup페이지 get데이터")
                console.log(response.data)
                classnetId = response.data.classnetid
                
                console.log("classnetID")
                console.log(classnetId) 
        })
        .catch(error => {
                console.log("signup페이지get올퓨")
                console.log(error)
                notification.open({
                    message: "회원가입 실패",
                    description:"클래스넷 인증을 다시 시도해보세요",
                    icon: <FrownOutlined style={{ color: "#ff3333" }}/>
                })
                navigate("/accounts/classnet")
        }) 
        
        
        const {username , password, password2, nickname, email} = values;
 

        if (password === password2){

            setFieldErrors({});

            const timeoutId = setTimeout(() => {
                const data = {username, password, nickname, email, classnetId };
                console.log(data)
                Axios.post("http://localhost:8000/accounts/signup/", data)
                .then(response => {
                    console.log("signup페이지post")
                    console.log(response.data)
                    notification.open({
                        message: "회원가입 성공",
                        description:"로그인 화면으로 이동합니다",
                        icon: <SmileOutlined style={{ color: "#108ee9" }}/>
                    })
    
                    navigate("/accounts/login")            
                
                })
                .catch(error => {
                    console.log("signup페이지post 올휴")
                    console.log(error)
                    notification.open({
                        message: "회원가입 실패",
                        description:"아이디/비밀번호를 확인하세요! 혹은  이미 인증된 클래스넷 계정입니다!",
                        icon: <FrownOutlined style={{ color: "#ff3333" }}/>
                    })
                    if ( error.response ){
                        const { data: fieldsErrorMessages } = error.response
                        setFieldErrors(
                            Object.entries(fieldsErrorMessages).reduce((acc,[fieldName, errors]) => {
                                acc[fieldName] = {
                                    validateStatus : "error",
                                    help: errors.join(" "),
                                };  
                                return acc;
                            }, {} )
                        );         
                    }    
                })
                
            
              }, 5000); //필수
        }

        else {
            notification.open({
                message: "회원가입 실패",
                description:"비밀번호가 일치하지 않습니다",
                icon: <FrownOutlined style={{ color: "#ff3333" }}/>
            })
        }   

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
          label="아이디"
          name="username"
          rules={[
            { required: true, message: 'Please input your id!',},
            { min : 5, max:20, message : "5글자 이상 입력해주세요. " }
          ]}
          hasFeedback
          {...fieldsErrors.username}
          {...fieldsErrors.classnet_id}
        >
          <Input  />
        </Form.Item>
  
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            { required: true, message:'Please input your password!',},
            { min : 8, max:20, message : "8글자 이상 입력해주세요. " }
          ]}
          hasFeedback
          {...fieldsErrors.password}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="비밀번호 확인"
          name="password2"
          rules={[
            { required: true, message: 'Please input your password!'},
            { min : 8, max:20, message : "8글자 이상 입력해주세요. " }
          ]}
          hasFeedback
          {...fieldsErrors.password2 }
          
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="닉네임"
          name="nickname"
          rules={[
            { required: true, message: 'Please input your nickname!',},
            { min : 2, max:20, message : "2글자 이상 입력해주세요. " }
          ]}
           hasFeedback
           {...fieldsErrors.nickname}
        >
          <Input />
        </Form.Item>

        <Form.Item
        label="이메일"
        name = "email"
        rules={[
          { required: true, message: 'Please input your email!',}, 
          {type: 'email', message: "이메일 형식이 아닙니다."},
        ]}
         hasFeedback
         {...fieldsErrors.email}
      >
        <Input />
      </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            계정 만들기
          </Button>
        </Form.Item>
      </Form>
    );  
}

export default Signup;




