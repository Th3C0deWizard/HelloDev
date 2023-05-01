import Icon from "./Icon";
import DropdownAvatar from "./DropdownAvatar";
import { useState } from "react";

function Avatar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        id="dropdownUserAvatarButton"
        className="relative flex justify-center items-center mr-5 ml-24 bg-[#0069a3]"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon
          path="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          w={10}
          h={10}
          color="white"
        />
      </button>

      {isOpen && <DropdownAvatar />}
    </>
  );
}

export default Avatar;
