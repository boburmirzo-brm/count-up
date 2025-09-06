import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, type MenuProps } from "antd";
import React from "react";

const ProductOptions = () => {
    const items: MenuProps["items"] = [
        {
            label: <span className=" block">
                Update
            </span>,
            key: "0",
        },
        {
            label: <span className=" block">Delete</span>,
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
