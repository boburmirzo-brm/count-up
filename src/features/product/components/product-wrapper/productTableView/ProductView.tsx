import { useParamsHook } from "@/shared/hooks/useParamsHook";
import { PushpinOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React, { type FC } from "react"
import { Link } from "react-router-dom";

interface Props {
    data: undefined | any;
    loading: boolean;
}

const ProductView: FC<Props> = ({ data, loading }) => {
    const { getParam } = useParamsHook();
    const page = getParam("page") || "1";

    const columns = [
        {
            title: "№",
            dataIndex: "index",
            key: "index",
            render: (_value: any, item: any, index: number) => {
                return <span>
                    <span>{index + 1 + (Number(page) - 1) * 10}</span>
                    {
                        item.pin && <PushpinOutlined />
                    }
                </span>;
            },
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (text: string, item: any) => {
                return <Link to={`/product/${item.id}`}>{text}</Link>
            }
        },
        {
            title: "Units",
            dataIndex: "units",
            key: "units",
            render: (text: any) => {
                return <span title={text} className="w-[200px] line-clamp-1 ">{text}</span>;
            },
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (number: number) => {
                return (
                    <b  >
                        {number}
                    </b>
                );
            },
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (number: number) => {
                return (
                    <b
                        style={{
                            color: number < 0 ? "crimson" : number > 0 ? "green" : "grey",
                        }}
                    >
                        {number.fprice()}
                    </b>
                );
            },
        },

        {
            title: "CreatedAt",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (number: string) => {
                return (
                    <b
                    >
                        {number.slice(0, 10)}
                    </b>
                );
            },
        },

    ];

    return (
        <>
            <div className="w-full overflow-x-auto">
                <Table
                    loading={loading}
                    dataSource={data}
                    rowKey={"id"}
                    columns={columns}
                    pagination={false}
                    scroll={{ x: 900 }}
                />
            </div>
        </>
    )
}

export default React.memo(ProductView)
