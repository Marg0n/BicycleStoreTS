import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex, Switch } from "antd";
import { useState } from "react";

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

const ItemsCard = ({ data }: { data: React.ReactNode }, isPending: boolean) => {
  // loading state
  const [loading, setLoading] = useState<boolean>(isPending);

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
      <Flex gap="middle" align="start" vertical>
        {/* <Switch
          checked={!loading}
          onChange={(checked) => setLoading(!checked)}
        /> */}
        {loading && (
          <Card
            loading={loading}
            actions={actions}
            style={{ minWidth: 300 }}
            //   cover={
            //     <img
            //       alt="example"
            //       src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            //     />
            //   }
          >
            <img
              alt="Bicycle"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              className="mb-6"
            />
            <Card.Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              }
              title="Card title"
              description={
                <>
                  <p>{name}</p>
                  <p>This is the description</p>
                </>
              }
            />
          </Card>
        )}
      </Flex>
    </>
  );
};

export default ItemsCard;
