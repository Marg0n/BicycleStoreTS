import {
  EditOutlined,
  EllipsisOutlined,
  FrownOutlined,
  MehOutlined,
  SettingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex, Rate, Skeleton, Switch } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  image: string;
  type: string;
  rating: number;
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
    image,
    type,
    rating,
    updatedAt,
    _id,
    price,
    createdAt,
  } = data;

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const customIcons: Record<number, React.ReactNode> = {
    1: "😢",
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: "😁",
  };

  return (
    <Link to={''}>
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
            {!image ? (
              <img
                alt="Bicycle"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                className="mb-6 w-full"
              />
            ) : (
              <img alt="Bicycle" src={image} className="mb-6 w-full h-52" />
            )}

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
                  <p className="flex justify-between">
                    <span className="font-medium">Rating:</span>
                    {/* <span className="font-serif">{rating}⭐</span> */}
                    <Rate
                      tooltips={desc}
                      defaultValue={rating}
                      character={({ index = 0 }) => customIcons[index + 1]}
                      disabled 
                    />
                    {/* {rating ? <span>{desc[rating - 1]}</span> : null} */}
                  </p>
                </div>
              }
            />
          </Card>
        )}
      </Flex>
    </Link>
  );
};

export default ItemsCard;
