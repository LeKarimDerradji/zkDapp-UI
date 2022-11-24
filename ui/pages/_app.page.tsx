import "../styles/globals.css";
import { useEffect, useState } from "react";
import "./reactCOIServiceWorker";

import ZkappWorkerClient from "./zkappWorkerClient";

import { PrivateKey, PublicKey, Field } from "snarkyjs";

let transactionFee = 0.1;

export default function App() {
  let [state, setState] = useState({
    zkappWorkerClient: null as null | ZkappWorkerClient,
    hasWallet: null as null | boolean,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null as null | Field,
    publicKey: null as null | PublicKey,
    zkappPublicKey: null as null | PublicKey,
    creatingTransaction: false,
  });

  // -------------------------------------------------------
  // Do Setup
  useEffect(() => {
    (async () => {
      if (!state.hasBeenSetup) {
        const zkappWorkerClient = new ZkappWorkerClient();
        console.log("Loading SnarkyJS...");
        await zkappWorkerClient.loadSnarkyJS();
        console.log("done");
        await zkappWorkerClient.setActiveInstanceToBerkeley();
        // TODO
      }
    })();
  }, []);
  // -------------------------------------------------------

  return <div />;
}
