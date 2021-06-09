pragma solidity =0.5.16;

import '../HeswapERC20.sol';

contract ERC20 is HeswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
