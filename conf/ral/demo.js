/**
 * @file 后端服务配置DEMO
 * @author fis@baidu.com
 */

module.exports = {
  'DEMO_SERVICE': {
      unpack: 'json',
      pack: 'form',
      method: 'POST',
      encoding: 'utf-8',
      balance: 'random',
      protocol: 'http',
      retry: 2,
      path: '/AuctionBid/GetPubInfoFor5Report.ashx?req={"carSourceID":0,"auctionId":169112}&sourcetype=newpc',
      timeout: 5000,
      headers : {'Access-tk': '319096', version: '7.1' },
      server: [
          { host: '10.70.14.14', port: 6789}
      ]
  }
};
/*
var yogser1 = {
  method: "POST",
  path: '/AuctionBid/GetPubInfoFor5Report.ashx?req={"carSourceID":0,"auctionId":169112}&sourcetype=newpc',    // 重写URL PATH
  timeout: 10000, // 增加超时时间
  headers : {'Access-tk': '319096', version: '7.1' },
  server:[
      {
          host:"10.70.14.14",
          port:"6789"
      }
  ]
};
*/