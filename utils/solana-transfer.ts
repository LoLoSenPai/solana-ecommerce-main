import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

interface TransferResult {
  success: boolean;
  signature?: string;
  error?: unknown;
}

const transferSolana = async (
  amount: number,
  fromPubKey: PublicKey,
  sendTransaction: (
    transaction: Transaction,
    connection: Connection
  ) => Promise<string>
): Promise<TransferResult> => {
  if (!fromPubKey) throw new WalletNotConnectedError();

  const toPublicKey = new PublicKey(
    "5WqMV3dj5f3Pmtgg1Mk9ijF7YBbbz2YUXPazzUcFafiS"
  );

  const rpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com";
  const connection = new Connection(rpcUrl, "confirmed"); // Connect to Solana mainnet

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromPubKey,
      toPubkey: toPublicKey,
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );

  transaction.feePayer = fromPubKey;
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;

  try {
    const signature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, "confirmed");
    return { success: true, signature };
  } catch (error) {
    console.error("Error sending transaction:", error);
    return { success: false, error };
  }
};

export default transferSolana;
