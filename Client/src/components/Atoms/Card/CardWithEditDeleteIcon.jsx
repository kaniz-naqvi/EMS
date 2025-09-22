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
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-3">
            {title && (
              <div className="flex items-center space-x-2">
                {TitleIcon && <TitleIcon size={16} color={primaryColor} />}
                <h3 className="text-lg font-semibold">{title}</h3>
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
                <p className="text-sm opacity-75">{description}</p>
              </div>
            )}

            {name && (
              <div className="flex items-center space-x-2">
                {NameIcon && <NameIcon size={16} color={primaryColor} />}
                <p className="text-sm">{name}</p>
              </div>
            )}

            {date && (
              <div className="flex items-center space-x-2">
                {DateIcon && <DateIcon size={16} color={primaryColor} />}
                <p className="text-xs opacity-60">{date}</p>
              </div>
            )}

            {duration && (
              <div className="flex items-center space-x-2">
                {DurationIcon && (
                  <DurationIcon size={16} color={primaryColor} />
                )}
                <p className="text-sm">{duration}</p>
              </div>
            )}
          </div>

          {showActions && (onEdit || onDelete) && (
            <div className="flex space-x-2">
              {onEdit && EditIcon && (
                <IconContainerButton
                  onClick={onEdit}
                  IconComponent={EditIcon}
                  primaryColor={primaryColor}
                />
              )}
              {onDelete && DeleteIcon && (
                <IconContainerButton
                  onClick={onDelete}
                  IconComponent={DeleteIcon}
                  primaryColor={primaryColor}
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
