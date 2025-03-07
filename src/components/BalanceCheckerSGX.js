import React, { useEffect, useState } from 'react';
import CheckBalance from './client'
import Tether from "./img/Tether.png";

const BalanceChecker = () => {
    const [enabled, setEnabled] = useState(false);
    var [ethAddress, setEthAddress] = useState('');
    const [result, setResult] = useState('');
    const host = "https://obliviouslabs.eastus.cloudapp.azure.com";

    // we fetch the public key from the backend to check if it is running
    const testBackendRunning = async (e) => {
        try {
            const res = await fetch(`${host}/public_key`);
            setEnabled(res.ok);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        testBackendRunning();
    }, []);

    if (!enabled) {
        return ('');
    }
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
        <>
            <div style={{ width: '100%', height: '10px' }} className="balancechecker"></div>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img alt="Tether" src={Tether} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2 className="main-title about-h2">USDT Balance Checker Demo</h2>

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
                        <button type="submit" className="btn" style={{ cursor: "pointer" }}>Check Balance</button>
                        <br />
                        <div className="p-3">
                            The query is encrypted and handled by an SGX server running ORAM.
                            <div id="result" className="result mt-3" dangerouslySetInnerHTML={{ __html: result }}></div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    );
};

export default BalanceChecker;
