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

goog.provide('proto.model.MsgPlain');
goog.provide('proto.model.MsgPlain.MessageCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.model.FriendOpReq');
goog.require('proto.model.FriendOpResult');
goog.require('proto.model.GroupOpReq');
goog.require('proto.model.GroupOpResult');
goog.require('proto.model.MsgChat');
goog.require('proto.model.MsgChatReply');
goog.require('proto.model.MsgDownloadReply');
goog.require('proto.model.MsgDownloadReq');
goog.require('proto.model.MsgError');
goog.require('proto.model.MsgHeartBeat');
goog.require('proto.model.MsgHello');
goog.require('proto.model.MsgKeyExchange');
goog.require('proto.model.MsgQuery');
goog.require('proto.model.MsgQueryResult');
goog.require('proto.model.MsgUploadReply');
goog.require('proto.model.MsgUploadReq');
goog.require('proto.model.UserOpReq');
goog.require('proto.model.UserOpResult');

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
proto.model.MsgPlain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.model.MsgPlain.oneofGroups_);
};
goog.inherits(proto.model.MsgPlain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.MsgPlain.displayName = 'proto.model.MsgPlain';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.model.MsgPlain.oneofGroups_ = [[7,8,9,10,11,12,13,14,21,22,23,24,31,32,33,34,35,36,100]];

/**
 * @enum {number}
 */
proto.model.MsgPlain.MessageCase = {
  MESSAGE_NOT_SET: 0,
  HELLO: 7,
  HEARTBEAT: 8,
  ERRORMSG: 9,
  KEYEX: 10,
  CHATDATA: 11,
  CHATREPLY: 12,
  COMMONQUERY: 13,
  COMMONQUERYRET: 14,
  UPLOADREQ: 21,
  DOWNLOADREQ: 22,
  UPLOADREPLY: 23,
  DOWNLOADREPLY: 24,
  USEROP: 31,
  USEROPRET: 32,
  FRIENDOP: 33,
  FRIENDOPRET: 34,
  GROUPOP: 35,
  GROUPOPRET: 36,
  OTHERTYPEMSG: 100
};

/**
 * @return {proto.model.MsgPlain.MessageCase}
 */
proto.model.MsgPlain.prototype.getMessageCase = function() {
  return /** @type {proto.model.MsgPlain.MessageCase} */(jspb.Message.computeOneofCase(this, proto.model.MsgPlain.oneofGroups_[0]));
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
proto.model.MsgPlain.prototype.toObject = function(opt_includeInstance) {
  return proto.model.MsgPlain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.MsgPlain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.MsgPlain.toObject = function(includeInstance, msg) {
  var f, obj = {
    hello: (f = msg.getHello()) && proto.model.MsgHello.toObject(includeInstance, f),
    heartbeat: (f = msg.getHeartbeat()) && proto.model.MsgHeartBeat.toObject(includeInstance, f),
    errormsg: (f = msg.getErrormsg()) && proto.model.MsgError.toObject(includeInstance, f),
    keyex: (f = msg.getKeyex()) && proto.model.MsgKeyExchange.toObject(includeInstance, f),
    chatdata: (f = msg.getChatdata()) && proto.model.MsgChat.toObject(includeInstance, f),
    chatreply: (f = msg.getChatreply()) && proto.model.MsgChatReply.toObject(includeInstance, f),
    commonquery: (f = msg.getCommonquery()) && proto.model.MsgQuery.toObject(includeInstance, f),
    commonqueryret: (f = msg.getCommonqueryret()) && proto.model.MsgQueryResult.toObject(includeInstance, f),
    uploadreq: (f = msg.getUploadreq()) && proto.model.MsgUploadReq.toObject(includeInstance, f),
    downloadreq: (f = msg.getDownloadreq()) && proto.model.MsgDownloadReq.toObject(includeInstance, f),
    uploadreply: (f = msg.getUploadreply()) && proto.model.MsgUploadReply.toObject(includeInstance, f),
    downloadreply: (f = msg.getDownloadreply()) && proto.model.MsgDownloadReply.toObject(includeInstance, f),
    userop: (f = msg.getUserop()) && proto.model.UserOpReq.toObject(includeInstance, f),
    useropret: (f = msg.getUseropret()) && proto.model.UserOpResult.toObject(includeInstance, f),
    friendop: (f = msg.getFriendop()) && proto.model.FriendOpReq.toObject(includeInstance, f),
    friendopret: (f = msg.getFriendopret()) && proto.model.FriendOpResult.toObject(includeInstance, f),
    groupop: (f = msg.getGroupop()) && proto.model.GroupOpReq.toObject(includeInstance, f),
    groupopret: (f = msg.getGroupopret()) && proto.model.GroupOpResult.toObject(includeInstance, f),
    othertypemsg: msg.getOthertypemsg_asB64()
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
 * @return {!proto.model.MsgPlain}
 */
proto.model.MsgPlain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.MsgPlain;
  return proto.model.MsgPlain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.MsgPlain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.MsgPlain}
 */
proto.model.MsgPlain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
      var value = new proto.model.MsgError;
      reader.readMessage(value,proto.model.MsgError.deserializeBinaryFromReader);
      msg.setErrormsg(value);
      break;
    case 10:
      var value = new proto.model.MsgKeyExchange;
      reader.readMessage(value,proto.model.MsgKeyExchange.deserializeBinaryFromReader);
      msg.setKeyex(value);
      break;
    case 11:
      var value = new proto.model.MsgChat;
      reader.readMessage(value,proto.model.MsgChat.deserializeBinaryFromReader);
      msg.setChatdata(value);
      break;
    case 12:
      var value = new proto.model.MsgChatReply;
      reader.readMessage(value,proto.model.MsgChatReply.deserializeBinaryFromReader);
      msg.setChatreply(value);
      break;
    case 13:
      var value = new proto.model.MsgQuery;
      reader.readMessage(value,proto.model.MsgQuery.deserializeBinaryFromReader);
      msg.setCommonquery(value);
      break;
    case 14:
      var value = new proto.model.MsgQueryResult;
      reader.readMessage(value,proto.model.MsgQueryResult.deserializeBinaryFromReader);
      msg.setCommonqueryret(value);
      break;
    case 21:
      var value = new proto.model.MsgUploadReq;
      reader.readMessage(value,proto.model.MsgUploadReq.deserializeBinaryFromReader);
      msg.setUploadreq(value);
      break;
    case 22:
      var value = new proto.model.MsgDownloadReq;
      reader.readMessage(value,proto.model.MsgDownloadReq.deserializeBinaryFromReader);
      msg.setDownloadreq(value);
      break;
    case 23:
      var value = new proto.model.MsgUploadReply;
      reader.readMessage(value,proto.model.MsgUploadReply.deserializeBinaryFromReader);
      msg.setUploadreply(value);
      break;
    case 24:
      var value = new proto.model.MsgDownloadReply;
      reader.readMessage(value,proto.model.MsgDownloadReply.deserializeBinaryFromReader);
      msg.setDownloadreply(value);
      break;
    case 31:
      var value = new proto.model.UserOpReq;
      reader.readMessage(value,proto.model.UserOpReq.deserializeBinaryFromReader);
      msg.setUserop(value);
      break;
    case 32:
      var value = new proto.model.UserOpResult;
      reader.readMessage(value,proto.model.UserOpResult.deserializeBinaryFromReader);
      msg.setUseropret(value);
      break;
    case 33:
      var value = new proto.model.FriendOpReq;
      reader.readMessage(value,proto.model.FriendOpReq.deserializeBinaryFromReader);
      msg.setFriendop(value);
      break;
    case 34:
      var value = new proto.model.FriendOpResult;
      reader.readMessage(value,proto.model.FriendOpResult.deserializeBinaryFromReader);
      msg.setFriendopret(value);
      break;
    case 35:
      var value = new proto.model.GroupOpReq;
      reader.readMessage(value,proto.model.GroupOpReq.deserializeBinaryFromReader);
      msg.setGroupop(value);
      break;
    case 36:
      var value = new proto.model.GroupOpResult;
      reader.readMessage(value,proto.model.GroupOpResult.deserializeBinaryFromReader);
      msg.setGroupopret(value);
      break;
    case 100:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOthertypemsg(value);
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
proto.model.MsgPlain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.MsgPlain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.MsgPlain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.MsgPlain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
  f = message.getErrormsg();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.model.MsgError.serializeBinaryToWriter
    );
  }
  f = message.getKeyex();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.model.MsgKeyExchange.serializeBinaryToWriter
    );
  }
  f = message.getChatdata();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.model.MsgChat.serializeBinaryToWriter
    );
  }
  f = message.getChatreply();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.model.MsgChatReply.serializeBinaryToWriter
    );
  }
  f = message.getCommonquery();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.model.MsgQuery.serializeBinaryToWriter
    );
  }
  f = message.getCommonqueryret();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.model.MsgQueryResult.serializeBinaryToWriter
    );
  }
  f = message.getUploadreq();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.model.MsgUploadReq.serializeBinaryToWriter
    );
  }
  f = message.getDownloadreq();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.model.MsgDownloadReq.serializeBinaryToWriter
    );
  }
  f = message.getUploadreply();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.model.MsgUploadReply.serializeBinaryToWriter
    );
  }
  f = message.getDownloadreply();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.model.MsgDownloadReply.serializeBinaryToWriter
    );
  }
  f = message.getUserop();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.model.UserOpReq.serializeBinaryToWriter
    );
  }
  f = message.getUseropret();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.model.UserOpResult.serializeBinaryToWriter
    );
  }
  f = message.getFriendop();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.model.FriendOpReq.serializeBinaryToWriter
    );
  }
  f = message.getFriendopret();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.model.FriendOpResult.serializeBinaryToWriter
    );
  }
  f = message.getGroupop();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.model.GroupOpReq.serializeBinaryToWriter
    );
  }
  f = message.getGroupopret();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.model.GroupOpResult.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 100));
  if (f != null) {
    writer.writeBytes(
      100,
      f
    );
  }
};


