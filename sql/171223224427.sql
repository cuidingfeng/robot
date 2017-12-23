/*
MySQL Backup
Source Server Version: 5.6.24
Source Database: ifttt
Date: 2017/12/23 22:44:27
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `robot_action`
-- ----------------------------
DROP TABLE IF EXISTS `robot_action`;
CREATE TABLE `robot_action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `robot_id` int(11) NOT NULL,
  `event_name` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '事件标识',
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '事件名称',
  `value` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '事件数据格式，json',
  `info` text CHARACTER SET utf8 COMMENT '事件说明',
  PRIMARY KEY (`id`,`robot_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `robot_attr`
-- ----------------------------
DROP TABLE IF EXISTS `robot_attr`;
CREATE TABLE `robot_attr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `robot_id` int(11) NOT NULL,
  `attr_name` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '属性标识',
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '属性名称',
  `value` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '属性值的格式，正则',
  `info` text CHARACTER SET utf8 COMMENT '属性说明',
  PRIMARY KEY (`id`,`robot_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Table structure for `robot_case`
-- ----------------------------
DROP TABLE IF EXISTS `robot_case`;
CREATE TABLE `robot_case` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rid` int(11) DEFAULT NULL COMMENT 'robot的id',
  `stid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `rule`
-- ----------------------------
DROP TABLE IF EXISTS `rule`;
CREATE TABLE `rule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sensor_case_id` int(11) DEFAULT NULL COMMENT '如果是监听传感器的事件，则需要传感器实例id',
  `robot_case_id` int(11) DEFAULT NULL COMMENT '如果是监听机器人的执行状态，则需要机器人实例id',
  `event_id` int(11) DEFAULT NULL COMMENT '如果是传感器，则需要事件id',
  `action_id` int(11) DEFAULT NULL COMMENT '如果是机器人，则需要动作id',
  `status_id` int(11) DEFAULT NULL COMMENT '如果是状态机，则需要状态id',
  `code` longtext CHARACTER SET utf8 COMMENT '事件发生时，执行的代码',
  `info` text CHARACTER SET utf8 COMMENT '规则的说明',
  `state` int(11) DEFAULT NULL COMMENT '启用状态，0：未启用，1：启用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `init_url` varchar(255) DEFAULT NULL COMMENT '初始化传感器实例时，保存数据的地址',
  PRIMARY KEY (`id`,`uri`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Table structure for `sensor_case`
-- ----------------------------
DROP TABLE IF EXISTS `sensor_case`;
CREATE TABLE `sensor_case` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL COMMENT '传感器的id',
  `stid` int(11) DEFAULT NULL COMMENT '时空id',
  `title` varchar(255) DEFAULT NULL,
  `info` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `sensor_case_attr`
-- ----------------------------
DROP TABLE IF EXISTS `sensor_case_attr`;
CREATE TABLE `sensor_case_attr` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '传感器实例属性的id',
  `scid` int(11) DEFAULT NULL COMMENT '传感器实例id',
  `said` int(11) DEFAULT NULL COMMENT '属性原型id',
  `value` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '属性值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `space_time`
-- ----------------------------
DROP TABLE IF EXISTS `space_time`;
CREATE TABLE `space_time` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `info` text CHARACTER SET utf8 COMMENT '说明',
  `status` int(11) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

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
--  Table structure for `status`
-- ----------------------------
DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stid` int(11) DEFAULT NULL COMMENT 'space_time时空id',
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '显示的名称',
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '变量名',
  `value` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '变量值',
  `info` text CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records 
-- ----------------------------
INSERT INTO `robot` VALUES ('1','机器人一','robot1','http://ww.baidd.com/robot','http','机器人一机器人一','c75d12404125b26d666e2fd412da26bb'), ('2','机器人二','robot2','http://ww.baidd.com/robot','http','机器人二','8ac40cdecd142837c38f419f60deac95');
INSERT INTO `robot_attr` VALUES ('13','1','attr1','属性一','abc/df.*+','属性一属性一属性一'), ('14','1','sdfdf','发情二','123654','我正在 @百度视频 看#东游记# http://v.baidu.com/tv/11990.htm?frp=bdbrand，手机也能看高清，猛戳这里下载百度视频手机版 http://list.video.baidu.com/d41d.html');
INSERT INTO `robot_case` VALUES ('1','1','1'), ('2','2','1');
INSERT INTO `sensor` VALUES ('22','test','test111','http','6be41e60b15e2d8e5f7a15c83bc0208a',NULL,NULL), ('23','test','test111','http','7e24fed9601720bf17d6b97a983e2afb',NULL,NULL), ('24','ok','可以了','server','58051e23e06daeb73c381992012b5111',NULL,NULL), ('25','a顶替','333333','Scheme','f4c2528b91912a3dc6cff07fbdd51aee',NULL,NULL), ('26','咽顶替','adfff','http','55d4a1436013bfbe96d7373c189ae0ab',NULL,NULL), ('27','RSS源监视','rssUpdate','http','1f19fdd84621192081a8495cf4e51506',NULL,NULL), ('28','asdf','cdf','local','287c578bf018aac3128eea83703bfeab',NULL,NULL), ('29','asdf','cdf','local','32d9bc6e03988def39d1d56bae184baa',NULL,NULL), ('30','我要测试','myTest','local','e1742c388789eba949d87cf1704aba1c',NULL,NULL), ('31','英雄联盟','123456','local','fe95b30b6a0da14533443cbb2aa0f859',NULL,NULL), ('32','英雄联盟APP','addd','local','469d61d7871ec79fa856033c0bfdf9c5','sd干枯 顶替天干',NULL), ('33','英雄联盟APPs','adddssss','local','ec88e72ed57c1e6b3fa7005932e79bd4','sd干枯 顶替天干',NULL), ('34','传感器三','sensor3','http','36c19a95a7a693ca13588fec5eaabca5','传感器三传感器三传感器三','http://www.koolearn.com/sensor');
INSERT INTO `sensor_attr` VALUES ('7','33','attrr','attr122','sdgsg','sdfsdf'), ('10','33','sdffff','12ff','234','村股份制夺顶替'), ('11','27','rss-url','RSS地址','^https?://.*$','兼听这个Rss地址的内容'), ('12','27','find-time','检测时间间隔','\\d+','两次检查之间的时间间隔，填入数字，单位为秒。'), ('13','31','sdfsdf','attr1','sdfddd','sffdsfdsf'), ('14','31','sdfds','attr2','fsdf','dsff'), ('15','31','att3','斯科特','ddddd','斯科特斯科特斯科特');
INSERT INTO `sensor_case` VALUES ('6','27','1','传感器one','传感器one传感器one'), ('7','31','1','传感器2','传感器22222');
INSERT INTO `sensor_case_attr` VALUES ('1','6','11','http://www.koolearn.com/index'), ('5','7','13','1111111111'), ('6','7','14','可就玩完了'), ('7','6','12','30'), ('12','7','15','gdgdfgdfgg');
INSERT INTO `sensor_event` VALUES ('3','33','sdffff','sdffff','3434','有'), ('4','27','change','内容有变化','{\n\"type\": \"add\",\n\"addData\": \"<one>test</one>\",\n\"allData\": \"<xml><one>test</one></xml>\",\n\"changeTime\": 1512305283774\n}','RSS源的内容有变化时，就会触发这个事件，type是事件的类型，有add\\delete\\edit.'), ('5','27','add','内容有新增','aaaaaaaaaaaaaa','内容有新增内容有新增');
INSERT INTO `space_time` VALUES ('1','我的时空一','我的时空一我的时空一我的时空一我的时空一','0');
INSERT INTO `status` VALUES ('1','1','冲顶夺顶替','abcdefg','匣9999','冲顶夺顶替冲顶夺顶替冲顶夺顶替'), ('2','1','二二奇才压下','2222','erererer','二二奇才压下'), ('8','1','44444444','44444','4444','44444444'), ('9','1','33333','33','3333','333'), ('10','1','999','999','ddddd','33');
