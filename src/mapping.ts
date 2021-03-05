import { Deposit, HardWorkDone } from '../generated/mudrex/Fund'
import { Depositor, TVL } from '../generated/schema'
import { BigInt, log } from '@graphprotocol/graph-ts'

export function handleNewDeposit(event: Deposit): void {
  let id = event.transaction.hash.toHex()
  let d = new Depositor(id)
  d.beneficiary = event.params.beneficiary
  //d.amount = BigInt.fromI32(event.params.amount)
  d.amount = event.params.amount
  d.save()
}

export function handleTVL(event: HardWorkDone): void {
  let id = event.transaction.hash.toHex()
  let d = new TVL(id)
  d.totalValueLocked = event.params.totalValueLocked
  d.pricePerShare = event.params.pricePerShare
  d.save()
}