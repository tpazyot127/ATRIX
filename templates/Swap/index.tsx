import { SetStateAction, useRef, useState } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import { APP_ROUTE } from "@/utils/commom";
import { cryptos } from "@/mocks/cryptos";

const SwapPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchField, setSearchField] = useState("");

  const filteredPersons = cryptos.filter((item) => {
    return item.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }): any => {
    setSearchField(event.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout layoutWhite route={APP_ROUTE}>
      <Main
        showModal={showModal}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleChangeData={handleChange}
      />
    </Layout>
  );
};

export default SwapPage;
