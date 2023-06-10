import { Form, Input, Button, Tooltip, Divider, AutoComplete, Image } from "antd";
import Proptypes from 'prop-types';
import { useMemo, useState } from "react";

export const FormDatosEmpresa = () => {

    const list = useMemo(() => getRandomRearch(), [])
    const [options, setOptions] = useState(list);
    const [form] = Form.useForm();
    console.log(list)
    const handleChange = (value) => {
        setOptions(value ? list.filter(item => item.value.toLowerCase().includes(value.toLowerCase())) : '')
    }

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

    return (
        <Form {...formItemLayout} className="grid grid-cols-2 gap-2 self-start" form={form}>

            <Form.Item label="Empresa" name='empresa' labelAlign="left" >
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="Doc.Identif" name='cif' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <Form.Item label="Direccion" name='direccion' labelAlign="left" >
                <TooltipInput placeholder={"Type the address"} />
            </Form.Item>
            <Form.Item label="Zona" name='zona' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <TooltipInput placeholder={''} />
            </Form.Item>
            <div className="grid grid-cols-2 gap-2 self-start">
                <div>
                    <Form.Item label="Cod.Postal" name='cp' labelAlign="left" labelCol={{ span: 6 }}>
                        <PhoneInput />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item label="Poblacion" name='poblacion' labelAlign="right" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                        <TooltipInput placeholder={""} />
                    </Form.Item>
                </div>
            </div>

            <Form.Item label="Provincia" name='provincia' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <TooltipInput placeholder={""} />
            </Form.Item>
            <div className="grid grid-cols-2 gap-2 self-start">
                <div>
                    <Form.Item label="Telefono" name='telefono' labelAlign="left" labelCol={{ span: 6 }}>
                        <PhoneInput />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item label="Fax" name='fax' labelAlign="right" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                        <TooltipInput placeholder={""} />
                    </Form.Item>
                </div>
            </div>
            <Form.Item label="Pais" name='pais' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <AutoComplete dropdownMatchSelectWidth={252} onSearch={handleChange} options={options}>
                    <Input.Search />
                </AutoComplete >
            </Form.Item>
            <Form.Item label="Email" name='email' labelAlign="left" >
                <TooltipInput placeholder={""} />
            </Form.Item>
            <Form.Item label="CAE" name='cae' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <TooltipInput placeholder={"Type the ID"} />
            </Form.Item>
            <Form.Item label="Web" name='web' labelAlign="left" >
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="Autoridad" name='autoridad' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <Form.Item label="Consigna" name='consignatario' labelAlign="left" >
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="Buzon EDI" name='buzonedi' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <Form.Item label="Empresa" name='details' labelAlign="left" >
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="Horas Ofic" name='horasoficiales' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <dir className="col-span-2  items-start self-start text-left grid pl-0">
                <Form.Item label="C.N.A.E" name='cnae' wrapperCol={{ span: 16 }} labelCol={{ span: 1.5, style: { marginLeft: 0, textAlign: 'left' } }}>
                    <TooltipInput placeholder="Type de Company Name" className="self-start ml-5" />
                </Form.Item>
            </dir>
            <Form.Item label="CIP Adquiri." name='cipadquiriente' labelAlign="left" >
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="CIP Fabrica." name='horasoficiales' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <Divider prefixCls="dsds" style={{ color: 'black', borderColor: 'black' }} className="col-span-2" plain orientation="left" >
                Datos Registrales
            </Divider>
            <div className="col-span-2 grid grid-cols-3 gap-2 self-start w-[85%]">
                <Form.Item label="Libro" name='libro' labelAlign="left" labelCol={{ span: 3 }}>
                    <TooltipInput placeholder="Type de Company Name" />
                </Form.Item>
                <Form.Item label="Reg Mercan." name='registromencartil' labelAlign="right" labelCol={{ span: 6 }}  >
                    <TooltipInput placeholder="Enter CIF" className="mr-0 pr-0" />
                </Form.Item>
                <Form.Item label="Hoja" name='hoja' labelAlign="right" labelCol={{ span: 3 }}>
                    <TooltipInput placeholder="Enter CIF" />
                </Form.Item>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-2 self-start w-[85%]">
                <Form.Item label="Folio" name='folio' labelAlign="left" labelCol={{ span: 3 }}>
                    <TooltipInput placeholder="Type de Company Name" />
                </Form.Item>
                <Form.Item label="Seccion" name='registromencartil' labelAlign="right" labelCol={{ span: 6 }}  >
                    <TooltipInput placeholder="Enter CIF" className="mr-0 pr-0" />
                </Form.Item>
                <Form.Item label="Tomo" name='hoja' labelAlign="right" labelCol={{ span: 3 }}>
                    <TooltipInput placeholder="Enter CIF" />
                </Form.Item>
            </div>
            <dir className="col-span-2  items-start self-start text-left grid pl-0">
                <Form.Item label="Datos Registrales" name='datosregistrales' wrapperCol={{ span: 16 }} labelCol={{ span: 1.5, style: { marginLeft: 0, textAlign: 'left' } }}>
                    <TooltipInput placeholder="Type de Company Name" className="self-start ml-5" />
                </Form.Item>
            </dir>
            <Divider prefixCls="dsds" style={{ color: 'black', borderColor: 'black' }} className="col-span-2" plain orientation="left" >
                Logotipos
            </Divider>
            <div className="col-span-2 grid grid-cols-3 gap-2 self-start w-[85%]">
                <div className="flex flex-col justify-center col-span-1">
                    <label >Logo: Pedido,Albaranes,Facturas</label>
                    <Image
                        width={'100%'}
                        title="Logo: Pedido,Albaranes,Facturas"
                        prefix="hola"
                    />
                    <div className="flex justify-around w-full mt-1">
                        <Button color="blue" onClick={() => { }}>Elegir Logo</Button>
                        <Button color="blue" onClick={() => { }}>Borrar Logo</Button>

                    </div>
                </div>
                <div className="flex flex-col justify-center col-span-1">
                    <label >Logo: Certificado Calidad</label>
                    <Image
                        width={'100%'}
                        title="Logo: Pedido,Albaranes,Facturas"
                        prefix="hola"
                    />
                    <div className="flex justify-around w-full mt-1">
                        <Button color="blue" onClick={() => { }}>Elegir Logo</Button>
                        <Button color="blue" onClick={() => { }}>Borrar Logo</Button>

                    </div>
                </div>
                <div className="flex flex-col justify-center col-span-1">
                    <label >Logo: Otros Logos</label>
                    <Image
                        width={'100%'}
                        title="Logo: Pedido,Albaranes,Facturas"
                        prefix="hola"
                    />
                    <div className="flex justify-around w-full mt-1">
                        <Button color="blue" onClick={() => { }}>Elegir Logo</Button>
                        <Button color="blue" onClick={() => { }}>Borrar Logo</Button>

                    </div>
                </div>
                <div className="flex flex-col justify-center col-span-1">
                    <label >Logo: Otros Logos</label>
                    <Image
                        width={'100%'}
                        title="Logo: Pedido,Albaranes,Facturas"
                        prefix="hola"
                    />
                    <div className="flex justify-around w-full mt-1">
                        <Button color="blue" onClick={() => { }}>Elegir Logo</Button>
                        <Button color="blue" onClick={() => { }}>Borrar Logo</Button>

                    </div>
                </div>
            </div>
        </Form>
    )

}