/**
 * optional MsgHello hello = 7;
 * @return {?proto.model.MsgHello}
 */
proto.model.MsgPlain.prototype.getHello = function() {
  return /** @type{?proto.model.MsgHello} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgHello, 7));
};


/**
 * @param {?proto.model.MsgHello|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setHello = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearHello = function() {
  return this.setHello(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasHello = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MsgHeartBeat heartBeat = 8;
 * @return {?proto.model.MsgHeartBeat}
 */
proto.model.MsgPlain.prototype.getHeartbeat = function() {
  return /** @type{?proto.model.MsgHeartBeat} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgHeartBeat, 8));
};


/**
 * @param {?proto.model.MsgHeartBeat|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setHeartbeat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearHeartbeat = function() {
  return this.setHeartbeat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasHeartbeat = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MsgError errorMsg = 9;
 * @return {?proto.model.MsgError}
 */
proto.model.MsgPlain.prototype.getErrormsg = function() {
  return /** @type{?proto.model.MsgError} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgError, 9));
};


/**
 * @param {?proto.model.MsgError|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setErrormsg = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearErrormsg = function() {
  return this.setErrormsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasErrormsg = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MsgKeyExchange keyEx = 10;
 * @return {?proto.model.MsgKeyExchange}
 */
proto.model.MsgPlain.prototype.getKeyex = function() {
  return /** @type{?proto.model.MsgKeyExchange} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgKeyExchange, 10));
};


/**
 * @param {?proto.model.MsgKeyExchange|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setKeyex = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearKeyex = function() {
  return this.setKeyex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasKeyex = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MsgChat chatData = 11;
 * @return {?proto.model.MsgChat}
 */
proto.model.MsgPlain.prototype.getChatdata = function() {
  return /** @type{?proto.model.MsgChat} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgChat, 11));
};


/**
 * @param {?proto.model.MsgChat|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setChatdata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearChatdata = function() {
  return this.setChatdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasChatdata = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MsgChatReply chatReply = 12;
 * @return {?proto.model.MsgChatReply}
 */
proto.model.MsgPlain.prototype.getChatreply = function() {
  return /** @type{?proto.model.MsgChatReply} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgChatReply, 12));
};


/**
 * @param {?proto.model.MsgChatReply|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setChatreply = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearChatreply = function() {
  return this.setChatreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasChatreply = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MsgQuery commonQuery = 13;
 * @return {?proto.model.MsgQuery}
 */
proto.model.MsgPlain.prototype.getCommonquery = function() {
  return /** @type{?proto.model.MsgQuery} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgQuery, 13));
};


/**
 * @param {?proto.model.MsgQuery|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setCommonquery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearCommonquery = function() {
  return this.setCommonquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasCommonquery = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional MsgQueryResult commonQueryRet = 14;
 * @return {?proto.model.MsgQueryResult}
 */
proto.model.MsgPlain.prototype.getCommonqueryret = function() {
  return /** @type{?proto.model.MsgQueryResult} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgQueryResult, 14));
};


/**
 * @param {?proto.model.MsgQueryResult|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setCommonqueryret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearCommonqueryret = function() {
  return this.setCommonqueryret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasCommonqueryret = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional MsgUploadReq uploadReq = 21;
 * @return {?proto.model.MsgUploadReq}
 */
proto.model.MsgPlain.prototype.getUploadreq = function() {
  return /** @type{?proto.model.MsgUploadReq} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgUploadReq, 21));
};


/**
 * @param {?proto.model.MsgUploadReq|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setUploadreq = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearUploadreq = function() {
  return this.setUploadreq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasUploadreq = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional MsgDownloadReq downloadReq = 22;
 * @return {?proto.model.MsgDownloadReq}
 */
proto.model.MsgPlain.prototype.getDownloadreq = function() {
  return /** @type{?proto.model.MsgDownloadReq} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgDownloadReq, 22));
};


/**
 * @param {?proto.model.MsgDownloadReq|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setDownloadreq = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearDownloadreq = function() {
  return this.setDownloadreq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasDownloadreq = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional MsgUploadReply uploadReply = 23;
 * @return {?proto.model.MsgUploadReply}
 */
proto.model.MsgPlain.prototype.getUploadreply = function() {
  return /** @type{?proto.model.MsgUploadReply} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgUploadReply, 23));
};


/**
 * @param {?proto.model.MsgUploadReply|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setUploadreply = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearUploadreply = function() {
  return this.setUploadreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasUploadreply = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional MsgDownloadReply downloadReply = 24;
 * @return {?proto.model.MsgDownloadReply}
 */
proto.model.MsgPlain.prototype.getDownloadreply = function() {
  return /** @type{?proto.model.MsgDownloadReply} */ (
    jspb.Message.getWrapperField(this, proto.model.MsgDownloadReply, 24));
};


/**
 * @param {?proto.model.MsgDownloadReply|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setDownloadreply = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearDownloadreply = function() {
  return this.setDownloadreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasDownloadreply = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional UserOpReq userOp = 31;
 * @return {?proto.model.UserOpReq}
 */
proto.model.MsgPlain.prototype.getUserop = function() {
  return /** @type{?proto.model.UserOpReq} */ (
    jspb.Message.getWrapperField(this, proto.model.UserOpReq, 31));
};


/**
 * @param {?proto.model.UserOpReq|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setUserop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearUserop = function() {
  return this.setUserop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasUserop = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional UserOpResult userOpRet = 32;
 * @return {?proto.model.UserOpResult}
 */
proto.model.MsgPlain.prototype.getUseropret = function() {
  return /** @type{?proto.model.UserOpResult} */ (
    jspb.Message.getWrapperField(this, proto.model.UserOpResult, 32));
};


/**
 * @param {?proto.model.UserOpResult|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setUseropret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearUseropret = function() {
  return this.setUseropret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasUseropret = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional FriendOpReq friendOp = 33;
 * @return {?proto.model.FriendOpReq}
 */
proto.model.MsgPlain.prototype.getFriendop = function() {
  return /** @type{?proto.model.FriendOpReq} */ (
    jspb.Message.getWrapperField(this, proto.model.FriendOpReq, 33));
};


/**
 * @param {?proto.model.FriendOpReq|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setFriendop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearFriendop = function() {
  return this.setFriendop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasFriendop = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional FriendOpResult friendOpRet = 34;
 * @return {?proto.model.FriendOpResult}
 */
proto.model.MsgPlain.prototype.getFriendopret = function() {
  return /** @type{?proto.model.FriendOpResult} */ (
    jspb.Message.getWrapperField(this, proto.model.FriendOpResult, 34));
};


/**
 * @param {?proto.model.FriendOpResult|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setFriendopret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearFriendopret = function() {
  return this.setFriendopret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasFriendopret = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional GroupOpReq groupOp = 35;
 * @return {?proto.model.GroupOpReq}
 */
proto.model.MsgPlain.prototype.getGroupop = function() {
  return /** @type{?proto.model.GroupOpReq} */ (
    jspb.Message.getWrapperField(this, proto.model.GroupOpReq, 35));
};


/**
 * @param {?proto.model.GroupOpReq|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setGroupop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearGroupop = function() {
  return this.setGroupop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasGroupop = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional GroupOpResult groupOpRet = 36;
 * @return {?proto.model.GroupOpResult}
 */
proto.model.MsgPlain.prototype.getGroupopret = function() {
  return /** @type{?proto.model.GroupOpResult} */ (
    jspb.Message.getWrapperField(this, proto.model.GroupOpResult, 36));
};


/**
 * @param {?proto.model.GroupOpResult|undefined} value
 * @return {!proto.model.MsgPlain} returns this
*/
proto.model.MsgPlain.prototype.setGroupopret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearGroupopret = function() {
  return this.setGroupopret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasGroupopret = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional bytes otherTypeMsg = 100;
 * @return {string}
 */
proto.model.MsgPlain.prototype.getOthertypemsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * optional bytes otherTypeMsg = 100;
 * This is a type-conversion wrapper around `getOthertypemsg()`
 * @return {string}
 */
proto.model.MsgPlain.prototype.getOthertypemsg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOthertypemsg()));
};


/**
 * optional bytes otherTypeMsg = 100;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOthertypemsg()`
 * @return {!Uint8Array}
 */
proto.model.MsgPlain.prototype.getOthertypemsg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOthertypemsg()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.setOthertypemsg = function(value) {
  return jspb.Message.setOneofField(this, 100, proto.model.MsgPlain.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.model.MsgPlain} returns this
 */
proto.model.MsgPlain.prototype.clearOthertypemsg = function() {
  return jspb.Message.setOneofField(this, 100, proto.model.MsgPlain.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.MsgPlain.prototype.hasOthertypemsg = function() {
  return jspb.Message.getField(this, 100) != null;
};


