und_factory = FundFactory.deploy({'from':accounts[0], 'gas_price':10000000000})
fund = Fund.deploy({'from':accounts[0], 'gas_price':10000000000})


fund_name = "Mudrex High Risk Fund DAI"
fund_symbol = "MDX_HR_DAI"

dai = Token.at("0x6B175474E89094C44Da98b954EedeAC495271d0F")
token = dai
tx = fund_factory.createFund(fund, token, fund_name, fund_symbol, {'from': accounts[0], 'gas_price':5000000000})
fund_through_proxy = Fund.at(tx.new_contracts[0])