import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";

import { Button, Input, Space, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Icon from "@ant-design/icons";
import ModalForm from "./Modal";
type MainProps = {
  showModal: VoidFunction;
  isModalOpen: boolean;
  handleOk: VoidFunction;
  handleCancel: VoidFunction;
  handleChangeData: VoidFunction;
};

const Main = ({
  showModal,
  isModalOpen,
  handleOk,
  handleCancel,
  handleChangeData,
}: MainProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("appHeader", styles.title)}>SWAP</div>
    <Space direction="vertical" className={styles.border}>
      <Space direction="horizontal" className={styles.input}>
        <Input
          className={styles.inputPlaceholder}
          onChange={handleChangeData}
          placeholder="You sen"
        />
        <Button
          type="primary"
          onClick={showModal}
          className={styles.buttonModal}
        >
          BTC
          <DownOutlined />
        </Button>
      </Space>
      <Space direction="horizontal" className={styles.input}>
        <Input className={styles.inputPlaceholder} placeholder="You sen" />
        <Button
          type="primary"
          onClick={showModal}
          className={styles.buttonModal}
        >
          ETH
          <DownOutlined />
        </Button>
      </Space>

      <Button className={styles.button} onClick={() => console.log(123)}>
        Swap
      </Button>
    </Space>
    <ModalForm
      title="Choose a token"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  </div>
);

export default Main;
