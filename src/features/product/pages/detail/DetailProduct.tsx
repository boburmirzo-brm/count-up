import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";
import { useParams } from "react-router-dom";
import { Button, Skeleton, type MenuProps } from "antd";
import Options from "@/shared/ui/Options";
import TelPopup from "@/shared/components/tel-popup/TelPopup";
import { useShow } from "@/shared/hooks/useShow";
import { useProduct } from "../../service/useProduct";

const DetailProduct = () => {
    console.log("salom");

    const { id } = useParams();
    const { getOneProduct, getOneCategory } = useProduct();
    const { data, isPending } = getOneProduct(id || "");
    const { data: CategoryData } = getOneCategory(data?.categoryId);

    const { handleShow } = useShow();

    const handleArchive = () => {

    };

    const items: MenuProps["items"] = [
        {
            label: (
                <span className=" block" onClick={handleShow}>
                    Update
                </span>
            ),
            key: "0",
        },
        {
            label: (
                <span className="block" onClick={handleArchive}>
                    Delete
                </span>
            ),
            key: "1",
        },
    ];

    return (
        <div className="flex gap-4 flex-col">
            {isPending ? (
                <Box>
                    <Skeleton active />
                </Box>
            ) : (
                <Box>
                    <div className="flex justify-between max-[550px]:flex-col relative">
                        <div className=" flex flex-col items-start gap-2">

                            <Title>{data?.title}</Title>
                            <p className=" text-gray-500">{data?.productCode}</p>
                            <div className="text-sm flex  gap-3">
                                <div>
                                    <i>Category</i>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {CategoryData.name}
                                </div>
                            </div>
                        </div>
                        <div className=" flex items-end flex-col gap-2">
                            <div className="max-[550px]:absolute top-0 right-0">
                                <Options items={items} />
                            </div>
                            <h2
                                style={{
                                    color:
                                        data?.price < 0
                                            ? "crimson"
                                            : data?.price > 0
                                                ? "green"
                                                : "grey",
                                }}
                                className="text-2xl font-bold"
                            >
                                {data?.price?.fprice()}
                            </h2>
                            <div>
                                <p className="text-xs text-gray-500">Asosiy raqam</p>
                                <TelPopup phoneNumber={data?.quantity} />
                            </div>
                            {data?.totalPrice && (
                                <div>
                                    <p className="text-xs text-gray-500">Ikkinchi raqam</p>
                                    <TelPopup phoneNumber={data?.totalPrice} />
                                </div>
                            )}
                            <div className="flex gap-3">
                                <Button>
                                    Sotish
                                </Button>
                                <div>
                                    <Button>To'lov</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            )}
        </div>
    );
};

export default React.memo(DetailProduct);
