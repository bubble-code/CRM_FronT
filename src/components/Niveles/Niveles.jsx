import { Divider, Form, AutoComplete, Input, Button } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import { useState } from "react";
import { list } from '../../helpers/list'
import { apiBI, useFetchNivelesQuery } from "../../features/Bi";
import { useDispatch } from "react-redux";
import { MainReactTable } from "../MaterialTable/MaterialTable";

export const Niveles = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsloading] = useState(false)
    const [cliente, desde, hasta] = ['482', '4200', '4210']
    const { data = [] } = useFetchNivelesQuery({ cliente, desde, hasta })
    const dispatch = useDispatch();

    const formItemLayout = {
        labelCol: {
            xs: { span: 3 },
            sm: { span: 3 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
        },
    };

    const handleRefetch = () => {
        const { cliente, desde, hasta, materiales } = form.getFieldsValue()
        dispatch(
            apiBI.endpoints.fetchNiveles.initiate(
                { cliente, desde, hasta },
                { subscribe: false, forceRefetch: true }
            )
        )
    }

    const submit = async () => {
        // handleRefetch()
        setIsloading(!isLoading)
        // const { data } = await refetch({ cliente: '400', desde, hasta })
        // const mater = form.getFieldValue('materiales')
        // const mm = mater.split('\n')

        // const result = list.filter(item => mm.includes(item))
        // console.log(result)
        // console.log(mm)
        // fetchNiveles(cliente, desde, hasta)


    }

    return (
        <div className="flex flex-col">
            <Divider style={{ color: 'blue', borderColor: 'blue' }}>
                <div className="mt-4 text-center" >
                    <span className="mt-4 border rounded-lg text-blue-500 font-extralight uppercase text-xs tracking-wider border-blue-500  p-2 px-4">{'Selecciones un Parametro'}</span>
                </div>
            </Divider>
            <div className="flex">
                <Form  {...formItemLayout} form={form} title="Type Data" className="flex flex-col" onFinish={submit}>
                    <Form.Item label="Cliente" name='cliente' labelAlign="right" labelCol={{ span: 4 }} wrapperCol={{ span: 18 }} required >
                        <AutoComplete dropdownMatchSelectWidth={252} onSearch={() => { }} options={[]} >
                            <Input.Search required />
                        </AutoComplete >
                    </Form.Item>
                    <div className="flex w-[400px]">
                        <span className="ml-2 mr-3">Familia:</span>
                        <Form.Item name='desde' className="w-1/3" required>
                            <Input style={{ background: `'rgb(33 150 243 / 0.3)'` }}
                                placeholder="Desde:" className="text-right" required
                            />
                        </Form.Item>
                        <Form.Item name='hasta' className="w-1/3" required>
                            <Input style={{ background: `'rgb(33 150 243 / 0.3)'` }} required
                                placeholder="Hasta:" className="text-right"
                            />
                        </Form.Item>
                    </div>
                    <Form.Item label='Items' labelCol={{ span: 4 }} wrapperCol={{ span: 18 }} name='materiales' required>
                        <Input.TextArea cols={1} rows={15} />
                    </Form.Item>
                    <Form.Item className="flex justify-center">
                        <Button icon={<SearchOutlined />} htmlType="submit" type="default" color="blue" className="border border-blue-500" loading={false} >Search</Button>
                    </Form.Item>

                </Form>
            </div>
            {
                !isLoading ? <></> :
                    <MainReactTable data={data} materiales={form.getFieldValue('materiales')} />
            }
        </div>
    )
}