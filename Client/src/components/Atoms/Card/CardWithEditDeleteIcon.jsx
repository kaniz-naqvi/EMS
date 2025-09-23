import React from "react";
import Card from "./Card";
import { getIcon } from "@/utils/helpers/iconsHelper";
import IconContainerButton from "../Buttons/IconContainerButton";

const CardWithEditDeleteIcon = ({
  title,
  description,
  date,
  duration,
  name,
  icon,
  onEdit,
  onDelete,
  showActions = true,
  primaryColor = "#0E6BA8",
  background,
  rounded,
  grayText,
  grayBg,
}) => {
  const IconComponent = getIcon(icon);
  const TitleIcon = getIcon("title");
  const DescriptionIcon = getIcon("description");
  const DateIcon = getIcon("date");
  const DurationIcon = getIcon("duration");
  const NameIcon = getIcon("user");
  const EditIcon = getIcon("edit");
  const DeleteIcon = getIcon("delete");

  return (
    <Card background={background} rounded={rounded}>
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="space-y-2 sm:space-y-3">
            {title && (
              <div className="flex items-center space-x-2">
                {TitleIcon && <TitleIcon size={18} color={primaryColor} />}
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                  {title}
                </h3>
              </div>
            )}

            {description && (
              <div className="flex items-start space-x-2">
                {DescriptionIcon && (
                  <DescriptionIcon
                    size={16}
                    color={primaryColor}
                    className="mt-1"
                  />
                )}
                <p className="text-sm sm:text-base opacity-75">{description}</p>
              </div>
            )}

            {name && (
              <div className="flex items-center space-x-2">
                {NameIcon && <NameIcon size={16} color={primaryColor} />}
                <p className="text-sm sm:text-base">{name}</p>
              </div>
            )}

            {date && (
              <div className="flex items-center space-x-2">
                {DateIcon && <DateIcon size={14} color={primaryColor} />}
                <p className="text-xs sm:text-sm opacity-60">{date}</p>
              </div>
            )}

            {duration && (
              <div className="flex items-center space-x-2">
                {DurationIcon && (
                  <DurationIcon size={16} color={primaryColor} />
                )}
                <p className="text-sm sm:text-base">{duration}</p>
              </div>
            )}
          </div>

          {showActions && (onEdit || onDelete) && (
            <div className="flex space-x-2 self-end sm:self-auto">
              {onEdit && EditIcon && (
                <IconContainerButton
                  onClick={onEdit}
                  IconComponent={EditIcon}
                  primaryColor={primaryColor}
                  background={grayBg}
                  icon={grayText}
                />
              )}
              {onDelete && DeleteIcon && (
                <IconContainerButton
                  onClick={onDelete}
                  IconComponent={DeleteIcon}
                  primaryColor={primaryColor}
                  background={grayBg}
                  icon={grayText}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardWithEditDeleteIcon;
