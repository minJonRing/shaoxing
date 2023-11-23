
export const title = '透明墙按钮'
const ip = require("ip");

export const udp = {
  prot: '6000',
  address: ip.address(),
}
export default {
  title,
  udp
}