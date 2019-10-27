import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactFilter() {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef();

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  function handleChange(e) {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  }

  return (
    <form>
      <input
        id="contactFilter"
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={handleChange}
      />
    </form>
  );
}

export default ContactFilter;
