// source: msg.proto
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

goog.provide('proto.model.MsgQuery');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');

goog.forwardDeclare('proto.model.ChatType');
goog.forwardDeclare('proto.model.QueryDataType');
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
proto.model.MsgQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.MsgQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.MsgQuery.displayName = 'proto.model.MsgQuery';
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
proto.model.MsgQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.model.MsgQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.MsgQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.MsgQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bigid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    littleid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    syntype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    tm: jspb.Message.getFieldWithDefault(msg, 6, 0),
    chattype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    querytype: jspb.Message.getFieldWithDefault(msg, 8, 0),
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
 * @return {!proto.model.MsgQuery}
 */
proto.model.MsgQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.MsgQuery;
  return proto.model.MsgQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.MsgQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.MsgQuery}
 */
proto.model.MsgQuery.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBigid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLittleid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSyntype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTm(value);
      break;
    case 7:
      var value = /** @type {!proto.model.ChatType} */ (reader.readEnum());
      msg.setChattype(value);
      break;
    case 8:
      var value = /** @type {!proto.model.QueryDataType} */ (reader.readEnum());
      msg.setQuerytype(value);
      break;
    case 9:
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
proto.model.MsgQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.MsgQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.MsgQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.MsgQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBigid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLittleid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSyntype();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTm();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getChattype();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getQuerytype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional int64 userId = 1;
 * @return {number}
 */
proto.model.MsgQuery.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 groupId = 2;
 * @return {number}
 */
proto.model.MsgQuery.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 bigId = 3;
 * @return {number}
 */
proto.model.MsgQuery.prototype.getBigid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.setBigid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 littleId = 4;
 * @return {number}
 */
proto.model.MsgQuery.prototype.getLittleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.setLittleid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 synType = 5;
 * @return {number}
 */
proto.model.MsgQuery.prototype.getSyntype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.setSyntype = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 tm = 6;
 * @return {number}
 */
proto.model.MsgQuery.prototype.getTm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.setTm = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional ChatType chatType = 7;
 * @return {!proto.model.ChatType}
 */
proto.model.MsgQuery.prototype.getChattype = function() {
  return /** @type {!proto.model.ChatType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.model.ChatType} value
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.setChattype = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional QueryDataType queryType = 8;
 * @return {!proto.model.QueryDataType}
 */
proto.model.MsgQuery.prototype.getQuerytype = function() {
  return /** @type {!proto.model.QueryDataType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.model.QueryDataType} value
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.setQuerytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * map<string, string> params = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.model.MsgQuery.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.model.MsgQuery} returns this
 */
proto.model.MsgQuery.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;};


