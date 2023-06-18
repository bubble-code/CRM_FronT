import { Divider, Form, AutoComplete, Input, Button } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import { useState } from "react";
import { list } from '../../helpers/list'

export const Niveles = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsloading] = useState(false)

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


    }

    return (
        <div className="flex flex-col">
            <Divider style={{ color: 'blue', borderColor: 'blue' }}>
                <div className="mt-4 text-center" >
                    <span className="mt-4 border rounded-lg text-blue-500 font-extralight uppercase text-xs tracking-wider border-blue-500  p-2 px-4">{'Selecciones un Parametro'}</span>
                </div>
            </Divider>
            <div className="flex">
                <Form  {...formItemLayout} form={form} title="Type Data" className="flex flex-col gap-4" onFinish={submit}>
                    <div className="flex gap-3 justify-center">
                        <Form.Item label="Cliente" name='cliente' labelAlign="right" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                            <AutoComplete dropdownMatchSelectWidth={252} onSearch={() => { }} options={[]}>
                                <Input.Search />
                            </AutoComplete >
                        </Form.Item>
                        <div className="flex w-[400px]">
                            <span className="ml-4 mr-3">Familia:</span>
                            <Form.Item name='desde' className="w-1/3" required>
                                <Input style={{ background: `'rgb(33 150 243 / 0.3)'` }}
                                    placeholder="Desde:" className="text-right" required
                                />
                            </Form.Item>
                            <Form.Item name='hasta' className="w-1/3" required>
                                <Input style={{ background: `'rgb(33 150 243 / 0.3)'` }}
                                    placeholder="Hasta:" className="text-right"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button icon={<SearchOutlined />} htmlType="submit" type="default" color="blue" className="border border-blue-500" loading={isLoading} >Search</Button>
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item className="w-[300px]" name='materiales' required>
                        <Input.TextArea cols={1} rows={15} />
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}