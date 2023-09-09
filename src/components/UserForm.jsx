import { Button, Form, InputNumber, Row, Space } from "antd";

const UserForm = ({setConeParameters, setRequestStatus}) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        setRequestStatus('loading');
        setConeParameters(values);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <Form
            form={form}
            style={{ textAlign: 'left', marginBottom: 30 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="small"
            layout="vertical"
        >
            <Row>
                <Space size="small">
                    <Form.Item
                        name="height"
                        label="Height"
                        rules={[{ type: 'number', min: 1, max: 16, required: true, message: '1 < H < 16' }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="radius"
                        label="Radius"
                        rules={[{ type: 'number', min: 1, max: 16, required: true, message: '1 < R < 16' }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="segments"
                        label="Segments"
                        rules={[{ type: 'number', min: 3, max: 64, required: true, message: '3 < S < 64' }]}
                    >
                        <InputNumber />
                    </Form.Item>  
                </Space>
            </Row>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    )
}

export default UserForm;