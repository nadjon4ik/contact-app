import { ALL_GENDERS, ANONYMOUS, FEMALE, MALE } from "./gender-flags";

const CONTACTS_DATA = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Віталік",
    lastName: "Джонсон",
    phone: "+380957318521",
    gender: "male",
  },
  {
    firstName: "Олександра",
    lastName: "Джонсон",
    phone: "+380937314561",
    gender: "female",
  },
];

export async function getContactsData(searchTerm = "", gender = ALL_GENDERS) {
  const genderValue = [];
  if (gender & MALE) genderValue.push("male");
  if (gender & FEMALE) genderValue.push("female");
  if (gender & ANONYMOUS) genderValue.push(undefined);

  return CONTACTS_DATA.map((el) => ({ ...el })).filter((item) => {
    return (
      (item.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
        item.lastName.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) >=
          0 ||
        item.phone.indexOf(searchTerm) >= 0) &&
      genderValue.includes(item.gender)
    );
  });
}
