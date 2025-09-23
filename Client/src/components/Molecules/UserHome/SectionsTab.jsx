import Button from "@/components/Atoms/Buttons/Buttons";
import IconContainerButton from "@/components/Atoms/Buttons/IconContainerButton";
import Card from "@/components/Atoms/Card/Card";
import CardWithEditDeleteIcon from "@/components/Atoms/Card/CardWithEditDeleteIcon";
import { H3 } from "@/components/Atoms/Shared/headings";
import { getIcon } from "@/utils/helpers/iconsHelper";
import { AddSectionModal, DeleteConfirmationModal } from "./SectionModals";
import React, { useState } from "react";

const SectionsTab = ({ theme, otherSections }) => {
  const [modalState, setModalState] = useState({
    add: false,
    delete: false,
    edit: false,
  });
  const [activeSection, setActiveSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [editData, setEditData] = useState(null);

  const Plus = getIcon("plus");
  const background = theme?.background;
  const primary = theme?.primaryColor;
  const grayBg = theme?.grayBg;
  const grayText = theme?.grayText;

  const handleOpenAddModal = (sectionKey) => {
    setActiveSection(sectionKey);
    setEditData(null);
    setModalState((prev) => ({ ...prev, add: true }));
  };

  const handleOpenEditModal = (sectionKey, item, index) => {
    setActiveSection(sectionKey);
    setActiveItem(index);
    setEditData(item);
    setModalState((prev) => ({ ...prev, add: true }));
  };

  const handleOpenDeleteModal = (sectionKey, index) => {
    setActiveSection(sectionKey);
    setActiveItem(index);
    setModalState((prev) => ({ ...prev, delete: true }));
  };

  const handleAddSection = (formData) => {
    console.log("Add/Edit section ", {
      section: activeSection,
      data: formData,
      isEdit: !!editData,
      index: activeItem,
    });
    setModalState((prev) => ({ ...prev, add: false }));
  };

  const handleDeleteSection = () => {
    console.log("Delete section:", {
      section: activeSection,
      index: activeItem,
    });
    setModalState((prev) => ({ ...prev, delete: false }));
  };

  return (
    <>
      <AddSectionModal
        isOpen={modalState.add}
        onClose={() => {
          setModalState((prev) => ({ ...prev, add: false }));
          setActiveSection(null);
          setEditData(null);
          setActiveItem(null);
        }}
        onConfirm={handleAddSection}
        sectionKey={activeSection}
        theme={theme}
        editData={editData}
      />

      <DeleteConfirmationModal
        isOpen={modalState.delete}
        onClose={() => setModalState((prev) => ({ ...prev, delete: false }))}
        onConfirm={handleDeleteSection}
        itemName={activeSection}
      />

      <Card background={background}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 gap-3">
          <H3>More Sections</H3>
          <Button
            color={primary}
            className="w-full lg:w-auto"
            onClick={() => handleOpenAddModal(null)}
          >
            <Plus /> Add Section
          </Button>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {Object.entries(otherSections).map(([sectionKey, sectionItems]) => (
            <div key={sectionKey}>
              <div
                className="flex flex-row mb-2 gap-2 
                items-center  
             justify-between"
              >
                <H3 className="capitalize">{sectionKey}</H3>
                <IconContainerButton
                  onClick={() => handleOpenAddModal(sectionKey)}
                  IconComponent={Plus}
                  primaryColor={primary}
                  background={grayBg}
                  icon={grayText}
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
                      onEdit={() => handleOpenEditModal(sectionKey, item, idx)}
                      onDelete={() => handleOpenDeleteModal(sectionKey, idx)}
                      grayText={grayText}
                      grayBg={grayBg}
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

export default SectionsTab;
