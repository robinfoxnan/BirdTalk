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

goog.provide('proto.model.Msg');
goog.provide('proto.model.Msg.MessageCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.model.FriendOpReq');
goog.require('proto.model.FriendOpResult');
goog.require('proto.model.GroupOpReq');
goog.require('proto.model.GroupOpResult');
goog.require('proto.model.MsgChat');
goog.require('proto.model.MsgChatQuery');
goog.require('proto.model.MsgChatQueryResult');
goog.require('proto.model.MsgChatReply');
goog.require('proto.model.MsgDownloadReply');
goog.require('proto.model.MsgDownloadReq');
goog.require('proto.model.MsgHeartBeat');
goog.require('proto.model.MsgHello');
goog.require('proto.model.MsgKeyExchange');
goog.require('proto.model.MsgUploadReply');
goog.require('proto.model.MsgUploadReq');
goog.require('proto.model.UserOpReq');
goog.require('proto.model.UserOpResult');

goog.forwardDeclare('proto.model.ComMsgType');
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
proto.model.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.model.Msg.oneofGroups_);
};
goog.inherits(proto.model.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.Msg.displayName = 'proto.model.Msg';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.model.Msg.oneofGroups_ = [[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]];

/**
 * @enum {number}
 */
proto.model.Msg.MessageCase = {
  MESSAGE_NOT_SET: 0,
  CIPHER: 5,
  KEYEX: 6,
  HELLO: 7,
  HEARTBEAT: 8,
  CHATDATA: 9,
  CHATREPLY: 10,
  DOWNLOADREQ: 11,
  DOWNLOADREPLY: 12,
  UPLOADREQ: 13,
  UPLOADREPLY: 14,
  CHATQUERY: 15,
  CHATQUERYRESULT: 16,
  USEROP: 17,
  USEROPRET: 18,
  FRIENDOP: 19,
  FRIENDOPRET: 20,
  GROUPOP: 21,
  GROUPOPRET: 22
};

/**
 * @return {proto.model.Msg.MessageCase}
 */
proto.model.Msg.prototype.getMessageCase = function() {
  return /** @type {proto.model.Msg.MessageCase} */(jspb.Message.computeOneofCase(this, proto.model.Msg.oneofGroups_[0]));
};



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
proto.model.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.model.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    keyprint: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tm: jspb.Message.getFieldWithDefault(msg, 3, 0),
    msgtype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    cipher: msg.getCipher_asB64(),
    keyex: (f = msg.getKeyex()) && proto.model.MsgKeyExchange.toObject(includeInstance, f),
    hello: (f = msg.getHello()) && proto.model.MsgHello.toObject(includeInstance, f),
    heartbeat: (f = msg.getHeartbeat()) && proto.model.MsgHeartBeat.toObject(includeInstance, f),
    chatdata: (f = msg.getChatdata()) && proto.model.MsgChat.toObject(includeInstance, f),
    chatreply: (f = msg.getChatreply()) && proto.model.MsgChatReply.toObject(includeInstance, f),
    downloadreq: (f = msg.getDownloadreq()) && proto.model.MsgDownloadReq.toObject(includeInstance, f),
    downloadreply: (f = msg.getDownloadreply()) && proto.model.MsgDownloadReply.toObject(includeInstance, f),
    uploadreq: (f = msg.getUploadreq()) && proto.model.MsgUploadReq.toObject(includeInstance, f),
    uploadreply: (f = msg.getUploadreply()) && proto.model.MsgUploadReply.toObject(includeInstance, f),
    chatquery: (f = msg.getChatquery()) && proto.model.MsgChatQuery.toObject(includeInstance, f),
    chatqueryresult: (f = msg.getChatqueryresult()) && proto.model.MsgChatQueryResult.toObject(includeInstance, f),
    userop: (f = msg.getUserop()) && proto.model.UserOpReq.toObject(includeInstance, f),
    useropret: (f = msg.getUseropret()) && proto.model.UserOpResult.toObject(includeInstance, f),
    friendop: (f = msg.getFriendop()) && proto.model.FriendOpReq.toObject(includeInstance, f),
    friendopret: (f = msg.getFriendopret()) && proto.model.FriendOpResult.toObject(includeInstance, f),
    groupop: (f = msg.getGroupop()) && proto.model.GroupOpReq.toObject(includeInstance, f),
    groupopret: (f = msg.getGroupopret()) && proto.model.GroupOpResult.toObject(includeInstance, f)
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
 * @return {!proto.model.Msg}
 */
proto.model.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.Msg;
  return proto.model.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.Msg}
 */
