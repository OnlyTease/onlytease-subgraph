import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DecodingFailed,
  ModelUpdated,
  NFTListed,
  NFTSold,
  OwnershipTransferred,
  RequestFulfilled,
  RequestSent,
  Response,
  ResponseError,
  RoyaltiesPaid,
  SubscriptionPaused,
  SubscriptionPurchased,
  luckySubcriberSuccess
} from "../generated/NFTMarketplaceAutomationLt/NFTMarketplaceAutomationLt"

export function createDecodingFailedEvent(requestId: Bytes): DecodingFailed {
  let decodingFailedEvent = changetype<DecodingFailed>(newMockEvent())

  decodingFailedEvent.parameters = new Array()

  decodingFailedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )

  return decodingFailedEvent
}

export function createModelUpdatedEvent(
  modelId: BigInt,
  priceUSD: BigInt,
  associatedAddress: Address,
  royaltyFee: BigInt,
  duration: BigInt
): ModelUpdated {
  let modelUpdatedEvent = changetype<ModelUpdated>(newMockEvent())

  modelUpdatedEvent.parameters = new Array()

  modelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "modelId",
      ethereum.Value.fromUnsignedBigInt(modelId)
    )
  )
  modelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "priceUSD",
      ethereum.Value.fromUnsignedBigInt(priceUSD)
    )
  )
  modelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "associatedAddress",
      ethereum.Value.fromAddress(associatedAddress)
    )
  )
  modelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "royaltyFee",
      ethereum.Value.fromUnsignedBigInt(royaltyFee)
    )
  )
  modelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return modelUpdatedEvent
}

export function createNFTListedEvent(
  listingId: BigInt,
  tokenId: BigInt,
  price: BigInt,
  seller: Address
): NFTListed {
  let nftListedEvent = changetype<NFTListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return nftListedEvent
}

export function createNFTSoldEvent(
  listingId: BigInt,
  tokenId: BigInt,
  price: BigInt,
  buyer: Address
): NFTSold {
  let nftSoldEvent = changetype<NFTSold>(newMockEvent())

  nftSoldEvent.parameters = new Array()

  nftSoldEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  nftSoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftSoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  nftSoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return nftSoldEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRequestFulfilledEvent(id: Bytes): RequestFulfilled {
  let requestFulfilledEvent = changetype<RequestFulfilled>(newMockEvent())

  requestFulfilledEvent.parameters = new Array()

  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestFulfilledEvent
}

export function createRequestSentEvent(id: Bytes): RequestSent {
  let requestSentEvent = changetype<RequestSent>(newMockEvent())

  requestSentEvent.parameters = new Array()

  requestSentEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestSentEvent
}

export function createResponseEvent(
  requestId: Bytes,
  response: Bytes,
  err: Bytes
): Response {
  let responseEvent = changetype<Response>(newMockEvent())

  responseEvent.parameters = new Array()

  responseEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  responseEvent.parameters.push(
    new ethereum.EventParam("response", ethereum.Value.fromBytes(response))
  )
  responseEvent.parameters.push(
    new ethereum.EventParam("err", ethereum.Value.fromBytes(err))
  )

  return responseEvent
}

export function createResponseErrorEvent(
  requestId: Bytes,
  err: Bytes
): ResponseError {
  let responseErrorEvent = changetype<ResponseError>(newMockEvent())

  responseErrorEvent.parameters = new Array()

  responseErrorEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  responseErrorEvent.parameters.push(
    new ethereum.EventParam("err", ethereum.Value.fromBytes(err))
  )

  return responseErrorEvent
}

export function createRoyaltiesPaidEvent(
  tokenId: BigInt,
  beneficiary: Address,
  amount: BigInt
): RoyaltiesPaid {
  let royaltiesPaidEvent = changetype<RoyaltiesPaid>(newMockEvent())

  royaltiesPaidEvent.parameters = new Array()

  royaltiesPaidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  royaltiesPaidEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  royaltiesPaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return royaltiesPaidEvent
}

export function createSubscriptionPausedEvent(
  subscriptionId: BigInt,
  pausedBy: Address
): SubscriptionPaused {
  let subscriptionPausedEvent = changetype<SubscriptionPaused>(newMockEvent())

  subscriptionPausedEvent.parameters = new Array()

  subscriptionPausedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionId",
      ethereum.Value.fromUnsignedBigInt(subscriptionId)
    )
  )
  subscriptionPausedEvent.parameters.push(
    new ethereum.EventParam("pausedBy", ethereum.Value.fromAddress(pausedBy))
  )

  return subscriptionPausedEvent
}

export function createSubscriptionPurchasedEvent(
  buyer: Address,
  modelId: BigInt,
  subscriptionId: BigInt,
  tokenId: BigInt
): SubscriptionPurchased {
  let subscriptionPurchasedEvent = changetype<SubscriptionPurchased>(
    newMockEvent()
  )

  subscriptionPurchasedEvent.parameters = new Array()

  subscriptionPurchasedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  subscriptionPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "modelId",
      ethereum.Value.fromUnsignedBigInt(modelId)
    )
  )
  subscriptionPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionId",
      ethereum.Value.fromUnsignedBigInt(subscriptionId)
    )
  )
  subscriptionPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return subscriptionPurchasedEvent
}

export function createluckySubcriberSuccessEvent(
  luckySubcriber: Address
): luckySubcriberSuccess {
  let luckySubcriberSuccessEvent = changetype<luckySubcriberSuccess>(
    newMockEvent()
  )

  luckySubcriberSuccessEvent.parameters = new Array()

  luckySubcriberSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "luckySubcriber",
      ethereum.Value.fromAddress(luckySubcriber)
    )
  )

  return luckySubcriberSuccessEvent
}
