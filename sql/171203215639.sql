/*
MySQL Backup
Source Server Version: 5.6.24
Source Database: ifttt
Date: 2017/12/3 21:56:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
--  Table structure for `robot`
-- ----------------------------
DROP TABLE IF EXISTS `robot`;
CREATE TABLE `robot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `robotId` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `uri` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `stype` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `info` text CHARACTER SET utf8,
  `secretkey` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `robot_case`
-- ----------------------------
DROP TABLE IF EXISTS `robot_case`;
CREATE TABLE `robot_case` (
  `id` int(11) NOT NULL,
  `rid` int(11) DEFAULT NULL COMMENT 'robot的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `sensor`
-- ----------------------------
DROP TABLE IF EXISTS `sensor`;
CREATE TABLE `sensor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL COMMENT '名称',
  `uri` varchar(255) NOT NULL COMMENT '唯一标识',
  `stype` varchar(255) DEFAULT NULL COMMENT '信息传输协议类型',
  `secretkey` varchar(255) DEFAULT NULL COMMENT '密匙',
  `info` text COMMENT '传感器介绍说明',
  PRIMARY KEY (`id`,`uri`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `sensor_attr`
-- ----------------------------
DROP TABLE IF EXISTS `sensor_attr`;
CREATE TABLE `sensor_attr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sensor_id` int(11) NOT NULL,
  `attr_name` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '属性标识',
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '属性名称',
  `value` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '属性值的格式，正则',
  `info` text CHARACTER SET utf8 COMMENT '属性说明',
  PRIMARY KEY (`id`,`sensor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Table structure for `sensor_case`
-- ----------------------------
DROP TABLE IF EXISTS `sensor_case`;
CREATE TABLE `sensor_case` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL COMMENT 'sensor的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `sensor_event`
-- ----------------------------
DROP TABLE IF EXISTS `sensor_event`;
CREATE TABLE `sensor_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sensor_id` int(11) NOT NULL,
  `event_name` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '事件标识',
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '事件名称',
  `value` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '事件数据格式，json',
  `info` text CHARACTER SET utf8 COMMENT '事件说明',
  PRIMARY KEY (`id`,`sensor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `space_time`
-- ----------------------------
DROP TABLE IF EXISTS `space_time`;
CREATE TABLE `space_time` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `space_time_widget`
-- ----------------------------
DROP TABLE IF EXISTS `space_time_widget`;
CREATE TABLE `space_time_widget` (
  `id` int(11) NOT NULL,
  `space_time_id` int(11) DEFAULT NULL COMMENT 'space_time',
  `widget_type` varchar(255) DEFAULT NULL COMMENT '插件类型，sensor或robot',
  `widget_id` int(11) DEFAULT NULL COMMENT 'sensor或robot的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records 
-- ----------------------------
INSERT INTO `robot` VALUES ('1','机器人一','robot1','http://ww.baidd.com/robot','http','机器人一机器人一','c75d12404125b26d666e2fd412da26bb');
INSERT INTO `sensor` VALUES ('22','test','test111','http','6be41e60b15e2d8e5f7a15c83bc0208a',NULL), ('23','test','test111','http','7e24fed9601720bf17d6b97a983e2afb',NULL), ('24','ok','可以了','server','58051e23e06daeb73c381992012b5111',NULL), ('25','a顶替','333333','Scheme','f4c2528b91912a3dc6cff07fbdd51aee',NULL), ('26','咽顶替','adfff','http','55d4a1436013bfbe96d7373c189ae0ab',NULL), ('27','RSS源监视','rssUpdate','http','1f19fdd84621192081a8495cf4e51506',NULL), ('28','asdf','cdf','local','287c578bf018aac3128eea83703bfeab',NULL), ('29','asdf','cdf','local','32d9bc6e03988def39d1d56bae184baa',NULL), ('30','我要测试','myTest','local','e1742c388789eba949d87cf1704aba1c',NULL), ('31','英雄联盟','123456','local','fe95b30b6a0da14533443cbb2aa0f859',NULL), ('32','英雄联盟APP','addd','local','469d61d7871ec79fa856033c0bfdf9c5','sd干枯 顶替天干'), ('33','英雄联盟APPs','adddssss','local','ec88e72ed57c1e6b3fa7005932e79bd4','sd干枯 顶替天干');
INSERT INTO `sensor_attr` VALUES ('7','33','attrr','attr122','sdgsg','sdfsdf'), ('10','33','sdffff','12ff','234','村股份制夺顶替'), ('11','27','rss-url','RSS地址','^https?://.*$','兼听这个Rss地址的内容'), ('12','27','find-time','检测时间间隔','\\d+','两次检查之间的时间间隔，填入数字，单位为秒。');
INSERT INTO `sensor_event` VALUES ('3','33','sdffff','sdffff','3434','有'), ('4','27','change','内容有变化','{\n\"type\": \"add\",\n\"addData\": \"<one>test</one>\",\n\"allData\": \"<xml><one>test</one></xml>\",\n\"changeTime\": 1512305283774\n}','RSS源的内容有变化时，就会触发这个事件，type是事件的类型，有add\\delete\\edit.');
