import { ReactComponent as whatsapp } from "../../assets/SVG/whatsapp.svg";

export const cardColors = [
  "F94144",
  "F3722C",
  "ED8D4C",
  "F8961E",
  "F9C74F",
  "90BE6D",
  "43AA8B",
  "738CA2",
  "43AA8B",
  "00A6A6",
  "9C89B8",
];

export const cardInputsData = (
  activedWhatsappIcon = false,
  onClickWhatsappIcon
) => [
  {
    placeholder: "First Name",
    name: "f_name",
    type: "fname",
    required: true,
    minLength: 2,
  },
  {
    placeholder: "Last Name",
    name: "l_name",
    type: "lname",
    required: true,
    minLength: 2,
  },
  {
    placeholder: "Position / Role",
    name: "position",
    type: "text",
    required: true,
    minLength: 2,
  },
  {
    placeholder: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    placeholder: "Phone Number",
    name: "phone_num",
    type: "text",
    required: true,
    Icon: whatsapp,
    activedIcon: activedWhatsappIcon,
    onClickIcon: onClickWhatsappIcon,
    minLength: 10,
    maxLength: 10,
  },
  {
    placeholder: "Company Name",
    name: "compnay_name",
    type: "text",
    required: true,
  },
  {
    placeholder: "Address",
    name: "address",
    type: "text",
    required: true,
  },
  {
    placeholder: "Website",
    name: "website",
    type: "text",
    required: true,
  },
  {
    placeholder: "Facebook",
    name: "fb",
    type: "text",
    required: true,
  },
  {
    placeholder: "Instagram",
    name: "insta",
    type: "text",
    required: true,
  },
];
