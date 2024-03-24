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

goog.provide('proto.model.MsgChat');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.model.ChatMsgStatus');
goog.forwardDeclare('proto.model.ChatMsgType');
goog.forwardDeclare('proto.model.EncryptType');
goog.forwardDeclare('proto.model.MsgPriority');
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
proto.model.MsgChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.MsgChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.MsgChat.displayName = 'proto.model.MsgChat';
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
proto.model.MsgChat.prototype.toObject = function(opt_includeInstance) {
  return proto.model.MsgChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.MsgChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.MsgChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fromid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    toid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tm: jspb.Message.getFieldWithDefault(msg, 5, 0),
    devid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sendid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    msgtype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    data: msg.getData_asB64(),
    priority: jspb.Message.getFieldWithDefault(msg, 10, 0),
    refmessageid: jspb.Message.getFieldWithDefault(msg, 11, 0),
    status: jspb.Message.getFieldWithDefault(msg, 12, 0),
    sendreply: jspb.Message.getFieldWithDefault(msg, 13, 0),
    recvreply: jspb.Message.getFieldWithDefault(msg, 14, 0),
    readreply: jspb.Message.getFieldWithDefault(msg, 15, 0),
    enctype: jspb.Message.getFieldWithDefault(msg, 16, 0),
    chattype: jspb.Message.getFieldWithDefault(msg, 17, ""),
    keyprint: jspb.Message.getFieldWithDefault(msg, 18, 0)
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
 * @return {!proto.model.MsgChat}
 */
proto.model.MsgChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.MsgChat;
  return proto.model.MsgChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.MsgChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.MsgChat}
 */
proto.model.MsgChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFromid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTm(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendid(value);
      break;
    case 8:
      var value = /** @type {!proto.model.ChatMsgType} */ (reader.readEnum());
      msg.setMsgtype(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 10:
      var value = /** @type {!proto.model.MsgPriority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefmessageid(value);
      break;
    case 12:
      var value = /** @type {!proto.model.ChatMsgStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSendreply(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecvreply(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReadreply(value);
      break;
    case 16:
      var value = /** @type {!proto.model.EncryptType} */ (reader.readEnum());
      msg.setEnctype(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setChattype(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKeyprint(value);
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
proto.model.MsgChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.MsgChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.MsgChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.MsgChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFromid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getToid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTm();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDevid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSendid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMsgtype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getRefmessageid();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getSendreply();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getRecvreply();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getReadreply();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getEnctype();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getChattype();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getKeyprint();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
};


/**
 * optional int64 msgId = 1;
 * @return {number}
 */
proto.model.MsgChat.prototype.getMsgid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 userId = 2;
 * @return {number}
 */
proto.model.MsgChat.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 fromId = 3;
 * @return {number}
 */
proto.model.MsgChat.prototype.getFromid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setFromid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 toId = 4;
 * @return {number}
 */
proto.model.MsgChat.prototype.getToid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setToid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 tm = 5;
 * @return {number}
 */
proto.model.MsgChat.prototype.getTm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setTm = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string devId = 6;
 * @return {string}
 */
proto.model.MsgChat.prototype.getDevid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setDevid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string sendId = 7;
 * @return {string}
 */
proto.model.MsgChat.prototype.getSendid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setSendid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional ChatMsgType msgType = 8;
 * @return {!proto.model.ChatMsgType}
 */
proto.model.MsgChat.prototype.getMsgtype = function() {
  return /** @type {!proto.model.ChatMsgType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.model.ChatMsgType} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setMsgtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bytes data = 9;
 * @return {string}
 */
proto.model.MsgChat.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes data = 9;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.model.MsgChat.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.model.MsgChat.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional MsgPriority priority = 10;
 * @return {!proto.model.MsgPriority}
 */
proto.model.MsgChat.prototype.getPriority = function() {
  return /** @type {!proto.model.MsgPriority} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.model.MsgPriority} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional int64 refMessageId = 11;
 * @return {number}
 */
proto.model.MsgChat.prototype.getRefmessageid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setRefmessageid = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional ChatMsgStatus status = 12;
 * @return {!proto.model.ChatMsgStatus}
 */
proto.model.MsgChat.prototype.getStatus = function() {
  return /** @type {!proto.model.ChatMsgStatus} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.model.ChatMsgStatus} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional int32 sendReply = 13;
 * @return {number}
 */
proto.model.MsgChat.prototype.getSendreply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setSendreply = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 recvReply = 14;
 * @return {number}
 */
proto.model.MsgChat.prototype.getRecvreply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setRecvreply = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 readReply = 15;
 * @return {number}
 */
proto.model.MsgChat.prototype.getReadreply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setReadreply = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional EncryptType encType = 16;
 * @return {!proto.model.EncryptType}
 */
proto.model.MsgChat.prototype.getEnctype = function() {
  return /** @type {!proto.model.EncryptType} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.model.EncryptType} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setEnctype = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional string chatType = 17;
 * @return {string}
 */
proto.model.MsgChat.prototype.getChattype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setChattype = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int64 keyPrint = 18;
 * @return {number}
 */
proto.model.MsgChat.prototype.getKeyprint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.MsgChat} returns this
 */
proto.model.MsgChat.prototype.setKeyprint = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


