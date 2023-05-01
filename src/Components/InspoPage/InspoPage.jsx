import React, { useEffect, useState } from "react";
import "./InspoPage.css";
import axios from "axios";

const InspoPage = () => {
  const [data, setData] = useState();

  const fetchInspo = async () => {
    try {
      await axios
        .get("https://www.boredapi.com/api/activity")
        .then((res) => setData(res.data));
    } catch (err) {
      console.error(err);
    }
    return { data };
  };

  useEffect(() => {
    fetchInspo();
  }, []);
  console.log(data);
  return (
    <div className="inspo">
      <h1>Welcome to my Inspo Page🤯</h1>{" "}
      <div className="description">
        Are you looking for inspiration to have an excellent day or to-do list?
        Look no further! I have added some creative tips and suggestion to help
        you discover new ideas. You may have forgotten you could...
      </div>
      <div className="idea">
        <p>{data?.activity}</p>
        <div>
          <span>Note: &nbsp;</span>
          This is some {data?.type} activity and will cost you about $
          {data?.price * 500}. It demands not less than {data?.participants}{" "}
          {data?.participants > 1 ? "participants." : "participant."}
        </div>
      </div>
      <button className="button" onClick={fetchInspo}>
        {" "}
        New Inspo
      </button>
    </div>
  );
};

export default InspoPage;
