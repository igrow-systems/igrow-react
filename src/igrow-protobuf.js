/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs";

// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util   = $protobuf.util;

// Lazily resolved type references
var $lazyTypes = [];

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.argusat = (function() {

        /**
         * Namespace argusat.
         * @exports com.argusat
         * @namespace
         */
        var argusat = {};

        argusat.gjl = (function() {

            /**
             * Namespace gjl.
             * @exports com.argusat.gjl
             * @namespace
             */
            var gjl = {};

            gjl.locator = (function() {

                /**
                 * Namespace locator.
                 * @exports com.argusat.gjl.locator
                 * @namespace
                 */
                var locator = {};

                locator.Device = (function() {

                    /**
                     * Constructs a new Device.
                     * @exports com.argusat.gjl.locator.Device
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function Device(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Device deviceId.
                     * @type {string}
                     */
                    Device.prototype.deviceId = "";

                    /**
                     * Device osType.
                     * @type {number}
                     */
                    Device.prototype.osType = 0;

                    /**
                     * Device osVersion.
                     * @type {string}
                     */
                    Device.prototype.osVersion = "";

                    /**
                     * Device pushToken.
                     * @type {string}
                     */
                    Device.prototype.pushToken = "";

                    /**
                     * Device manufacturer.
                     * @type {string}
                     */
                    Device.prototype.manufacturer = "";

                    /**
                     * Device model.
                     * @type {string}
                     */
                    Device.prototype.model = "";

                    /**
                     * Device product.
                     * @type {string}
                     */
                    Device.prototype.product = "";

                    /**
                     * Device device.
                     * @type {string}
                     */
                    Device.prototype.device = "";

                    /**
                     * Device lastKnownLocation.
                     * @type {com.argusat.gjl.observation.Location}
                     */
                    Device.prototype.lastKnownLocation = null;

                    // Lazily resolved type references
                    var $types = {
                        1: "com.argusat.gjl.locator.Device.OSType",
                        8: "com.argusat.gjl.observation.Location"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new Device instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.Device} Device instance
                     */
                    Device.create = function create(properties) {
                        return new Device(properties);
                    };

                    /**
                     * Encodes the specified Device message.
                     * @param {com.argusat.gjl.locator.Device|Object} message Device message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Device.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deviceId !== undefined && message.hasOwnProperty("deviceId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
                        if (message.osType !== undefined && message.hasOwnProperty("osType"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.osType);
                        if (message.osVersion !== undefined && message.hasOwnProperty("osVersion"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.osVersion);
                        if (message.pushToken !== undefined && message.hasOwnProperty("pushToken"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.pushToken);
                        if (message.manufacturer !== undefined && message.hasOwnProperty("manufacturer"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.manufacturer);
                        if (message.model !== undefined && message.hasOwnProperty("model"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.model);
                        if (message.product !== undefined && message.hasOwnProperty("product"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.product);
                        if (message.device !== undefined && message.hasOwnProperty("device"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.device);
                        if (message.lastKnownLocation !== undefined && message.hasOwnProperty("lastKnownLocation"))
                            $types[8].encode(message.lastKnownLocation, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Device message, length delimited.
                     * @param {com.argusat.gjl.locator.Device|Object} message Device message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Device.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Device message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.Device} Device
                     */
                    Device.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.Device();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deviceId = reader.string();
                                break;
                            case 2:
                                message.osType = reader.uint32();
                                break;
                            case 3:
                                message.osVersion = reader.string();
                                break;
                            case 4:
                                message.pushToken = reader.string();
                                break;
                            case 5:
                                message.manufacturer = reader.string();
                                break;
                            case 6:
                                message.model = reader.string();
                                break;
                            case 7:
                                message.product = reader.string();
                                break;
                            case 8:
                                message.device = reader.string();
                                break;
                            case 9:
                                message.lastKnownLocation = $types[8].decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Device message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.Device} Device
                     */
                    Device.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Device message.
                     * @param {com.argusat.gjl.locator.Device|Object} message Device message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    Device.verify = function verify(message) {
                        if (message.deviceId !== undefined)
                            if (!$util.isString(message.deviceId))
                                return "deviceId: string expected";
                        if (message.osType !== undefined)
                            switch (message.osType) {
                            default:
                                return "osType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.osVersion !== undefined)
                            if (!$util.isString(message.osVersion))
                                return "osVersion: string expected";
                        if (message.pushToken !== undefined)
                            if (!$util.isString(message.pushToken))
                                return "pushToken: string expected";
                        if (message.manufacturer !== undefined)
                            if (!$util.isString(message.manufacturer))
                                return "manufacturer: string expected";
                        if (message.model !== undefined)
                            if (!$util.isString(message.model))
                                return "model: string expected";
                        if (message.product !== undefined)
                            if (!$util.isString(message.product))
                                return "product: string expected";
                        if (message.device !== undefined)
                            if (!$util.isString(message.device))
                                return "device: string expected";
                        if (message.lastKnownLocation !== undefined && message.lastKnownLocation !== null) {
                            var error = $types[8].verify(message.lastKnownLocation);
                            if (error)
                                return "lastKnownLocation." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Device message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.Device} Device
                     */
                    Device.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.Device)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.Device();
                        if (object.deviceId !== undefined && object.deviceId !== null)
                            message.deviceId = String(object.deviceId);
                        switch (object.osType) {
                        case "MS_WINDOWS":
                        case 0:
                            message.osType = 0;
                            break;
                        case "GOOGLE_ANDROID":
                        case 1:
                            message.osType = 1;
                            break;
                        case "APPLE_IOS":
                        case 2:
                            message.osType = 2;
                            break;
                        }
                        if (object.osVersion !== undefined && object.osVersion !== null)
                            message.osVersion = String(object.osVersion);
                        if (object.pushToken !== undefined && object.pushToken !== null)
                            message.pushToken = String(object.pushToken);
                        if (object.manufacturer !== undefined && object.manufacturer !== null)
                            message.manufacturer = String(object.manufacturer);
                        if (object.model !== undefined && object.model !== null)
                            message.model = String(object.model);
                        if (object.product !== undefined && object.product !== null)
                            message.product = String(object.product);
                        if (object.device !== undefined && object.device !== null)
                            message.device = String(object.device);
                        if (object.lastKnownLocation !== undefined && object.lastKnownLocation !== null) {
                            if (typeof object.lastKnownLocation !== "object")
                                throw TypeError(".com.argusat.gjl.locator.Device.lastKnownLocation: object expected");
                            message.lastKnownLocation = $types[8].fromObject(object.lastKnownLocation);
                        }
                        return message;
                    };

                    /**
                     * Creates a Device message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.Device.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.Device} Device
                     */
                    Device.from = Device.fromObject;

                    /**
                     * Creates a plain object from a Device message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.Device} message Device
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Device.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.deviceId = "";
                            object.osType = options.enums === String ? "MS_WINDOWS" : 0;
                            object.osVersion = "";
                            object.pushToken = "";
                            object.manufacturer = "";
                            object.model = "";
                            object.product = "";
                            object.device = "";
                            object.lastKnownLocation = null;
                        }
                        if (message.deviceId !== undefined && message.deviceId !== null && message.hasOwnProperty("deviceId"))
                            object.deviceId = message.deviceId;
                        if (message.osType !== undefined && message.osType !== null && message.hasOwnProperty("osType"))
                            object.osType = options.enums === String ? $types[1][message.osType] : message.osType;
                        if (message.osVersion !== undefined && message.osVersion !== null && message.hasOwnProperty("osVersion"))
                            object.osVersion = message.osVersion;
                        if (message.pushToken !== undefined && message.pushToken !== null && message.hasOwnProperty("pushToken"))
                            object.pushToken = message.pushToken;
                        if (message.manufacturer !== undefined && message.manufacturer !== null && message.hasOwnProperty("manufacturer"))
                            object.manufacturer = message.manufacturer;
                        if (message.model !== undefined && message.model !== null && message.hasOwnProperty("model"))
                            object.model = message.model;
                        if (message.product !== undefined && message.product !== null && message.hasOwnProperty("product"))
                            object.product = message.product;
                        if (message.device !== undefined && message.device !== null && message.hasOwnProperty("device"))
                            object.device = message.device;
                        if (message.lastKnownLocation !== undefined && message.lastKnownLocation !== null && message.hasOwnProperty("lastKnownLocation"))
                            object.lastKnownLocation = $types[8].toObject(message.lastKnownLocation, options);
                        return object;
                    };

                    /**
                     * Creates a plain object from this Device message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Device.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this Device to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    Device.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * OSType enum.
                     * @name OSType
                     * @memberof com.argusat.gjl.locator.Device
                     * @enum {number}
                     * @property {number} MS_WINDOWS=0 MS_WINDOWS value
                     * @property {number} GOOGLE_ANDROID=1 GOOGLE_ANDROID value
                     * @property {number} APPLE_IOS=2 APPLE_IOS value
                     */
                    Device.OSType = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "MS_WINDOWS"] = 0;
                        values[valuesById[1] = "GOOGLE_ANDROID"] = 1;
                        values[valuesById[2] = "APPLE_IOS"] = 2;
                        return values;
                    })();

                    return Device;
                })();

                locator.RegisterDeviceRequest = (function() {

                    /**
                     * Constructs a new RegisterDeviceRequest.
                     * @exports com.argusat.gjl.locator.RegisterDeviceRequest
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function RegisterDeviceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RegisterDeviceRequest device.
                     * @type {com.argusat.gjl.locator.Device}
                     */
                    RegisterDeviceRequest.prototype.device = null;

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.locator.Device"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new RegisterDeviceRequest instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.RegisterDeviceRequest} RegisterDeviceRequest instance
                     */
                    RegisterDeviceRequest.create = function create(properties) {
                        return new RegisterDeviceRequest(properties);
                    };

                    /**
                     * Encodes the specified RegisterDeviceRequest message.
                     * @param {com.argusat.gjl.locator.RegisterDeviceRequest|Object} message RegisterDeviceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegisterDeviceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.device !== undefined && message.hasOwnProperty("device"))
                            $types[0].encode(message.device, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified RegisterDeviceRequest message, length delimited.
                     * @param {com.argusat.gjl.locator.RegisterDeviceRequest|Object} message RegisterDeviceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegisterDeviceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RegisterDeviceRequest message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.RegisterDeviceRequest} RegisterDeviceRequest
                     */
                    RegisterDeviceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.RegisterDeviceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.device = $types[0].decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RegisterDeviceRequest message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.RegisterDeviceRequest} RegisterDeviceRequest
                     */
                    RegisterDeviceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RegisterDeviceRequest message.
                     * @param {com.argusat.gjl.locator.RegisterDeviceRequest|Object} message RegisterDeviceRequest message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    RegisterDeviceRequest.verify = function verify(message) {
                        if (message.device !== undefined && message.device !== null) {
                            var error = $types[0].verify(message.device);
                            if (error)
                                return "device." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a RegisterDeviceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.RegisterDeviceRequest} RegisterDeviceRequest
                     */
                    RegisterDeviceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.RegisterDeviceRequest)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.RegisterDeviceRequest();
                        if (object.device !== undefined && object.device !== null) {
                            if (typeof object.device !== "object")
                                throw TypeError(".com.argusat.gjl.locator.RegisterDeviceRequest.device: object expected");
                            message.device = $types[0].fromObject(object.device);
                        }
                        return message;
                    };

                    /**
                     * Creates a RegisterDeviceRequest message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.RegisterDeviceRequest.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.RegisterDeviceRequest} RegisterDeviceRequest
                     */
                    RegisterDeviceRequest.from = RegisterDeviceRequest.fromObject;

                    /**
                     * Creates a plain object from a RegisterDeviceRequest message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.RegisterDeviceRequest} message RegisterDeviceRequest
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegisterDeviceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.device = null;
                        if (message.device !== undefined && message.device !== null && message.hasOwnProperty("device"))
                            object.device = $types[0].toObject(message.device, options);
                        return object;
                    };

                    /**
                     * Creates a plain object from this RegisterDeviceRequest message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegisterDeviceRequest.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this RegisterDeviceRequest to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegisterDeviceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RegisterDeviceRequest;
                })();

                locator.RegisterDeviceResponse = (function() {

                    /**
                     * Constructs a new RegisterDeviceResponse.
                     * @exports com.argusat.gjl.locator.RegisterDeviceResponse
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function RegisterDeviceResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RegisterDeviceResponse responseCode.
                     * @type {number}
                     */
                    RegisterDeviceResponse.prototype.responseCode = 0;

                    /**
                     * RegisterDeviceResponse responseMessage.
                     * @type {string}
                     */
                    RegisterDeviceResponse.prototype.responseMessage = "";

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.locator.RegisterDeviceResponse.ErrorCode"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new RegisterDeviceResponse instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.RegisterDeviceResponse} RegisterDeviceResponse instance
                     */
                    RegisterDeviceResponse.create = function create(properties) {
                        return new RegisterDeviceResponse(properties);
                    };

                    /**
                     * Encodes the specified RegisterDeviceResponse message.
                     * @param {com.argusat.gjl.locator.RegisterDeviceResponse|Object} message RegisterDeviceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegisterDeviceResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.responseCode !== undefined && message.hasOwnProperty("responseCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.responseCode);
                        if (message.responseMessage !== undefined && message.hasOwnProperty("responseMessage"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.responseMessage);
                        return writer;
                    };

                    /**
                     * Encodes the specified RegisterDeviceResponse message, length delimited.
                     * @param {com.argusat.gjl.locator.RegisterDeviceResponse|Object} message RegisterDeviceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegisterDeviceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RegisterDeviceResponse message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.RegisterDeviceResponse} RegisterDeviceResponse
                     */
                    RegisterDeviceResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.RegisterDeviceResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.responseCode = reader.uint32();
                                break;
                            case 2:
                                message.responseMessage = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RegisterDeviceResponse message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.RegisterDeviceResponse} RegisterDeviceResponse
                     */
                    RegisterDeviceResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RegisterDeviceResponse message.
                     * @param {com.argusat.gjl.locator.RegisterDeviceResponse|Object} message RegisterDeviceResponse message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    RegisterDeviceResponse.verify = function verify(message) {
                        if (message.responseCode !== undefined)
                            switch (message.responseCode) {
                            default:
                                return "responseCode: enum value expected";
                            case 0:
                                break;
                            }
                        if (message.responseMessage !== undefined)
                            if (!$util.isString(message.responseMessage))
                                return "responseMessage: string expected";
                        return null;
                    };

                    /**
                     * Creates a RegisterDeviceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.RegisterDeviceResponse} RegisterDeviceResponse
                     */
                    RegisterDeviceResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.RegisterDeviceResponse)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.RegisterDeviceResponse();
                        switch (object.responseCode) {
                        case "NONE":
                        case 0:
                            message.responseCode = 0;
                            break;
                        }
                        if (object.responseMessage !== undefined && object.responseMessage !== null)
                            message.responseMessage = String(object.responseMessage);
                        return message;
                    };

                    /**
                     * Creates a RegisterDeviceResponse message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.RegisterDeviceResponse.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.RegisterDeviceResponse} RegisterDeviceResponse
                     */
                    RegisterDeviceResponse.from = RegisterDeviceResponse.fromObject;

                    /**
                     * Creates a plain object from a RegisterDeviceResponse message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.RegisterDeviceResponse} message RegisterDeviceResponse
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegisterDeviceResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.responseCode = options.enums === String ? "NONE" : 0;
                            object.responseMessage = "";
                        }
                        if (message.responseCode !== undefined && message.responseCode !== null && message.hasOwnProperty("responseCode"))
                            object.responseCode = options.enums === String ? $types[0][message.responseCode] : message.responseCode;
                        if (message.responseMessage !== undefined && message.responseMessage !== null && message.hasOwnProperty("responseMessage"))
                            object.responseMessage = message.responseMessage;
                        return object;
                    };

                    /**
                     * Creates a plain object from this RegisterDeviceResponse message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegisterDeviceResponse.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this RegisterDeviceResponse to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegisterDeviceResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ErrorCode enum.
                     * @name ErrorCode
                     * @memberof com.argusat.gjl.locator.RegisterDeviceResponse
                     * @enum {number}
                     * @property {number} NONE=0 NONE value
                     */
                    RegisterDeviceResponse.ErrorCode = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        return values;
                    })();

                    return RegisterDeviceResponse;
                })();

                locator.NotifyDeviceRequest = (function() {

                    /**
                     * Constructs a new NotifyDeviceRequest.
                     * @exports com.argusat.gjl.locator.NotifyDeviceRequest
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function NotifyDeviceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NotifyDeviceRequest deviceId.
                     * @type {string}
                     */
                    NotifyDeviceRequest.prototype.deviceId = "";

                    /**
                     * NotifyDeviceRequest message.
                     * @type {string}
                     */
                    NotifyDeviceRequest.prototype.message = "";

                    /**
                     * Creates a new NotifyDeviceRequest instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.NotifyDeviceRequest} NotifyDeviceRequest instance
                     */
                    NotifyDeviceRequest.create = function create(properties) {
                        return new NotifyDeviceRequest(properties);
                    };

                    /**
                     * Encodes the specified NotifyDeviceRequest message.
                     * @param {com.argusat.gjl.locator.NotifyDeviceRequest|Object} message NotifyDeviceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotifyDeviceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deviceId !== undefined && message.hasOwnProperty("deviceId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
                        if (message.message !== undefined && message.hasOwnProperty("message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        return writer;
                    };

                    /**
                     * Encodes the specified NotifyDeviceRequest message, length delimited.
                     * @param {com.argusat.gjl.locator.NotifyDeviceRequest|Object} message NotifyDeviceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotifyDeviceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NotifyDeviceRequest message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.NotifyDeviceRequest} NotifyDeviceRequest
                     */
                    NotifyDeviceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.NotifyDeviceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deviceId = reader.string();
                                break;
                            case 2:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a NotifyDeviceRequest message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.NotifyDeviceRequest} NotifyDeviceRequest
                     */
                    NotifyDeviceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NotifyDeviceRequest message.
                     * @param {com.argusat.gjl.locator.NotifyDeviceRequest|Object} message NotifyDeviceRequest message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    NotifyDeviceRequest.verify = function verify(message) {
                        if (message.deviceId !== undefined)
                            if (!$util.isString(message.deviceId))
                                return "deviceId: string expected";
                        if (message.message !== undefined)
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };

                    /**
                     * Creates a NotifyDeviceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.NotifyDeviceRequest} NotifyDeviceRequest
                     */
                    NotifyDeviceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.NotifyDeviceRequest)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.NotifyDeviceRequest();
                        if (object.deviceId !== undefined && object.deviceId !== null)
                            message.deviceId = String(object.deviceId);
                        if (object.message !== undefined && object.message !== null)
                            message.message = String(object.message);
                        return message;
                    };

                    /**
                     * Creates a NotifyDeviceRequest message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.NotifyDeviceRequest.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.NotifyDeviceRequest} NotifyDeviceRequest
                     */
                    NotifyDeviceRequest.from = NotifyDeviceRequest.fromObject;

                    /**
                     * Creates a plain object from a NotifyDeviceRequest message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.NotifyDeviceRequest} message NotifyDeviceRequest
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NotifyDeviceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.deviceId = "";
                            object.message = "";
                        }
                        if (message.deviceId !== undefined && message.deviceId !== null && message.hasOwnProperty("deviceId"))
                            object.deviceId = message.deviceId;
                        if (message.message !== undefined && message.message !== null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };

                    /**
                     * Creates a plain object from this NotifyDeviceRequest message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NotifyDeviceRequest.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this NotifyDeviceRequest to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    NotifyDeviceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return NotifyDeviceRequest;
                })();

                locator.NotifyDeviceResponse = (function() {

                    /**
                     * Constructs a new NotifyDeviceResponse.
                     * @exports com.argusat.gjl.locator.NotifyDeviceResponse
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function NotifyDeviceResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NotifyDeviceResponse responseCode.
                     * @type {number}
                     */
                    NotifyDeviceResponse.prototype.responseCode = 0;

                    /**
                     * NotifyDeviceResponse responseMessage.
                     * @type {string}
                     */
                    NotifyDeviceResponse.prototype.responseMessage = "";

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.locator.NotifyDeviceResponse.ErrorCode"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new NotifyDeviceResponse instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.NotifyDeviceResponse} NotifyDeviceResponse instance
                     */
                    NotifyDeviceResponse.create = function create(properties) {
                        return new NotifyDeviceResponse(properties);
                    };

                    /**
                     * Encodes the specified NotifyDeviceResponse message.
                     * @param {com.argusat.gjl.locator.NotifyDeviceResponse|Object} message NotifyDeviceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotifyDeviceResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.responseCode !== undefined && message.hasOwnProperty("responseCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.responseCode);
                        if (message.responseMessage !== undefined && message.hasOwnProperty("responseMessage"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.responseMessage);
                        return writer;
                    };

                    /**
                     * Encodes the specified NotifyDeviceResponse message, length delimited.
                     * @param {com.argusat.gjl.locator.NotifyDeviceResponse|Object} message NotifyDeviceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotifyDeviceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NotifyDeviceResponse message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.NotifyDeviceResponse} NotifyDeviceResponse
                     */
                    NotifyDeviceResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.NotifyDeviceResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.responseCode = reader.uint32();
                                break;
                            case 2:
                                message.responseMessage = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a NotifyDeviceResponse message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.NotifyDeviceResponse} NotifyDeviceResponse
                     */
                    NotifyDeviceResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NotifyDeviceResponse message.
                     * @param {com.argusat.gjl.locator.NotifyDeviceResponse|Object} message NotifyDeviceResponse message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    NotifyDeviceResponse.verify = function verify(message) {
                        if (message.responseCode !== undefined)
                            switch (message.responseCode) {
                            default:
                                return "responseCode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        if (message.responseMessage !== undefined)
                            if (!$util.isString(message.responseMessage))
                                return "responseMessage: string expected";
                        return null;
                    };

                    /**
                     * Creates a NotifyDeviceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.NotifyDeviceResponse} NotifyDeviceResponse
                     */
                    NotifyDeviceResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.NotifyDeviceResponse)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.NotifyDeviceResponse();
                        switch (object.responseCode) {
                        case "NONE":
                        case 0:
                            message.responseCode = 0;
                            break;
                        case "DEVICE_NOT_FOUND":
                        case 1:
                            message.responseCode = 1;
                            break;
                        case "DEVICE_NOT_SUPPORTED":
                        case 2:
                            message.responseCode = 2;
                            break;
                        case "INTERNAL_ERROR":
                        case 3:
                            message.responseCode = 3;
                            break;
                        case "MESSAGE_PARSE_ERROR":
                        case 4:
                            message.responseCode = 4;
                            break;
                        }
                        if (object.responseMessage !== undefined && object.responseMessage !== null)
                            message.responseMessage = String(object.responseMessage);
                        return message;
                    };

                    /**
                     * Creates a NotifyDeviceResponse message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.NotifyDeviceResponse.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.NotifyDeviceResponse} NotifyDeviceResponse
                     */
                    NotifyDeviceResponse.from = NotifyDeviceResponse.fromObject;

                    /**
                     * Creates a plain object from a NotifyDeviceResponse message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.NotifyDeviceResponse} message NotifyDeviceResponse
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NotifyDeviceResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.responseCode = options.enums === String ? "NONE" : 0;
                            object.responseMessage = "";
                        }
                        if (message.responseCode !== undefined && message.responseCode !== null && message.hasOwnProperty("responseCode"))
                            object.responseCode = options.enums === String ? $types[0][message.responseCode] : message.responseCode;
                        if (message.responseMessage !== undefined && message.responseMessage !== null && message.hasOwnProperty("responseMessage"))
                            object.responseMessage = message.responseMessage;
                        return object;
                    };

                    /**
                     * Creates a plain object from this NotifyDeviceResponse message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NotifyDeviceResponse.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this NotifyDeviceResponse to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    NotifyDeviceResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ErrorCode enum.
                     * @name ErrorCode
                     * @memberof com.argusat.gjl.locator.NotifyDeviceResponse
                     * @enum {number}
                     * @property {number} NONE=0 NONE value
                     * @property {number} DEVICE_NOT_FOUND=1 DEVICE_NOT_FOUND value
                     * @property {number} DEVICE_NOT_SUPPORTED=2 DEVICE_NOT_SUPPORTED value
                     * @property {number} INTERNAL_ERROR=3 INTERNAL_ERROR value
                     * @property {number} MESSAGE_PARSE_ERROR=4 MESSAGE_PARSE_ERROR value
                     */
                    NotifyDeviceResponse.ErrorCode = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        values[valuesById[1] = "DEVICE_NOT_FOUND"] = 1;
                        values[valuesById[2] = "DEVICE_NOT_SUPPORTED"] = 2;
                        values[valuesById[3] = "INTERNAL_ERROR"] = 3;
                        values[valuesById[4] = "MESSAGE_PARSE_ERROR"] = 4;
                        return values;
                    })();

                    return NotifyDeviceResponse;
                })();

                locator.FindLocalDevicesRequest = (function() {

                    /**
                     * Constructs a new FindLocalDevicesRequest.
                     * @exports com.argusat.gjl.locator.FindLocalDevicesRequest
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function FindLocalDevicesRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FindLocalDevicesRequest centre.
                     * @type {com.argusat.gjl.observation.Location}
                     */
                    FindLocalDevicesRequest.prototype.centre = null;

                    /**
                     * FindLocalDevicesRequest radius.
                     * @type {number|$protobuf.Long}
                     */
                    FindLocalDevicesRequest.prototype.radius = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * FindLocalDevicesRequest limit.
                     * @type {number}
                     */
                    FindLocalDevicesRequest.prototype.limit = 0;

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.observation.Location"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new FindLocalDevicesRequest instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesRequest} FindLocalDevicesRequest instance
                     */
                    FindLocalDevicesRequest.create = function create(properties) {
                        return new FindLocalDevicesRequest(properties);
                    };

                    /**
                     * Encodes the specified FindLocalDevicesRequest message.
                     * @param {com.argusat.gjl.locator.FindLocalDevicesRequest|Object} message FindLocalDevicesRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindLocalDevicesRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.centre !== undefined && message.hasOwnProperty("centre"))
                            $types[0].encode(message.centre, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.radius !== undefined && message.radius !== null && message.hasOwnProperty("radius"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.radius);
                        if (message.limit !== undefined && message.hasOwnProperty("limit"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.limit);
                        return writer;
                    };

                    /**
                     * Encodes the specified FindLocalDevicesRequest message, length delimited.
                     * @param {com.argusat.gjl.locator.FindLocalDevicesRequest|Object} message FindLocalDevicesRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindLocalDevicesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FindLocalDevicesRequest message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesRequest} FindLocalDevicesRequest
                     */
                    FindLocalDevicesRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.FindLocalDevicesRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.centre = $types[0].decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.radius = reader.uint64();
                                break;
                            case 3:
                                message.limit = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FindLocalDevicesRequest message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesRequest} FindLocalDevicesRequest
                     */
                    FindLocalDevicesRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FindLocalDevicesRequest message.
                     * @param {com.argusat.gjl.locator.FindLocalDevicesRequest|Object} message FindLocalDevicesRequest message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    FindLocalDevicesRequest.verify = function verify(message) {
                        if (message.centre !== undefined && message.centre !== null) {
                            var error = $types[0].verify(message.centre);
                            if (error)
                                return "centre." + error;
                        }
                        if (message.radius !== undefined)
                            if (!$util.isInteger(message.radius) && !(message.radius && $util.isInteger(message.radius.low) && $util.isInteger(message.radius.high)))
                                return "radius: integer|Long expected";
                        if (message.limit !== undefined)
                            if (!$util.isInteger(message.limit))
                                return "limit: integer expected";
                        return null;
                    };

                    /**
                     * Creates a FindLocalDevicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesRequest} FindLocalDevicesRequest
                     */
                    FindLocalDevicesRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.FindLocalDevicesRequest)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.FindLocalDevicesRequest();
                        if (object.centre !== undefined && object.centre !== null) {
                            if (typeof object.centre !== "object")
                                throw TypeError(".com.argusat.gjl.locator.FindLocalDevicesRequest.centre: object expected");
                            message.centre = $types[0].fromObject(object.centre);
                        }
                        if (object.radius !== undefined && object.radius !== null)
                            if ($util.Long)
                                (message.radius = $util.Long.fromValue(object.radius)).unsigned = true;
                            else if (typeof object.radius === "string")
                                message.radius = parseInt(object.radius, 10);
                            else if (typeof object.radius === "number")
                                message.radius = object.radius;
                            else if (typeof object.radius === "object")
                                message.radius = new $util.LongBits(object.radius.low, object.radius.high).toNumber(true);
                        if (object.limit !== undefined && object.limit !== null)
                            message.limit = object.limit >>> 0;
                        return message;
                    };

                    /**
                     * Creates a FindLocalDevicesRequest message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.FindLocalDevicesRequest.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesRequest} FindLocalDevicesRequest
                     */
                    FindLocalDevicesRequest.from = FindLocalDevicesRequest.fromObject;

                    /**
                     * Creates a plain object from a FindLocalDevicesRequest message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.FindLocalDevicesRequest} message FindLocalDevicesRequest
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FindLocalDevicesRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.centre = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.radius = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.radius = options.longs === String ? "0" : 0;
                            object.limit = 0;
                        }
                        if (message.centre !== undefined && message.centre !== null && message.hasOwnProperty("centre"))
                            object.centre = $types[0].toObject(message.centre, options);
                        if (message.radius !== undefined && message.radius !== null && message.hasOwnProperty("radius"))
                            if (typeof message.radius === "number")
                                object.radius = options.longs === String ? String(message.radius) : message.radius;
                            else
                                object.radius = options.longs === String ? $util.Long.prototype.toString.call(message.radius) : options.longs === Number ? new $util.LongBits(message.radius.low, message.radius.high).toNumber(true) : message.radius;
                        if (message.limit !== undefined && message.limit !== null && message.hasOwnProperty("limit"))
                            object.limit = message.limit;
                        return object;
                    };

                    /**
                     * Creates a plain object from this FindLocalDevicesRequest message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FindLocalDevicesRequest.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this FindLocalDevicesRequest to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    FindLocalDevicesRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FindLocalDevicesRequest;
                })();

                locator.FindLocalDevicesResponse = (function() {

                    /**
                     * Constructs a new FindLocalDevicesResponse.
                     * @exports com.argusat.gjl.locator.FindLocalDevicesResponse
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function FindLocalDevicesResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FindLocalDevicesResponse responseCode.
                     * @type {number}
                     */
                    FindLocalDevicesResponse.prototype.responseCode = 0;

                    /**
                     * FindLocalDevicesResponse responseMessage.
                     * @type {string}
                     */
                    FindLocalDevicesResponse.prototype.responseMessage = "";

                    /**
                     * FindLocalDevicesResponse devices.
                     * @type {Array.<com.argusat.gjl.locator.Device>}
                     */
                    FindLocalDevicesResponse.prototype.devices = $util.emptyArray;

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.locator.FindLocalDevicesResponse.ErrorCode",
                        2: "com.argusat.gjl.locator.Device"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new FindLocalDevicesResponse instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesResponse} FindLocalDevicesResponse instance
                     */
                    FindLocalDevicesResponse.create = function create(properties) {
                        return new FindLocalDevicesResponse(properties);
                    };

                    /**
                     * Encodes the specified FindLocalDevicesResponse message.
                     * @param {com.argusat.gjl.locator.FindLocalDevicesResponse|Object} message FindLocalDevicesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindLocalDevicesResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.responseCode !== undefined && message.hasOwnProperty("responseCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.responseCode);
                        if (message.responseMessage !== undefined && message.hasOwnProperty("responseMessage"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.responseMessage);
                        if (message.devices !== undefined && message.hasOwnProperty("devices"))
                            for (var i = 0; i < message.devices.length; ++i)
                                $types[2].encode(message.devices[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified FindLocalDevicesResponse message, length delimited.
                     * @param {com.argusat.gjl.locator.FindLocalDevicesResponse|Object} message FindLocalDevicesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindLocalDevicesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FindLocalDevicesResponse message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesResponse} FindLocalDevicesResponse
                     */
                    FindLocalDevicesResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.FindLocalDevicesResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.responseCode = reader.uint32();
                                break;
                            case 2:
                                message.responseMessage = reader.string();
                                break;
                            case 3:
                                if (!(message.devices && message.devices.length))
                                    message.devices = [];
                                message.devices.push($types[2].decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FindLocalDevicesResponse message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesResponse} FindLocalDevicesResponse
                     */
                    FindLocalDevicesResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FindLocalDevicesResponse message.
                     * @param {com.argusat.gjl.locator.FindLocalDevicesResponse|Object} message FindLocalDevicesResponse message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    FindLocalDevicesResponse.verify = function verify(message) {
                        if (message.responseCode !== undefined)
                            switch (message.responseCode) {
                            default:
                                return "responseCode: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.responseMessage !== undefined)
                            if (!$util.isString(message.responseMessage))
                                return "responseMessage: string expected";
                        if (message.devices !== undefined) {
                            if (!Array.isArray(message.devices))
                                return "devices: array expected";
                            for (var i = 0; i < message.devices.length; ++i) {
                                var error = $types[2].verify(message.devices[i]);
                                if (error)
                                    return "devices." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a FindLocalDevicesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesResponse} FindLocalDevicesResponse
                     */
                    FindLocalDevicesResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.FindLocalDevicesResponse)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.FindLocalDevicesResponse();
                        switch (object.responseCode) {
                        case "NONE":
                        case 0:
                            message.responseCode = 0;
                            break;
                        case "NO_LOCAL_DEVICES":
                        case 1:
                            message.responseCode = 1;
                            break;
                        }
                        if (object.responseMessage !== undefined && object.responseMessage !== null)
                            message.responseMessage = String(object.responseMessage);
                        if (object.devices) {
                            if (!Array.isArray(object.devices))
                                throw TypeError(".com.argusat.gjl.locator.FindLocalDevicesResponse.devices: array expected");
                            message.devices = [];
                            for (var i = 0; i < object.devices.length; ++i) {
                                if (typeof object.devices[i] !== "object")
                                    throw TypeError(".com.argusat.gjl.locator.FindLocalDevicesResponse.devices: object expected");
                                message.devices[i] = $types[2].fromObject(object.devices[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a FindLocalDevicesResponse message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.FindLocalDevicesResponse.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.FindLocalDevicesResponse} FindLocalDevicesResponse
                     */
                    FindLocalDevicesResponse.from = FindLocalDevicesResponse.fromObject;

                    /**
                     * Creates a plain object from a FindLocalDevicesResponse message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.FindLocalDevicesResponse} message FindLocalDevicesResponse
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FindLocalDevicesResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.devices = [];
                        if (options.defaults) {
                            object.responseCode = options.enums === String ? "NONE" : 0;
                            object.responseMessage = "";
                        }
                        if (message.responseCode !== undefined && message.responseCode !== null && message.hasOwnProperty("responseCode"))
                            object.responseCode = options.enums === String ? $types[0][message.responseCode] : message.responseCode;
                        if (message.responseMessage !== undefined && message.responseMessage !== null && message.hasOwnProperty("responseMessage"))
                            object.responseMessage = message.responseMessage;
                        if (message.devices !== undefined && message.devices !== null && message.hasOwnProperty("devices")) {
                            object.devices = [];
                            for (var j = 0; j < message.devices.length; ++j)
                                object.devices[j] = $types[2].toObject(message.devices[j], options);
                        }
                        return object;
                    };

                    /**
                     * Creates a plain object from this FindLocalDevicesResponse message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FindLocalDevicesResponse.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this FindLocalDevicesResponse to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    FindLocalDevicesResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ErrorCode enum.
                     * @name ErrorCode
                     * @memberof com.argusat.gjl.locator.FindLocalDevicesResponse
                     * @enum {number}
                     * @property {number} NONE=0 NONE value
                     * @property {number} NO_LOCAL_DEVICES=1 NO_LOCAL_DEVICES value
                     */
                    FindLocalDevicesResponse.ErrorCode = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        values[valuesById[1] = "NO_LOCAL_DEVICES"] = 1;
                        return values;
                    })();

                    return FindLocalDevicesResponse;
                })();

                locator.BeginLocatorSessionRequest = (function() {

                    /**
                     * Constructs a new BeginLocatorSessionRequest.
                     * @exports com.argusat.gjl.locator.BeginLocatorSessionRequest
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function BeginLocatorSessionRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BeginLocatorSessionRequest deviceId.
                     * @type {string}
                     */
                    BeginLocatorSessionRequest.prototype.deviceId = "";

                    /**
                     * BeginLocatorSessionRequest location.
                     * @type {com.argusat.gjl.observation.Location}
                     */
                    BeginLocatorSessionRequest.prototype.location = null;

                    // Lazily resolved type references
                    var $types = {
                        1: "com.argusat.gjl.observation.Location"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new BeginLocatorSessionRequest instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionRequest} BeginLocatorSessionRequest instance
                     */
                    BeginLocatorSessionRequest.create = function create(properties) {
                        return new BeginLocatorSessionRequest(properties);
                    };

                    /**
                     * Encodes the specified BeginLocatorSessionRequest message.
                     * @param {com.argusat.gjl.locator.BeginLocatorSessionRequest|Object} message BeginLocatorSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BeginLocatorSessionRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deviceId !== undefined && message.hasOwnProperty("deviceId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
                        if (message.location !== undefined && message.hasOwnProperty("location"))
                            $types[1].encode(message.location, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified BeginLocatorSessionRequest message, length delimited.
                     * @param {com.argusat.gjl.locator.BeginLocatorSessionRequest|Object} message BeginLocatorSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BeginLocatorSessionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BeginLocatorSessionRequest message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionRequest} BeginLocatorSessionRequest
                     */
                    BeginLocatorSessionRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.BeginLocatorSessionRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deviceId = reader.string();
                                break;
                            case 2:
                                message.location = $types[1].decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BeginLocatorSessionRequest message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionRequest} BeginLocatorSessionRequest
                     */
                    BeginLocatorSessionRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BeginLocatorSessionRequest message.
                     * @param {com.argusat.gjl.locator.BeginLocatorSessionRequest|Object} message BeginLocatorSessionRequest message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    BeginLocatorSessionRequest.verify = function verify(message) {
                        if (message.deviceId !== undefined)
                            if (!$util.isString(message.deviceId))
                                return "deviceId: string expected";
                        if (message.location !== undefined && message.location !== null) {
                            var error = $types[1].verify(message.location);
                            if (error)
                                return "location." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a BeginLocatorSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionRequest} BeginLocatorSessionRequest
                     */
                    BeginLocatorSessionRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.BeginLocatorSessionRequest)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.BeginLocatorSessionRequest();
                        if (object.deviceId !== undefined && object.deviceId !== null)
                            message.deviceId = String(object.deviceId);
                        if (object.location !== undefined && object.location !== null) {
                            if (typeof object.location !== "object")
                                throw TypeError(".com.argusat.gjl.locator.BeginLocatorSessionRequest.location: object expected");
                            message.location = $types[1].fromObject(object.location);
                        }
                        return message;
                    };

                    /**
                     * Creates a BeginLocatorSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.BeginLocatorSessionRequest.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionRequest} BeginLocatorSessionRequest
                     */
                    BeginLocatorSessionRequest.from = BeginLocatorSessionRequest.fromObject;

                    /**
                     * Creates a plain object from a BeginLocatorSessionRequest message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.BeginLocatorSessionRequest} message BeginLocatorSessionRequest
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BeginLocatorSessionRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.deviceId = "";
                            object.location = null;
                        }
                        if (message.deviceId !== undefined && message.deviceId !== null && message.hasOwnProperty("deviceId"))
                            object.deviceId = message.deviceId;
                        if (message.location !== undefined && message.location !== null && message.hasOwnProperty("location"))
                            object.location = $types[1].toObject(message.location, options);
                        return object;
                    };

                    /**
                     * Creates a plain object from this BeginLocatorSessionRequest message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BeginLocatorSessionRequest.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this BeginLocatorSessionRequest to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    BeginLocatorSessionRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BeginLocatorSessionRequest;
                })();

                locator.BeginLocatorSessionResponse = (function() {

                    /**
                     * Constructs a new BeginLocatorSessionResponse.
                     * @exports com.argusat.gjl.locator.BeginLocatorSessionResponse
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function BeginLocatorSessionResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BeginLocatorSessionResponse responseCode.
                     * @type {number}
                     */
                    BeginLocatorSessionResponse.prototype.responseCode = 0;

                    /**
                     * BeginLocatorSessionResponse responseMessage.
                     * @type {string}
                     */
                    BeginLocatorSessionResponse.prototype.responseMessage = "";

                    /**
                     * BeginLocatorSessionResponse sessionId.
                     * @type {string}
                     */
                    BeginLocatorSessionResponse.prototype.sessionId = "";

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.locator.BeginLocatorSessionResponse.ErrorCode"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new BeginLocatorSessionResponse instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionResponse} BeginLocatorSessionResponse instance
                     */
                    BeginLocatorSessionResponse.create = function create(properties) {
                        return new BeginLocatorSessionResponse(properties);
                    };

                    /**
                     * Encodes the specified BeginLocatorSessionResponse message.
                     * @param {com.argusat.gjl.locator.BeginLocatorSessionResponse|Object} message BeginLocatorSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BeginLocatorSessionResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.responseCode !== undefined && message.hasOwnProperty("responseCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.responseCode);
                        if (message.responseMessage !== undefined && message.hasOwnProperty("responseMessage"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.responseMessage);
                        if (message.sessionId !== undefined && message.hasOwnProperty("sessionId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sessionId);
                        return writer;
                    };

                    /**
                     * Encodes the specified BeginLocatorSessionResponse message, length delimited.
                     * @param {com.argusat.gjl.locator.BeginLocatorSessionResponse|Object} message BeginLocatorSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BeginLocatorSessionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BeginLocatorSessionResponse message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionResponse} BeginLocatorSessionResponse
                     */
                    BeginLocatorSessionResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.BeginLocatorSessionResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.responseCode = reader.uint32();
                                break;
                            case 2:
                                message.responseMessage = reader.string();
                                break;
                            case 3:
                                message.sessionId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BeginLocatorSessionResponse message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionResponse} BeginLocatorSessionResponse
                     */
                    BeginLocatorSessionResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BeginLocatorSessionResponse message.
                     * @param {com.argusat.gjl.locator.BeginLocatorSessionResponse|Object} message BeginLocatorSessionResponse message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    BeginLocatorSessionResponse.verify = function verify(message) {
                        if (message.responseCode !== undefined)
                            switch (message.responseCode) {
                            default:
                                return "responseCode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.responseMessage !== undefined)
                            if (!$util.isString(message.responseMessage))
                                return "responseMessage: string expected";
                        if (message.sessionId !== undefined)
                            if (!$util.isString(message.sessionId))
                                return "sessionId: string expected";
                        return null;
                    };

                    /**
                     * Creates a BeginLocatorSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionResponse} BeginLocatorSessionResponse
                     */
                    BeginLocatorSessionResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.BeginLocatorSessionResponse)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.BeginLocatorSessionResponse();
                        switch (object.responseCode) {
                        case "NONE":
                        case 0:
                            message.responseCode = 0;
                            break;
                        case "INTERNAL_ERROR":
                        case 1:
                            message.responseCode = 1;
                            break;
                        case "SESSION_ALREADY_STARTED":
                        case 2:
                            message.responseCode = 2;
                            break;
                        case "INSUFFICIENT_LOCAL_CANDIDATES":
                        case 3:
                            message.responseCode = 3;
                            break;
                        }
                        if (object.responseMessage !== undefined && object.responseMessage !== null)
                            message.responseMessage = String(object.responseMessage);
                        if (object.sessionId !== undefined && object.sessionId !== null)
                            message.sessionId = String(object.sessionId);
                        return message;
                    };

                    /**
                     * Creates a BeginLocatorSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.BeginLocatorSessionResponse.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.BeginLocatorSessionResponse} BeginLocatorSessionResponse
                     */
                    BeginLocatorSessionResponse.from = BeginLocatorSessionResponse.fromObject;

                    /**
                     * Creates a plain object from a BeginLocatorSessionResponse message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.BeginLocatorSessionResponse} message BeginLocatorSessionResponse
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BeginLocatorSessionResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.responseCode = options.enums === String ? "NONE" : 0;
                            object.responseMessage = "";
                            object.sessionId = "";
                        }
                        if (message.responseCode !== undefined && message.responseCode !== null && message.hasOwnProperty("responseCode"))
                            object.responseCode = options.enums === String ? $types[0][message.responseCode] : message.responseCode;
                        if (message.responseMessage !== undefined && message.responseMessage !== null && message.hasOwnProperty("responseMessage"))
                            object.responseMessage = message.responseMessage;
                        if (message.sessionId !== undefined && message.sessionId !== null && message.hasOwnProperty("sessionId"))
                            object.sessionId = message.sessionId;
                        return object;
                    };

                    /**
                     * Creates a plain object from this BeginLocatorSessionResponse message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BeginLocatorSessionResponse.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this BeginLocatorSessionResponse to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    BeginLocatorSessionResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ErrorCode enum.
                     * @name ErrorCode
                     * @memberof com.argusat.gjl.locator.BeginLocatorSessionResponse
                     * @enum {number}
                     * @property {number} NONE=0 NONE value
                     * @property {number} INTERNAL_ERROR=1 INTERNAL_ERROR value
                     * @property {number} SESSION_ALREADY_STARTED=2 SESSION_ALREADY_STARTED value
                     * @property {number} INSUFFICIENT_LOCAL_CANDIDATES=3 INSUFFICIENT_LOCAL_CANDIDATES value
                     */
                    BeginLocatorSessionResponse.ErrorCode = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        values[valuesById[1] = "INTERNAL_ERROR"] = 1;
                        values[valuesById[2] = "SESSION_ALREADY_STARTED"] = 2;
                        values[valuesById[3] = "INSUFFICIENT_LOCAL_CANDIDATES"] = 3;
                        return values;
                    })();

                    return BeginLocatorSessionResponse;
                })();

                locator.JoinLocatorSessionRequest = (function() {

                    /**
                     * Constructs a new JoinLocatorSessionRequest.
                     * @exports com.argusat.gjl.locator.JoinLocatorSessionRequest
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function JoinLocatorSessionRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * JoinLocatorSessionRequest deviceId.
                     * @type {string}
                     */
                    JoinLocatorSessionRequest.prototype.deviceId = "";

                    /**
                     * Creates a new JoinLocatorSessionRequest instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionRequest} JoinLocatorSessionRequest instance
                     */
                    JoinLocatorSessionRequest.create = function create(properties) {
                        return new JoinLocatorSessionRequest(properties);
                    };

                    /**
                     * Encodes the specified JoinLocatorSessionRequest message.
                     * @param {com.argusat.gjl.locator.JoinLocatorSessionRequest|Object} message JoinLocatorSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinLocatorSessionRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deviceId !== undefined && message.hasOwnProperty("deviceId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
                        return writer;
                    };

                    /**
                     * Encodes the specified JoinLocatorSessionRequest message, length delimited.
                     * @param {com.argusat.gjl.locator.JoinLocatorSessionRequest|Object} message JoinLocatorSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinLocatorSessionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a JoinLocatorSessionRequest message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionRequest} JoinLocatorSessionRequest
                     */
                    JoinLocatorSessionRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.JoinLocatorSessionRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deviceId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a JoinLocatorSessionRequest message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionRequest} JoinLocatorSessionRequest
                     */
                    JoinLocatorSessionRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a JoinLocatorSessionRequest message.
                     * @param {com.argusat.gjl.locator.JoinLocatorSessionRequest|Object} message JoinLocatorSessionRequest message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    JoinLocatorSessionRequest.verify = function verify(message) {
                        if (message.deviceId !== undefined)
                            if (!$util.isString(message.deviceId))
                                return "deviceId: string expected";
                        return null;
                    };

                    /**
                     * Creates a JoinLocatorSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionRequest} JoinLocatorSessionRequest
                     */
                    JoinLocatorSessionRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.JoinLocatorSessionRequest)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.JoinLocatorSessionRequest();
                        if (object.deviceId !== undefined && object.deviceId !== null)
                            message.deviceId = String(object.deviceId);
                        return message;
                    };

                    /**
                     * Creates a JoinLocatorSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.JoinLocatorSessionRequest.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionRequest} JoinLocatorSessionRequest
                     */
                    JoinLocatorSessionRequest.from = JoinLocatorSessionRequest.fromObject;

                    /**
                     * Creates a plain object from a JoinLocatorSessionRequest message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.JoinLocatorSessionRequest} message JoinLocatorSessionRequest
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinLocatorSessionRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.deviceId = "";
                        if (message.deviceId !== undefined && message.deviceId !== null && message.hasOwnProperty("deviceId"))
                            object.deviceId = message.deviceId;
                        return object;
                    };

                    /**
                     * Creates a plain object from this JoinLocatorSessionRequest message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinLocatorSessionRequest.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this JoinLocatorSessionRequest to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    JoinLocatorSessionRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return JoinLocatorSessionRequest;
                })();

                locator.JoinLocatorSessionResponse = (function() {

                    /**
                     * Constructs a new JoinLocatorSessionResponse.
                     * @exports com.argusat.gjl.locator.JoinLocatorSessionResponse
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function JoinLocatorSessionResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * JoinLocatorSessionResponse responseCode.
                     * @type {number}
                     */
                    JoinLocatorSessionResponse.prototype.responseCode = 0;

                    /**
                     * JoinLocatorSessionResponse responseMessage.
                     * @type {string}
                     */
                    JoinLocatorSessionResponse.prototype.responseMessage = "";

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.locator.JoinLocatorSessionResponse.ErrorCode"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new JoinLocatorSessionResponse instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionResponse} JoinLocatorSessionResponse instance
                     */
                    JoinLocatorSessionResponse.create = function create(properties) {
                        return new JoinLocatorSessionResponse(properties);
                    };

                    /**
                     * Encodes the specified JoinLocatorSessionResponse message.
                     * @param {com.argusat.gjl.locator.JoinLocatorSessionResponse|Object} message JoinLocatorSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinLocatorSessionResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.responseCode !== undefined && message.hasOwnProperty("responseCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.responseCode);
                        if (message.responseMessage !== undefined && message.hasOwnProperty("responseMessage"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.responseMessage);
                        return writer;
                    };

                    /**
                     * Encodes the specified JoinLocatorSessionResponse message, length delimited.
                     * @param {com.argusat.gjl.locator.JoinLocatorSessionResponse|Object} message JoinLocatorSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinLocatorSessionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a JoinLocatorSessionResponse message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionResponse} JoinLocatorSessionResponse
                     */
                    JoinLocatorSessionResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.JoinLocatorSessionResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.responseCode = reader.uint32();
                                break;
                            case 2:
                                message.responseMessage = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a JoinLocatorSessionResponse message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionResponse} JoinLocatorSessionResponse
                     */
                    JoinLocatorSessionResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a JoinLocatorSessionResponse message.
                     * @param {com.argusat.gjl.locator.JoinLocatorSessionResponse|Object} message JoinLocatorSessionResponse message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    JoinLocatorSessionResponse.verify = function verify(message) {
                        if (message.responseCode !== undefined)
                            switch (message.responseCode) {
                            default:
                                return "responseCode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.responseMessage !== undefined)
                            if (!$util.isString(message.responseMessage))
                                return "responseMessage: string expected";
                        return null;
                    };

                    /**
                     * Creates a JoinLocatorSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionResponse} JoinLocatorSessionResponse
                     */
                    JoinLocatorSessionResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.JoinLocatorSessionResponse)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.JoinLocatorSessionResponse();
                        switch (object.responseCode) {
                        case "NONE":
                        case 0:
                            message.responseCode = 0;
                            break;
                        case "INTERNAL_ERROR":
                        case 1:
                            message.responseCode = 1;
                            break;
                        case "SESSION_INVALID":
                        case 2:
                            message.responseCode = 2;
                            break;
                        }
                        if (object.responseMessage !== undefined && object.responseMessage !== null)
                            message.responseMessage = String(object.responseMessage);
                        return message;
                    };

                    /**
                     * Creates a JoinLocatorSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.JoinLocatorSessionResponse.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.JoinLocatorSessionResponse} JoinLocatorSessionResponse
                     */
                    JoinLocatorSessionResponse.from = JoinLocatorSessionResponse.fromObject;

                    /**
                     * Creates a plain object from a JoinLocatorSessionResponse message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.JoinLocatorSessionResponse} message JoinLocatorSessionResponse
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinLocatorSessionResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.responseCode = options.enums === String ? "NONE" : 0;
                            object.responseMessage = "";
                        }
                        if (message.responseCode !== undefined && message.responseCode !== null && message.hasOwnProperty("responseCode"))
                            object.responseCode = options.enums === String ? $types[0][message.responseCode] : message.responseCode;
                        if (message.responseMessage !== undefined && message.responseMessage !== null && message.hasOwnProperty("responseMessage"))
                            object.responseMessage = message.responseMessage;
                        return object;
                    };

                    /**
                     * Creates a plain object from this JoinLocatorSessionResponse message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinLocatorSessionResponse.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this JoinLocatorSessionResponse to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    JoinLocatorSessionResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ErrorCode enum.
                     * @name ErrorCode
                     * @memberof com.argusat.gjl.locator.JoinLocatorSessionResponse
                     * @enum {number}
                     * @property {number} NONE=0 NONE value
                     * @property {number} INTERNAL_ERROR=1 INTERNAL_ERROR value
                     * @property {number} SESSION_INVALID=2 SESSION_INVALID value
                     */
                    JoinLocatorSessionResponse.ErrorCode = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        values[valuesById[1] = "INTERNAL_ERROR"] = 1;
                        values[valuesById[2] = "SESSION_INVALID"] = 2;
                        return values;
                    })();

                    return JoinLocatorSessionResponse;
                })();

                locator.EndLocatorSessionRequest = (function() {

                    /**
                     * Constructs a new EndLocatorSessionRequest.
                     * @exports com.argusat.gjl.locator.EndLocatorSessionRequest
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function EndLocatorSessionRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EndLocatorSessionRequest deviceId.
                     * @type {string}
                     */
                    EndLocatorSessionRequest.prototype.deviceId = "";

                    /**
                     * Creates a new EndLocatorSessionRequest instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionRequest} EndLocatorSessionRequest instance
                     */
                    EndLocatorSessionRequest.create = function create(properties) {
                        return new EndLocatorSessionRequest(properties);
                    };

                    /**
                     * Encodes the specified EndLocatorSessionRequest message.
                     * @param {com.argusat.gjl.locator.EndLocatorSessionRequest|Object} message EndLocatorSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EndLocatorSessionRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deviceId !== undefined && message.hasOwnProperty("deviceId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
                        return writer;
                    };

                    /**
                     * Encodes the specified EndLocatorSessionRequest message, length delimited.
                     * @param {com.argusat.gjl.locator.EndLocatorSessionRequest|Object} message EndLocatorSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EndLocatorSessionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EndLocatorSessionRequest message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionRequest} EndLocatorSessionRequest
                     */
                    EndLocatorSessionRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.EndLocatorSessionRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deviceId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EndLocatorSessionRequest message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionRequest} EndLocatorSessionRequest
                     */
                    EndLocatorSessionRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EndLocatorSessionRequest message.
                     * @param {com.argusat.gjl.locator.EndLocatorSessionRequest|Object} message EndLocatorSessionRequest message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    EndLocatorSessionRequest.verify = function verify(message) {
                        if (message.deviceId !== undefined)
                            if (!$util.isString(message.deviceId))
                                return "deviceId: string expected";
                        return null;
                    };

                    /**
                     * Creates an EndLocatorSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionRequest} EndLocatorSessionRequest
                     */
                    EndLocatorSessionRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.EndLocatorSessionRequest)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.EndLocatorSessionRequest();
                        if (object.deviceId !== undefined && object.deviceId !== null)
                            message.deviceId = String(object.deviceId);
                        return message;
                    };

                    /**
                     * Creates an EndLocatorSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.EndLocatorSessionRequest.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionRequest} EndLocatorSessionRequest
                     */
                    EndLocatorSessionRequest.from = EndLocatorSessionRequest.fromObject;

                    /**
                     * Creates a plain object from an EndLocatorSessionRequest message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.EndLocatorSessionRequest} message EndLocatorSessionRequest
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EndLocatorSessionRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.deviceId = "";
                        if (message.deviceId !== undefined && message.deviceId !== null && message.hasOwnProperty("deviceId"))
                            object.deviceId = message.deviceId;
                        return object;
                    };

                    /**
                     * Creates a plain object from this EndLocatorSessionRequest message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EndLocatorSessionRequest.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this EndLocatorSessionRequest to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    EndLocatorSessionRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EndLocatorSessionRequest;
                })();

                locator.EndLocatorSessionResponse = (function() {

                    /**
                     * Constructs a new EndLocatorSessionResponse.
                     * @exports com.argusat.gjl.locator.EndLocatorSessionResponse
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function EndLocatorSessionResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EndLocatorSessionResponse responseCode.
                     * @type {number}
                     */
                    EndLocatorSessionResponse.prototype.responseCode = 0;

                    /**
                     * EndLocatorSessionResponse responseMessage.
                     * @type {string}
                     */
                    EndLocatorSessionResponse.prototype.responseMessage = "";

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.locator.EndLocatorSessionResponse.ErrorCode"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new EndLocatorSessionResponse instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionResponse} EndLocatorSessionResponse instance
                     */
                    EndLocatorSessionResponse.create = function create(properties) {
                        return new EndLocatorSessionResponse(properties);
                    };

                    /**
                     * Encodes the specified EndLocatorSessionResponse message.
                     * @param {com.argusat.gjl.locator.EndLocatorSessionResponse|Object} message EndLocatorSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EndLocatorSessionResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.responseCode !== undefined && message.hasOwnProperty("responseCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.responseCode);
                        if (message.responseMessage !== undefined && message.hasOwnProperty("responseMessage"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.responseMessage);
                        return writer;
                    };

                    /**
                     * Encodes the specified EndLocatorSessionResponse message, length delimited.
                     * @param {com.argusat.gjl.locator.EndLocatorSessionResponse|Object} message EndLocatorSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EndLocatorSessionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EndLocatorSessionResponse message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionResponse} EndLocatorSessionResponse
                     */
                    EndLocatorSessionResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.EndLocatorSessionResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.responseCode = reader.uint32();
                                break;
                            case 2:
                                message.responseMessage = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EndLocatorSessionResponse message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionResponse} EndLocatorSessionResponse
                     */
                    EndLocatorSessionResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EndLocatorSessionResponse message.
                     * @param {com.argusat.gjl.locator.EndLocatorSessionResponse|Object} message EndLocatorSessionResponse message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    EndLocatorSessionResponse.verify = function verify(message) {
                        if (message.responseCode !== undefined)
                            switch (message.responseCode) {
                            default:
                                return "responseCode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.responseMessage !== undefined)
                            if (!$util.isString(message.responseMessage))
                                return "responseMessage: string expected";
                        return null;
                    };

                    /**
                     * Creates an EndLocatorSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionResponse} EndLocatorSessionResponse
                     */
                    EndLocatorSessionResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.EndLocatorSessionResponse)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.EndLocatorSessionResponse();
                        switch (object.responseCode) {
                        case "NONE":
                        case 0:
                            message.responseCode = 0;
                            break;
                        case "INTERNAL_ERROR":
                        case 1:
                            message.responseCode = 1;
                            break;
                        case "SESSION_INVALID":
                        case 2:
                            message.responseCode = 2;
                            break;
                        }
                        if (object.responseMessage !== undefined && object.responseMessage !== null)
                            message.responseMessage = String(object.responseMessage);
                        return message;
                    };

                    /**
                     * Creates an EndLocatorSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.EndLocatorSessionResponse.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.EndLocatorSessionResponse} EndLocatorSessionResponse
                     */
                    EndLocatorSessionResponse.from = EndLocatorSessionResponse.fromObject;

                    /**
                     * Creates a plain object from an EndLocatorSessionResponse message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.EndLocatorSessionResponse} message EndLocatorSessionResponse
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EndLocatorSessionResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.responseCode = options.enums === String ? "NONE" : 0;
                            object.responseMessage = "";
                        }
                        if (message.responseCode !== undefined && message.responseCode !== null && message.hasOwnProperty("responseCode"))
                            object.responseCode = options.enums === String ? $types[0][message.responseCode] : message.responseCode;
                        if (message.responseMessage !== undefined && message.responseMessage !== null && message.hasOwnProperty("responseMessage"))
                            object.responseMessage = message.responseMessage;
                        return object;
                    };

                    /**
                     * Creates a plain object from this EndLocatorSessionResponse message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EndLocatorSessionResponse.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this EndLocatorSessionResponse to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    EndLocatorSessionResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ErrorCode enum.
                     * @name ErrorCode
                     * @memberof com.argusat.gjl.locator.EndLocatorSessionResponse
                     * @enum {number}
                     * @property {number} NONE=0 NONE value
                     * @property {number} INTERNAL_ERROR=1 INTERNAL_ERROR value
                     * @property {number} SESSION_INVALID=2 SESSION_INVALID value
                     */
                    EndLocatorSessionResponse.ErrorCode = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        values[valuesById[1] = "INTERNAL_ERROR"] = 1;
                        values[valuesById[2] = "SESSION_INVALID"] = 2;
                        return values;
                    })();

                    return EndLocatorSessionResponse;
                })();

                locator.LocatorSessionInfo = (function() {

                    /**
                     * Constructs a new LocatorSessionInfo.
                     * @exports com.argusat.gjl.locator.LocatorSessionInfo
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function LocatorSessionInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LocatorSessionInfo sessionId.
                     * @type {string}
                     */
                    LocatorSessionInfo.prototype.sessionId = "";

                    /**
                     * LocatorSessionInfo sessionStatus.
                     * @type {number}
                     */
                    LocatorSessionInfo.prototype.sessionStatus = 0;

                    /**
                     * LocatorSessionInfo participant.
                     * @type {Array.<com.argusat.gjl.locator.LocatorSessionInfo.Participant>}
                     */
                    LocatorSessionInfo.prototype.participant = $util.emptyArray;

                    /**
                     * LocatorSessionInfo jammer.
                     * @type {Array.<com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer>}
                     */
                    LocatorSessionInfo.prototype.jammer = $util.emptyArray;

                    // Lazily resolved type references
                    var $types = {
                        1: "com.argusat.gjl.locator.LocatorSessionInfo.SessionStatus",
                        2: "com.argusat.gjl.locator.LocatorSessionInfo.Participant",
                        3: "com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new LocatorSessionInfo instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.locator.LocatorSessionInfo} LocatorSessionInfo instance
                     */
                    LocatorSessionInfo.create = function create(properties) {
                        return new LocatorSessionInfo(properties);
                    };

                    /**
                     * Encodes the specified LocatorSessionInfo message.
                     * @param {com.argusat.gjl.locator.LocatorSessionInfo|Object} message LocatorSessionInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LocatorSessionInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.sessionId !== undefined && message.hasOwnProperty("sessionId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
                        if (message.sessionStatus !== undefined && message.hasOwnProperty("sessionStatus"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sessionStatus);
                        if (message.participant !== undefined && message.hasOwnProperty("participant"))
                            for (var i = 0; i < message.participant.length; ++i)
                                $types[2].encode(message.participant[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.jammer !== undefined && message.hasOwnProperty("jammer"))
                            for (var i = 0; i < message.jammer.length; ++i)
                                $types[3].encode(message.jammer[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified LocatorSessionInfo message, length delimited.
                     * @param {com.argusat.gjl.locator.LocatorSessionInfo|Object} message LocatorSessionInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LocatorSessionInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LocatorSessionInfo message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.locator.LocatorSessionInfo} LocatorSessionInfo
                     */
                    LocatorSessionInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.LocatorSessionInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.sessionId = reader.string();
                                break;
                            case 2:
                                message.sessionStatus = reader.uint32();
                                break;
                            case 3:
                                if (!(message.participant && message.participant.length))
                                    message.participant = [];
                                message.participant.push($types[2].decode(reader, reader.uint32()));
                                break;
                            case 4:
                                if (!(message.jammer && message.jammer.length))
                                    message.jammer = [];
                                message.jammer.push($types[3].decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LocatorSessionInfo message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.locator.LocatorSessionInfo} LocatorSessionInfo
                     */
                    LocatorSessionInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LocatorSessionInfo message.
                     * @param {com.argusat.gjl.locator.LocatorSessionInfo|Object} message LocatorSessionInfo message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    LocatorSessionInfo.verify = function verify(message) {
                        if (message.sessionId !== undefined)
                            if (!$util.isString(message.sessionId))
                                return "sessionId: string expected";
                        if (message.sessionStatus !== undefined)
                            switch (message.sessionStatus) {
                            default:
                                return "sessionStatus: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.participant !== undefined) {
                            if (!Array.isArray(message.participant))
                                return "participant: array expected";
                            for (var i = 0; i < message.participant.length; ++i) {
                                var error = $types[2].verify(message.participant[i]);
                                if (error)
                                    return "participant." + error;
                            }
                        }
                        if (message.jammer !== undefined) {
                            if (!Array.isArray(message.jammer))
                                return "jammer: array expected";
                            for (var i = 0; i < message.jammer.length; ++i) {
                                var error = $types[3].verify(message.jammer[i]);
                                if (error)
                                    return "jammer." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a LocatorSessionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.LocatorSessionInfo} LocatorSessionInfo
                     */
                    LocatorSessionInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.locator.LocatorSessionInfo)
                            return object;
                        var message = new $root.com.argusat.gjl.locator.LocatorSessionInfo();
                        if (object.sessionId !== undefined && object.sessionId !== null)
                            message.sessionId = String(object.sessionId);
                        switch (object.sessionStatus) {
                        case "CREATED":
                        case 0:
                            message.sessionStatus = 0;
                            break;
                        case "RUNNING":
                        case 1:
                            message.sessionStatus = 1;
                            break;
                        case "STOPPED":
                        case 2:
                            message.sessionStatus = 2;
                            break;
                        }
                        if (object.participant) {
                            if (!Array.isArray(object.participant))
                                throw TypeError(".com.argusat.gjl.locator.LocatorSessionInfo.participant: array expected");
                            message.participant = [];
                            for (var i = 0; i < object.participant.length; ++i) {
                                if (typeof object.participant[i] !== "object")
                                    throw TypeError(".com.argusat.gjl.locator.LocatorSessionInfo.participant: object expected");
                                message.participant[i] = $types[2].fromObject(object.participant[i]);
                            }
                        }
                        if (object.jammer) {
                            if (!Array.isArray(object.jammer))
                                throw TypeError(".com.argusat.gjl.locator.LocatorSessionInfo.jammer: array expected");
                            message.jammer = [];
                            for (var i = 0; i < object.jammer.length; ++i) {
                                if (typeof object.jammer[i] !== "object")
                                    throw TypeError(".com.argusat.gjl.locator.LocatorSessionInfo.jammer: object expected");
                                message.jammer[i] = $types[3].fromObject(object.jammer[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a LocatorSessionInfo message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.locator.LocatorSessionInfo.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.locator.LocatorSessionInfo} LocatorSessionInfo
                     */
                    LocatorSessionInfo.from = LocatorSessionInfo.fromObject;

                    /**
                     * Creates a plain object from a LocatorSessionInfo message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.locator.LocatorSessionInfo} message LocatorSessionInfo
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LocatorSessionInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.participant = [];
                            object.jammer = [];
                        }
                        if (options.defaults) {
                            object.sessionId = "";
                            object.sessionStatus = options.enums === String ? "CREATED" : 0;
                        }
                        if (message.sessionId !== undefined && message.sessionId !== null && message.hasOwnProperty("sessionId"))
                            object.sessionId = message.sessionId;
                        if (message.sessionStatus !== undefined && message.sessionStatus !== null && message.hasOwnProperty("sessionStatus"))
                            object.sessionStatus = options.enums === String ? $types[1][message.sessionStatus] : message.sessionStatus;
                        if (message.participant !== undefined && message.participant !== null && message.hasOwnProperty("participant")) {
                            object.participant = [];
                            for (var j = 0; j < message.participant.length; ++j)
                                object.participant[j] = $types[2].toObject(message.participant[j], options);
                        }
                        if (message.jammer !== undefined && message.jammer !== null && message.hasOwnProperty("jammer")) {
                            object.jammer = [];
                            for (var j = 0; j < message.jammer.length; ++j)
                                object.jammer[j] = $types[3].toObject(message.jammer[j], options);
                        }
                        return object;
                    };

                    /**
                     * Creates a plain object from this LocatorSessionInfo message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LocatorSessionInfo.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this LocatorSessionInfo to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    LocatorSessionInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * SessionStatus enum.
                     * @name SessionStatus
                     * @memberof com.argusat.gjl.locator.LocatorSessionInfo
                     * @enum {number}
                     * @property {number} CREATED=0 CREATED value
                     * @property {number} RUNNING=1 RUNNING value
                     * @property {number} STOPPED=2 STOPPED value
                     */
                    LocatorSessionInfo.SessionStatus = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "CREATED"] = 0;
                        values[valuesById[1] = "RUNNING"] = 1;
                        values[valuesById[2] = "STOPPED"] = 2;
                        return values;
                    })();

                    LocatorSessionInfo.Participant = (function() {

                        /**
                         * Constructs a new Participant.
                         * @exports com.argusat.gjl.locator.LocatorSessionInfo.Participant
                         * @constructor
                         * @param {Object} [properties] Properties to set
                         */
                        function Participant(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Participant deviceId.
                         * @type {string}
                         */
                        Participant.prototype.deviceId = "";

                        /**
                         * Participant participantStatus.
                         * @type {number}
                         */
                        Participant.prototype.participantStatus = 0;

                        /**
                         * Participant location.
                         * @type {com.argusat.gjl.observation.Location}
                         */
                        Participant.prototype.location = null;

                        /**
                         * Participant lastUpdateTimestamp.
                         * @type {number|$protobuf.Long}
                         */
                        Participant.prototype.lastUpdateTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                        /**
                         * Participant averageSignalStrength.
                         * @type {number}
                         */
                        Participant.prototype.averageSignalStrength = 0;

                        // Lazily resolved type references
                        var $types = {
                            1: "com.argusat.gjl.locator.LocatorSessionInfo.Participant.ParticipantStatus",
                            2: "com.argusat.gjl.observation.Location"
                        }; $lazyTypes.push($types);

                        /**
                         * Creates a new Participant instance using the specified properties.
                         * @param {Object} [properties] Properties to set
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.Participant} Participant instance
                         */
                        Participant.create = function create(properties) {
                            return new Participant(properties);
                        };

                        /**
                         * Encodes the specified Participant message.
                         * @param {com.argusat.gjl.locator.LocatorSessionInfo.Participant|Object} message Participant message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Participant.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.deviceId !== undefined && message.hasOwnProperty("deviceId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
                            if (message.participantStatus !== undefined && message.hasOwnProperty("participantStatus"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.participantStatus);
                            if (message.location !== undefined && message.hasOwnProperty("location"))
                                $types[2].encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.lastUpdateTimestamp !== undefined && message.lastUpdateTimestamp !== null && message.hasOwnProperty("lastUpdateTimestamp"))
                                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.lastUpdateTimestamp);
                            if (message.averageSignalStrength !== undefined && message.hasOwnProperty("averageSignalStrength"))
                                writer.uint32(/* id 5, wireType 5 =*/45).float(message.averageSignalStrength);
                            return writer;
                        };

                        /**
                         * Encodes the specified Participant message, length delimited.
                         * @param {com.argusat.gjl.locator.LocatorSessionInfo.Participant|Object} message Participant message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Participant.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Participant message from the specified reader or buffer.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.Participant} Participant
                         */
                        Participant.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.LocatorSessionInfo.Participant();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.deviceId = reader.string();
                                    break;
                                case 2:
                                    message.participantStatus = reader.uint32();
                                    break;
                                case 3:
                                    message.location = $types[2].decode(reader, reader.uint32());
                                    break;
                                case 4:
                                    message.lastUpdateTimestamp = reader.uint64();
                                    break;
                                case 5:
                                    message.averageSignalStrength = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Participant message from the specified reader or buffer, length delimited.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.Participant} Participant
                         */
                        Participant.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Participant message.
                         * @param {com.argusat.gjl.locator.LocatorSessionInfo.Participant|Object} message Participant message or plain object to verify
                         * @returns {?string} `null` if valid, otherwise the reason why it is not
                         */
                        Participant.verify = function verify(message) {
                            if (message.deviceId !== undefined)
                                if (!$util.isString(message.deviceId))
                                    return "deviceId: string expected";
                            if (message.participantStatus !== undefined)
                                switch (message.participantStatus) {
                                default:
                                    return "participantStatus: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            if (message.location !== undefined && message.location !== null) {
                                var error = $types[2].verify(message.location);
                                if (error)
                                    return "location." + error;
                            }
                            if (message.lastUpdateTimestamp !== undefined)
                                if (!$util.isInteger(message.lastUpdateTimestamp) && !(message.lastUpdateTimestamp && $util.isInteger(message.lastUpdateTimestamp.low) && $util.isInteger(message.lastUpdateTimestamp.high)))
                                    return "lastUpdateTimestamp: integer|Long expected";
                            if (message.averageSignalStrength !== undefined)
                                if (typeof message.averageSignalStrength !== "number")
                                    return "averageSignalStrength: number expected";
                            return null;
                        };

                        /**
                         * Creates a Participant message from a plain object. Also converts values to their respective internal types.
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.Participant} Participant
                         */
                        Participant.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.argusat.gjl.locator.LocatorSessionInfo.Participant)
                                return object;
                            var message = new $root.com.argusat.gjl.locator.LocatorSessionInfo.Participant();
                            if (object.deviceId !== undefined && object.deviceId !== null)
                                message.deviceId = String(object.deviceId);
                            switch (object.participantStatus) {
                            case "NOTIFIED":
                            case 0:
                                message.participantStatus = 0;
                                break;
                            case "ACTIVE":
                            case 1:
                                message.participantStatus = 1;
                                break;
                            case "STOPPED":
                            case 2:
                                message.participantStatus = 2;
                                break;
                            }
                            if (object.location !== undefined && object.location !== null) {
                                if (typeof object.location !== "object")
                                    throw TypeError(".com.argusat.gjl.locator.LocatorSessionInfo.Participant.location: object expected");
                                message.location = $types[2].fromObject(object.location);
                            }
                            if (object.lastUpdateTimestamp !== undefined && object.lastUpdateTimestamp !== null)
                                if ($util.Long)
                                    (message.lastUpdateTimestamp = $util.Long.fromValue(object.lastUpdateTimestamp)).unsigned = true;
                                else if (typeof object.lastUpdateTimestamp === "string")
                                    message.lastUpdateTimestamp = parseInt(object.lastUpdateTimestamp, 10);
                                else if (typeof object.lastUpdateTimestamp === "number")
                                    message.lastUpdateTimestamp = object.lastUpdateTimestamp;
                                else if (typeof object.lastUpdateTimestamp === "object")
                                    message.lastUpdateTimestamp = new $util.LongBits(object.lastUpdateTimestamp.low, object.lastUpdateTimestamp.high).toNumber(true);
                            if (object.averageSignalStrength !== undefined && object.averageSignalStrength !== null)
                                message.averageSignalStrength = Number(object.averageSignalStrength);
                            return message;
                        };

                        /**
                         * Creates a Participant message from a plain object. Also converts values to their respective internal types.
                         * This is an alias of {@link com.argusat.gjl.locator.LocatorSessionInfo.Participant.fromObject}.
                         * @function
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.Participant} Participant
                         */
                        Participant.from = Participant.fromObject;

                        /**
                         * Creates a plain object from a Participant message. Also converts values to other types if specified.
                         * @param {com.argusat.gjl.locator.LocatorSessionInfo.Participant} message Participant
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Participant.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.deviceId = "";
                                object.participantStatus = options.enums === String ? "NOTIFIED" : 0;
                                object.location = null;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, true);
                                    object.lastUpdateTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.lastUpdateTimestamp = options.longs === String ? "0" : 0;
                                object.averageSignalStrength = 0;
                            }
                            if (message.deviceId !== undefined && message.deviceId !== null && message.hasOwnProperty("deviceId"))
                                object.deviceId = message.deviceId;
                            if (message.participantStatus !== undefined && message.participantStatus !== null && message.hasOwnProperty("participantStatus"))
                                object.participantStatus = options.enums === String ? $types[1][message.participantStatus] : message.participantStatus;
                            if (message.location !== undefined && message.location !== null && message.hasOwnProperty("location"))
                                object.location = $types[2].toObject(message.location, options);
                            if (message.lastUpdateTimestamp !== undefined && message.lastUpdateTimestamp !== null && message.hasOwnProperty("lastUpdateTimestamp"))
                                if (typeof message.lastUpdateTimestamp === "number")
                                    object.lastUpdateTimestamp = options.longs === String ? String(message.lastUpdateTimestamp) : message.lastUpdateTimestamp;
                                else
                                    object.lastUpdateTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.lastUpdateTimestamp) : options.longs === Number ? new $util.LongBits(message.lastUpdateTimestamp.low, message.lastUpdateTimestamp.high).toNumber(true) : message.lastUpdateTimestamp;
                            if (message.averageSignalStrength !== undefined && message.averageSignalStrength !== null && message.hasOwnProperty("averageSignalStrength"))
                                object.averageSignalStrength = message.averageSignalStrength;
                            return object;
                        };

                        /**
                         * Creates a plain object from this Participant message. Also converts values to other types if specified.
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Participant.prototype.toObject = function toObject(options) {
                            return this.constructor.toObject(this, options);
                        };

                        /**
                         * Converts this Participant to JSON.
                         * @returns {Object.<string,*>} JSON object
                         */
                        Participant.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * ParticipantStatus enum.
                         * @name ParticipantStatus
                         * @memberof com.argusat.gjl.locator.LocatorSessionInfo.Participant
                         * @enum {number}
                         * @property {number} NOTIFIED=0 NOTIFIED value
                         * @property {number} ACTIVE=1 ACTIVE value
                         * @property {number} STOPPED=2 STOPPED value
                         */
                        Participant.ParticipantStatus = (function() {
                            var valuesById = {},
                                values = Object.create(valuesById);
                            values[valuesById[0] = "NOTIFIED"] = 0;
                            values[valuesById[1] = "ACTIVE"] = 1;
                            values[valuesById[2] = "STOPPED"] = 2;
                            return values;
                        })();

                        return Participant;
                    })();

                    LocatorSessionInfo.GnssJammer = (function() {

                        /**
                         * Constructs a new GnssJammer.
                         * @exports com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer
                         * @constructor
                         * @param {Object} [properties] Properties to set
                         */
                        function GnssJammer(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GnssJammer location.
                         * @type {com.argusat.gjl.observation.Location}
                         */
                        GnssJammer.prototype.location = null;

                        // Lazily resolved type references
                        var $types = {
                            0: "com.argusat.gjl.observation.Location"
                        }; $lazyTypes.push($types);

                        /**
                         * Creates a new GnssJammer instance using the specified properties.
                         * @param {Object} [properties] Properties to set
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer} GnssJammer instance
                         */
                        GnssJammer.create = function create(properties) {
                            return new GnssJammer(properties);
                        };

                        /**
                         * Encodes the specified GnssJammer message.
                         * @param {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer|Object} message GnssJammer message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GnssJammer.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.location !== undefined && message.hasOwnProperty("location"))
                                $types[0].encode(message.location, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified GnssJammer message, length delimited.
                         * @param {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer|Object} message GnssJammer message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GnssJammer.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GnssJammer message from the specified reader or buffer.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer} GnssJammer
                         */
                        GnssJammer.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.location = $types[0].decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GnssJammer message from the specified reader or buffer, length delimited.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer} GnssJammer
                         */
                        GnssJammer.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GnssJammer message.
                         * @param {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer|Object} message GnssJammer message or plain object to verify
                         * @returns {?string} `null` if valid, otherwise the reason why it is not
                         */
                        GnssJammer.verify = function verify(message) {
                            if (message.location !== undefined && message.location !== null) {
                                var error = $types[0].verify(message.location);
                                if (error)
                                    return "location." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a GnssJammer message from a plain object. Also converts values to their respective internal types.
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer} GnssJammer
                         */
                        GnssJammer.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer)
                                return object;
                            var message = new $root.com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer();
                            if (object.location !== undefined && object.location !== null) {
                                if (typeof object.location !== "object")
                                    throw TypeError(".com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer.location: object expected");
                                message.location = $types[0].fromObject(object.location);
                            }
                            return message;
                        };

                        /**
                         * Creates a GnssJammer message from a plain object. Also converts values to their respective internal types.
                         * This is an alias of {@link com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer.fromObject}.
                         * @function
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer} GnssJammer
                         */
                        GnssJammer.from = GnssJammer.fromObject;

                        /**
                         * Creates a plain object from a GnssJammer message. Also converts values to other types if specified.
                         * @param {com.argusat.gjl.locator.LocatorSessionInfo.GnssJammer} message GnssJammer
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GnssJammer.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.location = null;
                            if (message.location !== undefined && message.location !== null && message.hasOwnProperty("location"))
                                object.location = $types[0].toObject(message.location, options);
                            return object;
                        };

                        /**
                         * Creates a plain object from this GnssJammer message. Also converts values to other types if specified.
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GnssJammer.prototype.toObject = function toObject(options) {
                            return this.constructor.toObject(this, options);
                        };

                        /**
                         * Converts this GnssJammer to JSON.
                         * @returns {Object.<string,*>} JSON object
                         */
                        GnssJammer.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GnssJammer;
                    })();

                    return LocatorSessionInfo;
                })();

                return locator;
            })();

            gjl.observation = (function() {

                /**
                 * Namespace observation.
                 * @exports com.argusat.gjl.observation
                 * @namespace
                 */
                var observation = {};

                observation.Location = (function() {

                    /**
                     * Constructs a new Location.
                     * @exports com.argusat.gjl.observation.Location
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function Location(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Location latitude.
                     * @type {number}
                     */
                    Location.prototype.latitude = 0;

                    /**
                     * Location longitude.
                     * @type {number}
                     */
                    Location.prototype.longitude = 0;

                    /**
                     * Location altitude.
                     * @type {number}
                     */
                    Location.prototype.altitude = 0;

                    /**
                     * Location hdop.
                     * @type {number}
                     */
                    Location.prototype.hdop = 0;

                    /**
                     * Location vdop.
                     * @type {number}
                     */
                    Location.prototype.vdop = 0;

                    /**
                     * Creates a new Location instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.observation.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };

                    /**
                     * Encodes the specified Location message.
                     * @param {com.argusat.gjl.observation.Location|Object} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.latitude !== undefined && message.hasOwnProperty("latitude"))
                            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.latitude);
                        if (message.longitude !== undefined && message.hasOwnProperty("longitude"))
                            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.longitude);
                        if (message.altitude !== undefined && message.hasOwnProperty("altitude"))
                            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.altitude);
                        if (message.hdop !== undefined && message.hasOwnProperty("hdop"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.hdop);
                        if (message.vdop !== undefined && message.hasOwnProperty("vdop"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.vdop);
                        return writer;
                    };

                    /**
                     * Encodes the specified Location message, length delimited.
                     * @param {com.argusat.gjl.observation.Location|Object} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.observation.Location} Location
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.latitude = reader.sint32();
                                break;
                            case 2:
                                message.longitude = reader.sint32();
                                break;
                            case 3:
                                message.altitude = reader.sint32();
                                break;
                            case 4:
                                message.hdop = reader.uint32();
                                break;
                            case 5:
                                message.vdop = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.observation.Location} Location
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Location message.
                     * @param {com.argusat.gjl.observation.Location|Object} message Location message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (message.latitude !== undefined)
                            if (!$util.isInteger(message.latitude))
                                return "latitude: integer expected";
                        if (message.longitude !== undefined)
                            if (!$util.isInteger(message.longitude))
                                return "longitude: integer expected";
                        if (message.altitude !== undefined)
                            if (!$util.isInteger(message.altitude))
                                return "altitude: integer expected";
                        if (message.hdop !== undefined)
                            if (!$util.isInteger(message.hdop))
                                return "hdop: integer expected";
                        if (message.vdop !== undefined)
                            if (!$util.isInteger(message.vdop))
                                return "vdop: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.observation.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.observation.Location)
                            return object;
                        var message = new $root.com.argusat.gjl.observation.Location();
                        if (object.latitude !== undefined && object.latitude !== null)
                            message.latitude = object.latitude | 0;
                        if (object.longitude !== undefined && object.longitude !== null)
                            message.longitude = object.longitude | 0;
                        if (object.altitude !== undefined && object.altitude !== null)
                            message.altitude = object.altitude | 0;
                        if (object.hdop !== undefined && object.hdop !== null)
                            message.hdop = object.hdop >>> 0;
                        if (object.vdop !== undefined && object.vdop !== null)
                            message.vdop = object.vdop >>> 0;
                        return message;
                    };

                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.observation.Location.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.observation.Location} Location
                     */
                    Location.from = Location.fromObject;

                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.observation.Location} message Location
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.latitude = 0;
                            object.longitude = 0;
                            object.altitude = 0;
                            object.hdop = 0;
                            object.vdop = 0;
                        }
                        if (message.latitude !== undefined && message.latitude !== null && message.hasOwnProperty("latitude"))
                            object.latitude = message.latitude;
                        if (message.longitude !== undefined && message.longitude !== null && message.hasOwnProperty("longitude"))
                            object.longitude = message.longitude;
                        if (message.altitude !== undefined && message.altitude !== null && message.hasOwnProperty("altitude"))
                            object.altitude = message.altitude;
                        if (message.hdop !== undefined && message.hdop !== null && message.hasOwnProperty("hdop"))
                            object.hdop = message.hdop;
                        if (message.vdop !== undefined && message.vdop !== null && message.hasOwnProperty("vdop"))
                            object.vdop = message.vdop;
                        return object;
                    };

                    /**
                     * Creates a plain object from this Location message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this Location to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Location;
                })();

                observation.Observation = (function() {

                    /**
                     * Constructs a new Observation.
                     * @exports com.argusat.gjl.observation.Observation
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function Observation(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Observation type.
                     * @type {number}
                     */
                    Observation.prototype.type = 0;

                    /**
                     * Observation deviceId.
                     * @type {string}
                     */
                    Observation.prototype.deviceId = "";

                    /**
                     * Observation timestamp.
                     * @type {number|$protobuf.Long}
                     */
                    Observation.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Observation location.
                     * @type {com.argusat.gjl.observation.Location}
                     */
                    Observation.prototype.location = null;

                    /**
                     * Observation mode.
                     * @type {number}
                     */
                    Observation.prototype.mode = 0;

                    /**
                     * Observation c0nobservation.
                     * @type {com.argusat.gjl.observation.Observation.C0NObservation}
                     */
                    Observation.prototype.c0nobservation = null;

                    /**
                     * Observation accelerometerobservation.
                     * @type {com.argusat.gjl.observation.Observation.AccelerometerObservation}
                     */
                    Observation.prototype.accelerometerobservation = null;

                    /**
                     * Observation magneticCompassObservation.
                     * @type {com.argusat.gjl.observation.Observation.MagneticCompassObservation}
                     */
                    Observation.prototype.magneticCompassObservation = null;

                    /**
                     * Observation geoMagneticObservation.
                     * @type {com.argusat.gjl.observation.Observation.GeoMagneticObservation}
                     */
                    Observation.prototype.geoMagneticObservation = null;

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.observation.Observation.ObservationType",
                        3: "com.argusat.gjl.observation.Location",
                        4: "com.argusat.gjl.observation.Observation.ModeType",
                        5: "com.argusat.gjl.observation.Observation.C0NObservation",
                        6: "com.argusat.gjl.observation.Observation.AccelerometerObservation",
                        7: "com.argusat.gjl.observation.Observation.MagneticCompassObservation",
                        8: "com.argusat.gjl.observation.Observation.GeoMagneticObservation"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new Observation instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.observation.Observation} Observation instance
                     */
                    Observation.create = function create(properties) {
                        return new Observation(properties);
                    };

                    /**
                     * Encodes the specified Observation message.
                     * @param {com.argusat.gjl.observation.Observation|Object} message Observation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Observation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.type !== undefined && message.hasOwnProperty("type"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.type);
                        if (message.deviceId !== undefined && message.hasOwnProperty("deviceId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceId);
                        if (message.timestamp !== undefined && message.timestamp !== null && message.hasOwnProperty("timestamp"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timestamp);
                        if (message.location !== undefined && message.hasOwnProperty("location"))
                            $types[3].encode(message.location, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.mode !== undefined && message.hasOwnProperty("mode"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.mode);
                        if (message.c0nobservation !== undefined && message.hasOwnProperty("c0nobservation"))
                            $types[5].encode(message.c0nobservation, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.accelerometerobservation !== undefined && message.hasOwnProperty("accelerometerobservation"))
                            $types[6].encode(message.accelerometerobservation, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.magneticCompassObservation !== undefined && message.hasOwnProperty("magneticCompassObservation"))
                            $types[7].encode(message.magneticCompassObservation, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.geoMagneticObservation !== undefined && message.hasOwnProperty("geoMagneticObservation"))
                            $types[8].encode(message.geoMagneticObservation, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Observation message, length delimited.
                     * @param {com.argusat.gjl.observation.Observation|Object} message Observation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Observation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Observation message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.observation.Observation} Observation
                     */
                    Observation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Observation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.type = reader.uint32();
                                break;
                            case 2:
                                message.deviceId = reader.string();
                                break;
                            case 3:
                                message.timestamp = reader.uint64();
                                break;
                            case 4:
                                message.location = $types[3].decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.mode = reader.uint32();
                                break;
                            case 6:
                                message.c0nobservation = $types[5].decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.accelerometerobservation = $types[6].decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.magneticCompassObservation = $types[7].decode(reader, reader.uint32());
                                break;
                            case 9:
                                message.geoMagneticObservation = $types[8].decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Observation message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.observation.Observation} Observation
                     */
                    Observation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Observation message.
                     * @param {com.argusat.gjl.observation.Observation|Object} message Observation message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    Observation.verify = function verify(message) {
                        if (message.type !== undefined)
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.deviceId !== undefined)
                            if (!$util.isString(message.deviceId))
                                return "deviceId: string expected";
                        if (message.timestamp !== undefined)
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.location !== undefined && message.location !== null) {
                            var error = $types[3].verify(message.location);
                            if (error)
                                return "location." + error;
                        }
                        if (message.mode !== undefined)
                            switch (message.mode) {
                            default:
                                return "mode: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.c0nobservation !== undefined && message.c0nobservation !== null) {
                            var error = $types[5].verify(message.c0nobservation);
                            if (error)
                                return "c0nobservation." + error;
                        }
                        if (message.accelerometerobservation !== undefined && message.accelerometerobservation !== null) {
                            var error = $types[6].verify(message.accelerometerobservation);
                            if (error)
                                return "accelerometerobservation." + error;
                        }
                        if (message.magneticCompassObservation !== undefined && message.magneticCompassObservation !== null) {
                            var error = $types[7].verify(message.magneticCompassObservation);
                            if (error)
                                return "magneticCompassObservation." + error;
                        }
                        if (message.geoMagneticObservation !== undefined && message.geoMagneticObservation !== null) {
                            var error = $types[8].verify(message.geoMagneticObservation);
                            if (error)
                                return "geoMagneticObservation." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an Observation message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.observation.Observation} Observation
                     */
                    Observation.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.observation.Observation)
                            return object;
                        var message = new $root.com.argusat.gjl.observation.Observation();
                        switch (object.type) {
                        case "LOCATION_ONLY":
                        case 0:
                            message.type = 0;
                            break;
                        case "C0N_GNSS":
                        case 1:
                            message.type = 1;
                            break;
                        case "ACCEL":
                        case 2:
                            message.type = 2;
                            break;
                        case "ROTATION_VECTOR":
                        case 3:
                            message.type = 3;
                            break;
                        }
                        if (object.deviceId !== undefined && object.deviceId !== null)
                            message.deviceId = String(object.deviceId);
                        if (object.timestamp !== undefined && object.timestamp !== null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low, object.timestamp.high).toNumber(true);
                        if (object.location !== undefined && object.location !== null) {
                            if (typeof object.location !== "object")
                                throw TypeError(".com.argusat.gjl.observation.Observation.location: object expected");
                            message.location = $types[3].fromObject(object.location);
                        }
                        switch (object.mode) {
                        case "PASSIVE":
                        case 0:
                            message.mode = 0;
                            break;
                        case "ACTIVE":
                        case 1:
                            message.mode = 1;
                            break;
                        }
                        if (object.c0nobservation !== undefined && object.c0nobservation !== null) {
                            if (typeof object.c0nobservation !== "object")
                                throw TypeError(".com.argusat.gjl.observation.Observation.c0nobservation: object expected");
                            message.c0nobservation = $types[5].fromObject(object.c0nobservation);
                        }
                        if (object.accelerometerobservation !== undefined && object.accelerometerobservation !== null) {
                            if (typeof object.accelerometerobservation !== "object")
                                throw TypeError(".com.argusat.gjl.observation.Observation.accelerometerobservation: object expected");
                            message.accelerometerobservation = $types[6].fromObject(object.accelerometerobservation);
                        }
                        if (object.magneticCompassObservation !== undefined && object.magneticCompassObservation !== null) {
                            if (typeof object.magneticCompassObservation !== "object")
                                throw TypeError(".com.argusat.gjl.observation.Observation.magneticCompassObservation: object expected");
                            message.magneticCompassObservation = $types[7].fromObject(object.magneticCompassObservation);
                        }
                        if (object.geoMagneticObservation !== undefined && object.geoMagneticObservation !== null) {
                            if (typeof object.geoMagneticObservation !== "object")
                                throw TypeError(".com.argusat.gjl.observation.Observation.geoMagneticObservation: object expected");
                            message.geoMagneticObservation = $types[8].fromObject(object.geoMagneticObservation);
                        }
                        return message;
                    };

                    /**
                     * Creates an Observation message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.observation.Observation.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.observation.Observation} Observation
                     */
                    Observation.from = Observation.fromObject;

                    /**
                     * Creates a plain object from an Observation message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.observation.Observation} message Observation
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Observation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.type = options.enums === String ? "LOCATION_ONLY" : 0;
                            object.deviceId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            object.location = null;
                            object.mode = options.enums === String ? "PASSIVE" : 0;
                            object.c0nobservation = null;
                            object.accelerometerobservation = null;
                            object.magneticCompassObservation = null;
                            object.geoMagneticObservation = null;
                        }
                        if (message.type !== undefined && message.type !== null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $types[0][message.type] : message.type;
                        if (message.deviceId !== undefined && message.deviceId !== null && message.hasOwnProperty("deviceId"))
                            object.deviceId = message.deviceId;
                        if (message.timestamp !== undefined && message.timestamp !== null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low, message.timestamp.high).toNumber(true) : message.timestamp;
                        if (message.location !== undefined && message.location !== null && message.hasOwnProperty("location"))
                            object.location = $types[3].toObject(message.location, options);
                        if (message.mode !== undefined && message.mode !== null && message.hasOwnProperty("mode"))
                            object.mode = options.enums === String ? $types[4][message.mode] : message.mode;
                        if (message.c0nobservation !== undefined && message.c0nobservation !== null && message.hasOwnProperty("c0nobservation"))
                            object.c0nobservation = $types[5].toObject(message.c0nobservation, options);
                        if (message.accelerometerobservation !== undefined && message.accelerometerobservation !== null && message.hasOwnProperty("accelerometerobservation"))
                            object.accelerometerobservation = $types[6].toObject(message.accelerometerobservation, options);
                        if (message.magneticCompassObservation !== undefined && message.magneticCompassObservation !== null && message.hasOwnProperty("magneticCompassObservation"))
                            object.magneticCompassObservation = $types[7].toObject(message.magneticCompassObservation, options);
                        if (message.geoMagneticObservation !== undefined && message.geoMagneticObservation !== null && message.hasOwnProperty("geoMagneticObservation"))
                            object.geoMagneticObservation = $types[8].toObject(message.geoMagneticObservation, options);
                        return object;
                    };

                    /**
                     * Creates a plain object from this Observation message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Observation.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this Observation to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    Observation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ObservationType enum.
                     * @name ObservationType
                     * @memberof com.argusat.gjl.observation.Observation
                     * @enum {number}
                     * @property {number} LOCATION_ONLY=0 LOCATION_ONLY value
                     * @property {number} C0N_GNSS=1 C0N_GNSS value
                     * @property {number} ACCEL=2 ACCEL value
                     * @property {number} ROTATION_VECTOR=3 ROTATION_VECTOR value
                     */
                    Observation.ObservationType = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "LOCATION_ONLY"] = 0;
                        values[valuesById[1] = "C0N_GNSS"] = 1;
                        values[valuesById[2] = "ACCEL"] = 2;
                        values[valuesById[3] = "ROTATION_VECTOR"] = 3;
                        return values;
                    })();

                    /**
                     * ModeType enum.
                     * @name ModeType
                     * @memberof com.argusat.gjl.observation.Observation
                     * @enum {number}
                     * @property {number} PASSIVE=0 PASSIVE value
                     * @property {number} ACTIVE=1 ACTIVE value
                     */
                    Observation.ModeType = (function() {
                        var valuesById = {},
                            values = Object.create(valuesById);
                        values[valuesById[0] = "PASSIVE"] = 0;
                        values[valuesById[1] = "ACTIVE"] = 1;
                        return values;
                    })();

                    Observation.C0NObservation = (function() {

                        /**
                         * Constructs a new C0NObservation.
                         * @exports com.argusat.gjl.observation.Observation.C0NObservation
                         * @constructor
                         * @param {Object} [properties] Properties to set
                         */
                        function C0NObservation(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * C0NObservation channels.
                         * @type {Array.<com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel>}
                         */
                        C0NObservation.prototype.channels = $util.emptyArray;

                        // Lazily resolved type references
                        var $types = {
                            0: "com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel"
                        }; $lazyTypes.push($types);

                        /**
                         * Creates a new C0NObservation instance using the specified properties.
                         * @param {Object} [properties] Properties to set
                         * @returns {com.argusat.gjl.observation.Observation.C0NObservation} C0NObservation instance
                         */
                        C0NObservation.create = function create(properties) {
                            return new C0NObservation(properties);
                        };

                        /**
                         * Encodes the specified C0NObservation message.
                         * @param {com.argusat.gjl.observation.Observation.C0NObservation|Object} message C0NObservation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        C0NObservation.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.channels !== undefined && message.hasOwnProperty("channels"))
                                for (var i = 0; i < message.channels.length; ++i)
                                    $types[0].encode(message.channels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified C0NObservation message, length delimited.
                         * @param {com.argusat.gjl.observation.Observation.C0NObservation|Object} message C0NObservation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        C0NObservation.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a C0NObservation message from the specified reader or buffer.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.argusat.gjl.observation.Observation.C0NObservation} C0NObservation
                         */
                        C0NObservation.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Observation.C0NObservation();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.channels && message.channels.length))
                                        message.channels = [];
                                    message.channels.push($types[0].decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a C0NObservation message from the specified reader or buffer, length delimited.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.argusat.gjl.observation.Observation.C0NObservation} C0NObservation
                         */
                        C0NObservation.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a C0NObservation message.
                         * @param {com.argusat.gjl.observation.Observation.C0NObservation|Object} message C0NObservation message or plain object to verify
                         * @returns {?string} `null` if valid, otherwise the reason why it is not
                         */
                        C0NObservation.verify = function verify(message) {
                            if (message.channels !== undefined) {
                                if (!Array.isArray(message.channels))
                                    return "channels: array expected";
                                for (var i = 0; i < message.channels.length; ++i) {
                                    var error = $types[0].verify(message.channels[i]);
                                    if (error)
                                        return "channels." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a C0NObservation message from a plain object. Also converts values to their respective internal types.
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.observation.Observation.C0NObservation} C0NObservation
                         */
                        C0NObservation.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.argusat.gjl.observation.Observation.C0NObservation)
                                return object;
                            var message = new $root.com.argusat.gjl.observation.Observation.C0NObservation();
                            if (object.channels) {
                                if (!Array.isArray(object.channels))
                                    throw TypeError(".com.argusat.gjl.observation.Observation.C0NObservation.channels: array expected");
                                message.channels = [];
                                for (var i = 0; i < object.channels.length; ++i) {
                                    if (typeof object.channels[i] !== "object")
                                        throw TypeError(".com.argusat.gjl.observation.Observation.C0NObservation.channels: object expected");
                                    message.channels[i] = $types[0].fromObject(object.channels[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a C0NObservation message from a plain object. Also converts values to their respective internal types.
                         * This is an alias of {@link com.argusat.gjl.observation.Observation.C0NObservation.fromObject}.
                         * @function
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.observation.Observation.C0NObservation} C0NObservation
                         */
                        C0NObservation.from = C0NObservation.fromObject;

                        /**
                         * Creates a plain object from a C0NObservation message. Also converts values to other types if specified.
                         * @param {com.argusat.gjl.observation.Observation.C0NObservation} message C0NObservation
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        C0NObservation.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.channels = [];
                            if (message.channels !== undefined && message.channels !== null && message.hasOwnProperty("channels")) {
                                object.channels = [];
                                for (var j = 0; j < message.channels.length; ++j)
                                    object.channels[j] = $types[0].toObject(message.channels[j], options);
                            }
                            return object;
                        };

                        /**
                         * Creates a plain object from this C0NObservation message. Also converts values to other types if specified.
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        C0NObservation.prototype.toObject = function toObject(options) {
                            return this.constructor.toObject(this, options);
                        };

                        /**
                         * Converts this C0NObservation to JSON.
                         * @returns {Object.<string,*>} JSON object
                         */
                        C0NObservation.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        C0NObservation.ReceiverChannel = (function() {

                            /**
                             * Constructs a new ReceiverChannel.
                             * @exports com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel
                             * @constructor
                             * @param {Object} [properties] Properties to set
                             */
                            function ReceiverChannel(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * ReceiverChannel prn.
                             * @type {number}
                             */
                            ReceiverChannel.prototype.prn = 0;

                            /**
                             * ReceiverChannel azimuth.
                             * @type {number}
                             */
                            ReceiverChannel.prototype.azimuth = 0;

                            /**
                             * ReceiverChannel elevation.
                             * @type {number}
                             */
                            ReceiverChannel.prototype.elevation = 0;

                            /**
                             * ReceiverChannel c0N.
                             * @type {number}
                             */
                            ReceiverChannel.prototype.c0N = 0;

                            /**
                             * Creates a new ReceiverChannel instance using the specified properties.
                             * @param {Object} [properties] Properties to set
                             * @returns {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel} ReceiverChannel instance
                             */
                            ReceiverChannel.create = function create(properties) {
                                return new ReceiverChannel(properties);
                            };

                            /**
                             * Encodes the specified ReceiverChannel message.
                             * @param {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel|Object} message ReceiverChannel message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ReceiverChannel.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.prn !== undefined && message.hasOwnProperty("prn"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.prn);
                                if (message.azimuth !== undefined && message.hasOwnProperty("azimuth"))
                                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.azimuth);
                                if (message.elevation !== undefined && message.hasOwnProperty("elevation"))
                                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.elevation);
                                if (message.c0N !== undefined && message.hasOwnProperty("c0N"))
                                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.c0N);
                                return writer;
                            };

                            /**
                             * Encodes the specified ReceiverChannel message, length delimited.
                             * @param {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel|Object} message ReceiverChannel message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ReceiverChannel.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a ReceiverChannel message from the specified reader or buffer.
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel} ReceiverChannel
                             */
                            ReceiverChannel.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.prn = reader.uint32();
                                        break;
                                    case 2:
                                        message.azimuth = reader.float();
                                        break;
                                    case 3:
                                        message.elevation = reader.float();
                                        break;
                                    case 4:
                                        message.c0N = reader.float();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a ReceiverChannel message from the specified reader or buffer, length delimited.
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel} ReceiverChannel
                             */
                            ReceiverChannel.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a ReceiverChannel message.
                             * @param {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel|Object} message ReceiverChannel message or plain object to verify
                             * @returns {?string} `null` if valid, otherwise the reason why it is not
                             */
                            ReceiverChannel.verify = function verify(message) {
                                if (message.prn !== undefined)
                                    if (!$util.isInteger(message.prn))
                                        return "prn: integer expected";
                                if (message.azimuth !== undefined)
                                    if (typeof message.azimuth !== "number")
                                        return "azimuth: number expected";
                                if (message.elevation !== undefined)
                                    if (typeof message.elevation !== "number")
                                        return "elevation: number expected";
                                if (message.c0N !== undefined)
                                    if (typeof message.c0N !== "number")
                                        return "c0N: number expected";
                                return null;
                            };

                            /**
                             * Creates a ReceiverChannel message from a plain object. Also converts values to their respective internal types.
                             * @param {Object.<string,*>} object Plain object
                             * @returns {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel} ReceiverChannel
                             */
                            ReceiverChannel.fromObject = function fromObject(object) {
                                if (object instanceof $root.com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel)
                                    return object;
                                var message = new $root.com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel();
                                if (object.prn !== undefined && object.prn !== null)
                                    message.prn = object.prn >>> 0;
                                if (object.azimuth !== undefined && object.azimuth !== null)
                                    message.azimuth = Number(object.azimuth);
                                if (object.elevation !== undefined && object.elevation !== null)
                                    message.elevation = Number(object.elevation);
                                if (object.c0N !== undefined && object.c0N !== null)
                                    message.c0N = Number(object.c0N);
                                return message;
                            };

                            /**
                             * Creates a ReceiverChannel message from a plain object. Also converts values to their respective internal types.
                             * This is an alias of {@link com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel.fromObject}.
                             * @function
                             * @param {Object.<string,*>} object Plain object
                             * @returns {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel} ReceiverChannel
                             */
                            ReceiverChannel.from = ReceiverChannel.fromObject;

                            /**
                             * Creates a plain object from a ReceiverChannel message. Also converts values to other types if specified.
                             * @param {com.argusat.gjl.observation.Observation.C0NObservation.ReceiverChannel} message ReceiverChannel
                             * @param {$protobuf.ConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            ReceiverChannel.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.prn = 0;
                                    object.azimuth = 0;
                                    object.elevation = 0;
                                    object.c0N = 0;
                                }
                                if (message.prn !== undefined && message.prn !== null && message.hasOwnProperty("prn"))
                                    object.prn = message.prn;
                                if (message.azimuth !== undefined && message.azimuth !== null && message.hasOwnProperty("azimuth"))
                                    object.azimuth = message.azimuth;
                                if (message.elevation !== undefined && message.elevation !== null && message.hasOwnProperty("elevation"))
                                    object.elevation = message.elevation;
                                if (message.c0N !== undefined && message.c0N !== null && message.hasOwnProperty("c0N"))
                                    object.c0N = message.c0N;
                                return object;
                            };

                            /**
                             * Creates a plain object from this ReceiverChannel message. Also converts values to other types if specified.
                             * @param {$protobuf.ConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            ReceiverChannel.prototype.toObject = function toObject(options) {
                                return this.constructor.toObject(this, options);
                            };

                            /**
                             * Converts this ReceiverChannel to JSON.
                             * @returns {Object.<string,*>} JSON object
                             */
                            ReceiverChannel.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            return ReceiverChannel;
                        })();

                        return C0NObservation;
                    })();

                    Observation.AccelerometerObservation = (function() {

                        /**
                         * Constructs a new AccelerometerObservation.
                         * @exports com.argusat.gjl.observation.Observation.AccelerometerObservation
                         * @constructor
                         * @param {Object} [properties] Properties to set
                         */
                        function AccelerometerObservation(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new AccelerometerObservation instance using the specified properties.
                         * @param {Object} [properties] Properties to set
                         * @returns {com.argusat.gjl.observation.Observation.AccelerometerObservation} AccelerometerObservation instance
                         */
                        AccelerometerObservation.create = function create(properties) {
                            return new AccelerometerObservation(properties);
                        };

                        /**
                         * Encodes the specified AccelerometerObservation message.
                         * @param {com.argusat.gjl.observation.Observation.AccelerometerObservation|Object} message AccelerometerObservation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccelerometerObservation.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Encodes the specified AccelerometerObservation message, length delimited.
                         * @param {com.argusat.gjl.observation.Observation.AccelerometerObservation|Object} message AccelerometerObservation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccelerometerObservation.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an AccelerometerObservation message from the specified reader or buffer.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.argusat.gjl.observation.Observation.AccelerometerObservation} AccelerometerObservation
                         */
                        AccelerometerObservation.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Observation.AccelerometerObservation();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an AccelerometerObservation message from the specified reader or buffer, length delimited.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.argusat.gjl.observation.Observation.AccelerometerObservation} AccelerometerObservation
                         */
                        AccelerometerObservation.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an AccelerometerObservation message.
                         * @param {com.argusat.gjl.observation.Observation.AccelerometerObservation|Object} message AccelerometerObservation message or plain object to verify
                         * @returns {?string} `null` if valid, otherwise the reason why it is not
                         */
                        AccelerometerObservation.verify = function verify() {
                            return null;
                        };

                        /**
                         * Creates an AccelerometerObservation message from a plain object. Also converts values to their respective internal types.
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.observation.Observation.AccelerometerObservation} AccelerometerObservation
                         */
                        AccelerometerObservation.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.argusat.gjl.observation.Observation.AccelerometerObservation)
                                return object;
                            return new $root.com.argusat.gjl.observation.Observation.AccelerometerObservation();
                        };

                        /**
                         * Creates an AccelerometerObservation message from a plain object. Also converts values to their respective internal types.
                         * This is an alias of {@link com.argusat.gjl.observation.Observation.AccelerometerObservation.fromObject}.
                         * @function
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.observation.Observation.AccelerometerObservation} AccelerometerObservation
                         */
                        AccelerometerObservation.from = AccelerometerObservation.fromObject;

                        /**
                         * Creates a plain object from an AccelerometerObservation message. Also converts values to other types if specified.
                         * @param {com.argusat.gjl.observation.Observation.AccelerometerObservation} message AccelerometerObservation
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AccelerometerObservation.toObject = function toObject() {
                            return {};
                        };

                        /**
                         * Creates a plain object from this AccelerometerObservation message. Also converts values to other types if specified.
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AccelerometerObservation.prototype.toObject = function toObject(options) {
                            return this.constructor.toObject(this, options);
                        };

                        /**
                         * Converts this AccelerometerObservation to JSON.
                         * @returns {Object.<string,*>} JSON object
                         */
                        AccelerometerObservation.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return AccelerometerObservation;
                    })();

                    Observation.MagneticCompassObservation = (function() {

                        /**
                         * Constructs a new MagneticCompassObservation.
                         * @exports com.argusat.gjl.observation.Observation.MagneticCompassObservation
                         * @constructor
                         * @param {Object} [properties] Properties to set
                         */
                        function MagneticCompassObservation(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * MagneticCompassObservation direction.
                         * @type {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction}
                         */
                        MagneticCompassObservation.prototype.direction = null;

                        // Lazily resolved type references
                        var $types = {
                            0: "com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction"
                        }; $lazyTypes.push($types);

                        /**
                         * Creates a new MagneticCompassObservation instance using the specified properties.
                         * @param {Object} [properties] Properties to set
                         * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation} MagneticCompassObservation instance
                         */
                        MagneticCompassObservation.create = function create(properties) {
                            return new MagneticCompassObservation(properties);
                        };

                        /**
                         * Encodes the specified MagneticCompassObservation message.
                         * @param {com.argusat.gjl.observation.Observation.MagneticCompassObservation|Object} message MagneticCompassObservation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MagneticCompassObservation.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.direction !== undefined && message.hasOwnProperty("direction"))
                                $types[0].encode(message.direction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified MagneticCompassObservation message, length delimited.
                         * @param {com.argusat.gjl.observation.Observation.MagneticCompassObservation|Object} message MagneticCompassObservation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MagneticCompassObservation.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a MagneticCompassObservation message from the specified reader or buffer.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation} MagneticCompassObservation
                         */
                        MagneticCompassObservation.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Observation.MagneticCompassObservation();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.direction = $types[0].decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a MagneticCompassObservation message from the specified reader or buffer, length delimited.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation} MagneticCompassObservation
                         */
                        MagneticCompassObservation.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a MagneticCompassObservation message.
                         * @param {com.argusat.gjl.observation.Observation.MagneticCompassObservation|Object} message MagneticCompassObservation message or plain object to verify
                         * @returns {?string} `null` if valid, otherwise the reason why it is not
                         */
                        MagneticCompassObservation.verify = function verify(message) {
                            if (message.direction !== undefined && message.direction !== null) {
                                var error = $types[0].verify(message.direction);
                                if (error)
                                    return "direction." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a MagneticCompassObservation message from a plain object. Also converts values to their respective internal types.
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation} MagneticCompassObservation
                         */
                        MagneticCompassObservation.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.argusat.gjl.observation.Observation.MagneticCompassObservation)
                                return object;
                            var message = new $root.com.argusat.gjl.observation.Observation.MagneticCompassObservation();
                            if (object.direction !== undefined && object.direction !== null) {
                                if (typeof object.direction !== "object")
                                    throw TypeError(".com.argusat.gjl.observation.Observation.MagneticCompassObservation.direction: object expected");
                                message.direction = $types[0].fromObject(object.direction);
                            }
                            return message;
                        };

                        /**
                         * Creates a MagneticCompassObservation message from a plain object. Also converts values to their respective internal types.
                         * This is an alias of {@link com.argusat.gjl.observation.Observation.MagneticCompassObservation.fromObject}.
                         * @function
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation} MagneticCompassObservation
                         */
                        MagneticCompassObservation.from = MagneticCompassObservation.fromObject;

                        /**
                         * Creates a plain object from a MagneticCompassObservation message. Also converts values to other types if specified.
                         * @param {com.argusat.gjl.observation.Observation.MagneticCompassObservation} message MagneticCompassObservation
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MagneticCompassObservation.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.direction = null;
                            if (message.direction !== undefined && message.direction !== null && message.hasOwnProperty("direction"))
                                object.direction = $types[0].toObject(message.direction, options);
                            return object;
                        };

                        /**
                         * Creates a plain object from this MagneticCompassObservation message. Also converts values to other types if specified.
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MagneticCompassObservation.prototype.toObject = function toObject(options) {
                            return this.constructor.toObject(this, options);
                        };

                        /**
                         * Converts this MagneticCompassObservation to JSON.
                         * @returns {Object.<string,*>} JSON object
                         */
                        MagneticCompassObservation.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        MagneticCompassObservation.Direction = (function() {

                            /**
                             * Constructs a new Direction.
                             * @exports com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction
                             * @constructor
                             * @param {Object} [properties] Properties to set
                             */
                            function Direction(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Direction heading.
                             * @type {number}
                             */
                            Direction.prototype.heading = 0;

                            /**
                             * Direction error.
                             * @type {number}
                             */
                            Direction.prototype.error = 0;

                            /**
                             * Creates a new Direction instance using the specified properties.
                             * @param {Object} [properties] Properties to set
                             * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction} Direction instance
                             */
                            Direction.create = function create(properties) {
                                return new Direction(properties);
                            };

                            /**
                             * Encodes the specified Direction message.
                             * @param {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction|Object} message Direction message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Direction.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.heading !== undefined && message.hasOwnProperty("heading"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heading);
                                if (message.error !== undefined && message.hasOwnProperty("error"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.error);
                                return writer;
                            };

                            /**
                             * Encodes the specified Direction message, length delimited.
                             * @param {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction|Object} message Direction message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Direction.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Direction message from the specified reader or buffer.
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction} Direction
                             */
                            Direction.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.heading = reader.uint32();
                                        break;
                                    case 2:
                                        message.error = reader.uint32();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Direction message from the specified reader or buffer, length delimited.
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction} Direction
                             */
                            Direction.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Direction message.
                             * @param {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction|Object} message Direction message or plain object to verify
                             * @returns {?string} `null` if valid, otherwise the reason why it is not
                             */
                            Direction.verify = function verify(message) {
                                if (message.heading !== undefined)
                                    if (!$util.isInteger(message.heading))
                                        return "heading: integer expected";
                                if (message.error !== undefined)
                                    if (!$util.isInteger(message.error))
                                        return "error: integer expected";
                                return null;
                            };

                            /**
                             * Creates a Direction message from a plain object. Also converts values to their respective internal types.
                             * @param {Object.<string,*>} object Plain object
                             * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction} Direction
                             */
                            Direction.fromObject = function fromObject(object) {
                                if (object instanceof $root.com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction)
                                    return object;
                                var message = new $root.com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction();
                                if (object.heading !== undefined && object.heading !== null)
                                    message.heading = object.heading >>> 0;
                                if (object.error !== undefined && object.error !== null)
                                    message.error = object.error >>> 0;
                                return message;
                            };

                            /**
                             * Creates a Direction message from a plain object. Also converts values to their respective internal types.
                             * This is an alias of {@link com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction.fromObject}.
                             * @function
                             * @param {Object.<string,*>} object Plain object
                             * @returns {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction} Direction
                             */
                            Direction.from = Direction.fromObject;

                            /**
                             * Creates a plain object from a Direction message. Also converts values to other types if specified.
                             * @param {com.argusat.gjl.observation.Observation.MagneticCompassObservation.Direction} message Direction
                             * @param {$protobuf.ConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Direction.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.heading = 0;
                                    object.error = 0;
                                }
                                if (message.heading !== undefined && message.heading !== null && message.hasOwnProperty("heading"))
                                    object.heading = message.heading;
                                if (message.error !== undefined && message.error !== null && message.hasOwnProperty("error"))
                                    object.error = message.error;
                                return object;
                            };

                            /**
                             * Creates a plain object from this Direction message. Also converts values to other types if specified.
                             * @param {$protobuf.ConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Direction.prototype.toObject = function toObject(options) {
                                return this.constructor.toObject(this, options);
                            };

                            /**
                             * Converts this Direction to JSON.
                             * @returns {Object.<string,*>} JSON object
                             */
                            Direction.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            return Direction;
                        })();

                        return MagneticCompassObservation;
                    })();

                    Observation.GeoMagneticObservation = (function() {

                        /**
                         * Constructs a new GeoMagneticObservation.
                         * @exports com.argusat.gjl.observation.Observation.GeoMagneticObservation
                         * @constructor
                         * @param {Object} [properties] Properties to set
                         */
                        function GeoMagneticObservation(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GeoMagneticObservation x.
                         * @type {number}
                         */
                        GeoMagneticObservation.prototype.x = 0;

                        /**
                         * GeoMagneticObservation y.
                         * @type {number}
                         */
                        GeoMagneticObservation.prototype.y = 0;

                        /**
                         * GeoMagneticObservation z.
                         * @type {number}
                         */
                        GeoMagneticObservation.prototype.z = 0;

                        /**
                         * GeoMagneticObservation sigma.
                         * @type {number}
                         */
                        GeoMagneticObservation.prototype.sigma = 0;

                        /**
                         * GeoMagneticObservation error.
                         * @type {number}
                         */
                        GeoMagneticObservation.prototype.error = 0;

                        /**
                         * Creates a new GeoMagneticObservation instance using the specified properties.
                         * @param {Object} [properties] Properties to set
                         * @returns {com.argusat.gjl.observation.Observation.GeoMagneticObservation} GeoMagneticObservation instance
                         */
                        GeoMagneticObservation.create = function create(properties) {
                            return new GeoMagneticObservation(properties);
                        };

                        /**
                         * Encodes the specified GeoMagneticObservation message.
                         * @param {com.argusat.gjl.observation.Observation.GeoMagneticObservation|Object} message GeoMagneticObservation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GeoMagneticObservation.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.x !== undefined && message.hasOwnProperty("x"))
                                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
                            if (message.y !== undefined && message.hasOwnProperty("y"))
                                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
                            if (message.z !== undefined && message.hasOwnProperty("z"))
                                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
                            if (message.sigma !== undefined && message.hasOwnProperty("sigma"))
                                writer.uint32(/* id 5, wireType 5 =*/45).float(message.sigma);
                            if (message.error !== undefined && message.hasOwnProperty("error"))
                                writer.uint32(/* id 6, wireType 5 =*/53).float(message.error);
                            return writer;
                        };

                        /**
                         * Encodes the specified GeoMagneticObservation message, length delimited.
                         * @param {com.argusat.gjl.observation.Observation.GeoMagneticObservation|Object} message GeoMagneticObservation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GeoMagneticObservation.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GeoMagneticObservation message from the specified reader or buffer.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.argusat.gjl.observation.Observation.GeoMagneticObservation} GeoMagneticObservation
                         */
                        GeoMagneticObservation.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Observation.GeoMagneticObservation();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.x = reader.float();
                                    break;
                                case 2:
                                    message.y = reader.float();
                                    break;
                                case 3:
                                    message.z = reader.float();
                                    break;
                                case 5:
                                    message.sigma = reader.float();
                                    break;
                                case 6:
                                    message.error = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GeoMagneticObservation message from the specified reader or buffer, length delimited.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.argusat.gjl.observation.Observation.GeoMagneticObservation} GeoMagneticObservation
                         */
                        GeoMagneticObservation.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GeoMagneticObservation message.
                         * @param {com.argusat.gjl.observation.Observation.GeoMagneticObservation|Object} message GeoMagneticObservation message or plain object to verify
                         * @returns {?string} `null` if valid, otherwise the reason why it is not
                         */
                        GeoMagneticObservation.verify = function verify(message) {
                            if (message.x !== undefined)
                                if (typeof message.x !== "number")
                                    return "x: number expected";
                            if (message.y !== undefined)
                                if (typeof message.y !== "number")
                                    return "y: number expected";
                            if (message.z !== undefined)
                                if (typeof message.z !== "number")
                                    return "z: number expected";
                            if (message.sigma !== undefined)
                                if (typeof message.sigma !== "number")
                                    return "sigma: number expected";
                            if (message.error !== undefined)
                                if (typeof message.error !== "number")
                                    return "error: number expected";
                            return null;
                        };

                        /**
                         * Creates a GeoMagneticObservation message from a plain object. Also converts values to their respective internal types.
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.observation.Observation.GeoMagneticObservation} GeoMagneticObservation
                         */
                        GeoMagneticObservation.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.argusat.gjl.observation.Observation.GeoMagneticObservation)
                                return object;
                            var message = new $root.com.argusat.gjl.observation.Observation.GeoMagneticObservation();
                            if (object.x !== undefined && object.x !== null)
                                message.x = Number(object.x);
                            if (object.y !== undefined && object.y !== null)
                                message.y = Number(object.y);
                            if (object.z !== undefined && object.z !== null)
                                message.z = Number(object.z);
                            if (object.sigma !== undefined && object.sigma !== null)
                                message.sigma = Number(object.sigma);
                            if (object.error !== undefined && object.error !== null)
                                message.error = Number(object.error);
                            return message;
                        };

                        /**
                         * Creates a GeoMagneticObservation message from a plain object. Also converts values to their respective internal types.
                         * This is an alias of {@link com.argusat.gjl.observation.Observation.GeoMagneticObservation.fromObject}.
                         * @function
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.argusat.gjl.observation.Observation.GeoMagneticObservation} GeoMagneticObservation
                         */
                        GeoMagneticObservation.from = GeoMagneticObservation.fromObject;

                        /**
                         * Creates a plain object from a GeoMagneticObservation message. Also converts values to other types if specified.
                         * @param {com.argusat.gjl.observation.Observation.GeoMagneticObservation} message GeoMagneticObservation
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GeoMagneticObservation.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.x = 0;
                                object.y = 0;
                                object.z = 0;
                                object.sigma = 0;
                                object.error = 0;
                            }
                            if (message.x !== undefined && message.x !== null && message.hasOwnProperty("x"))
                                object.x = message.x;
                            if (message.y !== undefined && message.y !== null && message.hasOwnProperty("y"))
                                object.y = message.y;
                            if (message.z !== undefined && message.z !== null && message.hasOwnProperty("z"))
                                object.z = message.z;
                            if (message.sigma !== undefined && message.sigma !== null && message.hasOwnProperty("sigma"))
                                object.sigma = message.sigma;
                            if (message.error !== undefined && message.error !== null && message.hasOwnProperty("error"))
                                object.error = message.error;
                            return object;
                        };

                        /**
                         * Creates a plain object from this GeoMagneticObservation message. Also converts values to other types if specified.
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GeoMagneticObservation.prototype.toObject = function toObject(options) {
                            return this.constructor.toObject(this, options);
                        };

                        /**
                         * Converts this GeoMagneticObservation to JSON.
                         * @returns {Object.<string,*>} JSON object
                         */
                        GeoMagneticObservation.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GeoMagneticObservation;
                    })();

                    return Observation;
                })();

                observation.Observations = (function() {

                    /**
                     * Constructs a new Observations.
                     * @exports com.argusat.gjl.observation.Observations
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function Observations(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Observations observations.
                     * @type {Array.<com.argusat.gjl.observation.Observation>}
                     */
                    Observations.prototype.observations = $util.emptyArray;

                    // Lazily resolved type references
                    var $types = {
                        0: "com.argusat.gjl.observation.Observation"
                    }; $lazyTypes.push($types);

                    /**
                     * Creates a new Observations instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {com.argusat.gjl.observation.Observations} Observations instance
                     */
                    Observations.create = function create(properties) {
                        return new Observations(properties);
                    };

                    /**
                     * Encodes the specified Observations message.
                     * @param {com.argusat.gjl.observation.Observations|Object} message Observations message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Observations.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.observations !== undefined && message.hasOwnProperty("observations"))
                            for (var i = 0; i < message.observations.length; ++i)
                                $types[0].encode(message.observations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Observations message, length delimited.
                     * @param {com.argusat.gjl.observation.Observations|Object} message Observations message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Observations.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Observations message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.argusat.gjl.observation.Observations} Observations
                     */
                    Observations.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.argusat.gjl.observation.Observations();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.observations && message.observations.length))
                                    message.observations = [];
                                message.observations.push($types[0].decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Observations message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.argusat.gjl.observation.Observations} Observations
                     */
                    Observations.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Observations message.
                     * @param {com.argusat.gjl.observation.Observations|Object} message Observations message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    Observations.verify = function verify(message) {
                        if (message.observations !== undefined) {
                            if (!Array.isArray(message.observations))
                                return "observations: array expected";
                            for (var i = 0; i < message.observations.length; ++i) {
                                var error = $types[0].verify(message.observations[i]);
                                if (error)
                                    return "observations." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Observations message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.observation.Observations} Observations
                     */
                    Observations.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.argusat.gjl.observation.Observations)
                            return object;
                        var message = new $root.com.argusat.gjl.observation.Observations();
                        if (object.observations) {
                            if (!Array.isArray(object.observations))
                                throw TypeError(".com.argusat.gjl.observation.Observations.observations: array expected");
                            message.observations = [];
                            for (var i = 0; i < object.observations.length; ++i) {
                                if (typeof object.observations[i] !== "object")
                                    throw TypeError(".com.argusat.gjl.observation.Observations.observations: object expected");
                                message.observations[i] = $types[0].fromObject(object.observations[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates an Observations message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link com.argusat.gjl.observation.Observations.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.argusat.gjl.observation.Observations} Observations
                     */
                    Observations.from = Observations.fromObject;

                    /**
                     * Creates a plain object from an Observations message. Also converts values to other types if specified.
                     * @param {com.argusat.gjl.observation.Observations} message Observations
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Observations.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.observations = [];
                        if (message.observations !== undefined && message.observations !== null && message.hasOwnProperty("observations")) {
                            object.observations = [];
                            for (var j = 0; j < message.observations.length; ++j)
                                object.observations[j] = $types[0].toObject(message.observations[j], options);
                        }
                        return object;
                    };

                    /**
                     * Creates a plain object from this Observations message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Observations.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this Observations to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    Observations.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Observations;
                })();

                return observation;
            })();

            return gjl;
        })();

        return argusat;
    })();

    return com;
})();

// Resolve lazy type references to actual types
$util.lazyResolve($root, $lazyTypes);

export { $root as default };
