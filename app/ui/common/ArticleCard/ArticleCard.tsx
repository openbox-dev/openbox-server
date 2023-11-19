import { useEffect } from "react";

interface ArticleCardProps {
  title: string;
  data?: any;
}

export default function ArticleCard({ title, data }: ArticleCardProps) {
  useEffect(() => {
    console.log(data, title);
  });

  return (
    <div>
      <div>ArticleCard</div>
      <p>{title}</p>
    </div>
  );
}
