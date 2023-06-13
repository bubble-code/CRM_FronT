import { Form, Input, Button, Tooltip, Divider, AutoComplete, Image } from "antd";
import Proptypes from 'prop-types';
import { useEffect, useMemo, useState } from "react";
import { useFetchEmpresaQuery, useUpdateEmpresaMutation } from "../../features/empresa-api-slice";

export const FormDatosEmpresa = () => {

    const list = useMemo(() => getRandomRearch(), [])
    const [options, setOptions] = useState(list);
    const [form] = Form.useForm();
    const { isLoading, data = [] } = useFetchEmpresaQuery()
    const [updateEmpresa, { isLoading: postLoading }] = useUpdateEmpresaMutation()
    const dat = data[0] || {}
    const { DescEmpresa, image, Cif, Direccion, ZonaVitivinicola, CodPostal, Poblacion, Provincia, Telefono, Fax, IDPais, Email, IDCAE, web, Autoridad, IDConsignatario, IDBuzonEDI, IDEmpresa, HorasOficiales, IDCNAE, CIPAdquiriente, CIPFabricante, Libro, RegistroMercantil, Hoja, Folio, Seccion, Tomo, DatosRegistrales, Logo } = dat
    // const img = `data:image/jpeg;base64,${Logo?.data}` || '';
    form.setFieldsValue({ DescEmpresa, Cif, Direccion, ZonaVitivinicola, Provincia, IDPais, Email, IDCAE, web, Autoridad, Telefono, Fax, IDConsignatario, IDBuzonEDI, 'details': `${IDEmpresa + ' ' + DescEmpresa}`, HorasOficiales, CIPAdquiriente, CIPFabricante, DatosRegistrales, CodPostal, Poblacion, Libro, RegistroMercantil, Folio, Seccion, Hoja, IDCNAE })

    const handleBlur = () => {
        updateEmpresa(form.getFieldsValue())
    }

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
        <Form {...formItemLayout} className="grid grid-cols-2 gap-2 self-start" form={form} onFinish={handleBlur}>
            {/* <Button htmlType="submit">Guardar</Button> */}
            <Form.Item label="Empresa" name='DescEmpresa' labelAlign="left" initialValue={DescEmpresa}>
                <TooltipInput placeholder="Type de Company Name"/>
            </Form.Item>
            <Form.Item label="Doc.Identif" name='Cif' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={Cif}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <Form.Item label="Direccion" name='Direccion' labelAlign="left" initialValue={Direccion}>
                <TooltipInput placeholder={"Type the address"} />
            </Form.Item>
            <Form.Item label="Zona" name='ZonaVitivinicola' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={ZonaVitivinicola}>
                <TooltipInput placeholder={''} />
            </Form.Item>
            <div className="grid grid-cols-2 gap-2 self-start">
                <div>
                    <Form.Item label="Cod.Postal" name='CodPostal' labelAlign="left" labelCol={{ span: 6 }} initialValue={CodPostal}>
                        <PhoneInput />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item label="Poblacion" name='Poblacion' labelAlign="right" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} initialValue={Poblacion}>
                        <TooltipInput placeholder={""} />
                    </Form.Item>
                </div>
            </div>

            <Form.Item label="Provincia" name='Provincia' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={Provincia}>
                <TooltipInput placeholder={""} />
            </Form.Item>
            <div className="grid grid-cols-2 gap-2 self-start">
                <div>
                    <Form.Item label="Telefono" name='Telefono' labelAlign="left" labelCol={{ span: 6 }} initialValue={Telefono}>
                        <PhoneInput />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item label="Fax" name='Fax' labelAlign="right" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} initialValue={Fax}>
                        <TooltipInput placeholder={""} />
                    </Form.Item>
                </div>
            </div>
            <Form.Item label="Pais" name='IDPais' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={IDPais}>
                <AutoComplete dropdownMatchSelectWidth={252} onSearch={handleChange} options={options}>
                    <Input.Search />
                </AutoComplete >
            </Form.Item>
            <Form.Item label="Email" name='Email' labelAlign="left" initialValue={Email}>
                <TooltipInput placeholder={""} />
            </Form.Item>
            <Form.Item label="CAE" name='IDCAE' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={IDCAE}>
                <TooltipInput placeholder={"Type the ID"} />
            </Form.Item>
            <Form.Item label="Web" name='web' labelAlign="left" initialValue={web}>
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="Autoridad" name='Autoridad' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={Autoridad}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <Form.Item label="Consigna" name='IDConsignatario' labelAlign="left" initialValue={IDConsignatario}>
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="Buzon EDI" name='IDBuzonEDI' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={IDBuzonEDI}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <Form.Item label="Empresa" name='details' labelAlign="left" initialValue={`${IDEmpresa + ' ' + DescEmpresa}`}>
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="Horas Ofic" name='HorasOficiales' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={HorasOficiales}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <dir className="col-span-2  items-start self-start text-left grid pl-0">
                <Form.Item label="C.N.A.E" name='IDCNAE' wrapperCol={{ span: 16 }} labelCol={{ span: 1.5, style: { marginLeft: 0, textAlign: 'left' } }} initialValue={IDCNAE}>
                    <TooltipInput placeholder="Type de Company Name" className="self-start ml-5" />
                </Form.Item>
            </dir>
            <Form.Item label="CIP Adquiri." name='CIPAdquiriente' labelAlign="left" initialValue={CIPAdquiriente}>
                <TooltipInput placeholder="Type de Company Name" />
            </Form.Item>
            <Form.Item label="CIP Fabrica." name='CIPFabricante' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} initialValue={CIPFabricante}>
                <TooltipInput placeholder="Enter CIF" />
            </Form.Item>
            <Divider style={{ color: 'black', borderColor: 'black' }} className="col-span-2" plain orientation="left" >
                Datos Registrales
            </Divider>
            <div className="col-span-2 grid grid-cols-3 gap-2 self-start w-[85%]">
                <Form.Item label="Libro" name='Libro' labelAlign="left" labelCol={{ span: 3 }} initialValue={Libro}>
                    <TooltipInput placeholder="Type de Company Name" />
                </Form.Item>
                <Form.Item label="Reg Mercan." name='RegistroMercantil' labelAlign="right" labelCol={{ span: 6 }} initialValue={RegistroMercantil} >
                    <TooltipInput placeholder="Enter CIF" className="mr-0 pr-0" />
                </Form.Item>
                <Form.Item label="Hoja" name='hoja' labelAlign="right" labelCol={{ span: 3 }} initialValue={Hoja}>
                    <TooltipInput placeholder="Enter CIF" />
                </Form.Item>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-2 self-start w-[85%]">
                <Form.Item label="Folio" name='Folio' labelAlign="left" labelCol={{ span: 3 }} initialValue={Folio}>
                    <TooltipInput placeholder="Type de Company Name" />
                </Form.Item>
                <Form.Item label="Seccion" name='Seccion' labelAlign="right" labelCol={{ span: 6 }} initialValue={Seccion} >
                    <TooltipInput placeholder="Enter CIF" className="mr-0 pr-0" />
                </Form.Item>
                <Form.Item label="Tomo" name='Hoja' labelAlign="right" labelCol={{ span: 3 }} initialValue={Tomo}>
                    <TooltipInput placeholder="Enter CIF" />
                </Form.Item>
            </div>
            <dir className="col-span-2  items-start self-start text-left grid pl-0">
                <Form.Item label="Datos Registrales" name='DatosRegistrales' wrapperCol={{ span: 16 }} labelCol={{ span: 1.5, style: { marginLeft: 0, textAlign: 'left' } }} initialValue={DatosRegistrales}>
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
                        src={image}
                    />
                    <div className="flex justify-around w-full mt-1">
                        <Button color="blue" onClick={() => { console.log(form.getFieldsValue()) }}>Elegir Logo</Button>
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