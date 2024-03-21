// source: user.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.model.UserInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.UserInfo.displayName = 'proto.model.UserInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.model.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 5, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 6, ""),
    age: jspb.Message.getFieldWithDefault(msg, 7, 0),
    region: jspb.Message.getFieldWithDefault(msg, 8, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 9, ""),
    paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.UserInfo}
 */
proto.model.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.UserInfo;
  return proto.model.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.UserInfo}
 */
proto.model.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGender(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAge(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 10:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGender();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional int64 userId = 1;
 * @return {number}
 */
proto.model.UserInfo.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string userName = 2;
 * @return {string}
 */
proto.model.UserInfo.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nickName = 3;
 * @return {string}
 */
proto.model.UserInfo.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.model.UserInfo.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string phone = 5;
 * @return {string}
 */
proto.model.UserInfo.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string gender = 6;
 * @return {string}
 */
proto.model.UserInfo.prototype.getGender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setGender = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 age = 7;
 * @return {number}
 */
proto.model.UserInfo.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setAge = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string region = 8;
 * @return {string}
 */
proto.model.UserInfo.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string icon = 9;
 * @return {string}
 */
proto.model.UserInfo.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * map<string, string> params = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.model.UserInfo.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.model.UserInfo} returns this
 */
proto.model.UserInfo.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;};


