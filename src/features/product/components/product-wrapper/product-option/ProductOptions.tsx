import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, type MenuProps } from "antd";
import React from "react";

const ProductOptions = ({ item }: { item: any }) => {
    // const { updateProduct, deleteProduct } = useProduct();

    // const handleDelete = () =>
    //     deleteProduct.mutate({ id: item.id, body: { isArchive: !item.isArchive } });

    // const handleUpdate = () => {
    //     updateProduct.mutate({ id: item.id, body: { pin: !item.pin } });
    // }

    const items: MenuProps["items"] = [
        {
            label: <span className=" block" /*onClick={handleUpdate}*/>
                Update
            </span>,
            key: "0",
        },
        {
            label: <span className=" block" /*onClick={handleDelete}*/>Delete</span>,
            key: "1",
        },
    ];
    return (
        <Dropdown menu={{ items }} trigger={["click"]}>
            <Button>
                <MoreOutlined />
            </Button>
        </Dropdown>
    );
};

export default React.memo(ProductOptions);
