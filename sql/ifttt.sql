/*
 Navicat MySQL Data Transfer

 Source Server         : mac
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost
 Source Database       : ifttt

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : utf-8

 Date: 11/25/2017 11:21:41 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `robot`
-- ----------------------------
DROP TABLE IF EXISTS `robot`;
CREATE TABLE `robot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `title` varchar(255) DEFAULT NULL,
  `uri` varchar(255) NOT NULL COMMENT '唯一标识',
  `stype` varchar(255) DEFAULT NULL COMMENT '信息传输协议类型',
  `secretkey` varchar(255) DEFAULT NULL COMMENT '密匙',
  PRIMARY KEY (`id`,`uri`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sensor`
-- ----------------------------
BEGIN;
INSERT INTO `sensor` VALUES ('3', 'aaa', 'bbb', 'http', null), ('4', '子子孙孙', '啊fdsf', 'local', null), ('5', '英雄联盟', 'aaaa', 'Scheme', null), ('6', '1.0.0上线', 'llll', 'http', null), ('7', '1.0.0上线', 'llll', 'http', null), ('22', 'test', 'test111', 'http', '6be41e60b15e2d8e5f7a15c83bc0208a'), ('23', 'test', 'test111', 'http', '7e24fed9601720bf17d6b97a983e2afb'), ('24', 'ok', '可以了', 'server', '58051e23e06daeb73c381992012b5111');
COMMIT;

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
  `id` int(11) NOT NULL,
  `sensor_id` int(11) DEFAULT NULL,
  `event_name` varchar(255) NOT NULL COMMENT '事件标识',
  `title` varchar(255) DEFAULT NULL COMMENT '事件名称',
  `value` varchar(255) DEFAULT NULL COMMENT '事件数据格式，json',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

SET FOREIGN_KEY_CHECKS = 1;
