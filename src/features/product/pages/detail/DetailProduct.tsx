import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal, Skeleton, type MenuProps } from "antd";
import Options from "@/shared/ui/Options";
import { useShow } from "@/shared/hooks/useShow";
import { useProduct } from "../../service/useProduct";
import ProductPopup from "../../components/product-popup/ProductPopup";

const DetailProduct = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { getOneProduct, getOneCategory, deleteProduct } = useProduct();

    // Faqat product chaqiramiz
    const { data, isPending } = getOneProduct(id || "");
    const { data: category, isPending: categoryLoading } = getOneCategory(data?.categoryId)

    const { handleCancel, handleShow, isModalOpen } = useShow()


    const [isModalOpenDelete, setIsModalOpen] = useState(false);
    const showModalDelete = () => {
        setIsModalOpen(true);
    };


    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };


    const handleOkDelete = () => {
        deleteProduct.mutate(id!, {
            onSuccess: () => {
                handleCancelDelete()
                navigate("/product");
            },
            onError: () => {
            },
        });
        setIsModalOpen(false);
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
                <span className="block" onClick={showModalDelete}>
                    Delete
                </span>
            ),
            key: "1",
        },
    ];


    return (
        <div className="flex gap-6 flex-col">
            {isPending ? (
                <Box>
                    <Skeleton active />
                </Box>
            ) : (
                <Box>
                    <div className="flex justify-between flex-col md:flex-row relative">

                        {/* Chap tomonda asosiy info */}
                        <div className="flex flex-col gap-4">
                            <Title className="text-2xl font-bold text-gray-800">{data?.title}</Title>
                            <p className="text-sm text-gray-500">
                                {data?.productCode || "Product code mavjud emas"}
                            </p>

                            <div className="space-y-2">
                                <div className="flex gap-2 text-sm">
                                    <span className="font-medium text-gray-600">Kategoriya:</span>
                                    <span className="text-gray-500">
                                        {categoryLoading ? "Yuklanmoqda..." : category?.name || "—"}
                                    </span>
                                </div>

                                <div className="flex gap-2 text-sm">
                                    <span className="font-medium text-gray-600">Izoh:</span>
                                    <span className="text-gray-500">{data?.comment || "—"}</span>
                                </div>

                                <div className="flex gap-2 text-sm">
                                    <span className="font-medium text-gray-600">Birlik:</span>
                                    <span className="text-gray-500">{data?.units}</span>
                                </div>

                                <div className="flex gap-2 text-sm">
                                    <span className="font-medium text-gray-600">Yaratilgan:</span>
                                    <span className="text-gray-500">
                                        {data?.createdAt?.slice(0, 10)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* O‘ng tomonda narx va miqdor */}
                        <div className="flex flex-col gap-4 items-end mt-6 md:mt-0">
                            <div className="top-2 right-2">
                                <Options items={items} />
                            </div>

                            <h2
                                className={`text-2xl font-bold ${data?.price < 0
                                    ? "text-red-600"
                                    : data?.price > 0
                                        ? "text-green-600"
                                        : "text-gray-400"
                                    }`}
                            >
                                {data?.price?.toLocaleString()} so‘m
                            </h2>

                            <div className="bg-gray-50 rounded-lg px-4 py-2 text-right shadow-sm">
                                <p className="text-xs text-gray-500">Miqdor</p>
                                <p className="text-lg font-semibold">{data?.quantity} dona</p>
                            </div>

                            {data?.totalPrice && (
                                <div className="bg-gray-50 rounded-lg px-4 py-2 text-right shadow-sm">
                                    <p className="text-xs text-gray-500">Umumiy summa</p>
                                    <p className="text-lg font-semibold">
                                        {data?.totalPrice?.toLocaleString()} so‘m
                                    </p>
                                </div>
                            )}

                            <div className="flex gap-3">
                                <Button type="primary">Sotish</Button>
                                <Button>To'lov</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            )}

            {isModalOpen && (
                <ProductPopup
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                    previousData={data}
                />
            )}

            <Modal
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenDelete}
                onOk={handleOkDelete}
                onCancel={handleCancelDelete}
            >
                <h2 className="font-bold text-[20px]">Rostanham uchirmoqchimisz?</h2>
            </Modal>
        </div>


    );
};

export default React.memo(DetailProduct);
