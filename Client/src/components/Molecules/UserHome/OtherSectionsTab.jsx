import Button from "@/components/Atoms/Buttons/Buttons";
import Card from "@/components/Atoms/Card/Card";
import Modal from "@/components/Atoms/Modals/Modal";
import { H3 } from "@/components/Atoms/Shared/headings";
import InputComponent from "@/components/Atoms/Shared/Input";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const OtherSectionsTab = ({ theme }) => {
  // states
  const [openModal, setOpenModal] = useState(false);
  //ui
  const background = theme?.background;
  return (
    <>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Add More Sections"
        confirmText="Add"
      >
        <InputComponent backgroundColor={background} type="password" />
      </Modal>
      <Card background={background}>
        <div className="flex justify-between w-full">
          <H3>More Section</H3>
          <Button color={theme?.primary} onClick={() => setOpenModal(true)}>
            <Plus /> Add Sections
          </Button>
        </div>
      </Card>
    </>
  );
};

export default OtherSectionsTab;
