// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: proto/hero.proto

import * as proto_hero_pb from "../proto/hero_pb";
import * as grpc from "grpc";

interface IHeroServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getHeroes: grpc.MethodDefinition<proto_hero_pb.GetHerosReq, proto_hero_pb.GetHerosRes>;
  getHero: grpc.MethodDefinition<proto_hero_pb.GetHeroReq, proto_hero_pb.GetHeroRes>;
  save: grpc.MethodDefinition<proto_hero_pb.SaveHeroReq, proto_hero_pb.SaveHeroRes>;
  delete: grpc.MethodDefinition<proto_hero_pb.DeleteHeroReq, proto_hero_pb.DeleteHeroRes>;
}

export const HeroServiceService: IHeroServiceService;

export class HeroServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getHeroes(argument: proto_hero_pb.GetHerosReq, callback: grpc.requestCallback<proto_hero_pb.GetHerosRes>): grpc.ClientUnaryCall;
  getHeroes(argument: proto_hero_pb.GetHerosReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hero_pb.GetHerosRes>): grpc.ClientUnaryCall;
  getHeroes(argument: proto_hero_pb.GetHerosReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hero_pb.GetHerosRes>): grpc.ClientUnaryCall;
  getHero(argument: proto_hero_pb.GetHeroReq, callback: grpc.requestCallback<proto_hero_pb.GetHeroRes>): grpc.ClientUnaryCall;
  getHero(argument: proto_hero_pb.GetHeroReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hero_pb.GetHeroRes>): grpc.ClientUnaryCall;
  getHero(argument: proto_hero_pb.GetHeroReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hero_pb.GetHeroRes>): grpc.ClientUnaryCall;
  save(argument: proto_hero_pb.SaveHeroReq, callback: grpc.requestCallback<proto_hero_pb.SaveHeroRes>): grpc.ClientUnaryCall;
  save(argument: proto_hero_pb.SaveHeroReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hero_pb.SaveHeroRes>): grpc.ClientUnaryCall;
  save(argument: proto_hero_pb.SaveHeroReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hero_pb.SaveHeroRes>): grpc.ClientUnaryCall;
  delete(argument: proto_hero_pb.DeleteHeroReq, callback: grpc.requestCallback<proto_hero_pb.DeleteHeroRes>): grpc.ClientUnaryCall;
  delete(argument: proto_hero_pb.DeleteHeroReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hero_pb.DeleteHeroRes>): grpc.ClientUnaryCall;
  delete(argument: proto_hero_pb.DeleteHeroReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hero_pb.DeleteHeroRes>): grpc.ClientUnaryCall;
}
