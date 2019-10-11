// package: 
// file: proto/hero.proto

import * as jspb from "google-protobuf";

export class Hero extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hero.AsObject;
  static toObject(includeInstance: boolean, msg: Hero): Hero.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Hero, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hero;
  static deserializeBinaryFromReader(message: Hero, reader: jspb.BinaryReader): Hero;
}

export namespace Hero {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class GetHerosReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHerosReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetHerosReq): GetHerosReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHerosReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHerosReq;
  static deserializeBinaryFromReader(message: GetHerosReq, reader: jspb.BinaryReader): GetHerosReq;
}

export namespace GetHerosReq {
  export type AsObject = {
  }
}

export class GetHerosRes extends jspb.Message {
  clearHerosList(): void;
  getHerosList(): Array<Hero>;
  setHerosList(value: Array<Hero>): void;
  addHeros(value?: Hero, index?: number): Hero;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHerosRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetHerosRes): GetHerosRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHerosRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHerosRes;
  static deserializeBinaryFromReader(message: GetHerosRes, reader: jspb.BinaryReader): GetHerosRes;
}

export namespace GetHerosRes {
  export type AsObject = {
    herosList: Array<Hero.AsObject>,
  }
}

export class GetHeroReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHeroReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetHeroReq): GetHeroReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHeroReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHeroReq;
  static deserializeBinaryFromReader(message: GetHeroReq, reader: jspb.BinaryReader): GetHeroReq;
}

export namespace GetHeroReq {
  export type AsObject = {
    id: number,
  }
}

export class GetHeroRes extends jspb.Message {
  hasHero(): boolean;
  clearHero(): void;
  getHero(): Hero | undefined;
  setHero(value?: Hero): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHeroRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetHeroRes): GetHeroRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHeroRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHeroRes;
  static deserializeBinaryFromReader(message: GetHeroRes, reader: jspb.BinaryReader): GetHeroRes;
}

export namespace GetHeroRes {
  export type AsObject = {
    hero?: Hero.AsObject,
  }
}

export class SaveHeroReq extends jspb.Message {
  hasHero(): boolean;
  clearHero(): void;
  getHero(): Hero | undefined;
  setHero(value?: Hero): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveHeroReq.AsObject;
  static toObject(includeInstance: boolean, msg: SaveHeroReq): SaveHeroReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveHeroReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveHeroReq;
  static deserializeBinaryFromReader(message: SaveHeroReq, reader: jspb.BinaryReader): SaveHeroReq;
}

export namespace SaveHeroReq {
  export type AsObject = {
    hero?: Hero.AsObject,
  }
}

export class SaveHeroRes extends jspb.Message {
  hasHero(): boolean;
  clearHero(): void;
  getHero(): Hero | undefined;
  setHero(value?: Hero): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveHeroRes.AsObject;
  static toObject(includeInstance: boolean, msg: SaveHeroRes): SaveHeroRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveHeroRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveHeroRes;
  static deserializeBinaryFromReader(message: SaveHeroRes, reader: jspb.BinaryReader): SaveHeroRes;
}

export namespace SaveHeroRes {
  export type AsObject = {
    hero?: Hero.AsObject,
  }
}

export class DeleteHeroReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHeroReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHeroReq): DeleteHeroReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHeroReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHeroReq;
  static deserializeBinaryFromReader(message: DeleteHeroReq, reader: jspb.BinaryReader): DeleteHeroReq;
}

export namespace DeleteHeroReq {
  export type AsObject = {
    id: number,
  }
}

export class DeleteHeroRes extends jspb.Message {
  hasHero(): boolean;
  clearHero(): void;
  getHero(): Hero | undefined;
  setHero(value?: Hero): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHeroRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHeroRes): DeleteHeroRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHeroRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHeroRes;
  static deserializeBinaryFromReader(message: DeleteHeroRes, reader: jspb.BinaryReader): DeleteHeroRes;
}

export namespace DeleteHeroRes {
  export type AsObject = {
    hero?: Hero.AsObject,
  }
}

