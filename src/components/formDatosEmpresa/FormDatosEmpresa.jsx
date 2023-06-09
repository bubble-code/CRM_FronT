import { Form, Input, Button, Tooltip, Divider, AutoComplete } from "antd";
import Proptypes from 'prop-types';

export const FormDatosEmpresa = () => {

    const [form] = Form.useForm();

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
            <Form.Item label="Zona" name='zona' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 8 }}>
                <TooltipInput placeholder={''} />
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

            <Form.Item label="Provincia" name='provincia' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 8 }}>
                <TooltipInput placeholder={""} />
            </Form.Item>
            <Form.Item label="Email" name='email' labelAlign="left" >
                <TooltipInput placeholder={""} />
            </Form.Item>
            <Form.Item label="Pais" name='pais' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 10 }}>
                <AutoComplete dropdownMatchSelectWidth={252}>
                    <Input.Search />
                </AutoComplete>
            </Form.Item>
            <Form.Item label="Web" name='web' labelAlign="left" >
                <TooltipInput placeholder={""} />
            </Form.Item>
            <Form.Item label="ID Empresa" name='idempresa' labelAlign="right" labelCol={{ span: 3 }} wrapperCol={{ span: 10 }}>
                <TooltipInput placeholder={"Type the ID"} />
            </Form.Item>
            <Form.Item className="mr-9">
                <Button color="magenta" onClick={() => { }}>Buscar</Button>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 2 }}>
                <Button color="blue" onClick={() => { }}>Activos</Button>
            </Form.Item>
            <Form.Item >
                <Button color="yellow" onClick={() => { }}>Aceptados</Button>
            </Form.Item>
            <Form.Item >
                <Button color="green" onClick={() => { }}>TODOS</Button>
            </Form.Item>
            <Divider prefixCls="dsds" style={{ color: 'black', borderColor: 'black' }} className="col-span-2" plain orientation="left" >
                dsds
            </Divider>
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