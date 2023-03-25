import React, { useEffect, useState } from "react";
import get from "lodash.get";
import map from "lodash.map";
import { Form, Input, InputNumber, Button, Switch, Card, Radio } from "antd";
import { FormItemProps } from "antd/lib/form";
import { DeleteOutlined } from "@ant-design/icons";
import { themes } from "./config";

type ItemConfig = {
    type: string;
    value: string;
    label: string;
    formItemProps?: FormItemProps;
    cfg?: {
        [k: string]: any /**其它和组件本身有关的配置 */;
    };
}

type Props = {
    name: string;
    value: {
        [key: string]: any;
    };
    onChange: (value: any, immediately?: boolean) => void;
    config: ItemConfig[];
}

type FProps = { value: any; onChange?: (v: any) => void };

function Range({
    value = [],
    onChange,
}: {
    value: string[];
    onChange?: (v: any) => void;
}) {
    const handleChange = (v: any, index: number) => {
        if (index === 0) {
            onChange && onChange([v, value[1]]);
            return;
        }
        onChange && onChange([value[0], v]);
    };
    return (
        <Input.Group compact>
            <Input
                onChange={(e) => handleChange(e.target.value, 0)}
                style={{ width: "50%" }}
                value={value[0]}
            />
            <Input
                onChange={(e) => handleChange(e.target.value, 1)}
                style={{ width: "50%" }}
                value={value[1]}
            />
        </Input.Group>
    );
}

// eslint-disable-next-line react/display-name
const FormItemComponentMap = (type: string) => (props: FProps) => {
    switch (type) {
        case "theme":
            return (
                <Radio.Group {...props} value={props.value} buttonStyle="solid">
                    {themes.map((t) => (
                        <Radio.Button key={t.key} value={t.key}>
                            {t.name}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            );
        case "switch":
            return <Switch {...props} checked={props.value} />;
        case "input":
            return <Input {...props} />;
        case "number":
            return <InputNumber {...props} />;
        case "textarea":
            return <Input.TextArea rows={4} {...props} />;
        case "range":
            return <Range {...props} />;
        default:
            return <Input />;
    }
}

export const FormCreator: React.FC<Props> = ({
    name,
    value,
    onChange,
    config
}) => {

    const handleChange = (values: any) => {
        let immediately = false;
        const keys = Object.keys(values);
        if (
            keys.includes("theme") ||
            keys.includes("display") ||
            keys.includes("circle")
        ) {
            immediately = true;
        }
        onChange(
            {
                [name]: { ...value, ...values },
            },
            immediately
        );
    }

    return (
        <div className="form-creator">
            <Card>
                <Form
                    initialValues={value}
                    autoComplete='off'
                    onValuesChange={handleChange}
                >
                    {
                        map(config, item => {
                            return (
                                <Form.Item
                                    key={item.value}
                                    label={item.label}
                                    name={item.value}
                                    wrapperCol={item.label ? { span: 18 } : { span: 24 }}
                                    {...(item.formItemProps || {})}
                                >
                                    {FormItemComponentMap(item.type)({
                                        ...(item.cfg || {}),
                                        value: get(value, [item.value]),
                                    })}
                                </Form.Item>
                            )
                        })
                    }
                </Form>
            </Card>
        </div>
    )
}

type ListProps = {
    name: string;
    config: ItemConfig[];
    value: {
        [key: string]: any;
    };
    onChange: (v: any, immediately?: boolean) => void;
};
export const FormListCreator: React.FC<ListProps> = ({
    name,
    config,
    onChange,
    value,
}) => {
    const onValuesChange = (value: any, allValues: any) => {
        onChange(allValues);
    };
    return (
        <Form
            className="form-creator"
            autoComplete="off"
            initialValues={value}
            onValuesChange={onValuesChange}
        >
            <Form.List name={name}>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }, index) => (
                            <Card style={{ marginBottom: 12 }} key={index}>
                                <Button
                                    className="remove-icon"
                                    icon={<DeleteOutlined />}
                                    onClick={() => remove(index)}
                                    type="primary"
                                    ghost
                                ></Button>

                                {map(config, (item) => {
                                    return (
                                        <Form.Item
                                            name={[name, item.value]}
                                            key={item.value}
                                            label={item.label}
                                            labelCol={{ span: 4 }}
                                            wrapperCol={item.label ? { span: 18 } : { span: 24 }}
                                        >
                                            {FormItemComponentMap(item.type)({
                                                ...(item.cfg || {}),
                                                value: get(value, [item.value]),
                                            })}
                                        </Form.Item>
                                    );
                                })}
                            </Card>
                        ))}
                        <Form.Item>
                            <Button type="primary" ghost onClick={() => add({})} block>
                                添加
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form>
    );
};
