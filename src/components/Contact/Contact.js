import "./Contact.css";
import male from "../../assets/images/male.png";
import female from "../../assets/images/female.png";
import unknown from "../../assets/images/unknown.png";
import male_avatar from "../../assets/images/male-avatar.png";
import female_avatar from "../../assets/images/female-avatar.png";
import anonymous from "../../assets/images/anonymous-avatar.png";

export const Contact = (props) => {
  const { firstName, lastName, phone, gender } = props.data;

  const genderValue =
    gender === "male" ? "male" : gender === "female" ? "female" : "unknown";

  const srcGenderIcon =
    genderValue === "male" ? male : genderValue === "female" ? female : unknown;

  const srcGenderAvatar =
    genderValue === "male"
      ? male_avatar
      : genderValue === "female"
      ? female_avatar
      : anonymous;

  return (
    <div className="Contact">
      <div className="IMG">
        <img
          className="AvatarImage"
          src={srcGenderAvatar}
          alt={`${genderValue} avatar image`}
        />
      </div>
      <div className="Content">
        <div className="fullName">
          {firstName} {lastName}
          <img src={srcGenderIcon} alt={`${genderValue} icon`} />
        </div>
        <div className="phone">{phone}</div>
      </div>
    </div>
  );
};

export default Contact;
