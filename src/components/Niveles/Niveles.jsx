import { Divider, Form, AutoComplete, Input, Button } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import { useState } from "react";
import { list } from '../../helpers/list'
import { useFetchNivelesQuery } from "../../features/Bi";

export const Niveles = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsloading] = useState(false)
    const [cliente, desde, hasta] = ['482', '4200', '4210']
    const { data } = useFetchNivelesQuery({ cliente, desde, hasta })

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

    const submit = () => {
        // setIsloading(!isLoading)
        const mater = form.getFieldValue('materiales')
        const mm = mater.split('\n')

        const result = list.filter(item => mm.includes(item))
        console.log(result)
        console.log(mm)
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
                        <Button icon={<SearchOutlined />} htmlType="submit" type="default" color="blue" className="border border-blue-500" loading={isLoading} >Search</Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}