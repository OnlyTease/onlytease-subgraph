import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { DecodingFailed } from "../generated/schema"
import { DecodingFailed as DecodingFailedEvent } from "../generated/NFTMarketplaceAutomationLt/NFTMarketplaceAutomationLt"
import { handleDecodingFailed } from "../src/nft-marketplace-automation-lt"
import { createDecodingFailedEvent } from "./nft-marketplace-automation-lt-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requestId = Bytes.fromI32(1234567890)
    let newDecodingFailedEvent = createDecodingFailedEvent(requestId)
    handleDecodingFailed(newDecodingFailedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DecodingFailed created and stored", () => {
    assert.entityCount("DecodingFailed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DecodingFailed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requestId",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
