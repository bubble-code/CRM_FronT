
import { Form, Input, Button } from "antd";
import { apiOfertaSlice, useFetchOfertasQuery, fetchOfertas } from "../../features/ofertas-api-slice";
import { useAppDispath } from "../../app/hoock";
import { useDispatch } from 'react-redux'
import { fetchUserId } from "../../redux/Slices/RouteSlice";




const FormBuscarOferta = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch();
    // const { refetch } = useFetchOfertasQuery('/', {
    //     skip: true
    // })

    function searchArticle() {
        const value = form.getFieldValue('idArticulo')
        // fetchArticuloPorID(value)
        console.log(value)
    }

    function fetchAllArticle() {
        dispatch(fetchUserId())
        dispatch(fetchOfertas.initiate())
        // console.log(data)
        // useDispatch(apiOfertaSlice.endpoints.fetchOfertas.initiate())
    }

    return (
        < Form form={form} layout="inline" >
            <Form.Item label="ID Articulo" name='idArticulo'>
                <Input placeholder="Enter the article ID" />
            </Form.Item>
            <Form.Item className="mr-5">
                <Button type="primary" color="magenta" className="bg-gray-400" onClick={searchArticle}>Buscar</Button>
            </Form.Item>
            <Form.Item >
                <Button type="primary" color="green" className="bg-gray-400" onClick={fetchAllArticle}>TODOS</Button>
            </Form.Item>
        </ Form >
    )
}

export { FormBuscarOferta };