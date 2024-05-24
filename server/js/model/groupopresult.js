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

goog.provide('proto.model.GroupOpResult');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.model.GroupInfo');
goog.require('proto.model.GroupMember');

goog.forwardDeclare('proto.model.GroupOperationType');
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
proto.model.GroupOpResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.model.GroupOpResult.repeatedFields_, null);
};
goog.inherits(proto.model.GroupOpResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.GroupOpResult.displayName = 'proto.model.GroupOpResult';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.model.GroupOpResult.repeatedFields_ = [8,10];



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
proto.model.GroupOpResult.prototype.toObject = function(opt_includeInstance) {
  return proto.model.GroupOpResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.GroupOpResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GroupOpResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reqmem: (f = msg.getReqmem()) && proto.model.GroupMember.toObject(includeInstance, f),
    result: jspb.Message.getFieldWithDefault(msg, 3, ""),
    detail: jspb.Message.getFieldWithDefault(msg, 4, ""),
    group: (f = msg.getGroup()) && proto.model.GroupInfo.toObject(includeInstance, f),
    sendid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    msgid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.model.GroupMember.toObject, includeInstance),
    paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, undefined) : [],
    groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    proto.model.GroupInfo.toObject, includeInstance)
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
 * @return {!proto.model.GroupOpResult}
 */
proto.model.GroupOpResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.GroupOpResult;
  return proto.model.GroupOpResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.GroupOpResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.GroupOpResult}
 */
proto.model.GroupOpResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.model.GroupOperationType} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = new proto.model.GroupMember;
      reader.readMessage(value,proto.model.GroupMember.deserializeBinaryFromReader);
      msg.setReqmem(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetail(value);
      break;
    case 5:
      var value = new proto.model.GroupInfo;
      reader.readMessage(value,proto.model.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSendid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgid(value);
      break;
    case 8:
      var value = new proto.model.GroupMember;
      reader.readMessage(value,proto.model.GroupMember.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 9:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 10:
      var value = new proto.model.GroupInfo;
      reader.readMessage(value,proto.model.GroupInfo.deserializeBinaryFromReader);
      msg.addGroups(value);
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
proto.model.GroupOpResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.GroupOpResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.GroupOpResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GroupOpResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReqmem();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.model.GroupMember.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.model.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getSendid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMsgid();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.model.GroupMember.serializeBinaryToWriter
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.model.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupOperationType operation = 1;
 * @return {!proto.model.GroupOperationType}
 */
proto.model.GroupOpResult.prototype.getOperation = function() {
  return /** @type {!proto.model.GroupOperationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.model.GroupOperationType} value
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional GroupMember ReqMem = 2;
 * @return {?proto.model.GroupMember}
 */
proto.model.GroupOpResult.prototype.getReqmem = function() {
  return /** @type{?proto.model.GroupMember} */ (
    jspb.Message.getWrapperField(this, proto.model.GroupMember, 2));
};


/**
 * @param {?proto.model.GroupMember|undefined} value
 * @return {!proto.model.GroupOpResult} returns this
*/
proto.model.GroupOpResult.prototype.setReqmem = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.clearReqmem = function() {
  return this.setReqmem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.GroupOpResult.prototype.hasReqmem = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string result = 3;
 * @return {string}
 */
proto.model.GroupOpResult.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string detail = 4;
 * @return {string}
 */
proto.model.GroupOpResult.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.setDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional GroupInfo group = 5;
 * @return {?proto.model.GroupInfo}
 */
proto.model.GroupOpResult.prototype.getGroup = function() {
  return /** @type{?proto.model.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.model.GroupInfo, 5));
};


/**
 * @param {?proto.model.GroupInfo|undefined} value
 * @return {!proto.model.GroupOpResult} returns this
*/
proto.model.GroupOpResult.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.GroupOpResult.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 sendId = 6;
 * @return {number}
 */
proto.model.GroupOpResult.prototype.getSendid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.setSendid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 msgId = 7;
 * @return {number}
 */
proto.model.GroupOpResult.prototype.getMsgid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated GroupMember members = 8;
 * @return {!Array<!proto.model.GroupMember>}
 */
proto.model.GroupOpResult.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.model.GroupMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.model.GroupMember, 8));
};


/**
 * @param {!Array<!proto.model.GroupMember>} value
 * @return {!proto.model.GroupOpResult} returns this
*/
proto.model.GroupOpResult.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.model.GroupMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.model.GroupMember}
 */
proto.model.GroupOpResult.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.model.GroupMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};


/**
 * map<string, string> params = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.model.GroupOpResult.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;};


/**
 * repeated GroupInfo groups = 10;
 * @return {!Array<!proto.model.GroupInfo>}
 */
proto.model.GroupOpResult.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.model.GroupInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.model.GroupInfo, 10));
};


/**
 * @param {!Array<!proto.model.GroupInfo>} value
 * @return {!proto.model.GroupOpResult} returns this
*/
proto.model.GroupOpResult.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.model.GroupInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.model.GroupInfo}
 */
proto.model.GroupOpResult.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.model.GroupInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.model.GroupOpResult} returns this
 */
proto.model.GroupOpResult.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};


