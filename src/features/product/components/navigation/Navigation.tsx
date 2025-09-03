import { PlusOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import React, { type FC } from "react";
import { useShow } from "@/shared/hooks/useShow";
import ProductPopup from "../product-popup/ProductPopup";
import Title from "@/shared/ui/Title";

interface Props {
    data: undefined | any;

}

const Navigation: FC<Props> = ({ data }) => {
    const { handleCancel, handleShow, isModalOpen } = useShow();

    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <Badge count={data?.total} style={{ backgroundColor: '#000' }}>
                    <div>
                        <Title className={"mb-4"}>
                            Product ro'yhati
                        </Title>
                    </div>
                </Badge>

                <div>
                    <Button onClick={handleShow} type="primary">
                        <PlusOutlined />
                    </Button>
                </div>
            </div>
            {isModalOpen && (
                <ProductPopup
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                />
            )}
        </>
    );
};

export default React.memo(Navigation);
