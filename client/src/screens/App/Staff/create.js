import {
	Button,
	Col,
	DatePicker,
	Form,
	Row,
	Select,
	Typography,
} from "antd";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loadAllDesignation } from "../../../redux/rtk/features/designation/designationSlice";
// import { getRoles } from "../role/roleApis";
// import { getDepartments } from "../department/departmentApis";
import TextInput from '../../../components/Common/forms/TextInput';
import EmployeeEducationForm from "./EmployeeEducationForm";
import {  PlusOutlined } from "@ant-design/icons";
// import { loadAllEmploymentStatus } from "../../../redux/rtk/features/employemntStatus/employmentStatusSlice";
// import { loadAllShift } from "../../../redux/rtk/features/shift/shiftSlice";
import { addStaff } from "../../../redux/rtk/features/user/userSlice";
// import { loadAllWeeklyHoliday } from "../../../redux/rtk/features/weeklyHoliday/weeklyHolidaySlice";
// import { loadAllLeavePolicy } from "../../../redux/rtk/features/leavePolicy/leavePolicySlice";
import styled from 'styled-components';

const AddUser = () => {
	const [loader, setLoader] = useState(false);
	const dispatch = useDispatch();
	const { Title } = Typography;
	const { Option } = Select;
	const [list, setList] = useState(null);
	const [department, setDepartment] = useState(null);

	const [education, setEducation] = useState([
		{
			degree: "",
			institution: "",
			fieldOfStudy: "",
			result: "",
			studyStartDate: "",
			studyEndDate: "",
		},
	]);

	// useseletor to get designations from redux
	const designation = useSelector((state) => state.designations?.list);
	const employmentStatus = useSelector((state) => state.employmentStatus?.list);
	const shift = useSelector((state) => state.shift?.list);
	const weeklyHoliday = useSelector((state) => state.weeklyHoliday?.list);
	const leavePolicy = useSelector((state) => state.leavePolicy?.list);

	useEffect(() => {
		// dispatch(loadAllDesignation());
		// dispatch(loadAllEmploymentStatus());
		// dispatch(loadAllShift());
		// dispatch(loadAllWeeklyHoliday());
		// dispatch(loadAllLeavePolicy());
	}, []);

	const [form] = Form.useForm();

	const onFinish = async (values) => {
		const FormData = {
			...values,

			educations: values.educations || education,
		};
		try {
			const resp = await dispatch(addStaff(FormData));
			setLoader(true);

			if (resp.payload.message === "success") {
				form.resetFields();
				setLoader(false);
			} else if (resp.payload.message === "error") {
				setLoader(false);
			} else {
				setLoader(false);
			}
		} catch (error) {
			console.log(error.message);
			setLoader(false);
		}
	};

	const onFinishFailed = (errorInfo) => {
		setLoader(false);
		console.log("Failed:", errorInfo);
	};

	const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]; // blood groups

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
  `;
	return (
		<div className='mr-top mt-5 p-50 ant-card' style={{ padding:"50px" }}>
			<Form
				size='small'
				form={form}
				name='basic'
				labelCol={{
					span: 7,
				}}
				wrapperCol={{
					span: 22,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'>
				<Row
					gutter={{
						xs: 8,
						sm: 16,
						md: 24,
						lg: 32,
					}}>
					<Col span={12} className='gutter-row form-color'>
						<h2 className='text-center text-xl mt-3 mb-3 txt-color'>
							User Information
						</h2>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='First Name'
							name='firstName'
							rules={[
								{
									required: true,
									message: "Please input First Name!",
								},
							]}>
							<TextInput placeholder='John' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Last Name'
							name='lastName'
							rules={[
								{
									required: true,
									message: "Please input Last Name!",
								},
							]}>
							<TextInput placeholder='Doe' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='User Name'
							name='userName'
							rules={[
								{
									required: true,
									message: "Please input User Name!",
								},
							]}>
							<TextInput placeholder='john_doe' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Password'
							name='password'
							rules={[
								{
									required: true,
									message: "Please input your password !",
								},
							]}>
							<TextInput placeholder='Strong Password' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Email'
							name='email'
							rules={[
								{
									required: true,
									message: "Please input email!",
								},
							]}>
							<TextInput placeholder='johndoe2@example.com' />
						</Form.Item>
					</Col>
					<Col span={12} className='gutter-row'>
						<h2 className='text-center text-xl mt-3 mb-3 txt-color'>
							Address Information
						</h2>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Street'
							name='street'
							rules={[
								{
									required: true,
									message: "Please input street!",
								},
							]}>
							<TextInput
								placeholder='123 Main Street'
								style={{ width: "100%" }}
							/>
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='City'
							name='city'
							rules={[{ required: true, message: "Please input city!" }]}>
							<TextInput placeholder='Los Angeles' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='State'
							name='state'
							rules={[{ required: true, message: "Please input state!" }]}>
							<TextInput placeholder='CA' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Zip Code'
							name='zipCode'
							rules={[
								{ required: true, message: "Please input Zip Code!" },
							]}>
							<TextInput placeholder='90211' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Country'
							name='country'
							rules={[
								{ required: true, message: "Please input Country!" },
							]}>
							<TextInput placeholder='USA' />
						</Form.Item>
					</Col>
				</Row>

				<Row
					gutter={{
						xs: 8,
						sm: 16,
						md: 24,
						lg: 32,
					}}>
					<Col span={12} className='gutter-row'>
						<h2 className='text-center text-xl mt-3 mb-3 txt-color'>
							{" "}
							Employee Information{" "}
						</h2>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Joining Date'
							name='joinDate'
							rules={[
								{
									required: true,
									message: "Please input joining date!",
								},
							]}>
							<StyledDatePicker className='date-picker hr-staffs-date-picker' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Leave Date'
							name='leaveDate'>
							<StyledDatePicker className='date-picker hr-staffs-date-picker' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Employee ID'
							name='employeeId'
							rules={[
								{
									required: true,
									message: "Please input Employee ID!",
								},
							]}>
							<TextInput placeholder='OE-012' />
						</Form.Item>
						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Blood Group'
							name='bloodGroup'
							rules={[
								{
									required: true,
									message: "Please input Blood Group!",
								},
							]}>
							<Select
								placeholder='Select Blood Group'
								allowClear
								mode='single'
								size='middle'
								style={{
									width: "100%",
								}}>
								{bloodGroups.map((bloodGroup) => (
									<Option key={bloodGroup} value={bloodGroup}>
										{bloodGroup}	
									</Option>
								))}
							</Select>
						</Form.Item>
						{/* TODO: Add a Upload Seciton for Image */}
						<Form.Item
							name={"employmentStatusId"}
							style={{ marginBottom: "10px" }}
							rules={[
								{
									required: false,
									message: "Please input Employment Status!",
								},
							]}
							label='Employee Status'>
							<Select
								placeholder='Select Status'
								allowClear
								size={"middle"}>
								{employmentStatus &&
									employmentStatus.map((employmentStatus) => (
										<Option
											key={employmentStatus.id}
											value={employmentStatus.id}>
											{employmentStatus.name}
										</Option>
									))}
							</Select>
						</Form.Item>
						<Form.Item
							name={"departmentId"}
							style={{ marginBottom: "10px" }}
							label='Department'
							rules={[
								{ required: false, message: "Please input Department!" },
							]}>
							<Select
								loading={!department}
								placeholder='Select Department'
								allowClear
								size={"middle"}>
								{department &&
									department.map((department) => (
										<Option key={department.id} value={department.id}>
											{department.name}
										</Option>
									))}
							</Select>
						</Form.Item>
						<Form.Item
							rules={[
								{ required: false, message: "Please choose Role!" },
							]}
							label='Role'
							name={"roleId"}
							style={{ marginBottom: "10px" }}>
							<Select
								loading={!list}
								size='middle'
								mode='single'
								allowClear
								style={{
									width: "100%",
								}}
								placeholder='Please select'>
								{list &&
									list.map((role) => (
										<Option key={role.id} value={role.id}>
											{role.name}
										</Option>
									))}
							</Select>
							{/*<BigDrawer
								title={"new Role"}
								btnTitle={"Role"}
								children={<AddRole drawer={true} />}
									/> */}
						</Form.Item>

						<Form.Item
							rules={[
								{ required: false, message: "Please input Shift!" },
							]}
							label='Shift'
							name={"shiftId"}
							style={{ marginBottom: "10px" }}>
							<Select
								loading={!shift}
								size='middle'
								mode='single'
								allowClear
								style={{
									width: "100%",
								}}
								placeholder='Please select'>
								{shift &&
									shift.map((shift) => (
										<Option key={shift.id} value={shift.id}>
											{shift.name}
										</Option>
									))}
							</Select>
							{/*<BigDrawer
								title={"new Role"}
								btnTitle={"Role"}
								children={<AddRole drawer={true} />}
									/> */}
						</Form.Item>

						<Form.Item
							rules={[
								{ required: false, message: "Please input Leave Policy!" },
							]}
							label='Leave Policy'
							name={"leavePolicyId"}
							style={{ marginBottom: "10px" }}>
							<Select
								loading={!leavePolicy}
								size='middle'
								mode='single'
								allowClear
								style={{
									width: "100%",
								}}
								placeholder='Please select'>
								{leavePolicy &&
									leavePolicy.map((leavePolicy) => (
										<Option key={leavePolicy.id} value={leavePolicy.id}>
											{leavePolicy.name}
										</Option>
									))}
							</Select>
						</Form.Item>

						<Form.Item
							rules={[
								{ required: false, message: "Please input WeekLy Holiday!" },
							]}
							label='WeekLy Holiday'
							name={"weeklyHolidayId"}
							style={{ marginBottom: "10px" }}>
							<Select
								loading={!weeklyHoliday}
								size='middle'
								mode='single'
								allowClear
								style={{
									width: "100%",
								}}
								placeholder='Please select'>
								{weeklyHoliday &&
									weeklyHoliday.map((weeklyHoliday) => (
										<Option key={weeklyHoliday.id} value={weeklyHoliday.id}>
											{weeklyHoliday.name}
										</Option>
									))}
							</Select>
						</Form.Item>
					</Col>
					<Col span={12} className='gutter-row'>
						<h2 className='text-center text-xl mt-3 mb-3 txt-color'>
							Designation & Salary Information
						</h2>

						<Form.Item
							rules={[
								{ required: false, message: "Please input Designation!" },
							]}
							label='Designation'
							name={"designationId"}
							style={{ marginBottom: "10px" }}>
							<Select
								loading={!shift}
								size='middle'
								mode='single'
								allowClear
								style={{
									width: "100%",
								}}
								placeholder='Please select Designation'>
								{designation &&
									designation.map((designation) => (
										<Option key={designation.id} value={designation.id}>
											{designation.name}
										</Option>
									))}
							</Select>
							{/*<BigDrawer
							title={"new Role"}
							btnTitle={"Role"}
							children={<AddRole drawer={true} />}
								/> */}
						</Form.Item>

						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Designation Start Date'
							rules={[{ required: true, message: "Please input date!" }]}
							name='designationStartDate'>
							<StyledDatePicker className='date-picker hr-staffs-date-picker' />
						</Form.Item>

						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Designation End Date'
							name='designationEndDate'>
							<StyledDatePicker className='date-picker hr-staffs-date-picker' />
						</Form.Item>

						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Salary'
							name='salary'
							rules={[
								{
									required: true,
									message: "Please input salary",
								},
							]}>
							<TextInput type="number" style={{ width: "100%" }} />
						</Form.Item>

						<Form.Item
							label='Salary Start Date'
							name='salaryStartDate'
							style={{ marginBottom: "10px" }}
							rules={[
								{
									required: true,
									message: "Please input date!",
								},
							]}>
							<StyledDatePicker className='date-picker hr-staffs-date-picker' />
						</Form.Item>

						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Salary End Date'
							name='salaryEndDate'>
							<StyledDatePicker className='date-picker hr-staffs-date-picker' />
						</Form.Item>

						<Form.Item
							style={{ marginBottom: "10px" }}
							label='Salary Comment'
							name='salaryComment'>
							<TextInput />
						</Form.Item>
					</Col>
				</Row>

				<h2 className='text-center text-xl mt-3 mb-5 txt-color'>
					Education Information
				</h2>

				<div className='text-center'>
					<p className='text-red-500 text-base mb-4'>
						Please add education information using the button below
					</p>
				</div>

				<Form.List name='educations'>
					{(fields, { add, remove }) => (
						<>
							{fields.map(({ key, name, ...restField }) => (
								<EmployeeEducationForm
									key={key}
									name={name}
									remove={remove}
									restField={restField}
								/>
							))}
							<Form.Item
								style={{ marginBottom: "10px" }}
								wrapperCol={{
									offset: 4,
									span: 16,
								}}>
								<Button
									type='dashed'
									size='middle'
									style={{ color: "#fff", backgroundColor: "#2c3e50" }}
									onClick={() => add()}
									block
									icon={<PlusOutlined />}>
									Add Education Information
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>

				<Form.Item
					style={{ marginBottom: "10px", marginTop: "10px" }}
					wrapperCol={{
						offset: 4,
						span: 16,
					}}>
					<Button
						className='mt-5'
						size='large'
						onClick={() => setLoader(true)}
						block
						type='primary'
						htmlType='submit'
						shape='round'
						loading={loader}>
						Add New Staff
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddUser;
