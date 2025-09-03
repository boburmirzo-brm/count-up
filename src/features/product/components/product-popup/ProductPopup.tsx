import React from "react";
import { Button, Input, Modal, Form, InputNumber, Select } from "antd";
import { useProduct } from "../../service/useProduct";
import TextArea from "antd/es/input/TextArea";
// import { useQueryClient } from "@tanstack/react-query";

type FieldType = {
    title?: string;
    price?: string;
    quantity?: string;
    categoryId?: string;
    units?: string;
    comment?: string;
};

interface Props {
    isModalOpen: boolean;
    handleCancel: () => void;
    previousData?: any;
}

const ProductPopup: React.FC<Props> = ({
    handleCancel,
    isModalOpen,
    previousData,
}) => {
    const { createProduct, updaProduct, getCategory } = useProduct();
    const { isPending } = createProduct;
    const { data } = getCategory({})
    // const queryClient = useQueryClient();

    const handleSubmit = (values: FieldType) => {
        const product = {
            title: values.title,
            price: values.price,
            comment: values.comment,
            quantity: values.quantity,
            units: values.units,
            categoryId: values.categoryId
        };


        if (previousData) {
            updaProduct.mutate(
                { id: previousData?.id, body: product },
                {
                    onSuccess: () => {
                        // queryClient.invalidateQueries(["products"]);
                        handleCancel();
                    },
                }
            );
        } else {
            createProduct.mutate(product, {
                onSuccess: () => {
                    handleCancel();
                },
            });
        }
    };
    return (
        <>
            <Modal
                title={
                    `${previousData ? "tahrirlash" : "qo'shish"}`
                }
                closable={{ "aria-label": "Custom Close Button" }}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={false}
            >
                <Form
                    name="basic"
                    initialValues={previousData}
                    onFinish={handleSubmit}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item<FieldType>
                        label="Nomi"
                        name="title"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Narxi"
                        name="price"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Soni"
                        name="quantity"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Units"
                        name="units"
                        rules={[
                            { required: true, message: "Please input your password!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Sharx"
                        name="comment"
                        rules={[
                            { required: true, message: "Please input your password!" },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Category tanlang"
                        name="categoryId"
                        rules={[
                            { required: false, message: "Please input your password!" },
                        ]}
                    >
                        <Select
                            style={{ width: '100%' }}
                            allowClear
                            options={Array.isArray(data) ? data.map((item: any) => ({
                                value: item.id,
                                label: item.name,
                            })) : []}
                            placeholder="select it"
                        />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button
                            loading={isPending || updaProduct.isPending}
                            className="w-full"
                            type="primary"
                            htmlType="submit"
                        >
                            {"Saqlash"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ProductPopup;
