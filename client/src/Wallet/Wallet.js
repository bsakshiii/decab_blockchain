import React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { ethers } from "ethers";
import { useHistory } from 'react-router-dom';
// import ErrorMessage from "./ErrorMessage";
// import TxList from "./TxList";
import Card from "components/Card/Card.js";
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";


const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
        if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.");

        console.warn("start1")
        // await window.ethereum.send("eth_requestAccounts");
        let account = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        console.warn("Acout ----->>>", account)
        console.warn("start2")
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.warn("start3")
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether)
        });
        console.log({ ether, addr });
        console.log("tx", tx);
        setTxs([tx]);
    } catch (err) {
        setError(err.message);
    }
};

export default function App() {
    const [address, setAddress] = useState();
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);
    const history = useHistory();

    const handleSubmit = async (e) => {
        const data = new FormData(e.target);
        e.preventDefault();
        if (1 + 1 === 2) {
            setError();
            await startPayment({
                setError,
                setTxs,
                ether: data.get("ether"),
                addr: data.get("addr")
            });
            history.push('/admin/history');
        }

    };

    return (
        
            <GridContainer >
                <GridItem xs={12} sm={12} md={7}>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <CardHeader color="primary" style={{width: 800, height:110}}>
                                <h4>Payment</h4>
                                <p >Pay fares using your Metamask account!</p>
                            </CardHeader>

                            <div className="">
                                <CardBody>
                                    <Card>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <div style={{ padding: 25 }}>
                                                    <p>Metamask Account</p>
                                                    <input
                                                        type="text"
                                                        name="addr"
                                                        className="input input-bordered block w-full focus:ring focus:outline-none"
                                                        //placeholder={localStorage.getItem('dr_account')}
                                                        value={localStorage.getItem('dr_address')}
                                                    />
                                                </div>
                                            </GridItem>

                                            <GridItem xs={10} sm={10} md={6}>
                                                <div style={{ padding: 25 }}>
                                                    <p>Fares</p>
                                                    <input
                                                        name="ether"
                                                        type="text"
                                                        className="input input-bordered block w-full focus:ring focus:outline-none"
                                                        placeholder={localStorage.getItem('price')}
                                                        value={localStorage.getItem('price')}

                                                    />
                                                </div>
                                            </GridItem>

                                            <GridItem xs={10} sm={10} md={6}>
                                                <div style={{ padding: 20 }} >
                                                    <footer>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={handleSubmit}
                                                            //href="/admin/wallet"
                                                            type="submit"
                                                        >
                                                            Pay Now
                                                        </Button>
                                                    </footer>
                                                </div>
                                            </GridItem>
                                        </GridContainer>
                                    </Card>

                                </CardBody>
                            </div>
                        </div>
                    </form>

                </GridItem>
            </GridContainer>
        
    );
}
