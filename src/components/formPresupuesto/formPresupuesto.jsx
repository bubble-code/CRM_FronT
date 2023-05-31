import { Form, Input, Button } from "antd"

const FormPresupuesto = () => {

    const [form] = Form.useForm()

    return (
        <Form form={form}  className="flex justify-center gap-4">
            <Form.Item label="Budget" name='idPresupu'>
                <Input placeholder="Enter the Budget ID" />
            </Form.Item>
            <Form.Item className="mr-9">
                <Button type="primary" color="magenta" onClick={() => { }}>Buscar</Button>
            </Form.Item>
            <Form.Item >
                <Button type="primary" color="blue" onClick={() => { }}>Activos</Button>
            </Form.Item>
            <Form.Item >
                <Button type="primary" color="yellow" onClick={() => { }}>Aceptados</Button>
            </Form.Item>
            <Form.Item >
                <Button type="primary" color="green" onClick={() => { }}>TODOS</Button>
            </Form.Item>
        </Form>
    )
}

export default FormPresupuesto;