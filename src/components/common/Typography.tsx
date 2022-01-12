import { FC } from "react";

type Props = {
  content: string;
};

const Typography: FC<Props> = ({ content }) => {
  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default Typography;
