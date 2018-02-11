/*
MySQL Backup
Source Server Version: 5.6.24
Source Database: sensor
Date: 2018/2/11 11:33:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
--  Table structure for `datetime`
-- ----------------------------
DROP TABLE IF EXISTS `datetime`;
CREATE TABLE `datetime` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sensor_case_id` int(11) DEFAULT NULL,
  `formatStr` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records 
-- ----------------------------
INSERT INTO `datetime` VALUES ('1','14','*/2 * * * * *');
