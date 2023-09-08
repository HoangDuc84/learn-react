import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, FormatDate) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(url);
        let data = res.data && res.data ? res.data : [];
        // if (data && data.length > 0 && FormatDate === true) {
        //   data.map((item) => {
        //     item.data = moment(item.data).format("DD/MM/");

        //     return item;
        //   });
        //   data = data.reverse();
        // }

        setdata(data);
        setLoading(false);

        setError(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [url]);
  return {
    loading,
    error,
    data,
  };
};
export default useFetch;
