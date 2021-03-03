import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
import { Deposit } from '../generated/mudrex/Fund'
import { Gravatar, Depositor } from '../generated/schema'
import { BigInt, log } from '@graphprotocol/graph-ts'

export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(event.params.id.toHex())
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

export function handleNewDeposit(event: Deposit): void {
  let id = event.transaction.hash.toHex()
  let d = new Depositor(id)
  d.beneficiary = event.params.beneficiary
  //d.amount = BigInt.fromI32(event.params.amount)
  //d.amount = event.params.amount
  d.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {
  let id = event.params.id.toHex()
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}
