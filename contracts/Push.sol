pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.0/contracts/token/ERC20/ERC20.sol";

// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}

contract readNotification is ERC20 {
    //0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33
    address public EPNS_COMM_ADDRESS = 0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33;
    address public YOUR_CHANNEL_ADDRESS = 0xE61a3def0921b2585e60fD870264990646B30B5c; 
    address public TO_ADDRESS = 0xb92262ff31c9f8951650f7615cBE6C4836c6b6cd; 

    constructor ()
        ERC20("Push Token", "PUSH")
        public {
        _mint(msg.sender, 1000 * 10 ** uint(decimals()));
    }
    
    function getNotification(string memory _body,string memory _title) external returns (bool success){
    IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
    YOUR_CHANNEL_ADDRESS, 
    TO_ADDRESS, 
            bytes(
                string(
                    abi.encodePacked(
                        "0", 
                        "+", 
                        "3", 
                        "+", 
                        _title, 
                        "+", 
                        _body 
                    )
                )
            )
        );
        return true;
    }
}