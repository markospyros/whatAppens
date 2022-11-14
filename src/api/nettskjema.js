import axios from "axios";

export default axios.create({
  baseURL: "https://nettskjema.no/api",
  headers: {
    Authorization:
      "Bearer 0l12kulcfjtkor5he975jtcrj4kg05rfpoebou248andcgajbv3of2fc7hcr5opeh43oljt4i5mn5ia640ag9fgq4i7np6ivovql3idlu2jvacb8hc1kopbdndoa4r3v36pt",
  },
});
