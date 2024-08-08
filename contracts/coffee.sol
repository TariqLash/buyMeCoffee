// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Coffee{

    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    string public status;


    address payable owner;

    constructor(){
        owner = payable(msg.sender);
    }

    function buyCoffee(string calldata name, string calldata message) external payable {
        require(msg.value > 0, "Pay more than 0 ether please");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return  memos;
    }

    function launch() public {
        status = "lift-off";
    }
}