proto.model.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKeyprint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTm(value);
      break;
    case 4:
      var value = /** @type {!proto.model.ComMsgType} */ (reader.readEnum());
      msg.setMsgtype(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCipher(value);
      break;
    case 6:
      var value = new proto.model.MsgKeyExchange;
      reader.readMessage(value,proto.model.MsgKeyExchange.deserializeBinaryFromReader);
      msg.setKeyex(value);
      break;
    case 7:
      var value = new proto.model.MsgHello;
      reader.readMessage(value,proto.model.MsgHello.deserializeBinaryFromReader);
      msg.setHello(value);
      break;
    case 8:
      var value = new proto.model.MsgHeartBeat;
      reader.readMessage(value,proto.model.MsgHeartBeat.deserializeBinaryFromReader);
      msg.setHeartbeat(value);
      break;
    case 9:
      var value = new proto.model.MsgChat;
      reader.readMessage(value,proto.model.MsgChat.deserializeBinaryFromReader);
      msg.setChatdata(value);
      break;
    case 10:
      var value = new proto.model.MsgChatReply;
      reader.readMessage(value,proto.model.MsgChatReply.deserializeBinaryFromReader);
      msg.setChatreply(value);
      break;
    case 11:
      var value = new proto.model.MsgDownloadReq;
      reader.readMessage(value,proto.model.MsgDownloadReq.deserializeBinaryFromReader);
      msg.setDownloadreq(value);
      break;
    case 12:
      var value = new proto.model.MsgDownloadReply;
      reader.readMessage(value,proto.model.MsgDownloadReply.deserializeBinaryFromReader);
      msg.setDownloadreply(value);
      break;
    case 13:
      var value = new proto.model.MsgUploadReq;
      reader.readMessage(value,proto.model.MsgUploadReq.deserializeBinaryFromReader);
      msg.setUploadreq(value);
      break;
    case 14:
      var value = new proto.model.MsgUploadReply;
      reader.readMessage(value,proto.model.MsgUploadReply.deserializeBinaryFromReader);
      msg.setUploadreply(value);
      break;
    case 15:
      var value = new proto.model.MsgChatQuery;
      reader.readMessage(value,proto.model.MsgChatQuery.deserializeBinaryFromReader);
      msg.setChatquery(value);
      break;
    case 16:
      var value = new proto.model.MsgChatQueryResult;
      reader.readMessage(value,proto.model.MsgChatQueryResult.deserializeBinaryFromReader);
      msg.setChatqueryresult(value);
      break;
    case 17:
      var value = new proto.model.UserOpReq;
      reader.readMessage(value,proto.model.UserOpReq.deserializeBinaryFromReader);
      msg.setUserop(value);
      break;
    case 18:
      var value = new proto.model.UserOpResult;
      reader.readMessage(value,proto.model.UserOpResult.deserializeBinaryFromReader);
      msg.setUseropret(value);
      break;
    case 19:
      var value = new proto.model.FriendOpReq;
      reader.readMessage(value,proto.model.FriendOpReq.deserializeBinaryFromReader);
      msg.setFriendop(value);
      break;
    case 20:
      var value = new proto.model.FriendOpResult;
      reader.readMessage(value,proto.model.FriendOpResult.deserializeBinaryFromReader);
      msg.setFriendopret(value);
      break;
    case 21:
      var value = new proto.model.GroupOpReq;
      reader.readMessage(value,proto.model.GroupOpReq.deserializeBinaryFromReader);
      msg.setGroupop(value);
      break;
    case 22:
      var value = new proto.model.GroupOpResult;
      reader.readMessage(value,proto.model.GroupOpResult.deserializeBinaryFromReader);
      msg.setGroupopret(value);
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
proto.model.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getKeyprint();
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
  f = message.getMsgtype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getKeyex();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.model.MsgKeyExchange.serializeBinaryToWriter
    );
  }
  f = message.getHello();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.model.MsgHello.serializeBinaryToWriter
    );
  }
  f = message.getHeartbeat();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.model.MsgHeartBeat.serializeBinaryToWriter
    );
  }
  f = message.getChatdata();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.model.MsgChat.serializeBinaryToWriter
    );
  }
  f = message.getChatreply();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.model.MsgChatReply.serializeBinaryToWriter
    );
  }
  f = message.getDownloadreq();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.model.MsgDownloadReq.serializeBinaryToWriter
    );
  }
  f = message.getDownloadreply();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.model.MsgDownloadReply.serializeBinaryToWriter
    );
  }
  f = message.getUploadreq();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.model.MsgUploadReq.serializeBinaryToWriter
    );
  }
  f = message.getUploadreply();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.model.MsgUploadReply.serializeBinaryToWriter
    );
  }
  f = message.getChatquery();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.model.MsgChatQuery.serializeBinaryToWriter
    );
  }
  f = message.getChatqueryresult();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.model.MsgChatQueryResult.serializeBinaryToWriter
    );
  }
  f = message.getUserop();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.model.UserOpReq.serializeBinaryToWriter
    );
  }
  f = message.getUseropret();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.model.UserOpResult.serializeBinaryToWriter
    );
  }
  f = message.getFriendop();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.model.FriendOpReq.serializeBinaryToWriter
    );
  }
  f = message.getFriendopret();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.model.FriendOpResult.serializeBinaryToWriter
    );
  }
  f = message.getGroupop();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.model.GroupOpReq.serializeBinaryToWriter
    );
  }
  f = message.getGroupopret();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.model.GroupOpResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 version = 1;
 * @return {number}
 */
