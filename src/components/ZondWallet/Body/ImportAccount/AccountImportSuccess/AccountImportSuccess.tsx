import { Button } from "@/components/UI/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/Card";
import { ROUTES } from "@/router/router";
import { Web3BaseWalletAccount } from "@theqrl/web3";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type AccountImportSuccessProps = {
  account?: Web3BaseWalletAccount;
};

export const AccountImportSuccess = ({
  account,
}: AccountImportSuccessProps) => {
  const accountAddress = account?.address ?? "";
  const accountAddressSplit = [];
  for (let i = 2; i < accountAddress.length; i += 4) {
    accountAddressSplit.push(accountAddress.substring(i, i + 4));
  }
  const spacedAccountAddress = accountAddressSplit.join(" ");

  const [hasJustCopied, setHasJustCopied] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const onCopy = () => {
    setHasJustCopied(true);
    navigator.clipboard.writeText(accountAddress);
    const newTimer = setTimeout(() => {
      setHasJustCopied(false);
    }, 1000);
    setTimer(newTimer);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Account imported</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex flex-col gap-2">
          <div>Account public address:</div>
          <div className="font-bold text-secondary">{`0x ${spacedAccountAddress}`}</div>
          <div>Your account is successfully imported.</div>
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <Button
          className="w-full"
          type="button"
          variant="outline"
          onClick={onCopy}
        >
          <Copy className="mr-2 h-4 w-4" />
          {hasJustCopied ? "Copied" : "Copy"}
        </Button>
        <Link className="w-full" to={ROUTES.ACCOUNT_DETAILS}>
          <Button className="w-full" type="button">
            <Check className="mr-2 h-4 w-4" />
            Done
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
