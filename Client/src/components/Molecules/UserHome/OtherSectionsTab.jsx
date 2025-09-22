import Button from "@/components/Atoms/Buttons/Buttons";
import IconContainerButton from "@/components/Atoms/Buttons/IconContainerButton";
import Card from "@/components/Atoms/Card/Card";
import CardWithEditDeleteIcon from "@/components/Atoms/Card/CardWithEditDeleteIcon";
import Modal from "@/components/Atoms/Modals/Modal";
import { H3 } from "@/components/Atoms/Shared/headings";
import InputComponent from "@/components/Atoms/Shared/Input";
import { getIcon } from "@/utils/helpers/iconsHelper";
import React, { useState } from "react";

const OtherSectionsTab = ({ theme, otherSections }) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const Plus = getIcon("plus");
  const background = theme?.background;
  const primary = theme?.primaryColor;

  const handleOpenModal = (sectionKey) => {
    setActiveSection(sectionKey);
    setOpenModal(true);
  };

  return (
    <>
      {/* Global add section modal */}
      <Modal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setActiveSection(null);
        }}
        title={`Add to ${activeSection ? activeSection : "Sections"}`}
        confirmText="Add"
      >
        <InputComponent
          label={"Section title"}
          required
          backgroundColor={background}
          placeholder="Education"
        />
      </Modal>

      <Card background={background}>
        <div className="flex justify-between w-full items-center mb-4">
          <H3>More Section</H3>
          <Button color={primary} onClick={() => handleOpenModal(null)}>
            <Plus /> Add Section
          </Button>
        </div>

        <div className="space-y-6">
          {Object.entries(otherSections).map(([sectionKey, sectionItems]) => (
            <div key={sectionKey}>
              {/* Section heading with add button */}
              <div className="flex justify-between items-center mb-2">
                <H3 className="capitalize">{sectionKey}</H3>
                <IconContainerButton
                  // onClick={onDelete}
                  IconComponent={Plus}
                  primaryColor={primary}
                />
              </div>

              {Array.isArray(sectionItems) && sectionItems.length > 0 ? (
                <div className="space-y-4 mt-2">
                  {sectionItems.map((item, idx) => (
                    <CardWithEditDeleteIcon
                      key={idx}
                      title={item.title}
                      description={item.description}
                      duration={item.duration}
                      name={item.institution}
                      primaryColor={primary}
                      background={background}
                      onEdit={() => console.log("Edit", sectionKey, idx)}
                      onDelete={() => console.log("Delete", sectionKey, idx)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm opacity-60 italic mt-2">
                  No items added yet
                </p>
              )}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default OtherSectionsTab;
