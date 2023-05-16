import React, { useState } from "react";
import Job from "./job";
import { FormattedDate } from "react-intl";
import { FormattedMessage } from "react-intl";

const JobsList = (props) => {
  console.log(props)
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: "123428"
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: "2423012"
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: "9234028"
    },
  ]);
  //Si props esta en español poner el fondo blanco, si esta en ingles en negro
  const renderLang = () => {
    if (props.lang=="es" ||props.lang=="es-ES" )
    {return "table-light"}
    else if (props.lang=="en"||props.lang=="en-EN")
    {return "table-dark"}
  };

  return (
    <div>
      <table className="table">
        <thead className={renderLang()}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" />
            </th>
            <th scope="col">
              <FormattedMessage id="Company" />
            </th>
            <th scope="col">
              <FormattedMessage id="Salary" />
            </th>
            <th scope="col">
              <FormattedMessage id="City" />
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate" />
            </th>
            <th scope="col">
              <FormattedMessage id="Views" />
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
