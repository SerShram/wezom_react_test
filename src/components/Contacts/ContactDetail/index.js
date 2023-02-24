import React from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";

const ContactDetail = () => {
  const params = useParams();
  return (
    <h2>{`one contact id ${params.id}`}</h2>
  );
}

export default ContactDetail;