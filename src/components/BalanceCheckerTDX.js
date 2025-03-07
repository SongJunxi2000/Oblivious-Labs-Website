import React, { useEffect, useState } from 'react';
import { CheckBalance, CheckStatus, tokenName, logo } from './clienttdx'


const BalanceChecker = () => {
    const [enabled, setEnabled] = useState(false);
    var [ethAddress, setEthAddress] = useState('');
    const [result, setResult] = useState('');

    // we fetch the public key from the backend to check if it is running
    const testBackendRunning = async (e) => {
        let status = await CheckStatus();
        let ok = status["message"] === "All good!";
        if (ok) {
            // Disabled for now:
            // setEnabled(true);
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
                const resp = await CheckBalance(ethAddress);
                setResult(`<h4>${resp.balance_str} ${tokenName} for ${resp.addr} in block ${resp.block} (${resp.state_root})</h4>`);
            }
            catch (error) {
                console.error(error);
                setResult('<h4 class="text-danger">Error checking balance. Please try again later.</h4>');
            }
        } else {
            setResult('<h4 class="text-danger">Please enter an Ethereum address.</h4>');
        }
    };

    return (
        <>
            <div className="container text-center">
                <div className="balance-checker">
                    <h2 className="main-title about-h2">{tokenName} Balance Checker Demo</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <img alt={tokenName} src={logo} />
                                    <label htmlFor="ethAddress"> {tokenName} Account address: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ethAddress"
                                        value={ethAddress}
                                        onChange={(e) => setEthAddress(e.target.value)}
                                        placeholder="Enter Ethereum Address"
                                        required
                                        size="40"/>
                                    <button type="submit" className="btn" style={{ cursor: "pointer" }}>Check Balance</button>
                                </div>                                
                            </form>
                            <div id="result" className="result mt-3" dangerouslySetInnerHTML={{ __html: result }}></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BalanceChecker;
