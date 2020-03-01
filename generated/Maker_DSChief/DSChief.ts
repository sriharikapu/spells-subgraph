// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class Etch extends EthereumEvent {
  get params(): Etch__Params {
    return new Etch__Params(this);
  }
}

export class Etch__Params {
  _event: Etch;

  constructor(event: Etch) {
    this._event = event;
  }

  get slate(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class LogNote extends EthereumEvent {
  get params(): LogNote__Params {
    return new LogNote__Params(this);
  }
}

export class LogNote__Params {
  _event: LogNote;

  constructor(event: LogNote) {
    this._event = event;
  }

  get sig(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get foo(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get bar(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get wad(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fax(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class LogSetAuthority extends EthereumEvent {
  get params(): LogSetAuthority__Params {
    return new LogSetAuthority__Params(this);
  }
}

export class LogSetAuthority__Params {
  _event: LogSetAuthority;

  constructor(event: LogSetAuthority) {
    this._event = event;
  }

  get authority(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogSetOwner extends EthereumEvent {
  get params(): LogSetOwner__Params {
    return new LogSetOwner__Params(this);
  }
}

export class LogSetOwner__Params {
  _event: LogSetOwner;

  constructor(event: LogSetOwner) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DSChief extends SmartContract {
  static bind(address: Address): DSChief {
    return new DSChief("DSChief", address);
  }

  IOU(): Address {
    let result = super.call("IOU", []);

    return result[0].toAddress();
  }

  try_IOU(): CallResult<Address> {
    let result = super.tryCall("IOU", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getUserRoles(who: Address): Bytes {
    let result = super.call("getUserRoles", [EthereumValue.fromAddress(who)]);

    return result[0].toBytes();
  }

  try_getUserRoles(who: Address): CallResult<Bytes> {
    let result = super.tryCall("getUserRoles", [
      EthereumValue.fromAddress(who)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  GOV(): Address {
    let result = super.call("GOV", []);

    return result[0].toAddress();
  }

  try_GOV(): CallResult<Address> {
    let result = super.tryCall("GOV", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getCapabilityRoles(code: Address, sig: Bytes): Bytes {
    let result = super.call("getCapabilityRoles", [
      EthereumValue.fromAddress(code),
      EthereumValue.fromFixedBytes(sig)
    ]);

    return result[0].toBytes();
  }

  try_getCapabilityRoles(code: Address, sig: Bytes): CallResult<Bytes> {
    let result = super.tryCall("getCapabilityRoles", [
      EthereumValue.fromAddress(code),
      EthereumValue.fromFixedBytes(sig)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  isCapabilityPublic(code: Address, sig: Bytes): boolean {
    let result = super.call("isCapabilityPublic", [
      EthereumValue.fromAddress(code),
      EthereumValue.fromFixedBytes(sig)
    ]);

    return result[0].toBoolean();
  }

  try_isCapabilityPublic(code: Address, sig: Bytes): CallResult<boolean> {
    let result = super.tryCall("isCapabilityPublic", [
      EthereumValue.fromAddress(code),
      EthereumValue.fromFixedBytes(sig)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  MAX_YAYS(): BigInt {
    let result = super.call("MAX_YAYS", []);

    return result[0].toBigInt();
  }

  try_MAX_YAYS(): CallResult<BigInt> {
    let result = super.tryCall("MAX_YAYS", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  etch(yays: Array<Address>): Bytes {
    let result = super.call("etch", [EthereumValue.fromAddressArray(yays)]);

    return result[0].toBytes();
  }

  try_etch(yays: Array<Address>): CallResult<Bytes> {
    let result = super.tryCall("etch", [EthereumValue.fromAddressArray(yays)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  approvals(param0: Address): BigInt {
    let result = super.call("approvals", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_approvals(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("approvals", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  hasUserRole(who: Address, role: i32): boolean {
    let result = super.call("hasUserRole", [
      EthereumValue.fromAddress(who),
      EthereumValue.fromUnsignedBigInt(BigInt.fromI32(role))
    ]);

    return result[0].toBoolean();
  }

  try_hasUserRole(who: Address, role: i32): CallResult<boolean> {
    let result = super.tryCall("hasUserRole", [
      EthereumValue.fromAddress(who),
      EthereumValue.fromUnsignedBigInt(BigInt.fromI32(role))
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  canCall(caller: Address, code: Address, sig: Bytes): boolean {
    let result = super.call("canCall", [
      EthereumValue.fromAddress(caller),
      EthereumValue.fromAddress(code),
      EthereumValue.fromFixedBytes(sig)
    ]);

    return result[0].toBoolean();
  }

  try_canCall(caller: Address, code: Address, sig: Bytes): CallResult<boolean> {
    let result = super.tryCall("canCall", [
      EthereumValue.fromAddress(caller),
      EthereumValue.fromAddress(code),
      EthereumValue.fromFixedBytes(sig)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  authority(): Address {
    let result = super.call("authority", []);

    return result[0].toAddress();
  }

  try_authority(): CallResult<Address> {
    let result = super.tryCall("authority", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  slates(param0: Bytes, param1: BigInt): Address {
    let result = super.call("slates", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);

    return result[0].toAddress();
  }

  try_slates(param0: Bytes, param1: BigInt): CallResult<Address> {
    let result = super.tryCall("slates", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  votes(param0: Address): Bytes {
    let result = super.call("votes", [EthereumValue.fromAddress(param0)]);

    return result[0].toBytes();
  }

  try_votes(param0: Address): CallResult<Bytes> {
    let result = super.tryCall("votes", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  vote(yays: Array<Address>): Bytes {
    let result = super.call("vote", [EthereumValue.fromAddressArray(yays)]);

    return result[0].toBytes();
  }

  try_vote(yays: Array<Address>): CallResult<Bytes> {
    let result = super.tryCall("vote", [EthereumValue.fromAddressArray(yays)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  isUserRoot(who: Address): boolean {
    let result = super.call("isUserRoot", [EthereumValue.fromAddress(who)]);

    return result[0].toBoolean();
  }

  try_isUserRoot(who: Address): CallResult<boolean> {
    let result = super.tryCall("isUserRoot", [EthereumValue.fromAddress(who)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  deposits(param0: Address): BigInt {
    let result = super.call("deposits", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_deposits(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("deposits", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  hat(): Address {
    let result = super.call("hat", []);

    return result[0].toAddress();
  }

  try_hat(): CallResult<Address> {
    let result = super.tryCall("hat", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class SetOwnerCall extends EthereumCall {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get owner_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class LiftCall extends EthereumCall {
  get inputs(): LiftCall__Inputs {
    return new LiftCall__Inputs(this);
  }

  get outputs(): LiftCall__Outputs {
    return new LiftCall__Outputs(this);
  }
}

export class LiftCall__Inputs {
  _call: LiftCall;

  constructor(call: LiftCall) {
    this._call = call;
  }

  get whom(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class LiftCall__Outputs {
  _call: LiftCall;

  constructor(call: LiftCall) {
    this._call = call;
  }
}

export class EtchCall extends EthereumCall {
  get inputs(): EtchCall__Inputs {
    return new EtchCall__Inputs(this);
  }

  get outputs(): EtchCall__Outputs {
    return new EtchCall__Outputs(this);
  }
}

export class EtchCall__Inputs {
  _call: EtchCall;

  constructor(call: EtchCall) {
    this._call = call;
  }

  get yays(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class EtchCall__Outputs {
  _call: EtchCall;

  constructor(call: EtchCall) {
    this._call = call;
  }

  get slate(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class SetUserRoleCall extends EthereumCall {
  get inputs(): SetUserRoleCall__Inputs {
    return new SetUserRoleCall__Inputs(this);
  }

  get outputs(): SetUserRoleCall__Outputs {
    return new SetUserRoleCall__Outputs(this);
  }
}

export class SetUserRoleCall__Inputs {
  _call: SetUserRoleCall;

  constructor(call: SetUserRoleCall) {
    this._call = call;
  }

  get who(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get role(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get enabled(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetUserRoleCall__Outputs {
  _call: SetUserRoleCall;

  constructor(call: SetUserRoleCall) {
    this._call = call;
  }
}

export class SetAuthorityCall extends EthereumCall {
  get inputs(): SetAuthorityCall__Inputs {
    return new SetAuthorityCall__Inputs(this);
  }

  get outputs(): SetAuthorityCall__Outputs {
    return new SetAuthorityCall__Outputs(this);
  }
}

export class SetAuthorityCall__Inputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }

  get authority_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAuthorityCall__Outputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }
}

export class SetRoleCapabilityCall extends EthereumCall {
  get inputs(): SetRoleCapabilityCall__Inputs {
    return new SetRoleCapabilityCall__Inputs(this);
  }

  get outputs(): SetRoleCapabilityCall__Outputs {
    return new SetRoleCapabilityCall__Outputs(this);
  }
}

export class SetRoleCapabilityCall__Inputs {
  _call: SetRoleCapabilityCall;

  constructor(call: SetRoleCapabilityCall) {
    this._call = call;
  }

  get role(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get code(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get sig(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get enabled(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class SetRoleCapabilityCall__Outputs {
  _call: SetRoleCapabilityCall;

  constructor(call: SetRoleCapabilityCall) {
    this._call = call;
  }
}

export class VoteCall extends EthereumCall {
  get inputs(): VoteCall__Inputs {
    return new VoteCall__Inputs(this);
  }

  get outputs(): VoteCall__Outputs {
    return new VoteCall__Outputs(this);
  }
}

export class VoteCall__Inputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get slate(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class VoteCall__Outputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }
}

export class SetPublicCapabilityCall extends EthereumCall {
  get inputs(): SetPublicCapabilityCall__Inputs {
    return new SetPublicCapabilityCall__Inputs(this);
  }

  get outputs(): SetPublicCapabilityCall__Outputs {
    return new SetPublicCapabilityCall__Outputs(this);
  }
}

export class SetPublicCapabilityCall__Inputs {
  _call: SetPublicCapabilityCall;

  constructor(call: SetPublicCapabilityCall) {
    this._call = call;
  }

  get code(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get sig(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get enabled(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetPublicCapabilityCall__Outputs {
  _call: SetPublicCapabilityCall;

  constructor(call: SetPublicCapabilityCall) {
    this._call = call;
  }
}

export class SetRootUserCall extends EthereumCall {
  get inputs(): SetRootUserCall__Inputs {
    return new SetRootUserCall__Inputs(this);
  }

  get outputs(): SetRootUserCall__Outputs {
    return new SetRootUserCall__Outputs(this);
  }
}

export class SetRootUserCall__Inputs {
  _call: SetRootUserCall;

  constructor(call: SetRootUserCall) {
    this._call = call;
  }

  get who(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetRootUserCall__Outputs {
  _call: SetRootUserCall;

  constructor(call: SetRootUserCall) {
    this._call = call;
  }
}

export class FreeCall extends EthereumCall {
  get inputs(): FreeCall__Inputs {
    return new FreeCall__Inputs(this);
  }

  get outputs(): FreeCall__Outputs {
    return new FreeCall__Outputs(this);
  }
}

export class FreeCall__Inputs {
  _call: FreeCall;

  constructor(call: FreeCall) {
    this._call = call;
  }

  get wad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class FreeCall__Outputs {
  _call: FreeCall;

  constructor(call: FreeCall) {
    this._call = call;
  }
}

export class LockCall extends EthereumCall {
  get inputs(): LockCall__Inputs {
    return new LockCall__Inputs(this);
  }

  get outputs(): LockCall__Outputs {
    return new LockCall__Outputs(this);
  }
}

export class LockCall__Inputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }

  get wad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LockCall__Outputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }
}

export class Vote1Call extends EthereumCall {
  get inputs(): Vote1Call__Inputs {
    return new Vote1Call__Inputs(this);
  }

  get outputs(): Vote1Call__Outputs {
    return new Vote1Call__Outputs(this);
  }
}

export class Vote1Call__Inputs {
  _call: Vote1Call;

  constructor(call: Vote1Call) {
    this._call = call;
  }

  get yays(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class Vote1Call__Outputs {
  _call: Vote1Call;

  constructor(call: Vote1Call) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get GOV(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get IOU(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get MAX_YAYS(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
