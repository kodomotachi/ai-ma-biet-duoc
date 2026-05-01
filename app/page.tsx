import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto w-full md:w-2/3 lg:w-1/2">
        <p className="text-base leading-relaxed font-serif md:text-xl">
          Chào mọi người, vào một ngày đẹp trời, mình nghĩ ra được một ý tưởng khá thú vị là tại sao
          mình lại không viết trải nghiệm học Machine Learning của mình lại để mọi người có thể đọc và
          cảm nhận nó nhỉ. Nghe có vẻ hay nhưng mình sẽ phải kiên trì giữ thói quen viết lách trong
          suốt một thời gian dài. Cũng là một thử thách cho mình vì mình không phải là một người viết
          lách. Nhưng mình sẽ cố gắng viết tốt nhất mình có thể. Vì các chủ đề có thể là rất nhiều và
          nó có liên quan đến nhau nên mình mới viết ra con web này để mọi người có thể theo dõi được.
          Chúc các bạn học tốt và chúc một ngày tốt lành ♥️.
        </p>
        <br />
        <p className="text-base font-serif md:text-xl">Meiko Sugiyama.</p>
        <br />
        <Image
          src="/beach.jpeg"
          alt="Meiko Sugiyama"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full rounded-md"
        />

        <br />
        <p className="text-xs font-serif italic md:text-sm">
          Website đang được hoàn thiện dần, cảm ơn bạn đã theo dõi và góp ý.
        </p>
      </div>
    </div>
  );
}
