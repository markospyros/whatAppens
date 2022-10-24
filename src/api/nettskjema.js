import axios from "axios";

export default axios.create({
  baseURL: "https://nettskjema.no/api",
  headers: {
    Authorization:
      "Bearer 5owmu2ajr1140pl4nbp42muju2tb47nt1ubn2qofn01jk01911pt3qtef1gebmqfn5b9baesk2u8pui6d9conu173gi3v8np9c476ockihee5aso9dbu8de1ghkd3grjhasv",
  },
});
