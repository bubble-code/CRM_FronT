import { Form, Input, Button } from "antd";
import Proptypes from 'prop-types'



export const FormArticulo = ({ fetchArticuloPorID, fetchArticulos }) => {

    const [form] = Form.useForm()

    function searchArticle() {
        const value = form.getFieldValue('idArticulo')
        fetchArticuloPorID(value)
        console.log(value)
    }

    function fetchAllArticle() {
        fetchArticulos();
    }

    return (
        <Form form={form} layout="inline" >
            <Form.Item label="ID Articulo" name='idArticulo'>
                <Input placeholder="Enter the article ID" />
            </Form.Item>
            <Form.Item className="mr-5">
                <Button type="primary" color="magenta" onClick={searchArticle}>Buscar</Button>
            </Form.Item>
            <Form.Item >
                <Button type="primary" color="green" onClick={fetchAllArticle}>TODOS</Button>
            </Form.Item>
        </Form>
    )
}

FormArticulo.propTypes = {
    fetchArticuloPorID: Proptypes.func.isRequired,
    fetchArticulos: Proptypes.func.isRequired
}