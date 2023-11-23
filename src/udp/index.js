import dgram from "dgram";

import { udp } from "../setting";
const { prot, address } = udp;

const client = dgram.createSocket("udp4");


export const initUdp = (option = {}) => {
  const { success, error, close } = option;
  client.on("message", (msg, info) => {
    if (!success) return;
    success(msg, info);
  });

  client.on("error", (err) => {
    if (!error) return;
    error(err);
  });

  client.on("close", () => {
    if (!close) return;
    close();
  });

  client.bind(prot, address);

  const send = (message) => {
    if (!message) return;
    // client.send(message, 8080, "192.168.88.165", function (err, bytes) {
    //   send();
    // });
    client.send(message, 8080, "172.20.20.110", function (err, bytes) {
      send();
    });
  }

  return send

};
