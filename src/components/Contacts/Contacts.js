import "./Contacts.css";

import { useEffect, useState } from "react";
import { getContactsData } from "../../shared/data";
import { Contact } from "../Contact/Contact";
import {
  ALL_GENDERS,
  FEMALE,
  MALE,
  ANONYMOUS,
} from "../../shared/gender-flags";

export function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState(ALL_GENDERS);

  useEffect(() => {
    getContactsData(search, gender)
      .then((data) => {
        setContacts(data);
      })
      .catch(console.error);
  }, [search, gender]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGenderChange = (e) => {
    const flag = {
      female: FEMALE,
      male: MALE,
      anonymous: ANONYMOUS,
    };
    const checkbox = flag[e.target.value];
    setGender(checkbox ^ gender);
  };

  return (
    <div className="contact-list">
      <div className="wrapper">
        <div className="scrollbar" id="style-3">
          <div className="force-overflow">
            <h2 className="header">CONTACTS</h2>
            <div className="search-box">
              <input
                type="text"
                className="input-search"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                autoFocus
              />
            </div>
            <div className="checkboxes">
              <div className="elCheck">
                <input
                  type={"checkbox"}
                  value={"female"}
                  id={"female"}
                  onChange={handleGenderChange}
                  defaultChecked
                />
                <label htmlFor={"female"}>Female</label>
              </div>
              <div className="elCheck">
                <input
                  type={"checkbox"}
                  value={"male"}
                  id={"male"}
                  onChange={handleGenderChange}
                  defaultChecked
                />
                <label htmlFor={"male"}>Male</label>
              </div>
              <div className="elCheck">
                <input
                  type={"checkbox"}
                  value={"anonymous"}
                  id={"anonymous"}
                  onChange={handleGenderChange}
                  defaultChecked
                />
                <label htmlFor={"anonymous"}>Anon</label>
              </div>
            </div>
            {contacts.map((contact, i) => {
              return <Contact key={i} data={contact} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