proto.model.Msg.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 keyPrint = 2;
 * @return {number}
 */
proto.model.Msg.prototype.getKeyprint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.setKeyprint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 tm = 3;
 * @return {number}
 */
proto.model.Msg.prototype.getTm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.setTm = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ComMsgType msgType = 4;
 * @return {!proto.model.ComMsgType}
 */
proto.model.Msg.prototype.getMsgtype = function() {
  return /** @type {!proto.model.ComMsgType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.model.ComMsgType} value
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.setMsgtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bytes cipher = 5;
 * @return {string}
 */
proto.model.Msg.prototype.getCipher = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes cipher = 5;
 * This is a type-conversion wrapper around `getCipher()`
 * @return {string}
 */
proto.model.Msg.prototype.getCipher_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCipher()));
};


/**
 * optional bytes cipher = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCipher()`
 * @return {!Uint8Array}
 */
proto.model.Msg.prototype.getCipher_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCipher()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.setCipher = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearCipher = function() {
  return jspb.Message.setOneofField(this, 5, proto.model.Msg.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasCipher = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MsgKeyExchange keyEx = 6;
 * @return {?proto.model.MsgKeyExchange}
 */
proto.model.Msg.prototype.getKeyex = function() {
  return /** @type{?proto.model.MsgKeyExchange} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgKeyExchange, 6));
};


/**
 * @param {?proto.model.MsgKeyExchange|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setKeyex = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearKeyex = function() {
  return this.setKeyex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasKeyex = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MsgHello hello = 7;
 * @return {?proto.model.MsgHello}
 */
proto.model.Msg.prototype.getHello = function() {
  return /** @type{?proto.model.MsgHello} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgHello, 7));
};


/**
 * @param {?proto.model.MsgHello|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setHello = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearHello = function() {
  return this.setHello(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasHello = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MsgHeartBeat heartBeat = 8;
 * @return {?proto.model.MsgHeartBeat}
 */
proto.model.Msg.prototype.getHeartbeat = function() {
  return /** @type{?proto.model.MsgHeartBeat} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgHeartBeat, 8));
};


/**
 * @param {?proto.model.MsgHeartBeat|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setHeartbeat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearHeartbeat = function() {
  return this.setHeartbeat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasHeartbeat = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MsgChat chatData = 9;
 * @return {?proto.model.MsgChat}
 */
proto.model.Msg.prototype.getChatdata = function() {
  return /** @type{?proto.model.MsgChat} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgChat, 9));
};


/**
 * @param {?proto.model.MsgChat|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setChatdata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearChatdata = function() {
  return this.setChatdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasChatdata = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MsgChatReply chatReply = 10;
 * @return {?proto.model.MsgChatReply}
 */
proto.model.Msg.prototype.getChatreply = function() {
  return /** @type{?proto.model.MsgChatReply} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgChatReply, 10));
};


/**
 * @param {?proto.model.MsgChatReply|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setChatreply = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearChatreply = function() {
  return this.setChatreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasChatreply = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MsgDownloadReq downloadReq = 11;
 * @return {?proto.model.MsgDownloadReq}
 */
proto.model.Msg.prototype.getDownloadreq = function() {
  return /** @type{?proto.model.MsgDownloadReq} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgDownloadReq, 11));
};


/**
 * @param {?proto.model.MsgDownloadReq|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setDownloadreq = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearDownloadreq = function() {
  return this.setDownloadreq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasDownloadreq = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MsgDownloadReply downloadReply = 12;
 * @return {?proto.model.MsgDownloadReply}
 */
proto.model.Msg.prototype.getDownloadreply = function() {
  return /** @type{?proto.model.MsgDownloadReply} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgDownloadReply, 12));
};


/**
 * @param {?proto.model.MsgDownloadReply|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setDownloadreply = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearDownloadreply = function() {
  return this.setDownloadreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasDownloadreply = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MsgUploadReq uploadReq = 13;
 * @return {?proto.model.MsgUploadReq}
 */
proto.model.Msg.prototype.getUploadreq = function() {
  return /** @type{?proto.model.MsgUploadReq} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgUploadReq, 13));
};


/**
 * @param {?proto.model.MsgUploadReq|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setUploadreq = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearUploadreq = function() {
  return this.setUploadreq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasUploadreq = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional MsgUploadReply uploadReply = 14;
 * @return {?proto.model.MsgUploadReply}
 */
proto.model.Msg.prototype.getUploadreply = function() {
  return /** @type{?proto.model.MsgUploadReply} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgUploadReply, 14));
};


/**
 * @param {?proto.model.MsgUploadReply|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setUploadreply = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearUploadreply = function() {
  return this.setUploadreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasUploadreply = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional MsgChatQuery chatQuery = 15;
 * @return {?proto.model.MsgChatQuery}
 */
proto.model.Msg.prototype.getChatquery = function() {
  return /** @type{?proto.model.MsgChatQuery} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgChatQuery, 15));
};


/**
 * @param {?proto.model.MsgChatQuery|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setChatquery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearChatquery = function() {
  return this.setChatquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasChatquery = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional MsgChatQueryResult chatQueryResult = 16;
 * @return {?proto.model.MsgChatQueryResult}
 */
proto.model.Msg.prototype.getChatqueryresult = function() {
  return /** @type{?proto.model.MsgChatQueryResult} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgChatQueryResult, 16));
};


/**
 * @param {?proto.model.MsgChatQueryResult|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setChatqueryresult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearChatqueryresult = function() {
  return this.setChatqueryresult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasChatqueryresult = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional UserOpReq userOp = 17;
 * @return {?proto.model.UserOpReq}
 */
proto.model.Msg.prototype.getUserop = function() {
  return /** @type{?proto.model.UserOpReq} */ (
    jspb.Message.getWrapperField(this, proto.model.UserOpReq, 17));
};


/**
 * @param {?proto.model.UserOpReq|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setUserop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearUserop = function() {
  return this.setUserop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasUserop = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional UserOpResult userOpRet = 18;
 * @return {?proto.model.UserOpResult}
 */
proto.model.Msg.prototype.getUseropret = function() {
  return /** @type{?proto.model.UserOpResult} */ (
    jspb.Message.getWrapperField(this, proto.model.UserOpResult, 18));
};


/**
 * @param {?proto.model.UserOpResult|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setUseropret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearUseropret = function() {
  return this.setUseropret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasUseropret = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional FriendOpReq friendOp = 19;
 * @return {?proto.model.FriendOpReq}
 */
proto.model.Msg.prototype.getFriendop = function() {
  return /** @type{?proto.model.FriendOpReq} */ (
    jspb.Message.getWrapperField(this, proto.model.FriendOpReq, 19));
};


/**
 * @param {?proto.model.FriendOpReq|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setFriendop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearFriendop = function() {
  return this.setFriendop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasFriendop = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional FriendOpResult friendOpRet = 20;
 * @return {?proto.model.FriendOpResult}
 */
proto.model.Msg.prototype.getFriendopret = function() {
  return /** @type{?proto.model.FriendOpResult} */ (
    jspb.Message.getWrapperField(this, proto.model.FriendOpResult, 20));
};


/**
 * @param {?proto.model.FriendOpResult|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setFriendopret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearFriendopret = function() {
  return this.setFriendopret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasFriendopret = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional GroupOpReq groupOp = 21;
 * @return {?proto.model.GroupOpReq}
 */
proto.model.Msg.prototype.getGroupop = function() {
  return /** @type{?proto.model.GroupOpReq} */ (
    jspb.Message.getWrapperField(this, proto.model.GroupOpReq, 21));
};


/**
 * @param {?proto.model.GroupOpReq|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setGroupop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearGroupop = function() {
  return this.setGroupop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasGroupop = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional GroupOpResult groupOpRet = 22;
 * @return {?proto.model.GroupOpResult}
 */
proto.model.Msg.prototype.getGroupopret = function() {
  return /** @type{?proto.model.GroupOpResult} */ (
    jspb.Message.getWrapperField(this, proto.model.GroupOpResult, 22));
};


/**
 * @param {?proto.model.GroupOpResult|undefined} value
 * @return {!proto.model.Msg} returns this
*/
proto.model.Msg.prototype.setGroupopret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.model.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Msg} returns this
 */
proto.model.Msg.prototype.clearGroupopret = function() {
  return this.setGroupopret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Msg.prototype.hasGroupopret = function() {
  return jspb.Message.getField(this, 22) != null;
};


