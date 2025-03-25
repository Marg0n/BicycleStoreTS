import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex, Skeleton, Switch } from "antd";
import { useState } from "react";

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

export interface ItemData {
  brand: string;
  description: string;
  inStock: boolean;
  name: string;
  quantity: number;
  type: string;
  updatedAt: string;
  _id: string;
  price: number;
  createdAt: string;
}

interface ItemsCardProps {
  data: ItemData;
  isPending: boolean;
}

const ItemsCard: React.FC<ItemsCardProps> = ({ data, isPending }) => {
  // loading state
  const [loading, _setLoading] = useState<boolean>(isPending);

  // destructure items
  const {
    brand,
    description,
    inStock,
    name,
    quantity,
    type,
    updatedAt,
    _id,
    price,
    createdAt,
  } = data;

  return (
    <>
      <Flex
        gap="middle"
        align="start"
        vertical
        className="hover:shadow-blue-600 shadow-2xl hover:scale-105 rounded-2xl"
      >
        {/* <Switch
          checked={!loading}
          onChange={(checked) => setLoading(!checked)}
        /> */}

        {loading ? (
          <div className="w-full p-6">
            <Skeleton active avatar paragraph={{ rows: 4 }} />
          </div>
        ) : (
          <Card loading={loading} actions={actions} style={{ minWidth: 200 }}>
            <img
              alt="Bicycle"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              className="mb-6 w-full"
            />
            <Card.Meta
              className="max-h-68"
              // avatar={
              //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              // }
              title={name}
              description={
                <div className="space-y-2">
                  <p className="mb-2 font-semibold">{description}</p>
                  <p className="flex justify-between">
                    <span className="font-medium">Brand:</span>
                    <span className="font-serif">{brand}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Type:</span>
                    <span className="font-serif">{type}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="font-serif">${price}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Quantity:</span>
                    <span className="font-serif">{quantity}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">In Stock:</span>
                    <span className="font-serif">{inStock ? "Yes" : "No"}</span>
                  </p>
                </div>
              }
            />
          </Card>
        )}
      </Flex>
    </>
  );
};

export default ItemsCard;
