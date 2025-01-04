// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    uint256 _count;
    address public _owner;

    constructor () {
        _count = 0;
        _owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == _owner, "only owner can call function");
        _;
    }

    event countIncremented(uint256 _count);
    event countDecremented(uint256 _count);

    function increment() public onlyOwner {
        _count++;
        emit countIncremented(_count);
    }

    function decrement() public onlyOwner {
        _count--;
        require(_count >= 0, "count cannot be negative");
        emit countDecremented(_count);
    }

    function getCount() public view returns (uint256) {
        return _count;
    }
}