const TooltipInput = (props) => {
    const { value, placeholder = "Enter Text" } = props

    const title = value ? (
        <span className="numeric-input-title">{value}</span>
    ) : (
        `${placeholder}`
    );

    return (
        <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
            <Input style={{ background: `${value ? 'rgb(33 150 243 / 0.3)' : ''}` }}
                {...props}
                placeholder={placeholder}
            />
        </Tooltip>
    );
}


const getRandomRearch = () => {

    return (new Array(10).join('.').split('.').map((_, idx) => {
        const category = `${idx}`
        return {
            value: category,
            label: (
                <div className="flex justify-between">
                    <span>
                        {`Found: ${category}`}
                    </span>
                </div>
            )
        }
    }))
}

const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\s/g, ''); // Eliminar espacios en blanco existentes
    let formattedPhoneNumber = '';
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i > 0 && i % 2 === 0) {
            formattedPhoneNumber += ' '; // Agregar espacio cada dos dígitos
        }
        formattedPhoneNumber += phoneNumber[i];
    }
    return formattedPhoneNumber;
}

const PhoneInput = (props) => {
    const { value, onChange } = props;

    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        const reg = /^[0-9\s]*$/; // Permitir solo dígitos y espacios en blanco
        if (reg.test(inputValue)) {
            const formattedValue = formatPhoneNumber(inputValue);
            onChange(formattedValue);
        }
    };
    const handleBlur = () => {
        let valueTemp = value.replace(/\s/g, ''); // Eliminar espacios en blanco antes de guardar el valor
        onChange(valueTemp);
    };

    const handleFocus = (e) => {
        const { value: inputValue } = e.target;
        const formattedValue = formatPhoneNumber(inputValue);
        onChange(formattedValue);
    }

    const title = value ? (
        <span className="numeric-input-title">{value !== '-' ? formatPhoneNumber(value) : '-'}</span>
    ) : (
        'Input a number'
    );
    return (
        <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
            <Input
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder="Input a number"
                maxLength={16}
                style={{ background: `${value ? 'rgb(33 150 243 / 0.3)' : ''}` }}
            />
        </Tooltip>
    );
};

PhoneInput.propTypes = {
    value: Proptypes.string,
    onChange: Proptypes.func
}

formatPhoneNumber.propTypes = {
    value: Proptypes.string
}
TooltipInput.propTypes = {
    value: Proptypes.string,
    placeholder: Proptypes.string
}