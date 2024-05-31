import React, { useState } from 'react';
import CheckBalance from './client'

const BalanceChecker = () => {
    var [ethAddress, setEthAddress] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (ethAddress) {
            if (!ethAddress.startsWith('0x')) {
                ethAddress = '0x' + ethAddress;
            }
            if (ethAddress.length < 42) {
                ethAddress = '0x' + '0'.repeat(42 - ethAddress.length) + ethAddress.slice(2);
            }
            if (!ethAddress.match(/^0x[0-9a-fA-F]{40}$/)) {
                return setResult('<h4 class="text-danger">Invalid Ethereum address.</h4>');
            }
            setResult('<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>');

            try {
                const { balance, lastBlock, successFlag } = await CheckBalance(ethAddress);
                if (successFlag) {

                    const intPart = balance / 1000000n;
                    const decPart = balance % 1000000n;
                    const decPartStr = decPart.toString().padStart(6, '0');
                    setResult(`<h4>${intPart}.${decPartStr} Tether till block ${lastBlock}</h4>`);
                } else {
                    setResult(`<h4 class="text-danger">Error: ${balance}</h4>`);
                }
            } catch (error) {
                console.error(error);
                setResult('<h4 class="text-danger">Error fetching balance. Please try again.</h4>');
            }
        } else {
            setResult('<h4 class="text-danger">Please enter an Ethereum address.</h4>');
        }
    };

    return (
        <div className="card p-4" style={{ maxWidth: '550px', margin: 'auto' }}>
            <h2 className="text-center">USDT Balance Checker Demo</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="ethAddress"> Account </label>
                    <input
                        type="text"
                        className="form-control"
                        id="ethAddress"
                        value={ethAddress}
                        onChange={(e) => setEthAddress(e.target.value)}
                        placeholder="Enter Ethereum Address"
                        required
                        size="40"
                    />
                </div>
                <button type="submit" className="btn">Check Balance</button>
                <br />
                The query is encrypted and handled by an SGX server running ORAM.
            </form>
            <div id="result" className="result text-center mt-3" dangerouslySetInnerHTML={{ __html: result }}></div>
        </div>
    );
};

export default BalanceChecker;
