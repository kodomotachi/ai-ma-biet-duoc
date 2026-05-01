import Topics from "../components/topics";

const mathTopics = [
  {
    first: "What is a Matrix?",
    second: "Giới thiệu nhanh về ma trận, kích thước, và các phép toán cơ bản.",
    href: "/math/matrix-basics",
  },
  {
    first: "Gradient Descent",
    second: "Trực quan cách gradient descent tìm cực tiểu của hàm.",
    href: "/math/gradient-descent-intro",
  },
  {
    first: "Probability Foundations",
    second: "Các khái niệm xác suất quan trọng trước khi học machine learning.",
    href: "/math/probability-foundations",
  },
];

export default function MathPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto w-full space-y-4 md:w-2/3">
        {mathTopics.map((topic) => (
          <Topics key={topic.href} first={topic.first} second={topic.second} href={topic.href} />
        ))}
      </div>
    </div>
  );
}
