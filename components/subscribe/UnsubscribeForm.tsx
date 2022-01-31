import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

export type UnsubscribeModel = {
  type: number;
  content: string;
};

type Props = {
  data?: UnsubscribeModel;
};

const UnsubscribeForm = ({ data }: Props) => {
  const [status, setStatus] = useState<"success" | "error" | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      try {
        setStatus("success");

        await fetch("https://app.timeling.com/api/misc/unsubscribe", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        }).catch(() => console.log("error"));
      } catch (e) {
        console.log("error");
        setStatus("error");
      }
    })();
  }, [data]);

  if (!!status) {
    return (
      <>
        {status === "success" && (
          <FormattedMessage
            id="_has_been_unsubscribed"
            values={{ 0: data?.content }}
          />
        )}
        {status === "error" && <FormattedMessage id="something went wrong" />}
      </>
    );
  }
  return null;
};

export default UnsubscribeForm;
