import {
  DecodingFailed as DecodingFailedEvent,
  ModelUpdated as ModelUpdatedEvent,
  NFTListed as NFTListedEvent,
  NFTSold as NFTSoldEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RequestFulfilled as RequestFulfilledEvent,
  RequestSent as RequestSentEvent,
  Response as ResponseEvent,
  ResponseError as ResponseErrorEvent,
  RoyaltiesPaid as RoyaltiesPaidEvent,
  SubscriptionPaused as SubscriptionPausedEvent,
  SubscriptionPurchased as SubscriptionPurchasedEvent,
  luckySubcriberSuccess as luckySubcriberSuccessEvent,
} from "../generated/NFTMarketplaceAutomationLt/NFTMarketplaceAutomationLt"
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
  luckySubcriberSuccess,
} from "../generated/schema"

export function handleDecodingFailed(event: DecodingFailedEvent): void {
  let entity = new DecodingFailed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModelUpdated(event: ModelUpdatedEvent): void {
  let entity = new ModelUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.modelId = event.params.modelId
  entity.priceUSD = event.params.priceUSD
  entity.associatedAddress = event.params.associatedAddress
  entity.royaltyFee = event.params.royaltyFee
  entity.duration = event.params.duration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTListed(event: NFTListedEvent): void {
  let entity = new NFTListed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.listingId = event.params.listingId
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.seller = event.params.seller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTSold(event: NFTSoldEvent): void {
  let entity = new NFTSold(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.listingId = event.params.listingId
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {
  let entity = new RequestFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.NFTMarketplaceAutomationLt_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestSent(event: RequestSentEvent): void {
  let entity = new RequestSent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.NFTMarketplaceAutomationLt_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResponse(event: ResponseEvent): void {
  let entity = new Response(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId
  entity.response = event.params.response
  entity.err = event.params.err

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResponseError(event: ResponseErrorEvent): void {
  let entity = new ResponseError(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId
  entity.err = event.params.err

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoyaltiesPaid(event: RoyaltiesPaidEvent): void {
  let entity = new RoyaltiesPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenId = event.params.tokenId
  entity.beneficiary = event.params.beneficiary
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionPaused(event: SubscriptionPausedEvent): void {
  let entity = new SubscriptionPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.subscriptionId = event.params.subscriptionId
  entity.pausedBy = event.params.pausedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionPurchased(
  event: SubscriptionPurchasedEvent,
): void {
  let entity = new SubscriptionPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.buyer = event.params.buyer
  entity.modelId = event.params.modelId
  entity.subscriptionId = event.params.subscriptionId
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleluckySubcriberSuccess(
  event: luckySubcriberSuccessEvent,
): void {
  let entity = new luckySubcriberSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.luckySubcriber = event.params.luckySubcriber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
