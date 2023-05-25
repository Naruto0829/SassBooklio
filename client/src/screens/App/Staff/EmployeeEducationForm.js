import { Button, DatePicker, Form, Input, Space } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import styled from 'styled-components';
import TextInput from '../../../components/Common/forms/TextInput';

const StyledDatePicker = styled(DatePicker)`
	background-color: #ffffff;
	border-color: #d2d6dc;
	border-width: 1px;
	border-radius: 0.375rem;
	padding: 0.5rem 0.75rem 0.5rem 0.75rem;
	font-size: 0.8rem;
	line-height: 1.5;
	margin-top: 0.25rem;
	display: block;
	width: 100%;
	line-height: 1.25rem;
	transition: box-shadow 0.2s ease-in-out;

	&:focus {
		box-shadow: 0 0 0 4px lightblue;
		outline-width: 2px;
		outline-color: lightblue;
	}
`
const EmployeeEducationForm = ({ key, restField, remove, name }) => {
	return (
		<div>
			<Space
				key={key}
				style={{
					display: "flex",

					justifyContent: "space-between",
					marginBottom: 8,
				}}
				align='baseline'>
				<Form.Item
					{...restField}
					name={[name, "degree"]}
					rules={[
						{
							required: true,
							message: "Missing  degree",
						},
					]}>
					<TextInput placeholder='Degree' />
				</Form.Item>
				<Form.Item
					{...restField}
					name={[name, "institution"]}
					rules={[
						{
							required: true,
							message: "Missing institution",
						},
					]}>
					<TextInput placeholder='Institution' />
				</Form.Item>
				<Form.Item
					{...restField}
					name={[name, "result"]}
					rules={[{ required: true, message: "Missing result" }]}>
					<TextInput placeholder='Result' />
				</Form.Item>

				<Form.Item
					{...restField}
					name={[name, "studyStartDate"]}
					rules={[{ required: true, message: "Missing studyStartDate" }]}>
					<StyledDatePicker placeholder='studyStartDate' />
				</Form.Item>

				<Form.Item
					{...restField}
					name={[name, "studyEndDate"]}
					rules={[{ required: true, message: "Missing studyEndDate" }]}>
					<StyledDatePicker placeholder='studyEndDate' />
				</Form.Item>

				<Form.Item
					{...restField}
					name={[name, "fieldOfStudy"]}
					rules={[{ required: true, message: "Missing fieldOfStudy" }]}>
					<TextInput placeholder='Field Of Study; Computer' />
				</Form.Item>
				<MinusCircleOutlined
					className='txt-color'
					style={{ fontSize: "150%" }}
					onClick={() => remove(name)}
				/>
			</Space>
		</div>
	);
};

export default EmployeeEducationForm;
