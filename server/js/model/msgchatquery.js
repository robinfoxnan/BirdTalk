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

goog.provide('proto.model.MsgChatQuery');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
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
proto.model.MsgChatQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.MsgChatQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.MsgChatQuery.displayName = 'proto.model.MsgChatQuery';
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
proto.model.MsgChatQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.model.MsgChatQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.MsgChatQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.MsgChatQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tm: jspb.Message.getFieldWithDefault(msg, 3, 0),
    chattype: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stateonly: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.model.MsgChatQuery}
 */
proto.model.MsgChatQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.MsgChatQuery;
  return proto.model.MsgChatQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.MsgChatQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.MsgChatQuery}
 */
proto.model.MsgChatQuery.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setToid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTm(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setChattype(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStateonly(value);
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
proto.model.MsgChatQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.MsgChatQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.MsgChatQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.MsgChatQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getToid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTm();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getChattype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStateonly();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int64 userId = 1;
 * @return {number}
 */
proto.model.MsgChatQuery.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChatQuery} returns this
 */
proto.model.MsgChatQuery.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 toId = 2;
 * @return {number}
 */
proto.model.MsgChatQuery.prototype.getToid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChatQuery} returns this
 */
proto.model.MsgChatQuery.prototype.setToid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 tm = 3;
 * @return {number}
 */
proto.model.MsgChatQuery.prototype.getTm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChatQuery} returns this
 */
proto.model.MsgChatQuery.prototype.setTm = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string chatType = 4;
 * @return {string}
 */
proto.model.MsgChatQuery.prototype.getChattype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.MsgChatQuery} returns this
 */
proto.model.MsgChatQuery.prototype.setChattype = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool stateOnly = 5;
 * @return {boolean}
 */
proto.model.MsgChatQuery.prototype.getStateonly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.model.MsgChatQuery} returns this
 */
proto.model.MsgChatQuery.prototype.setStateonly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


