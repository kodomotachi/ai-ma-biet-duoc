import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full py-10">
      <div className="flex-1"></div>
      <div className="flex-1">
        <p className="text-xl font-serif">Chào mọi người, vào một ngày đẹp trời, mình nghĩ ra được một ý tưởng khá thú vị là tại sao mình lại không viết trải nghiệm học 
          Machine Learning của mình lại để mọi người có thể đọc và cảm nhận nó nhỉ. Nghe có vẻ hay nhưng mình sẽ phải kiên trì giữ thói quen viết lách trong suốt một thời 
          gian dài. Cũng là một thử thách cho mình vì mình không phải là một người viết lách. Nhưng mình sẽ cố gắng viết tốt nhất mình có thể. Vì các chủ đề có thể là rất 
          nhiều và nó có liên quan đến nhau nên mình mới viết ra con web này để mọi người có thể theo dõi được. Chúc các bạn học tốt và chúc một ngày tốt lành ♥️.
        </p>
        <br />
        <p className="text-xl font-serif">
          Meiko Sugiyama.
        </p>
        <br />
        <Image
          src="/beach.jpeg"
          alt="Meiko Sugiyama"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <br />
        <p className="text-tiny font-serif italic">
          Vì web đang trong giai đoạn phát triển nên sẽ chưa có responsive cho các thiết bị di động (mobile, tablet, ...), mong các bạn thông cảm.
        </p>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
