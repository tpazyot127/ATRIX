import styles from "./Modal.module.sass";
import Image from "@/components/Image";
import { Button, Input, Space, Modal, List } from "antd";
import { cryptos } from "@/mocks/cryptos";
type ModalProps = {
  title: string;
  open: boolean;
  onOk: VoidFunction;
  onCancel: VoidFunction;
};

const ModalForm = ({ title, open, onOk, onCancel }: ModalProps) => (
  <Modal
    title={title}
    open={open}
    onOk={onOk}
    onCancel={onCancel}
    footer={null}
    width={550}
    className={styles.modal}
  >
    <Input
      className={styles.inputPlaceholder}
      placeholder="Search for a name or paste an address"
    />
    <Space wrap direction="horizontal" className={styles.cryptos}>
      {cryptos.map((item, index) => (
        <Button
          key={index}
          type="primary"
          onClick={() => console.log(123)}
          className={styles.buttonModal}
        >
          <Image src={item.image} width={35} height={35} alt="Post" />
          <div className={styles.bold}> {item.title}</div>
        </Button>
      ))}
    </Space>
    <div id="scrollableDiv" className={styles.scrollable}>
      <List
        dataSource={cryptos}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <Space direction="horizontal">
              <Image src={item.image} width={45} height={45} alt="Post" />
              <Space direction="vertical" className={styles.itemName}>
                <div className={styles.bold}>{item.name}</div>
                <div className={styles.fade}>{item.title}</div>
              </Space>
            </Space>
          </List.Item>
        )}
      />
    </div>
  </Modal>
);

export default ModalForm;
